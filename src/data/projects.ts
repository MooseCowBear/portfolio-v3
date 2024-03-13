export const projects = [
  {
    name: "Cyrano",
    bullets: ["A full-stack marketplace for writers"],
    stack: ["Ruby on Rails", "PostgreSQL", "Tailwind CSS"],
    repo: "https://github.com/MooseCowBear/cyrano",
    wip: true,
    images: {
      light: [
        {
          src: "/assets/cyrano/light/cyrano_1.jpg",
          title: "cyrano",
          description: "cyrano home page",
        },
      ],
    },
  },
  {
    name: "Chat App",
    bullets: [
      "A full-stack messaging app using WebSockets",
      "Features: Public and private chats, text and image messages, drag-and-drop file uploads, notifications of private messages, authentication",
    ],
    stack: [
      "React",
      "Ruby on Rails",
      "PostgreSQL",
      "Tailwind CSS",
      "esbuild",
      "Cloudinary",
    ],
    repo: "https://github.com/MooseCowBear/chat-app",
    live: "https://dawn-sound-3814.fly.dev/",
    wip: false,
    images: {
      light: [
        {
          src: "/assets/chat_app/light/chat_app_1.jpg",
          title: "welcome page",
          description: "welcome page light theme, desktop layout",
        },
        {
          src: "/assets/chat_app/light/chat_app_2.jpg",
          title: "chat room",
          description: "chat room light theme, desktop layout",
        },
        {
          src: "/assets/chat_app/light/chat_app_3.jpg",
          title: "users page",
          description: "users page light theme, desktop view",
        },
      ],
      dark: [
        {
          src: "/assets/chat_app/dark/chat_app_1.jpg",
          title: "welcome page",
          description: "welcome page dark theme, desktop layout",
        },
        {
          src: "/assets/chat_app/dark/chat_app_2.jpg",
          title: "chat room",
          description: "chat room dark theme, desktop layout",
        },
        {
          src: "/assets/chat_app/dark/chat_app_3.jpg",
          title: "users page",
          description: "users page dark theme, desktop view",
        },
      ],
    },
  },
  {
    name: "So Social",
    bullets: [
      "A full-stack social media app",
      "Features: OAuth login with Google, user profiles, posts, likes, nested comments, friend requests, notifications",
    ],
    stack: ["Ruby on Rails", "PostgreSQL", "CSS", "Cloudinary"],
    repo: "https://github.com/MooseCowBear/social",
    live: "https://so-social.fly.dev/",
    wip: false,
    images: {
      light: [
        {
          src: "/assets/so_social/light/so_social_1.jpg",
          title: "so social feed",
          description: "so social feed light theme, desktop layout",
        },
        {
          src: "/assets/so_social/light/so_social_2.jpg",
          title: "so social with menu",
          description: "so social with menu light theme, desktop layout",
        },
        {
          src: "/assets/so_social/light/so_social_3.jpg",
          title: "so social friend requests",
          description: "so social friend requests light theme, desktop layout",
        },
      ],
      dark: [
        {
          src: "/assets/so_social/dark/so_social_1.jpg",
          title: "so social feed",
          description: "so social feed dark theme, desktop layout",
        },
        {
          src: "/assets/so_social/dark/so_social_2.jpg",
          title: "so social with menu",
          description: "so social with menu dark theme, desktop layout",
        },
        {
          src: "/assets/so_social/dark/so_social_3.jpg",
          title: "so social friend requests",
          description: "so social friend requests dark theme, desktop layout",
        },
      ],
    },
  },
  {
    name: "Shoe Quiver",
    bullets: [
      "A full-stack CRUD app for tracking running shoe mileage",
      "Features: Stimulus JS controller to keep current shoes sorted by the date they were last run in to encourage rotation, run tracking and basic stats, an archive so that users never risk forgetting their favorite models",
    ],
    stack: ["Ruby on Rails", "PostgreSQL", "Tailwind CSS"],
    repo: "https://github.com/MooseCowBear/shoe-quiver",
    wip: false,
    images: {
      light: [
        {
          src: "/assets/shoe_quiver/light/shoe_quiver_1.jpg",
          title: "shoe quiver current rotation",
          description:
            "shoe quiver current rotation light theme, desktop layout",
        },
        {
          src: "/assets/shoe_quiver/light/shoe_quiver_2.jpg",
          title: "shoe quiver archive",
          description: "shoe quiver archive light theme, desktop layout",
        },
        {
          src: "/assets/shoe_quiver/light/shoe_quiver_3.jpg",
          title: "shoe quiver run calendar",
          description: "shoe quiver run calendar light theme, desktop layout",
        },
      ],
      dark: [
        {
          src: "/assets/shoe_quiver/dark/shoe_quiver_1.jpg",
          title: "shoe quiver current rotation",
          description:
            "shoe quiver current rotation dark theme, desktop layout",
        },
        {
          src: "/assets/shoe_quiver/dark/shoe_quiver_2.jpg",
          title: "shoe quiver archive",
          description: "shoe quiver archive dark theme, desktop layout",
        },
        {
          src: "/assets/shoe_quiver/dark/shoe_quiver_3.jpg",
          title: "shoe quiver run calendar",
          description: "shoe quiver run calendar dark theme, desktop layout",
        },
      ],
    },
  },
  {
    name: "Where's Waldo: Dutch Masters Edition",
    bullets: ["A photo-tagging game with 4 levels of increasing difficulty"],
    stack: ["React", "Ruby on Rails", "PostgreSQL", "CSS"],
    repo: "https://github.com/MooseCowBear/waldo_game",
    wip: false,
    images: {
      light: [
        {
          src: "/assets/waldo/light/waldo_1.jpg",
          title: "where's waldo: dutch master's edition",
          description: "start screen",
        },
        {
          src: "/assets/waldo/light/waldo_2.jpg",
          title: "where's waldo: dutch master's edition",
          description: "level 1",
        },
        {
          src: "/assets/waldo/light/waldo_3.jpg",
          title: "where's waldo: dutch master's edition",
          description: "level 2 with input form",
        },
        {
          src: "/assets/waldo/light/waldo_4.jpg",
          title: "where's waldo: dutch master's edition",
          description: "scores screen",
        },
      ],
    },
  },
];
