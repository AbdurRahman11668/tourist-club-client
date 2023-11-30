import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import usePackage from "../../../Hooks/usePackage";
import {  useState } from "react";
import AllPackage from "../AllPackage";
import MeetTourismTravelGuide from "./MeetTourismTravelGuide";

const TourismTravelGuide = () => {
  const [packages] = usePackage();
  const [dataLength, setDataLength] = useState(4);
  // const [users, refetch] = useGuideData();

  // const uniqueData = guide.filter(
  //   (value) => value.role === 'guide'
  // );

  return (
    <div className="px-10 lg:px-0 mb-10">
      <h2 className="text-center my-10 text-2xl lg:text-4xl font-bold">
        Tourism and Travel Guide
      </h2>

      <Tabs>
        <TabList>
          <Tab>Overview</Tab>
          <Tab>Our Packages</Tab>
          <Tab>Meet Our Tour Guides</Tab>
        </TabList>

        <TabPanel>
          <p className="">
            Inspired by the way professionals play the game, the Tourist Club
            brings together golf enthusiasts of various backgrounds to compete
            on 25 of Ontario’s best public and private courses. No gimmies,
            mulligians or do-overs here. We are talking about by the book, no
            nonsense competitive style play. But as long as you have a handicap
            of 25.9 or under, you are eligible to compete in any of our
            unforgettable tournaments. It is your chance to feel like a pro,
            even if you aren’t.
            <br />
            <br />
            <Link to="/login" className="underline text-sky-700 font-medium">
              Join NOW
            </Link>{" "}
            to reserve your spot at some of Ontario best private and public golf
            courses. The registration fee will be in place for the duration of
            The Tour season.
          </p>
          <h3 className="text-xl font-semibold py-3">BENEFITS FROM THE TOUR</h3>
          <p>
            1. Prizing – average per event merit and draw prizing is valued at
            $2,500!! <br />
            2. TaylorMade – For every $50 you spend with TaylorMade (and bring
            in the receipt) you will get a ballot for a draw for a round of golf
            with Mark Young at an exclusive and private GTA-based Golf Club!{" "}
            <br />
            3. The first 450 registrants will receive a Tour sponsor gift bag
            containing many Sponsor products and services. <br />
            4. Player Referral Program – For every player you refer to The Tour,
            who plays at least two events, The Tour will provide you with one
            dozen TaylorMade TP5 golf balls. <br />
            5. Players with a hole-in-one on the sponsored hole will receive a
            $1,500 shopping spree with any of The Tour sponsors. 6. Closest to
            the pin winners will receive a dozen TaylorMade golf balls. <br />
            7. Tee times emailed to you and posted on the Tour website 3-5 days
            prior to each event. <br />
            8. Players tee off in threesomes, every 10 minutes.
            <br />
            9. Average per-event pace of play of 4 hours and 08 minutes. <br />
            10. The Tour automatically uploads your Tour scores, directly into
            your Golf Canada Handicap Index profile. These scores are loaded,
            hole-by-hole, from the correct tees, on the correct date and as a
            Tournament scores.
          </p>
          <h3 className="text-xl font-semibold py-3">PLAYING THE GAME</h3>
          <p>
            The GTA AM Tour creates a unique opportunity for players to play in
            a well organized and competitive event while maintaining that great
            sense of camaraderie you have with your regular group. The Tour is
            an excellent way for players of all handicaps to develop their
            competitive golf skills and heighten their game. In addition, you
            will meet other golf enthusiasts at some of the newest and best
            courses in the country.
          </p>{" "}
          <br /> <br />
          <p>
            The Tour tees players off the first tee in threesomes every 10
            minutes to provide you with a true tournament experience.
          </p>
        </TabPanel>
        <TabPanel>
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-5">
              {packages.slice(0, dataLength).map((item) => (
                <AllPackage key={item._id} item={item}></AllPackage>
              ))}
            </div>
            <div className="flex justify-center mt-5 mb-10">
              <Link to={`/allpackages`}>
                <button className="px-8 py-2 bg-[#50ba87] hover:bg-transparent hover:border-2 border-2 border-[#50ba87] text-lg font-medium text-white hover:text-[#50ba87] mt-8 rounded">
                  Show All
                </button>
              </Link>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-2 md:grid-cols-3 mt-10 gap-5 justify-center text-center ">
            {packages.slice(0, 3).map((item) => (
              // <div  key={item._id}>
              //   <img
              //     className="w-40 rounded-full mx-auto"
              //     src={item.guide.image}
              //     alt=""
              //   />
              //   <h2 className="text-[#50ba87] font-semibold text-lg pt-5">
              //     {item.guide.name}
              //   </h2>
              // </div>
              <MeetTourismTravelGuide key={item._id} products={item}></MeetTourismTravelGuide>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default TourismTravelGuide;
