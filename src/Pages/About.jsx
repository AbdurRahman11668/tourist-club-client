import { FaArrowRight } from "react-icons/fa6";

const About = () => {
  return (
    <div className="pt-28 pb-10 flex flex-col lg:flex-row items-center">
      <div className="w-1/2">
        <img className="" src="https://i.ibb.co/jVMBDfR/Santorini.jpg" alt="" />
      </div>
      <div className="w-1/2 pl-10">
        <h2 className=" text-lg font-bold text-[#50ba87]">About us</h2>
        <h2 className=" text-2xl pt-4 lg:text-4xl font-bold">
          Welcome to <span className="text-[#50ba87]">Tourist Club</span>
        </h2>
        <p className="text-gray-500 py-5">
          The Tourist club is a vibrant and welcoming tourist dedicated to
          fostering a community of travel enthusiasts. Whether you're a seasoned
          globetrotter or someone with a passion for discovering new horizons,
          our club provides a platform for like-minded individuals to connect,
          share experiences, and embark on exciting journeys together. We
          organize a variety of events, from group trips to cultural outings and
          adventure activities, creating opportunities for members to explore
          the world, forge lasting friendships, and create unforgettable
          memories. Join us on a journey of exploration, cultural exchange, and
          adventure with the tourist club.
        </p>

        <div>
          <h5 className="flex space-x-3 items-center">
            <FaArrowRight className="text-[#50ba87] mr-3"></FaArrowRight> First Class Flights
          </h5>
          <h5 className="flex space-x-3 items-center">
            <FaArrowRight className="text-[#50ba87] mr-3"></FaArrowRight> Handpicked Hotels
          </h5>
          <h5 className="flex space-x-3">
            <FaArrowRight className="text-[#50ba87] mr-3"></FaArrowRight> 5 Star Accommodations
          </h5>
          <h5 className="flex space-x-3 items-center">
            <FaArrowRight className="text-[#50ba87] mr-3"></FaArrowRight> Latest Model Vehicles
          </h5>
          <h5 className="flex space-x-3 items-center">
            <FaArrowRight className="text-[#50ba87] mr-3"></FaArrowRight> 150 Premium City Tours
          </h5>
          <h5 className="flex space-x-3 items-center">
            <FaArrowRight className="text-[#50ba87] mr-3"></FaArrowRight> 24/7 Service
          </h5>
        </div>
      </div>
    </div>
  );
};

export default About;
