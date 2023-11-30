import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";
import UpdateStatus from "../../Components/UpdateStatus";

const AssignedTours = () => {
  const bookingsAll = useLoaderData();



  return (
    <div>
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
            </tr>
          </thead>
          <tbody>
            {bookingsAll.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>{item.package_name}</td>
                <td>{item.guide}</td>
                <td>{item.date}</td>
                <td>${item.price}</td>
                <td>
                <UpdateStatus key={item._id} item={item}></UpdateStatus>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AssignedTours;
