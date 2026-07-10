import { Star } from 'lucide-react';
import { ratingDistribution } from '../constants';

function PlayerReviews() {
  return (
    <section className="rounded-2xl border border-[#24334a] bg-[#111a2d] p-6 sm:p-7">
      <h2 className="text-lg font-bold">Player Reviews</h2>

      <div className="mt-6 flex items-end gap-4">
        <span className="text-5xl font-black leading-none text-[#1687ff]">
          4.9
        </span>

        <div>
          <div className="flex">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star
                key={index}
                className="size-5 fill-[#1687ff] text-[#1687ff]"
              />
            ))}
          </div>

          <p className="mt-1 text-xs text-[#72819a]">154,230 reviews</p>
        </div>
      </div>

      <div className="mt-8 space-y-4">
        {ratingDistribution.map((item) => (
          <div
            key={item.rating}
            className="grid grid-cols-[18px_1fr_35px] items-center gap-3"
          >
            <span className="text-xs font-medium text-[#c8d0dc]">
              {item.rating}
            </span>

            <div className="h-2 overflow-hidden rounded-full bg-[#223049]">
              <div
                className="h-full rounded-full bg-[#1687ff]"
                style={{ width: `${item.percentage}%` }}
              />
            </div>

            <span className="text-right text-xs text-[#65748d]">
              {item.percentage}%
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PlayerReviews;
