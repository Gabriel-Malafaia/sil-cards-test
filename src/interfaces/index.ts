interface INewsLearnMore {
  title: string;
  href: string;
}

export interface INews {
  title: string;
  about: string;
  learn_more: INewsLearnMore;
  infos: string[];
}
