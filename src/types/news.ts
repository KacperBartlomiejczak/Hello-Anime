export interface News {
  mal_id: number;
  title: string;
  author_username: string;
  images: {
    jpg: {
      image_url: string;
    };
  };
  date: string;
}
