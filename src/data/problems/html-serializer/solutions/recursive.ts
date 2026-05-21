type HtmlNode = {
  tag: string
  children: Array<HtmlNode | string>
}

function serializeNode(node: HtmlNode | string, depth: number, lines: string[]): void {
  const indent = '\t'.repeat(depth);

  if (typeof node === 'string') {
    lines.push(`${indent}${node}`);
    return;
  }

  lines.push(`${indent}<${node.tag}>`);

  for (const child of node.children) {
    serializeNode(child, depth + 1, lines);
  }

  lines.push(`${indent}</${node.tag}>`);
}

export default function serializeHTML(tree: HtmlNode): string {
  const lines: string[] = [];
  serializeNode(tree, 0, lines);
  return lines.join('\n');
}
