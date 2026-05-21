export default function serializeHTML(tree) {
  const lines = [];
  const stack = [{ type: 'node', node: tree, depth: 0 }];

  while (stack.length > 0) {
    const item = stack.pop();
    const indent = '\t'.repeat(item.depth);

    if (item.type === 'closing') {
      lines.push(`${indent}</${item.tag}>`);
      continue;
    }

    if (typeof item.node === 'string') {
      lines.push(`${indent}${item.node}`);
      continue;
    }

    lines.push(`${indent}<${item.node.tag}>`);
    stack.push({ type: 'closing', tag: item.node.tag, depth: item.depth });

    for (let i = item.node.children.length - 1; i >= 0; i -= 1) {
      stack.push({
        type: 'node',
        node: item.node.children[i],
        depth: item.depth + 1,
      });
    }
  }

  return lines.join('\n');
}
