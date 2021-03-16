import { Post, FilterPost } from "../entities";

export const postsData: Partial<Post>[] = [
  {
    id: "1",
    backgroundImage:
      "https://cdn.pixabay.com/photo/2015/04/20/13/17/work-731198_960_720.jpg",
    datePublished: "",
    reactions: {
      totalComments: 230,
      totalHearts: 618
    },
    saved: false,
    title: "How JavaScript really works?",
    totalMinutesToRead: "10",
    tags: [
      {
        name: "javascript"
      },
      {
        name: "programming"
      },
      {
        name: "webdev"
      },
      {
        name: "beginners"
      }
    ],
    user: {
      avatar:
        "https://cdn.pixabay.com/photo/2017/07/31/11/31/laptop-2557468__340.jpg",
      fullName: "Alex Devero"
    }
  },
  {
    id: "1",
    backgroundImage:
      "https://cdn.pixabay.com/photo/2015/12/04/14/05/code-1076536__340.jpg",
    datePublished: "",
    reactions: {
      totalComments: 6,
      totalHearts: 34
    },
    saved: false,
    title: "Microservices in 4 minutes - Introduction to Microservices",
    totalMinutesToRead: "7",
    tags: [
      {
        name: "webdev"
      },
      {
        name: "career"
      },
      {
        name: "beginners"
      }
    ],
    user: {
      avatar:
        "https://cdn.pixabay.com/photo/2017/07/31/11/31/laptop-2557468__340.jpg",
      fullName: "William Sayama"
    }
  },
  {
    id: "1",
    backgroundImage:
      "https://cdn.pixabay.com/photo/2017/07/31/11/31/laptop-2557468__340.jpg",
    datePublished: "",
    reactions: {
      totalComments: 5,
      totalHearts: 12
    },
    saved: false,
    title: "Why Gatsby needs GraphQL?",
    totalMinutesToRead: "2",
    tags: [
      {
        name: "react"
      },
      {
        name: "gatsby"
      },
      {
        name: "beginners"
      },
      {
        name: "graphql"
      }
    ],
    user: {
      avatar:
        "https://cdn.pixabay.com/photo/2018/03/19/10/30/experience-3239623__340.jpg",
      fullName: "Krishna Nigalye"
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
