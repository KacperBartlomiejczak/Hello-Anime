export interface Anime {
  mal_id: string;
  images: {
    webp: {
      image_url: string;
      large_image_url: string;
    };
  };
  title: string;
  synopsis: string;
  score: number;
  episodes: number;
  year: number;
  genres: Genre[];
  type: string;
  status: string;
  url: string;
  season: string;
  title_english: string;
  rank: number;
  popularity: number;
  duration: string;
  source: string;
  rating: number;
  studios: Studios[];
}

interface Genre {
  mal_id: string;
  type: string;
  name: string;
  url: string;
}

interface Studios {
  name: string;
}
