import { getTheGuardianSections } from '@/api/guardian/api';
import { useQuery } from '@tanstack/react-query';

export default function useGuardianSections() {
  const {
    data: sections,
    error,
    isLoading: isLoadingSections,
  } = useQuery({
    queryKey: ['GUARDIAN_SECTIONS'],
    queryFn: getTheGuardianSections,
  });
  return { sections, error, isLoadingSections };
}
