import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Article } from "@/lib/types";

type Props = {
  article: Article;
};

export default function NewsCard({ article }: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{article.title}</CardTitle>
        <CardDescription>
          {article.source} -{" "}
          {new Date(article.publishedAt).toLocaleDateString()}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>{article.description}</p>
      </CardContent>
      <CardFooter>
        <Button
          asChild
          className="bg-zinc-900 dark:bg-white dark:text-zinc-900"
        >
          <a href={article.url} target="_blank" rel="noopener noreferrer">
            Read More
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
