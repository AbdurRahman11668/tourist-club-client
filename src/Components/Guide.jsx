import { Link } from "react-router-dom";

const Guide = ({products}) => {
    const { _id, guide} = products;
    return (
        <div className="lg:px-20 pt-10 text-center ">
        <Link to={`/guideprofilepublic/${_id}`}>
          <img
            className="w-32 mx-auto rounded-full mb-5"
            src={guide.profile_picture}
            alt=""
          />
          <h3 className="text-lg font-semibold text-[#50ba87]">{guide.guide_name}</h3>
        </Link>
      </div>
    );
};

export default Guide;