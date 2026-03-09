const IndustryCard = ({ icon, image, title }) => (
  <div className="
    flex flex-col items-center 
    p-4 pt-12 
    border-2 border-blue-500 rounded-4xl 
    bg-white shadow-sm relative 
    /* Fixed Small Dimensions */
    w-60 h-80 
    mx-2
    transition-transform hover:scale-[1.03]
  ">
    {/* Floating Icon - Centered on the top border */}
    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white border-2 border-blue-500 rounded-full p-2 flex items-center justify-center w-16 h-16 shadow-md text-blue-600 z-20">
      <div className="flex items-center justify-center w-full h-full">
        {icon}
      </div>
    </div>
    
    {/* Industry Image Area */}
    <div className="w-full grow overflow-hidden rounded-2xl mb-4 bg-gray-100 flex items-center justify-center">
      {image ? (
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
          onError={(e) => { e.target.parentElement.innerHTML = '<div class="text-gray-300">Image</div>'; }} 
        />
      ) : (
        <div className="text-gray-300">No Image</div>
      )}
    </div>
    
    {/* Title */}
    <div className="h-12 flex items-center justify-center px-2">
      <h3 className="text-xs sm:text-sm font-black text-gray-900 text-center uppercase tracking-tight leading-tight">
        {title}
      </h3>
    </div>
  </div>
);

export default IndustryCard;