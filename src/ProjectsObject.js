import blogAppImage from "./assets/blog-app.png"
import ecommerceAppImage from "./assets/ecommece.png";
import animeAppImage from "./assets/anime-site.jpg"
import recipeAppImage from "./assets/recipe-app.jpg"
export const projects = [
  {
    id: 1,
    image: blogAppImage,
    title: "Blog App",
    description:
      "A full-featured, full-stack **React blog platform** with draft/publish support, live view counts, user profiles, likes system, TinyMCE integration, Redux state management, and dark mode support.",
    tags: ["React", "Appwrite", "TinyMce", "Redux","Tailwind"],
    githubLink: "https://github.com/sujan17148/blog-app",
    liveDemoLink: "https://appwriteblogspace.netlify.app/",
  },
  {
    id: 2,
    image: ecommerceAppImage,
    title: "Ecommerce App",
    description:
      "A modern, fully responsive e-commerce web application built using React, Clerk for authentication, Fakestore API for product data, and styled with Tailwind CSS It offers a clean shopping experience with filtering, a cart system, smooth navigation, and proper state handling.",
    tags: ["React", "Tailwind", "Clerk Auth", "Redux"],
    githubLink: "https://github.com/sujan17148/e-commerce-app",
    liveDemoLink: "https://shopcraft-store.netlify.app/",
  },
  {
    id: 3,
    image: animeAppImage,
    title: "Anime App",
    description:
      "A sleek anime search web app built with Vanilla JavaScript and styled using TailwindCSS. It fetches real-time anime data like titles, synopses, images, and ratings from the Jikan API. The app features a responsive UI and dynamic content rendering.",
    tags: ["JavaScript", "Tailwind", "Jikan API", "Responsive Design"],
    githubLink:
      "https://github.com/sujan17148/web-practice-projects/tree/main/anime-site",
    liveDemoLink: null,
  },
  {
    id: 4,
    image: recipeAppImage,
    title: "Recipe App",
    description:
  "A simple, user-friendly web application that allows users to browse, search, and manage delicious recipes.",
    tags: ["React", "Tailwind", "React Router", "Responsive Design"],
    githubLink:
      "https://github.com/sujan17148/recipe-app",
    liveDemoLink: "https://recipeapp17148.netlify.app/",
  },
];
