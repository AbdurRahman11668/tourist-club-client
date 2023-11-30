import { IoIosPhonePortrait, IoMdHome, IoMdMail } from "react-icons/io";
// import Map from "./Map";

const Contact = () => {
  return (
    <div>
      {/* <Map></Map> */}
      <div className="px-10 lg:px-0 pt-32 pb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="border border-[#50ba87] rounded p-5 text-center">
          <div className="pb-5">
            <IoIosPhonePortrait className="mx-auto w-28 h-28 text-[#50ba87]"></IoIosPhonePortrait>
          </div>
          <div className="space-y-3">
            <h3 className="text-[#50ba87] font-semibold text-lg">
              +1 323-913-4688
            </h3>
            <h3 className="text-[#50ba87] font-semibold text-lg">
              +1 323-913-4688
            </h3>
          </div>
        </div>
        <div className="border border-[#50ba87] rounded p-5 text-center">
          <div className="pb-5">
            <IoMdHome className="mx-auto w-28 h-28 text-[#50ba87]"></IoMdHome>
          </div>
          <div className="space-y-3">
            <h3 className="text-[#50ba87] font-semibold text-lg">
              4730 Crystal Springs Dr, Los Angeles, CA 90027
            </h3>
          </div>
        </div>
        <div className="border border-[#50ba87] rounded p-5 text-center">
          <div className="pb-5">
            <IoMdMail className="mx-auto w-28 h-28 text-[#50ba87]"></IoMdMail>
          </div>
          <div className="space-y-3">
            <h3 className="text-[#50ba87] font-semibold text-lg">
              mail@demolink.org
            </h3>
            <h3 className="text-[#50ba87] font-semibold text-lg">
              info@demolink.org
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
