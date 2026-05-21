export default function rateLimit(timestamps, maxAllowed, windowLen) {
  const acceptedInWindow = [];
  const result = [];

  for (const timestamp of timestamps) {
    while (
      acceptedInWindow.length > 0 &&
      timestamp - acceptedInWindow[0] >= windowLen
    ) {
      acceptedInWindow.shift();
    }

    if (acceptedInWindow.length < maxAllowed) {
      // Only accepted tasks consume slots in the active window.
      acceptedInWindow.push(timestamp);
      result.push(true);
    } else {
      result.push(false);
    }
  }

  return result;
}
