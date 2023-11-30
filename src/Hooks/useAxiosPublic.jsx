import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://tourist-club-server.vercel.app'
})

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
