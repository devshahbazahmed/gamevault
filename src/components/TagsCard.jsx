import { tags } from '../constants';

function TagsCard() {
  return (
    <section className="rounded-2xl border border-[#24334a] bg-[#111a2d] p-6 sm:p-7">
      <h2 className="text-lg font-bold">Tags</h2>

      <div className="mt-5 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-lg bg-[#202c42] px-3 py-1.5 text-xs font-semibold text-[#d8deea]"
          >
            {tag}
          </span>
        ))}
      </div>
    </section>
  );
}

export default TagsCard;
