import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useGuideData = () => {
  
  const axiosSecure = useAxiosSecure();

  const { refetch, data: users = [] } = useQuery({
    queryKey: ['users'],
    queryFn: async() => {
        const res = await axiosSecure.get('/users');
        return res.data;
    }
})
  return [users, refetch];
};

export default useGuideData;
