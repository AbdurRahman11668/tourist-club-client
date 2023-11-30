import { useState } from "react";
import usePackage from "../Hooks/usePackage";

const TourPlans = () => {
  const [packages] = usePackage();

  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="pt-5 px-5 lg:px-0">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center">
        Tour Plan
      </h2>

      <div className="mt-10">
        <div className="space-y-5">
          <div className="navbar w-full flex items-center border-2 rounded-md border-purple-300 md:max-w-5xl mx-auto px-5 py-5">
            <p className="text-xl font-semibold text-[#50ba87] text-center">Day 1</p>
            <img
              className="w-32 rounded-md mx-7"
              src="https://i.ibb.co/k84wHXX/Eiffel-Tower.jpg"
              alt=""
            />
            <h3 className="font-medium text-[#50ba87]">
            Eiffle Tower, Arc Du Triomphe, Notre Dame, The Loubre, Palace of Versalilles
            </h3>
          </div>
          <div className="navbar w-full flex items-center border-2 rounded-md border-purple-300 md:max-w-5xl mx-auto px-5 py-5">
            <p className="text-xl font-semibold text-[#50ba87] text-center">Day 2</p>
            <img
              className="w-32 rounded-md mx-7"
              src="https://i.ibb.co/LZq5Z9g/trip2.jpg"
              alt=""
            />
            <h3 className="font-medium text-[#50ba87]">
              Chateau Chambord, Ainay-le-Vieil Chateau & Gardens, Bourges Cathedral
            </h3>
          </div>
          <div className="navbar w-full flex items-center border-2 rounded-md border-purple-300 md:max-w-5xl mx-auto px-5 py-5">
            <p className="text-xl font-semibold text-[#50ba87] max-w-20 text-center">
              Day 3
            </p>
            <img
              className="w-32 rounded-md mx-6"
              src="https://i.ibb.co/Vx61g0p/trip3.jpg"
              alt=""
            />
            <h3 className="font-medium text-[#50ba87]">
              Basilique Notre-Dame de Fourbalere, Roman Amphitheatre, Museum of Fine Arts
            </h3>
          </div>
          <div className="navbar w-full flex items-center border-2 rounded-md border-purple-300 md:max-w-5xl mx-auto px-5 py-5">
            <p className="text-xl font-semibold text-[#50ba87] max-w-20 text-center">
              Day 4
            </p>
            <img
              className="w-32 rounded-md mx-6"
              src="https://i.ibb.co/z58cjbw/trip4.jpg"
              alt=""
            />
            <h3 className="font-medium text-[#50ba87]">
              Aries Amphitheatre, Marseille Vleux Port, Saint-Remy-de-Provence
            </h3>
          </div>
          <div className="navbar w-full flex items-center border-2 rounded-md border-purple-300 md:max-w-5xl mx-auto px-5 py-5">
            <p className="text-xl font-semibold text-[#50ba87] max-w-20 text-center">
              Day 5
            </p>
            <img
              className="w-32 rounded-md mx-6"
              src="https://i.ibb.co/JHPjphx/trip5.jpg"
              alt=""
            />
            <h3 className="font-medium text-[#50ba87]">
              Monaco, Museum of Modern ans Contemporary Art
            </h3>
          </div>
        </div>

        {/* Add more tab content sections as needed */}
      </div>
    </div>
  );
};

export default TourPlans;
