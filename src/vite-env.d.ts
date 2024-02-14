/// <reference types="vite/client" />

type Article = {
  author: string;
  categories: string[];
  content: string;
  description: string[];
  enclosure: object; // is this going to be ok?
  guid: string;
  link: string;
  pubDate: string;
  thumbnail: string;
  title: string;
};