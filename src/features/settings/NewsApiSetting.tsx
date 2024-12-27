import { MultiSelect } from "@/components/ui/multiple-select";
import useStore from "@/store";

const categories = [
  { value: "general", label: "General" },
  { value: "business", label: "Business" },
  { value: "entertainment", label: "Entertainment" },
  { value: "health", label: "Health" },
  { value: "science", label: "Science" },
  { value: "sports", label: "Sports" },
  { value: "technology", label: "Technology" },
];

export default function NewsApiSetting() {
  const { newsApiCategories, setNewsApiCategories } = useStore();
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">The News API Preferences</h3>
      <MultiSelect
        options={categories}
        onValueChange={setNewsApiCategories}
        defaultValue={newsApiCategories}
        placeholder="Select guardian sections"
        variant="default"
        maxCount={20}
      />
    </div>
  );
}
