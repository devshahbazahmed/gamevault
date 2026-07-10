import CategoryTabs from '../components/CategoryTabs.jsx';
import Card from '../components/Card.jsx';
import { useLoaderData } from 'react-router';

const Home = () => {
  const { data } = useLoaderData();
  return (
    <section>
      <div className="text-white">
        <h1 className="text-6xl font-extrabold tracking-tight my-5">
          Explore the Metaverse
        </h1>
        <p className="text-2xl font-medium w-[60%] leading-none">
          Discover your next obsession from our meticulously curated database of
          the world's most legendary titles.
        </p>
      </div>

      <div className="mt-10">
        <CategoryTabs />
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {data.results.map((item) => (
          <div key={item.id}>
            <Card item={item} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Home;
