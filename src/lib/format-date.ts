export const formatDate = (
  date: Date,
  style?: 'yyyy-MM-dd' | 'YYYYMMDD' | 'LLL dd, y'
): string => {
  if (!date) return '';
  const year = new Date(date).getFullYear();
  const month = String(new Date(date).getMonth() + 1).padStart(2, '0');
  const day = String(new Date(date).getDate()).padStart(2, '0');

  if (style === 'yyyy-MM-dd') return `${year}-${month}-${day}`;
  if (style === 'YYYYMMDD') return `${year}${month}${day}`;
  if (style === 'LLL dd, y') {
    const options: Intl.DateTimeFormatOptions = {
      month: 'short',
      day: '2-digit',
      year: 'numeric',
    };
    return new Date(date).toLocaleDateString('en-US', options);
  }
  return new Date(date).toLocaleDateString();
};
