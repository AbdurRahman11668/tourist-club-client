const TourBlog = () => {
  const blogData = [
    {
      title: "Exploring the City",
      date: "January 15, 2023",
      content:
        "We started our journey by exploring the vibrant streets and historic landmarks of the city.",
    },
    {
      title: "Nature Retreat",
      date: "February 15, 2023",
      content:
        "A peaceful retreat into nature, surrounded by lush greenery and serene landscapes.",
    },
    {
        "title": "Hiking Adventures in the Mountains",
        "date": "April 12, 2023",
        "content": "Embarked on a thrilling hiking expedition in the majestic mountains."
      },
      {
        "title": "Sunny Days by the Seaside",
        "date": "May 20, 2023",
        "content": "The rhythmic sound of waves, warm breeze, and the salty sea air created a perfect backdrop for relaxation and reflection."
      },
      {
        "title": "Cultural Delights in Old Town",
        "date": "June 10, 2023",
        "content": "Explored the rich cultural heritage of the old town, marveling at historical architecture."
      },
      {
        "title": "Wildlife Safari Adventure",
        "date": "July 18, 2023",
        "content": "Ventured into the heart of the wilderness on a thrilling wildlife safari."
      },
  ];
  return (
    <div className="pt-24 lg:pt-36 pb-10 px-10 lg:px-0">
      <h2 className="text-3xl text-center font-bold text-[#50ba87]">Blog</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-10">
        {blogData.map((blog) => (
          <div
            key={blog.id}
            className="border-2 text-center p-5 border-[#50ba87]"
          >
            <h2 className="text-[#50ba87] font-bold text-xl">{blog.title}</h2>
            <p className="text-gray-700 font-medium py-3">{blog.date}</p>
            <p className="text-gray-500 pt-3">{blog.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TourBlog;
