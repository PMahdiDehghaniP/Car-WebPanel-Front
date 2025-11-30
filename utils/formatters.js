import { isThisWeek, isThisYear, isToday, isYesterday, format } from 'date-fns';

export const formatNumber = (num) =>
  num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

export const formatInstagramDate = (dateString) => {
  const date = new Date(dateString);
  const now = new Date();

  if (isToday(date)) {
    const diffInMinutes = Math.floor((now - date) / (1000 * 60));
    if (diffInMinutes < 1) return 'Just now';
    if (diffInMinutes < 60) return `${diffInMinutes}m`;

    const diffInHours = Math.floor(diffInMinutes / 60);
    return `${diffInHours}hours ago`;
  }

  if (isYesterday(date)) {
    return 'Yesterday';
  }

  if (isThisWeek(date)) {
    return format(date, 'EEEE');
  }

  if (isThisYear(date)) {
    return format(date, 'MMM d');
  }
  return format(date, 'MMM d, yyyy');
};
