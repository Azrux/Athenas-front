export interface BigInfoCardProps {
  title: string;
  images: {
    src: string;
    alt: string;
    width: number;
    height: number;
    className?: string;
  }[];
  listItems?: string[];
  buttons?: string[];
}
