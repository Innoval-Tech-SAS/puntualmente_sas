interface Subparagraphs {
  title?: string;
  text: string | string[];
}

interface Paragraphs {
  title?: string;
  text: string | string[];
  subparagraphs?: Subparagraphs | Subparagraphs[];
}

export default interface PoliciesProps {
  title: string;
  paragraphs: Paragraphs | Paragraphs[];
  subparagraphs?: Subparagraphs | Subparagraphs[];
  secondParagraphs?: string;
}
