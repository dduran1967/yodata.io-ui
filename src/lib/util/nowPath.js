export default function nowPath(d: Date = new Date): string {
  return `${d.getFullYear()}/${d.getMonth()}/${d.getDay()}`;
}