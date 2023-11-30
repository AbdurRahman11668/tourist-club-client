import {Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { FaHeart } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useWishlist from "../../Hooks/useWishlist";
const AllPackage = ({item}) => {
    
    const {_id, name, image_link, guideName, tour_type, price} = item;

    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useWishlist();

    const handleAddToWishlist = () =>{
        if (user && user.email) {
            //send cart item to the database
            const items = {
                menuId: _id,
                email: user.email,
                name: name,
                image_link: image_link,
                guideName: guideName,
                tour_type: tour_type,
                price: parseFloat(price),
            }
            axiosSecure.post('/wishlist', items)
                .then(res => {
                    // console.log(res.data)
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${name} added to your cart`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                        // refetch cart to update the cart items count
                        refetch();
                    }
    
                })
        }
        else {
            Swal.fire({
                title: "You are not Logged In",
                text: "Please login to add to the cart?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    //   send the user to the login page
                    navigate('/login', { state: { from: location } })
                }
            });
        }
    }
    return (
        <div className="card bg-base-100 shadow-xl mx-auto"
              >
                <figure className="relative">
                  <img src={image_link} alt="Shoes" />
                  <button onClick={handleAddToWishlist}>
                  <FaHeart className="absolute cursor-pointer text-4xl text-red-500 top-5 right-10"></FaHeart>
                </button>
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-[#50ba87]">{name}</h2>
                  <p className="text-sm font-medium">{tour_type}</p>
                  <p className="text-sm font-medium">
                    <span className="font-semibold">Guide:</span>{" "}
                    {guideName}
                  </p>
                  <p className="text-lg text-[#50ba87] font-semibold">
                    ${price}
                  </p>
                  <div>
                      <Link to={`/packagedetails/${_id}`}>
                        <button className="btn bg-[#50ba87]  text-white hover:bg-white border-2 border-[#50ba87] hover:border-[#50ba87] hover:text-[#50ba87]">
                          View Package
                        </button>
                      </Link>
                  </div>
                </div>
              </div>
    );
};

export default AllPackage;