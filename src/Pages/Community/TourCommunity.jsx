const communitiesData = [
  {
    id: 1,
    name: "Adventure Seekers",
    description: "Join us for thrilling adventures and exploration!",
    members: 1200,
  },
  {
    id: 2,
    name: "Cultural Enthusiasts",
    description:
      "Explore diverse cultures and traditions with fellow travelers.",
    members: 800,
  },
  {
    id: 3,
    name: "Foodie Friends",
    description: "Discover the world through its delicious cuisines.",
    members: 1500,
  },
  {
    id: 4,
    name: "Nature Lovers",
    description:
      "Connect with like-minded nature enthusiasts and eco-travelers.",
    members: 1000,
  },
  {
    id: 5,
    name: "Urban Explorers",
    description: "Experience the hustle and bustle of cities around the globe.",
    members: 900,
  },
  {
    id: 6,
    name: "Photography Club",
    description:
      "Capture the beauty of your travels and share your best shots.",
    members: 700,
  },
];

const TourCommunity = () => {
  return (
    <div className="pt-24 lg:pt-36 pb-10 px-10 lg:px-0">
      <h2 className="text-3xl text-center font-bold text-[#50ba87]">Tour Communities</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-10">
        {communitiesData.map((community) => (
          <div key={community.id} className="border-2 text-center p-5 border-[#50ba87]">
            <h3 className="text-[#50ba87] font-bold text-xl">{community.name}</h3>
            <p className="text-gray-500 py-3">{community.description}</p>
            <p className="font-medium py-2">Members: {community.members}</p>
            <button className="btn bg-[#50ba87] hover:text-black text-white">Join Community</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TourCommunity;
