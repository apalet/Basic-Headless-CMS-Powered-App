// To format the date, we’ll use the date-fns library.
// install it: npm install date-fns
import { parseISO, format } from 'date-fns';
 
export default function Date({ dateString }) {
  // Skip rendering when the parent page has not passed a date yet
  // (e.g. while mapping WordPress JSON fields in lib/posts.js).
  if (!dateString) {
    return null;
  }

  const isoString = dateString.includes('T')
    ? dateString
    : dateString.replace(' ', 'T');
  const date = parseISO(isoString);
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
}
