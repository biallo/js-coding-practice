export default function rateLimit(timestamps, maxAllowed, windowLen) {
  const accepted = [];
  const result = [];
  let left = 0;

  for (const timestamp of timestamps) {
    while (left < accepted.length && timestamp - accepted[left] >= windowLen) {
      left += 1;
    }

    const activeAcceptedCount = accepted.length - left;

    if (activeAcceptedCount < maxAllowed) {
      accepted.push(timestamp);
      result.push(true);
    } else {
      // Rejected tasks are not appended because they do not consume capacity.
      result.push(false);
    }
  }

  return result;
}
