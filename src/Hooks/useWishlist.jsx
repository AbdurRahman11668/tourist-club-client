import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useWishlist = () => {
    const axiosSecure = useAxiosSecure();
    const { user} = useAuth();
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['wishlist', user?.email],
        queryFn: async() => {
            const res = await axiosSecure.get(`/wishlist?email=${user.email}`);
            return res.data;
        }
    })

    return [cart, refetch]
};

export default useWishlist;