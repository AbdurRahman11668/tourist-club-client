import Swal from "sweetalert2";

const UpdateStatus = ({item}) => {
    const{_id, status} = item;
    
    const handleUpdateProduct = (event) => {
        event.preventDefault();
    
        const form = event.target;
        const status = form.status.value;
    
        const updatedProduct = {
          status,
        };
        // console.log(updatedProduct)
        fetch(`http://localhost:5000/bookings/${_id}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(updatedProduct),
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            if (data.modifiedCount > 0) {
              Swal.fire({
                title: "Success!",
                text: "Booking Status Updated Successfully!",
                icon: "success",
                confirmButtonText: "Cool",
              });
            }
          });
      };
    
    return (
        <div>
            
            <form onSubmit={handleUpdateProduct}>
                    <select name="status" className="m-2">
                      <option disabled selected>
                        Choose the status
                      </option>
                      <option value="Accepted">Accept</option>
                      <option value="Rejected">Decline</option>
                    </select>
                    <button
                      type="submit"
                      value="Update Product"
                      className="btn"
                    >
                      Done
                    </button>
                  </form>
        </div>
    );
};

export default UpdateStatus;