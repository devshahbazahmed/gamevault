import { Star } from 'lucide-react';
import { useNavigate } from 'react-router';

const Card = ({ item }) => {
  const navigate = useNavigate();
  return (
    <div className="group relative flex flex-col dark:bg-card-dark border border-slate-800 dark:border-border-dark rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
      <div className="aspect-video w-full overflow-hidden">
        <img
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          alt={item.name}
          src={item.background_image}
        />
      </div>
      <div className="p-5 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-2">
          <h1 className="text-lg font-bold text-slate-900 dark:text-white line-clamp-1">
            {item.name}
          </h1>
          <div className="flex items-center gap-1 text-amber-400">
            <span className="material-symbols-outlined text-[18px] fill-current">
              <Star />
            </span>
            <span className="text-sm font-bold text-slate-700 dark:text-slate-300">
              {item.rating_top}
            </span>
          </div>
        </div>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 line-clamp-2 leading-relaxed">
          Battle beyond the Underworld using dark sorcery to take on the Titan
          of Time.
        </p>
        <div className="mt-auto">
          <button
            className="w-full py-2.5 rounded-lg bg-slate-900 dark:bg-white text-white dark:text-black text-sm font-bold transition-opacity hover:opacity-90 hover:cursor-pointer active:scale-105"
            onClick={() => navigate(`/games/${item.id}`)}
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
