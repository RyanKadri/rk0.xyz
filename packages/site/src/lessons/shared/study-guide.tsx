import { MarkdownLabContainer } from "./lab";

interface Props {
  children: any[];
}
export function StudyGuide({ children }: Props) {
  return <MarkdownLabContainer>{children}</MarkdownLabContainer>;
}
