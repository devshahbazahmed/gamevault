import { Users } from 'lucide-react';
import { Gamepad2 } from 'lucide-react';
import { Monitor } from 'lucide-react';

export const API_URL = import.meta.env.VITE_RAWG_API_URL;
export const API_KEY = import.meta.env.VITE_RAWG_API_KEY;

export const titles = [
  'All titles',
  'Trending Now',
  'New Releases',
  'RPG',
  'Action',
];

export const footerLinks = {
  Explore: ['Top Rated', 'New Releases', 'Indie Gems'],
  Support: ['Help Center', 'Safety Center', 'Community Guidelines'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
};

export const gameDetails = [
  {
    label: 'Platforms',
    value: 'PC, PS5, Xbox Series X',
    icon: Monitor,
  },
  {
    label: 'Genre',
    value: 'Action RPG, Open World',
    icon: Gamepad2,
  },
  {
    label: 'Players',
    value: 'Single-player',
    icon: Users,
  },
];
export const tags = ['RPG', 'Sci-fi', 'Open World', 'Cyberpunk', 'Nudity'];

export const ratingDistribution = [
  { rating: 5, percentage: 90 },
  { rating: 4, percentage: 6 },
  { rating: 3, percentage: 2 },
];
