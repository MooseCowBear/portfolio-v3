export const projects = [
  {
    name: "Cyrano",
    bullets: ["A full-stack marketplace for writers"],
    stack: ["Ruby on Rails", "PostgreSQL", "Tailwind CSS"],
    repo: "https://github.com/MooseCowBear/cyrano",
    wip: true,
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
  },
  {
    name: "Chat App",
    bullets: [
      "A full-stack messaging app using WebSockets",
      "Features: Public and private chats, text and image messages, drag-and-drop file uploads, notifications of private messages, authentication",
    ],
    stack: [
      "React JS",
      "Ruby on Rails",
      "PostgreSQL",
      "Tailwind CSS",
      "Cloudinary",
    ],
    repo: "https://github.com/MooseCowBear/chat-app",
    live: "https://dawn-sound-3814.fly.dev/",
    wip: false,
  },
  {
    name: "Shoe Quiver",
    bullets: [
      "A full-stack CRUD app for tracking running shoe mileage",
      "Features: Stimulus JS controller to keep current shoes sorted by the date they were last run in to encourage rotation, run tracking and basic stats, an archive so that users never risk forgetting their favorite models",
    ],
    stack: ["Ruby on Rails", "PostgreSQL", "Tailwind CSS"],
    repo: "https://github.com/MooseCowBear/shoe-quiver",
    live: "https://shoe-quiver.fly.dev/",
    wip: false,
  },
  {
    name: "Plttr",
    bullets: [
      "Client-side web app that allows users to perform regression fits on inputted and calculated data",
      "Performs several fits using singular value decomposition",
      "Outputs regression coefficients, RMSE, and a plot with optional error bars",
    ],
    stack: ["JavaScript", "HTML", "CSS", "Plotly.js"],
    repo: "https://github.com/MooseCowBear/plttr",
    live: "https://moosecowbear.github.io/plttr/",
    wip: false,
  },
];

// hopefully making it easier to swap out
export const featured = ["So Social", "Chat App", "Shoe Quiver", "Plttr"];
