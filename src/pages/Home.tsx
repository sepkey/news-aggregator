import Feed from "@/features/feed";
import Filters from "@/features/filters";

export default function Home() {
  return (
    <div className="space-y-6">
      <p>Filter the news:</p>
      <Filters />
      <Feed />
    </div>
  );
}
