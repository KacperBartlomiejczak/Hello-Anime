export interface Anime {
  mal_id: number;
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
  trailer: {
    youtube_id: string;
    url: string;
    embed_url: string;
    images: {
      image_url: string;
      small_image_url: string;
      medium_image_url: string;
      large_image_url: string;
      maximum_image_url: string;
    };
  };
}

export interface Genre {
  mal_id: string;
  type: string;
  name: string;
  url: string;
}

export interface Studios {
  name: string;
}
