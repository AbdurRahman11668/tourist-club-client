import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="place-items-start">
      <Carousel className="">
        <div className="hero lg:place-items-start ">
          <img
            className="lg:max-h-screen max-w-screen md:max-w-2xl lg:max-w-full mx-auto"
            src="https://i.ibb.co/NLh7jnm/banner-5.jpg"
          />
          <div className="hero-content grid place-items-start sm:pt-0 lg:pt-52 sm:pl-0 lg:pl-20">
            <p className="sm:text-sm md:text-xl text-gray-400 font-semibold">
              Enjoy the Best Destinations with Our Travel Agency
            </p>
            <h3 className="sm:text-3xl lg:text-6xl text-white font-bold pt-3">
              <span className="font-light">Explore</span> The World
            </h3>
            <Link to="allpackages">
              <button className="text-lg mt-5 text-white font-medium py-2 px-7 hover:bg-[#50ba87] hover:border-[#50ba87] border-2 border-white">
                Buy Now
              </button>
            </Link>
          </div>
        </div>
        <div className="hero lg:place-items-start ">
          <img
            className="lg:max-h-screen max-w-screen md:max-w-2xl lg:max-w-full mx-auto"
            src="https://i.ibb.co/wp7n0D9/banner-2.jpg"
          />
          <div className="hero-content grid lg:place-items-start text-start sm:pt-0 lg:pt-52 sm:pl-0 lg:pl-20">
            <p className="sm:text-lg lg:text-xl text-black font-semibold">
              Enjoy the Best Destinations with Our Travel Agency
            </p>
            <h3 className="sm:text-4xl lg:text-6xl text-black font-bold pt-3">
              <span className="font-light">Explore</span> The World
            </h3>
            <Link to="allpackages">
              <button className="text-lg mt-5 text-black font-medium py-2 px-7 hover:bg-[#50ba87] hover:border-[#50ba87] border-2 border-black">
                Buy Now
              </button>
            </Link>
          </div>
        </div>
        <div className="hero lg:place-items-start ">
          <img
            className="lg:max-h-screen max-w-screen md:max-w-2xl lg:max-w-full mx-auto"
            src="https://i.ibb.co/9ZfFYL2/banner-3.jpg"
          />
          <div className="hero-content grid lg:place-items-start text-start sm:pt-0 lg:pt-52 sm:pl-0 lg:pl-20">
            <p className="sm:text-lg lg:text-xl text-gray-800 font-semibold">
              Enjoy the Best Destinations with Our Travel Agency
            </p>
            <h3 className="sm:text-4xl lg:text-6xl text-white font-bold pt-3">
              <span className="font-light">Explore</span> The World
            </h3>
            <Link to="allpackages">
              <button className="text-lg mt-5 text-white font-medium py-2 px-7 hover:bg-[#50ba87] hover:border-[#50ba87] border-2 border-white">
                Buy Now
              </button>
            </Link>
          </div>
        </div>
        <div className="hero lg:place-items-start ">
          <img
            className="lg:max-h-screen max-w-screen md:max-w-2xl lg:max-w-full mx-auto"
            src="https://i.ibb.co/r4J6pRn/banner-4.jpg"
          />
          <div className="hero-content grid place-items-start sm:pt-0 lg:pt-52 sm:pl-0 lg:pl-20">
            <p className="sm:text-lg lg:text-xl text-gray-800 font-semibold">
              Enjoy the Best Destinations with Our Travel Agency
            </p>
            <h3 className="sm:text-4xl lg:text-6xl text-black font-bold pt-3">
              <span className="font-light">Explore</span> The World
            </h3>
            <Link to="allpackages">
              <button className="text-lg mt-5 text-black font-medium py-2 px-7 hover:bg-[#50ba87] hover:border-[#50ba87] border-2 border-black">
                Buy Now
              </button>
            </Link>
          </div>
        </div>
        <div className="hero lg:place-items-start ">
          <img
            className="lg:max-h-screen max-w-screen md:max-w-2xl lg:max-w-full mx-auto"
            src="https://i.ibb.co/SBjt2Mc/banner-1.jpg"
          />
          <div className="hero-content grid place-items-start sm:pt-0 lg:pt-52 sm:pl-0 lg:pl-20">
            <p className="sm:text-lg lg:text-xl text-white font-semibold">
              Enjoy the Best Destinations with Our Travel Agency
            </p>
            <h3 className="sm:text-4xl lg:text-6xl text-white font-bold pt-3">
              <span className="font-light">Explore</span> The World
            </h3>
            <Link to="allpackages">
              <button className="text-lg mt-5 text-white font-medium py-2 px-7 hover:bg-[#50ba87] hover:border-[#50ba87] border-2 border-white">
                Buy Now
              </button>
            </Link>
          </div>
        </div>
      </Carousel>
      {/* <div className="hero-content text-center lg:text-start flex-col lg:flex-row-reverse">
        <p className="text-lg text-neutral font-semibold">
          Enjoy the Best Destinations with Our Travel Agency
        </p>
      </div> */}
    </div>
  );
};

export default Banner;
