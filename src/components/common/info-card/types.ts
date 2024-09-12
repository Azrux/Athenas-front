export interface ImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface InfoCardProps {
  title: string;
  text?: string;
  images?: ImageProps[];
  list?: string[];
  buttons?: string[];
}
