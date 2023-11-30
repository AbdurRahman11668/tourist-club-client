
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";
import AllPackage from "./AllPackage";
import usePackage from "../../Hooks/usePackage";

const AllPackages = () => {
  const [packages] = usePackage();
  console.log(packages)
  return (
    <div className="pb-10">
      <Helmet>
        <title>Tourist Club | All Packages</title>
      </Helmet>
      <div className="pt-24 lg:pt-32 px-10 lg:px-0">
        <h2 className="text-2xl lg:text-4xl font-semibold text-center">
          All Packages
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-5">
          {packages.map(item => (
            <AllPackage key={item._id} item={item}></AllPackage>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllPackages;
