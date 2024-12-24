import Settings from "@/features/settings";
import { Link } from "react-router";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between">
        <Link to="/">
          <div className="flex items-center">
            <Logo />
            <h2 className="text-2xl font-bold text-gray-900">
              News Aggregator
            </h2>
          </div>
        </Link>
        <Settings />
      </div>
    </header>
  );
}
