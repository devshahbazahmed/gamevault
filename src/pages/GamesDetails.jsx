import { useLoaderData } from 'react-router';
import {
  Heart,
  ShoppingCart,
  Star,
  Monitor,
  Gamepad2,
  Users,
  Library,
} from 'lucide-react';
import { useState } from 'react';
import GalleryImage from '../components/GalleryImage';
import SectionHeading from '../components/SectionHeading';
import { gameDetails } from '../constants';
import PlayerReviews from '../components/PlayerReviews';
import TagsCard from '../components/TagsCard';
import SystemRequirements from '../components/SystemRequirements';

const GamesDetails = () => {
  const { data: game } = useLoaderData();
  const [isFavorite, setIsFavorite] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!game) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-white text-xl">Loading...</p>
      </div>
    );
  }

  console.log(game);

  const screenshots = game.screenshots?.results || [];

  function formatDate(date) {
    const formattedDate = new Date(date).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
    return formattedDate;
  }

  return (
    <div className="min-h-screen bg-[#030506] text-white">
      <main className="mx-auto w-full max-w-345 px-4 py-8 sm:px-6 lg:px-10 lg:py-12">
        {/* Hero Section */}
        <section className="relative min-h-125 overflow-hidden rounded-[28px] border border-white/5">
          <img
            src="https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=2000&q=90"
            alt="Cyberpunk game landscape"
            className="absolute inset-0 size-full object-cover"
          />

          <div className="absolute inset-0 bg-linear-to-r from-black/75 via-black/25 to-black/25" />
          <div className="absolute inset-0 bg-linear-to-t from-black via-black/15 to-transparent" />

          <div className="relative flex min-h-125 flex-col justify-end gap-8 p-6 sm:p-10 lg:flex-row lg:items-end lg:justify-between lg:p-14">
            <div>
              <div className="mb-4 flex flex-wrap items-center gap-3">
                <span className="rounded bg-[#1687ff] px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
                  Editor&apos;s Choice
                </span>

                <span className="flex items-center gap-1.5 text-sm font-semibold">
                  <Star className="size-4 fill-[#ffc83d] text-[#ffc83d]" />
                  {game.rating}
                </span>
              </div>

              <h1 className="max-w-4xl text-4xl font-black tracking-[-0.04em] sm:text-5xl lg:text-7xl">
                {game.name}
              </h1>

              {game.publishers.map((pub) => (
                <p
                  className="mt-3 text-sm font-medium text-[#d3dae4] sm:text-base"
                  key={pub.id}
                >
                  {pub.name}
                  <span className="mx-2 text-[#778399]">•</span>
                  {formatDate(game.released)}
                </p>
              ))}
            </div>

            <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
              {/* <button className="flex h-14 items-center justify-center gap-2 rounded-xl bg-[#1687ff] px-8 font-bold transition-colors hover:bg-[#0879ea]">
              <ShoppingCart className="size-5" />
              Buy Now
            </button> */}

              <button className="flex h-14 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/10 px-7 font-bold backdrop-blur-md transition-colors hover:bg-white/15">
                <Heart className="size-5" />
                Add to Favorites
              </button>
            </div>
          </div>
        </section>
        <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px]">
          <div className="min-w-0 space-y-12">
            {/* About Section */}
            <section>
              <SectionHeading
                icon={<Library className="size-5 text-[#1687ff]" />}
                title="About the Game"
              />

              <div className="mt-5 max-w-4xl space-y-5 text-sm leading-7 text-[#91a0b6] sm:text-base sm:leading-8">
                <p>{game.description_raw}</p>
              </div>
            </section>

            {/* Games Details Section */}
            <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {gameDetails.map((detail) => {
                const Icon = detail.icon;

                return (
                  <article
                    key={detail.label}
                    className="rounded-2xl border border-[#24334a] bg-[#111a2d] p-5 transition-transform hover:-translate-y-1"
                  >
                    <Icon className="mb-2 size-5 text-[#1687ff]" />

                    <p className="text-xs text-[#708099]">{detail.label}</p>

                    <p className="mt-1 text-sm font-semibold leading-6 text-[#f0f4fa]">
                      {detail.value}
                    </p>
                  </article>
                );
              })}
            </section>

            {/* Media Gallery Section */}
            <section>
              <h2 className="text-xl font-bold sm:text-2xl">Media Gallery</h2>

              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <GalleryImage
                  src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=1200&q=85"
                  alt="Cyberpunk city environment"
                />

                <GalleryImage
                  src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=85"
                  alt="Futuristic gaming environment"
                />
              </div>
            </section>
          </div>
          <aside className="space-y-6">
            <PlayerReviews />
            <TagsCard />
            <SystemRequirements />
          </aside>
        </div>
      </main>
    </div>
  );
};

export default GamesDetails;
