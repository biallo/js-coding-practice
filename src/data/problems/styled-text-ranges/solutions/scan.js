export default function sliceStyledText(node, start, end) {
  if (start === end) {
    return { text: '', ranges: [] };
  }

  const ranges = [];

  for (const range of node.ranges) {
    if (range.end <= start) {
      continue;
    }

    if (range.start >= end) {
      break;
    }

    ranges.push({
      start: Math.max(range.start, start) - start,
      end: Math.min(range.end, end) - start,
      style: range.style,
    });
  }

  return {
    text: node.text.slice(start, end),
    ranges,
  };
}
