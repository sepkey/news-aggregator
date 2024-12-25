import { useParams } from "react-router";

export default function ArticleDetails() {
  const { newsId } = useParams();
  return <div>Article : {newsId}</div>;
}
