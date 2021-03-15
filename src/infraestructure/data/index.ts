import { Post, FilterPost } from "../entities";

export const postsData: Partial<Post>[] = [
  {
    id: "1",
    backgroundImage: "",
    datePublished: "",
    reactions: {
      totalComments: 20,
      totalHearts: 154
    },
    saved: false,
    title: "",
    totalMinutesToRead: "23",
    tags: [],
    user: {
      avatar: "",
      fullName: ""
    }
  },
  {
    id: "1",
    backgroundImage: "",
    datePublished: "",
    reactions: {
      totalComments: 20,
      totalHearts: 154
    },
    saved: false,
    title: "",
    totalMinutesToRead: "23",
    tags: [],
    user: {
      avatar: "",
      fullName: ""
    }
  },
  {
    id: "1",
    backgroundImage: "",
    datePublished: "",
    reactions: {
      totalComments: 20,
      totalHearts: 154
    },
    saved: false,
    title: "",
    totalMinutesToRead: "23",
    tags: [],
    user: {
      avatar: "",
      fullName: ""
    }
  }
];

export const filterPostsData: FilterPost[] = [
  {
    id: "feeds",
    name: "Feed"
  },
  {
    id: "week",
    name: "Week"
  },
  {
    id: "month",
    name: "Month"
  },
  {
    id: "year",
    name: "Year"
  },
  {
    id: "infinity",
    name: "Infinity"
  },
  {
    id: "latest",
    name: "Latest"
  }
];
