import { MultiSelect } from "@/components/ui/multiple-select";
import useStore from "@/store";
import useGuardianSections from "./useGuardianSections";

export default function GuardianSetting() {
  const { sections } = useGuardianSections();
  const { guardianSections, setGuardianSections } = useStore();
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">
        Which sections do you prefer in The Guardian?
      </h3>
      <MultiSelect
        options={sections || []}
        onValueChange={setGuardianSections}
        defaultValue={guardianSections}
        placeholder="Select guardian sections"
        variant="default"
        maxCount={20}
      />
    </div>
  );
}
