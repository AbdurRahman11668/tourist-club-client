import { Link } from "react-router-dom";
import useBookings from "../Hooks/useBookings";
import { useState } from "react";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { FaTrashAlt } from "react-icons/fa";

const Bookings = () => {
  const [bookings, refetch] = useBookings();
  
  const axiosSecure = useAxiosSecure();
  
  const totalPrice = bookings.reduce((total, item) => total + item.price, 0);
  const totalPriceAfterDisCount = (10/100)*totalPrice;
  const afterDiscount = totalPrice-totalPriceAfterDisCount;

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/bookings/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your bookings has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div className="">
      <div className="flex items-center justify-evenly mb-8 py-10">
        {bookings.length >= 3 ? <h2 className="text-2xl text-[#50ba87]"> <span className="block text-gray-500 text-sm pb-3">After 10% discount, you got!</span>Total Price: $ {afterDiscount}</h2> : <h2 className="text-2xl text-[#50ba87]">Total Price: $ {totalPrice} <span className="block text-gray-500 text-sm pt-3">If you book more than 3 packages, you will 10% discount!</span></h2>}
        {bookings.length ? <Link to="/dashboard/payment">
                    <button className="btn bg-[#50ba87] text-white hover:text-black">Pay</button>
                </Link>:
                <button disabled className="btn btn-primary">Pay</button>
                }
      </div>
      <div className="overflow-x-auto">
        <table className="table  w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Package</th>
              <th>Guide</th>
              <th>Date</th>
              <th>Price</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>{item.package_name}</td>
                <td>{item.guide}</td>
                <td>{item.date}</td>
                <td>${item.price}</td>
                <td>{item.status}</td>
                <th>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="btn btn-ghost btn-lg"
                  >
                    <FaTrashAlt className="text-red-600"></FaTrashAlt>
                  </button>
                </th>
              </tr>
            ))}

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
