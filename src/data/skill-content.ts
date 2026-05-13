const files = import.meta.glob('../../.claude/skills/*/SKILL.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>;

export const skillContent: Record<string, string> = {};

for (const [path, content] of Object.entries(files)) {
  const match = path.match(/\.claude\/skills\/([^/]+)\/SKILL\.md$/);
  if (match && match[1]) skillContent[match[1]] = content;
}
