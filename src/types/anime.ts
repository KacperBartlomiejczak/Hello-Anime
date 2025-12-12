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
}

interface Genre {
  mal_id: string;
  type: string;
  name: string;
  url: string;
}
