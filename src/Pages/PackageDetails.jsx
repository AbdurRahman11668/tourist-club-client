import { Helmet } from "react-helmet";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Discover from "../Components/Discover";
import TourPlans from "../Components/TourPlans";
import TourGuides from "../Components/TourGuides";
import BookingForm from "../Components/BookingForm";
import { useLoaderData } from "react-router-dom";

const PackageDetails = () => {
  const products = useLoaderData();
  // console.log(products)

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

  return (
    <div className="">
      <Helmet>
        <title>Tourist Club | Packages</title>
      </Helmet>
      <div className="pt-32 pb-10 px-10 lg:px-0">
        <div className=" text-center pb-5">
          <h2 className="tex-2xl lg:text-4xl font-semibold">Gallery</h2>
          <p className="pt-2 pb-5">You Will visit</p>
          <h2 className="tex-xl lg:text-2xl pb-5 font-semibold">{products.name}</h2>
          <Carousel responsive={responsive}>
            <div>
              <img src={products.image_link} alt="" />
            </div>
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
        <Discover></Discover>
        <TourPlans></TourPlans>
        <TourGuides key={products._id} products={products}></TourGuides>
        <BookingForm key={products._id} products={products}></BookingForm>
      </div>
    </div>
  );
};

export default PackageDetails;
