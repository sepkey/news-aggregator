import { MultiSelect } from '@/components/ui/multiple-select';
import { nyTimesSections as options } from '@/lib/constants';
import useStore from '@/store';

export default function NyTimesSetting() {
  const { nyTimesSections, setNyTimesSections } = useStore();
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">
        Which topics do you prefer in New York times?
      </h3>
      <MultiSelect
        options={options}
        onValueChange={setNyTimesSections}
        defaultValue={nyTimesSections}
        placeholder="Select guardian sections"
        variant="default"
        maxCount={20}
      />
    </div>
  );
}
