import { Star } from 'lucide-react';

const Card = () => {
  return (
    <div class="group relative flex flex-col dark:bg-card-dark border border-slate-800 dark:border-border-dark rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
      <div class="aspect-video w-full overflow-hidden">
        <img
          class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          data-alt="Abstract colorful neon digital landscape pattern"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBx-4HOTaT4_zXLPbAq0pf6YnxYklG8_eX6RQIUfyCLdhTHyTB6VKxZFRIGKAwSgBlZ7B_1B04ZAHPzZ9X7Y_kclH_QoTch-mnmxQeCb_GGAGLDa_RYAhK0WKXwFC4GAnWMrLxxUxaaTLSW0ngUqgvoS4T8SD0zqFD5QFcGBrVZDisPiFKFEnFOlus31b0lrPPLNNSihJKqtqc4yOuV3gfiJukuTqdXIrD-7N5-ndbduZlxV_TyRegd6pBZk0Ly4EXwKIAwl2Z_U2U"
        />
      </div>
      <div class="p-5 flex flex-col flex-1">
        <div class="flex justify-between items-start mb-2">
          <h3 class="text-lg font-bold text-slate-900 dark:text-white line-clamp-1">
            Hades II
          </h3>
          <div class="flex items-center gap-1 text-amber-400">
            <span class="material-symbols-outlined text-[18px] fill-current">
              <Star />
            </span>
            <span class="text-sm font-bold text-slate-700 dark:text-slate-300">
              4.7
            </span>
          </div>
        </div>
        <p class="text-sm text-slate-500 dark:text-slate-400 mb-6 line-clamp-2 leading-relaxed">
          Battle beyond the Underworld using dark sorcery to take on the Titan
          of Time.
        </p>
        <div class="mt-auto">
          <button class="w-full py-2.5 rounded-lg bg-slate-900 dark:bg-white text-white dark:text-black text-sm font-bold transition-opacity hover:opacity-90">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
