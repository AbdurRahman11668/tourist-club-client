import { LiaParachuteBoxSolid, LiaShipSolid } from "react-icons/lia";
import { GiHiking, GiWalkingBoot } from "react-icons/gi";
import { MdOutlineSportsBasketball } from "react-icons/md";
import { Link } from "react-router-dom";

const TourType = () => {
  return (
    <div className="px-10 lg:px-0 mb-10">
      <div
        className="hero lg:h-80"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/xsT1pMx/pexels-pramod-tiwari-13515341.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h5 className="font-medium text-sm mb-2">Find a tour by</h5>
            <h1 className="mb-5 text-4xl font-bold pb-3 border-b-2 border-sky-950">
              Tour Type
            </h1>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 justify-center pt-5 ">
              <Link to="packages">
                <div className="border-4 hover:border-[#50ba87] rounded-full p-5 text-center">
                  <LiaParachuteBoxSolid className="w-12 h-12 text-white hover:text-[#50ba87] ml-3" />
                  <p className="text-sm font-semibold hover:text-[#50ba87]">AIR RIDE</p>
                </div>
              </Link>
              <Link to="packages">
                <div className="border-4 hover:border-[#50ba87] rounded-full p-5 text-center">
                  <LiaShipSolid className="w-12 h-12 text-white hover:text-[#50ba87] ml-3" />
                  <p className="text-sm font-semibold hover:text-[#50ba87]">CRUISES</p>
                </div>
              </Link>
              <Link to="packages">
                <div className="border-4 hover:border-[#50ba87] rounded-full p-5 text-center">
                  <GiHiking className="w-12 h-12 text-white hover:text-[#50ba87] ml-3" />
                  <p className="text-sm font-semibold hover:text-[#50ba87]">HIKING</p>
                </div>
              </Link>
              <Link to="packages">
                <div className="border-4 hover:border-[#50ba87] rounded-full p-5 text-center">
                  <MdOutlineSportsBasketball className="w-12 h-12 text-white hover:text-[#50ba87] ml-3" />
                  <p className="text-sm font-semibold hover:text-[#50ba87]">SPORTS</p>
                </div>
              </Link>
              <Link to="packages">
                <div className="border-4 hover:border-[#50ba87] rounded-full p-5 text-center">
                  <GiWalkingBoot className="w-12 h-12 text-white hover:text-[#50ba87] ml-3" />
                  <p className="text-sm font-semibold hover:text-[#50ba87]">WALKING</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourType;
