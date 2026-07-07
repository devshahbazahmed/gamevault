import { titles } from '../constants';

const CategoryTabs = () => {
  return (
    <div className="mt-10">
      {titles.map((item, idx) => (
        <button
          key={idx}
          className="px-3 py-1 rounded-full active:bg-blue-700 bg-zinc-900 hover:cursor-pointer hover:scale-105 mx-5"
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default CategoryTabs;
