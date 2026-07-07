export default function formatDate(date) {
  return new Date(date).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
}

export function calculatePercentage(part, whole) {
  return Math.round((part / whole) * 100);
}
