import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { formatDate } from '@/lib/format-date';
import { truncate } from '@/lib/helpers';
import type { Article } from '@/lib/types';

type Props = {
  article: Article;
};

export default function ArticleCard({ article }: Props) {
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <CardTitle className="text-xl">
          {truncate(article.title, 150, 140)}
        </CardTitle>
        <CardDescription>
          {article.source ? article.source : `category: ${article.category}`} -{' '}
          {formatDate(article.publishedAt)}
        </CardDescription>
      </CardHeader>
      <CardContent className="text-sm flex-grow">
        <p>{truncate(article.description, 100, 80)}</p>
      </CardContent>
      <CardFooter>
        <Button
          asChild
          className="bg-zinc-900 hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 mt-auto"
        >
          <a href={article.url} target="_blank" rel="noopener noreferrer">
            Read More
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
