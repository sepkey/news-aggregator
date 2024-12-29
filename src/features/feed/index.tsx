import Message from '@/components/ui/Message';
import type { Article } from '@/lib/types';
import ArticleCard from './ArticleCard';
import { ScrollArea } from '@/components/ui/scroll-area';

type Props = { articles: Article[] };
export default function Feed({ articles }: Props) {
  if (articles.length === 0)
    return (
      <Message
        status="info"
        message="There is no articles with these filters, Try another filters!"
      />
    );
  return (
    <ScrollArea className="h-[65vh] w-full">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 ">
        {articles.map((article) => (
          <ArticleCard article={article} key={article.id} />
        ))}
      </div>
    </ScrollArea>
  );
}
