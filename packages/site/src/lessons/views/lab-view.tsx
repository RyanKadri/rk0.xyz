import Head from "next/head";
import { MarkdownLabContainer } from "../../lessons/shared/lab";

interface Props {
  children: any[];
  description: string;
  title?: string;
}
export function LabLayout({ children, title, description }: Props) {
  // const derivedTitle =
  //   title ?? children.find(child => child.props.originalType === "h1")?.props?.children ?? "Ryan Kadri";

  return (
    <MarkdownLabContainer>
      <Head>
        <title>{title ?? "Lab"}</title>
        {description && <meta name="description" key="description" content={description} />}
      </Head>
      {children}
    </MarkdownLabContainer>
  );
}
