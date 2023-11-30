import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import useAuth from "../Hooks/useAuth";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useRef, useState } from "react";
import useWishlist from "../Hooks/useWishlist";
import { Link } from "react-router-dom";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const BookingForm = ({ products }) => {
  const { name, image_link, price } = products;

  const [date, setDate] = useState("");
  const dateInputRef = useRef(null);
  const handleChange = (e) => {
    setDate(e.target.value);
  };
  const { register, handleSubmit, reset } = useForm();
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const onSubmit = async (data) => {
    console.log(data);
    // image upload to imgbb and then get an url
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      // now send the menu item data to the server with the image url
      const toristWish = {
        package_name: name,
        package_image: image_link,
        touristname: data.touristname,
        email: data.email,
        guide: data.guide,
        price: parseFloat(data.price),
        date: data.date,
        image: res.data.data.display_url,
        status: "In Review"
      };
      const menuRes = await axiosSecure.post("/bookings", toristWish);
      console.log(menuRes.data);
      if (menuRes.data.insertedId) {
        // show success popup
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${name} is added to the Wishlist.`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  };


  return (
    <div>
      <h2 className="text-2xl font-bold text-center">Book Now</h2>
      <div>
        <h2 className="text-center text-xl font-semibold pt-5">{name}</h2>
        <div className="flex flex-col lg:flex-row lg:gap-6">
          <div className="form-control w-full my-3 lg:my-6">
            <label className="label">
              <span className="label-text">Tourist Name*</span>
            </label>
            <input
              type="text"
              placeholder="Tourist Name"
              {...register("touristname", { required: true })}
              required
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full lg:my-6">
            <label className="label">
              <span className="label-text">Tourist Email*</span>
            </label>
            <input
              type="email"
              placeholder="Tourist Email"
              {...register("email", { required: true })}
              required
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:gap-6">
          {/* price */}
          <div className="form-control w-full my-3 lg:my-6">
            <label className="label">
              <span className="label-text">Price*</span>
            </label>
            <input
              type="number"
              placeholder={price}
              defaultValue={price}
              {...register("price", { required: true })}
              className="input input-bordered w-full"
            />
          </div>

          {/* tour date */}
          <div className="form-control w-full lg:my-6">
            <label className="label">
              <span className="label-text">Select Guide*</span>
            </label>
            <select
              defaultValue="default"
              {...register("guide", { required: true })}
              className="select select-bordered w-full"
            >
              <option disabled value="default">
                Select a category
              </option>
              <option value="John Abraham">John Abraham</option>
              <option value="Thompson">Thompson</option>
              <option value="Johnson">Johnson</option>
            </select>
          </div>
        </div>
        {/* date picker */}

        <input
          className="block px-[34px]"
          type="date"
          onChange={handleChange}
          ref={dateInputRef}
          {...register("date")}
        />

        <div className="form-control w-full my-6">
          <input
            {...register("image", { required: true })}
            type="file"
            className="file-input w-full max-w-xs"
          />
        </div>

        <button
          className="btn"
          onClick={() => document.getElementById("my_modal_1").showModal()}
        >
          Book Now
        </button>
        <dialog
            id="my_modal_1"
            className="modal modal-bottom sm:modal-middle"
          >
            <form
               onSubmit={handleSubmit(onSubmit)}
              className="modal-box w-full text-center space-y-2 z-0"
            >
              <h2 className="text-lg font-semibold pt-10">Are you sure to confirm this package?</h2>
              <Link to="/dashboard/bookings"><p className="text-sky-600 text-center">My Bookings</p></Link>
              <div className=" w-full">
                <button className="mx-auto px-8 py-2 bg-[#50ba87] hover:bg-transparent hover:border-2 border-2 border-[#50ba87] text-lg font-medium text-white hover:text-[#50ba87] mt-5 rounded">
                  Book
                </button>
              </div>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn border-2 border-[#50ba87] ">Go Back</button>
                </form>
              </div>
            </form>
          </dialog>
      </div>
    </div>
  );
};

export default BookingForm;
