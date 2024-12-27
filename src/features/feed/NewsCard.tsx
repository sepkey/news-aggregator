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
import { Article } from '@/lib/types';

type Props = {
  article: Article;
};

const truncate = (str: string) => {
  return str.length > 100 ? str.substring(0, 80) + ' ...' : str;
};

export default function NewsCard({ article }: Props) {
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <CardTitle className="text-xl">{article.title}</CardTitle>
        <CardDescription>
          {article.source} - {formatDate(article.publishedAt)}
        </CardDescription>
      </CardHeader>
      <CardContent className="text-sm flex-grow">
        <p>{truncate(article.description)}</p>
      </CardContent>
      <CardFooter>
        <Button
          asChild
          className="bg-zinc-900 dark:bg-white dark:text-zinc-900 mt-auto"
        >
          <a href={article.url} target="_blank" rel="noopener noreferrer">
            Read More
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
