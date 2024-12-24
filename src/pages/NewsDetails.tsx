import { useParams } from "react-router";

export default function NewsDetails() {
  const { newsId } = useParams();
  return <div>NewsDetails : {newsId}</div>;
}
