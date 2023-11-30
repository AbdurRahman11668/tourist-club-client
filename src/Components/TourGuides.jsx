import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import Guide from "./Guide";

const TourGuides = ({ products }) => {
//   console.log(guide.guide_name);

  return (
    <div className="mt-20 mb-10">
      <h2 className="text-2xl lg:text-4xl text-center font-bold">
        Tour Guides
      </h2>
      <Guide products={products}></Guide>
    </div>
  );
};

export default TourGuides;
