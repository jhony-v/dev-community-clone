export interface Tag {
  name: string;
}

export interface User {
  id: string;
  fullName: string;
  username: string;
  avatar: string;
}

export interface FilterPost {
  id: string;
  name: string;
}

export interface Post {
  id: string;
  backgroundImage: string;
  title: string;
  tags: Tag[];
  datePublished: string;
  reactions: {
    totalHearts: number;
    totalComments: number;
  };
  totalMinutesToRead: string;
  saved: boolean;
  user: Partial<User>;
}
