import { MarkdownLabContainer } from "./lab";

interface Props {
  children: React.ReactElement[];
}
export function StudyGuide({ children }: Props) {
  return <MarkdownLabContainer>{children}</MarkdownLabContainer>;
}
