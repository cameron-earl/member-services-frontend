export const UserInfo = {
  id: 1,
  username: "username",
  password: null,
  nickname: "User Name",
  avatar: null,
  email: "username@email.com",
  authToken: null,
  failedAttempts: 1,
  enabled: true,
  locked: false,
  createdOn: "2018-09-01T21:03:20.000+0000",
  lockedOn: null,
  lastLoginOn: null,
  roles: [
    {
      id: 1,
      username: "username",
      roleName: "ROLE_USER",
      authority: "ROLE_USER"
    },
    {
      id: 2,
      username: "username",
      roleName: "ROLE_ADMIN",
      authority: "ROLE_ADMIN"
    }
  ]
};

export const SiteNews = [
  {
    id: 2,
    title: "News Item #2",
    datestamp: "October 18, 2018",
    content:
      "#This is another news item.\n##With titles\n\n_italics_"
  },
  {
    id: 1,
    title: "News Item #1",
    datestamp: "October 13, 2018",
    content:
      'Death on the Nile. Great movie.\n* [Death on the Nile](https://www.imdb.com/title/tt0077413)\n'
  }
];

export const ForumData = [
  {
    id: 1,
    title: "Announcements",
    createdOn: "2018-09-08T20:25:09",
    createdBy: "marcb",
    sticky: true,
    rank: 0,
    description:
      "Announcements including new stuff, planned outages, etc.",
    updatedOn: null,
    updatedBy: null,
    posts: [
      {
        id: 1,
        replyId: null,
        forumId: 1,
        title: "First Post",
        createdOn: "2018-09-09T06:56:55",
        createdBy: "marcb",
        content: "This is the first post",
        updatedOn: null,
        updatedBy: null,
        replies: [
          {
            id: 3,
            replyId: 1,
            forumId: 1,
            title: "First Reply",
            createdOn: "2018-09-09T07:18:52",
            createdBy: "marcb",
            content: "Reply",
            updatedOn: null,
            updatedBy: null,
            replies: []
          }
        ]
      },
      {
        id: 2,
        replyId: null,
        forumId: 1,
        title: "Second Post",
        createdOn: "2018-09-09T07:18:04",
        createdBy: "marcb",
        content:
          "This is another post. Trying to check if the JPA logic actually works.",
        updatedOn: null,
        updatedBy: null,
        replies: []
      },
      {
        id: 3,
        replyId: 1,
        forumId: 1,
        title: "First Reply",
        createdOn: "2018-09-09T07:18:52",
        createdBy: "marcb",
        content: "Reply",
        updatedOn: null,
        updatedBy: null,
        replies: []
      }
    ]
  },
  {
    id: 2,
    title: "Requests",
    createdOn: "2018-09-27T09:41:00",
    createdBy: "marcb",
    sticky: true,
    rank: 1,
    description: "Feature requests",
    updatedOn: null,
    updatedBy: null,
    posts: []
  }
];

export const ArchiveData = [
  {
    id: 1,
    category: "TV",
    title: "Tin Man",
    year: 2007,
    poster: "tinman.png",
    seasons: [
      {
        id: 2,
        ordinal: 1,
        episodes: [
          {
            id: 3,
            episode: 1,
            title: "Into the Storm",
            height: 1080,
            width: 1920,
          },
          {
            id: 4,
            episode: 2,
            title: "Search for the Emerald",
            height: 1080,
            width: 1920,
          },
          {
            id: 5,
            episode: 3,
            title: "Tin Man",
            height: 1080,
            width: 1920,
          }
        ]
      }
    ]
  },
  {
    id: 555,
    category: "Movie",
    title: "Die Hard",
    year: 1988,
    poster: "diehard.png",
    details: {
      rating: "R",
      length: "2:12",
      height: 1080,
      width: 1920
    }
  }
]
