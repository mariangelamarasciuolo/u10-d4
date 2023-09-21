export interface Article {
  id: number;
  title: string;
  url: string;
  imageUrl: string;
  summary: string;
  publishedAt: string;
  updated_at: string;
  featured: boolean;
  launches: [];
  events: [];
}
