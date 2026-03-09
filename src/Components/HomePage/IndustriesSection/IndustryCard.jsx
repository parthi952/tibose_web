const IndustryCard = ({ icon, image, title }) => (
  <div className="
    shrink-0
    flex flex-col items-center 
    p-2 pt-12
    border-4 border-blue-500 
    rounded-3xl
    bg-white shadow-sm relative 
    w-60 h-80 
    mx-2
    transition-all duration-300 hover:scale-[1.03] hover:shadow-xl
  ">
    {/* Floating Icon */}
    <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-white border-4 border-blue-500 rounded-full flex items-center justify-center w-14 h-14 shadow-md text-blue-600 z-20">
      <div className="flex items-center justify-center">
        {icon}
      </div>
    </div>
    
    {/* Industry Image Area */}
    <div className="w-[85%] h-[65%] overflow-hidden rounded-2xl mb-4 bg-gray-100 border border-gray-100">
      {image ? (
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover "
        />
      ) : (
        <div className="flex items-center justify-center h-full text-gray-300 text-xs">No Img</div>
      )}
    </div>
    
    {/* Title Area */}
    <div className="mt-auto mb-8 px-4 w-full">
      <h3 className="text-sm font-black text-gray-900 text-center uppercase tracking-wider leading-tight">
        {title}
      </h3>
    </div>
  </div>
);

export default IndustryCard;