import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { FaUtensils } from "react-icons/fa";
import { GiMountains } from "react-icons/gi";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddPackages = () => {
  const { register, handleSubmit, reset } = useForm();
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
      const packages = {
        name: data.name,
        tour_type: data.type,
        price: parseFloat(data.price),
        description: data.description,
        guideName: data.guide,
        image_link: res.data.data.display_url,
      };
      //
      const menuRes = await axiosSecure.post("/packages", packages);
      console.log(menuRes.data);
      if (menuRes.data.insertedId) {
        // show success popup
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.name} is added to the menu.`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
    console.log("with image url", res.data);
  };

  return (
    <div>
      <div className="mx-auto text-center md:w-4/12 my-8">
        <p className="text-[#F09921] font-medium mb-2">--- What's new? ---</p>
        <h3 className="text-3xl uppercase border-y-4 py-4">Add an item</h3>
      </div>
      <div className="lg:w-1/2 mx-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Place Name*</span>
            </label>
            <input
              type="text"
              placeholder="Recipe Name"
              {...register("name", { required: true })}
              required
              className="input input-bordered w-full"
            />
          </div>
          <div className="flex gap-6">
            {/* category */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Tour Type*</span>
              </label>
              <input
                type="text"
                placeholder="Tour Type*"
                {...register("type", { required: true })}
                className="input input-bordered w-full"
              />
            </div>

            {/* price */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Price*</span>
              </label>
              <input
                type="number"
                placeholder="Price"
                {...register("price", { required: true })}
                className="input input-bordered w-full"
              />
            </div>
          </div>
          {/* Guide Name */}
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">Guide Name</span>
            </label>
            <input
              type="text"
              placeholder="Guide Name"
              {...register("guide", { required: true })}
              className="input input-bordered w-full"
            />
          </div>
          {/* recipe details */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">description</span>
            </label>
            <textarea
              {...register("description")}
              className="textarea textarea-bordered h-24"
              placeholder="description"
            ></textarea>
          </div>

          <div className="form-control w-full my-6">
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input w-full max-w-xs"
            />
          </div>

          <button className="btn">
            Add Package <GiMountains className="w-5 h-5 ml-2"></GiMountains>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddPackages;
