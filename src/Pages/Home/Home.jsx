import { Helmet } from "react-helmet";
import Banner from "./Sections/Banner";
import TourismTravelGuides from "./Sections/TourismTravelGuides";
import TourType from "./Sections/TourType";

const Home = () => {
    return (
        <div className="pb-10">
            <Helmet>
                <title>Tourist Club | Home</title>
            </Helmet>
            <Banner></Banner>
            <TourismTravelGuides></TourismTravelGuides>
            <TourType></TourType>
        </div>
    );
};

export default Home;