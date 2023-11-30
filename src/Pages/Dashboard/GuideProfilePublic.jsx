import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import ProgressBar from "@ramonak/react-progress-bar";
import GuideComments from "./GuideComments";

const GuideProfilePublic = () => {
  const packages = useLoaderData();
  return (
    <div className="pt-28 mb-10">
      <Helmet>
        <title>Tourist Club | Guide Profile</title>
      </Helmet>
      <div className="pt-10 flex flex-col lg:flex-row items-center">
        <div className="w-1/2 mx-auto">
          <img
            className="rounded mx-auto"
            src={packages.guide.profile_picture}
            alt=""
          />
        </div>
        <div className="w-1/2 mx-auto pt-10 lg:pt-0">
          <h2 className="text-2xl lg:text-4xl font-bold">Guide Profile</h2>
          <h3 className="text-xl lg:text-2xl font-semibold pt-6 pb-4">
            <span className="font-bold">Name:</span> {packages.guide.guide_name}
          </h3>
          <h3 className="font-semibold"><span className="font-bold">Email:</span> {packages.guide.email}</h3>
          <h3 className="font-semibold py-2"><span className="font-bold">Phone:</span> {packages.guide.phone}</h3>
          <h3 className="font-semibold">
            <span className="font-bold">Education:</span> {packages.guide.education}
          </h3>
          <h3 className="font-semibold pt-2 pb-3">
            <span className="font-bold">Skills:</span> {packages.guide.skills}
          </h3>
          <div className="space-y-3">
            <h3 className="text-lg font-bold">Experience - </h3>
            <p className="pb-1 font-semibold">Tours</p>
            <ProgressBar completed={79} />
            <p className="pb-1 font-semibold">Excursions</p>
            <ProgressBar completed={72} />
            <p className="pb-1 font-semibold">Hotel Booking</p>
            <ProgressBar completed={88} />
          </div>
        </div>
      </div>

      <GuideComments></GuideComments>
    </div>
  );
};

export default GuideProfilePublic;
