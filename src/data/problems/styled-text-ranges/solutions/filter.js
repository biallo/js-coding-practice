export default function sliceStyledText(node, start, end) {
  if (start === end) {
    return { text: '', ranges: [] };
  }

  const text = node.text.slice(start, end);
  const ranges = node.ranges
    .filter((range) => range.start < end && range.end > start)
    .map((range) => ({
      start: Math.max(range.start, start) - start,
      end: Math.min(range.end, end) - start,
      style: range.style,
    }));

  return { text, ranges };
}
