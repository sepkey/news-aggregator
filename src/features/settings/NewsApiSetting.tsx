import { MultiSelect } from '@/components/ui/multiple-select';
import { newsApiCategories as options } from '@/lib/constants';
import useStore from '@/store';

export default function NewsApiSetting() {
  const { newsApiCategories, setNewsApiCategories } = useStore();
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">
        Which topics do you prefer in News API?
      </h3>
      <MultiSelect
        options={options}
        onValueChange={setNewsApiCategories}
        defaultValue={newsApiCategories}
        placeholder="Select guardian sections"
        variant="default"
        maxCount={20}
      />
    </div>
  );
}
