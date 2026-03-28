import Img from "../../Constents";

const blogbanner=Img.Resouces.blogbanner
const blogs = [
  {
    title: "How Smart Connectivity Transforms Modern Business",
    desc: "Reliable connectivity drives productivity, improves collaboration, and strengthens every aspect of business communication.",
    img: "https://images.unsplash.com/photo-1556761175-b413da4baf72",
  },
  {
    title: "Why Cybersecurity Matters More Than Ever Today",
    desc: "Strong cybersecurity protects business data, prevents threats, and ensures uninterrupted operations with confidence.",
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
  },
  {
    title: "The Future of Business Communication Technology",
    desc: "Smart communication tools simplify workflows, enhance teamwork, and create faster, smarter customer interactions.",
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
  },
  {
    title: "Leveraging Cloud Solutions for Scalable Growth",
    desc: "Cloud technologies enable flexibility, reduce costs, and help businesses scale quickly without infrastructure limitations.",
    img: "https://images.unsplash.com/photo-1521791136064-7986c2920216",
  },
  {
    title: "Digital Workplace Transformation: What Businesses Must Know",
    desc: "Modern digital tools empower teams, automate tasks, and create efficient, hybrid-ready working environments.",
    img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df",
  },
  {
    title: "Data-Driven Decision Making in the Modern Enterprise",
    desc: "Analytics and AI give leaders real-time insights that improve strategy, enhance performance, and drive smarter business outcomes.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
  },
];

const Resources = () => {
  return (
    <div>
       <img src={blogbanner} alt="Blog banner" className="pt-20"/>
   
    <div className=" py-10 px-5 md:px-16">
      
      <div className="grid md:grid-cols-3 gap-8">
        {blogs.map((item, index) => (
          <div
            key={index}
            className="bg-blue-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition"
          >
            <img
              src={item.img}
              alt="blog"
              className="w-full h-44 object-cover rounded-xl mb-4"
            />

            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              {item.title}
            </h2>

            <p className="text-gray-600 text-sm leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Resources;