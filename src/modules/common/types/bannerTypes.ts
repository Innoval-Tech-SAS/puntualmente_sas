export interface BannerTextProps {
  title: string;
  textContent: string;
  listText?: string;
  listItems?: string[];
}

export default interface BannerProps {
  content: BannerTextProps;
  imgSrc: string;
  isReverse: boolean;
}
