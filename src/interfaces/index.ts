interface INewsLearnMore {
  title: string;
  href?: string;
}

export interface INews {
  title: string;
  about: string;
  learn_more: INewsLearnMore;
  infos: string[];
}

// Api Response

interface INewsResponseArray {
  text: string;
  value: number;
}

export interface INewsResponse {
  code: string;
  info: number | INewsResponseArray[];
}
