import { Article } from "@/lib/types";
import NewsCard from "./NewsCard";

const articles: Article[] = [
  {
    id: "1",
    title: "Breaking News: Important Event Occurs",
    description: "An important event has occurred that affects many people.",
    source: "BBC News",
    publishedAt: new Date().toISOString(),
    url: "https://www.bbc.com/news/article1",
  },
  {
    id: "2",
    title: "Technology: New Gadget Unveiled",
    description:
      "A new gadget has been unveiled that promises to revolutionize the industry.",
    source: "The Guardian",
    publishedAt: new Date().toISOString(),
    url: "https://www.theguardian.com/technology/article2",
  },
];

export default function Feed() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {articles.map((article) => (
        <NewsCard article={article} key={article.id} />
      ))}
    </div>
  );
}
