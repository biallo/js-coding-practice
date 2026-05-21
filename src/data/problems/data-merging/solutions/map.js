export default function mergeData(sessions) {
  const sessionsByUser = new Map();

  for (const session of sessions) {
    const existingSession = sessionsByUser.get(session.user);

    if (existingSession === undefined) {
      sessionsByUser.set(session.user, {
        user: session.user,
        duration: session.duration,
        equipment: new Set(session.equipment),
      });
      continue;
    }

    existingSession.duration += session.duration;

    for (const item of session.equipment) {
      existingSession.equipment.add(item);
    }
  }

  return Array.from(sessionsByUser.values(), (session) => ({
    user: session.user,
    duration: session.duration,
    equipment: Array.from(session.equipment).sort(),
  }));
}
