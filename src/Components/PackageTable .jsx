import React from 'react';
import useBookings from '../Hooks/useBookings';

const PackageTable  = ({packages}) => {
    const [bookings, refetch] = useBookings();
    return (
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
            {bookings.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>{item.package_name}</td>
                <td>{item.guide}</td>
                <td>{item.date}</td>
                <td>${item.price}</td>
                <th>
                  <button className="btn btn-ghost btn-lg"></button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
};

export default PackageTable ;