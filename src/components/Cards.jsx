import { ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Card = ({title, image, price, description , id , add}) => {
const navigate = useNavigate();
  if(description.length > 50) {
    description = description.slice(0, 50) + '  see more...';
  }
  if(title.length < 50) {
    title = title.slice(0, 15);
  }
  return (
    <div  onClick={()=> {navigate(`/product/${id}`)
    }} className="cursor-pointer w-[190px] h-[275px] bg-white rounded-2xl shadow-md border border-white/20 overflow-hidden relative transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 hover:shadow-2xl hover:border-purple-500/20 active:scale-95 font-sans">
      
      {/* Shine Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent_40%,rgba(255,255,255,0.8)_50%,transparent_60%)] opacity-0 hover:opacity-100 animate-[shine_3s_infinite] pointer-events-none" />

      {/* Glow Effect */}
      <div className="absolute -inset-2 bg-[radial-gradient(circle_at_50%_0%,rgba(124,58,237,0.3)_0%,rgba(124,58,237,0)_70%)] opacity-0 hover:opacity-100 pointer-events-none transition-opacity duration-500" />

      {/* Badge */}
      <span className="absolute top-3 right-3 bg-emerald-500 text-white text-[0.7em] font-semibold px-2 py-0.5 rounded-full scale-75 opacity-0 z-10 transition-all duration-300 delay-100 hover:scale-100 hover:opacity-100">
        New
      </span>

      {/* Content */}
      <div className="p-3 h-full flex flex-col gap-3 relative z-10">

        {/* Image */}
        <div className="w-full h-[125px] bg-gradient-to-r from-purple-300 to-purple-500 rounded-xl relative overflow-hidden transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.03] hover:translate-y-[-5px] shadow-md">
  <img className="w-full h-full object-cover rounded-xl" src={image} alt="" />
</div>


        {/* Text */}
        <div className="flex flex-col gap-1 ">
          <h3 className="text-slate-800 font-bold text-[1.1em] transition-all duration-300 hover:text-purple-600 hover:translate-x-[2px]">
            {title}
          </h3>
          <p className="text-slate-800 text-sm opacity-70 transition-all duration-300 hover:opacity-100 hover:translate-x-[2px]">
            {description}
          </p>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center mt-auto">
          <span className="text-slate-800 font-bold text-base transition-all duration-300 hover:text-purple-600 hover:translate-x-[2px]">
            {price}
          </span>
          <button onClick={(e)=>{e.stopPropagation(); add()}} className="w-7 h-7 bg-purple-600 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-100 hover:shadow-[0_0_0_4px_rgba(124,58,237,0.2)]">
            <ShoppingCart className="w-4 h-4 animate-[pulse_1.5s_infinite]"/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
