import { Link } from "react-router-dom";
import usePackage from "../Hooks/usePackage";
import { Helmet } from "react-helmet";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Packages = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const [packages] = usePackage();
  return (
    <div className="">
      <Helmet>
        <title>Tourist Club | Packages</title>
      </Helmet>
      <div className="pt-32 pb-10">
        <div className=" text-center pb-5">
          <h2 className="tex-2xl lg:text-4xl font-semibold">Gallery</h2>
          <p className="pt-2 pb-5">You Will visit</p>
          <Carousel responsive={responsive}>
            <div>
              <img src="https://i.ibb.co/jVMBDfR/Santorini.jpg" alt="" />
            </div>
            <div>
              <img src="https://i.ibb.co/9ZfFYL2/banner-3.jpg" alt="" />
            </div>
            <div>
              <img src="https://i.ibb.co/NgRsDGf/BoraBora.jpg" alt="" />
            </div>
            <div>
              <img
                src="https://i.ibb.co/pRFtsxK/Sydney-Opera-House.jpg"
                alt=""
              />
            </div>
            <div>
              <img src="https://i.ibb.co/mtRqwZZ/Grand-Canyon.jpg" alt="" />
            </div>
            <div>
              <img
                src="https://i.ibb.co/4ZGV93w/Banff-National-Park.jpg"
                alt=""
              />
            </div>
          </Carousel>
        </div>
        <div className="pt-5">
          <h2 className="tex-2xl lg:text-4xl font-semibold text-center">
            All Packages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-5">
            {packages.map((item) => (
              <div
                key={item._id}
                className="card bg-base-100 shadow-xl mx-auto"
              >
                <figure className="relative">
                  <img src={item.image_link} alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-[#50ba87]">{item.name}</h2>
                  <p className="text-sm font-medium">{item.tour_type}</p>
                  <p className="text-sm font-medium">
                    <span className="font-semibold">Guide:</span>{" "}
                    {item.guideName}
                  </p>
                  <p className="text-lg text-[#50ba87] font-semibold">
                    ${item.price}
                  </p>
                  <div>
                    <button className="btn bg-[#50ba87]  text-white hover:bg-white border-2 border-[#50ba87] hover:border-[#50ba87] hover:text-[#50ba87]">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packages;
