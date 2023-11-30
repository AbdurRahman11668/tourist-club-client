import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Discover = () => {
  return (
    <div className="flex px-5 lg:px-0 flex-col lg:flex-row pt-14 space-x-10 pb-5">
      <div className="lg:w-1/2">
        <img src="https://i.ibb.co/wp7n0D9/banner-2.jpg" alt="" />
      </div>
      <div className="lg:w-1/2">
        <h2 className="text-2xl lg:text-4xl font-bold text-center lg:text-left pb-5">
          Discover New Horizons
        </h2>
        <Tabs>
          <TabList>
            <Tab>ABOUT US</Tab>
            <Tab>WHY CHOOSE US</Tab>
            <Tab>OUR MISSION</Tab>
          </TabList>
          <TabPanel>
            <p className="pt-5">
              Tourist Club is committed to bringing our clients the best in
              value and quality travel arrangements. We are passionate about
              travel and sharing the world's wonders with you.
            </p>
          </TabPanel>
          <TabPanel>
            <p className="pt-5">
              We are proud to offer excellent quality and value for money in our
              tours, which give you the chance to experience your chosen
              destination in an authentic and exciting way.
            </p>
          </TabPanel>
          <TabPanel>
            <p className="pt-5">
              Tourist Club is committed to bringing our clients the best in
              value and quality travel arrangements. We are passionate about
              travel and sharing the world's wonders with you.
            </p>
          </TabPanel>
        </Tabs>
        <div className="space-x-5">
          <Link to="/contact">
            <button className="text-lg mt-5 text-white bg-[#50ba87] font-medium py-2 px-7 hover:bg-white hover:text-[#50ba87] hover:border-[#50ba87] border-2 border-[#50ba87]">
              Get in Touch
            </button>
          </Link>
          <Link to="/about">
            <button className="text-lg mt-5 text-[#50ba87] border-[#50ba87] font-medium py-2 px-7 hover:bg-[#50ba87] hover:text-white hover:border-[#50ba87] border-2">
              Read More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Discover;
