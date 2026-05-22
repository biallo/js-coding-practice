Array.prototype.groupBy = function (fn) {
  return this.reduce((groups, item) => {
    const key = fn(item);

    if (!groups[key]) {
      groups[key] = [];
    }

    groups[key].push(item);
    return groups;
  }, {});
};
