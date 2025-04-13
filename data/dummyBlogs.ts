import { Blog } from "@/types";

export const dummyBlogs: Blog[] = [
  {
    id: "blog1",
    title: "Understanding JavaScript Closures",
    description:
      "Closures are one of the most powerful and often misunderstood features in JavaScript. In this blog post, we'll explore what closures are, how they work under the hood, and why they are so important in modern JavaScript development. We'll also walk through real-world examples, such as creating private variables, managing state in functional programming, and implementing memoization. By the end of this article, you'll have a solid understanding of closures and be able to use them confidently in your projects.",
    image: "/images/image1.jpg",
    createdAt: new Date("2024-08-10T10:00:00"),
  },
  {
    id: "blog2",
    title: "CSS Grid vs Flexbox: When to Use What",
    description:
      "CSS Grid and Flexbox are two of the most popular layout models in modern web development. While both are incredibly powerful, they serve different purposes and excel in different scenarios. In this blog post, we'll break down the strengths and weaknesses of each model, providing clear guidelines on when to use CSS Grid and when to use Flexbox. We'll also explore practical examples, such as building responsive layouts, aligning content, and creating complex grid systems. By the end of this article, you'll have a comprehensive understanding of these tools and be able to choose the right one for your next project.",
    image: "/images/image2.jpg",
    createdAt: new Date("2024-08-11T14:30:00"),
  },
  {
    id: "blog3",
    title: "Mastering Async/Await in React",
    description:
      "Asynchronous operations are a fundamental part of modern web applications, especially in React. In this blog post, we'll dive deep into the async/await syntax and explore how it can simplify working with asynchronous code in React. We'll cover essential topics such as fetching data from APIs, handling errors gracefully, and managing loading states. Additionally, we'll discuss best practices for using async/await with React hooks like `useEffect` and `useState`. By the end of this article, you'll have a solid grasp of async/await and be able to write clean, efficient, and maintainable asynchronous code in your React applications.",
    image: "/images/image3.jpg",
    createdAt: new Date("2024-08-12T09:45:00"),
  },
  {
    id: "blog4",
    title: "The Rise of Artificial Intelligence in Everyday Life",
    description:
      "Artificial Intelligence (AI) is no longer just a futuristic concept—it's already transforming the way we live, work, and interact with technology. From voice assistants like Siri and Alexa to recommendation algorithms on Netflix and Amazon, AI has become an integral part of our daily lives. In this blog post, we'll explore the key areas where AI is making an impact, including healthcare, transportation, and entertainment. We'll also discuss the ethical considerations surrounding AI and what the future might hold for this rapidly evolving field. Whether you're a tech enthusiast or simply curious about AI, this article will provide valuable insights into its growing influence.",
    image: "/images/image4.jpg",
    createdAt: new Date("2024-08-13T12:15:00"),
  },
  {
    id: "blog5",
    title: "Exploring the World of Sustainable Architecture",
    description:
      "As climate change becomes an increasingly pressing issue, sustainable architecture is gaining traction as a solution to reduce the environmental impact of buildings. This blog post delves into the principles of sustainable architecture, such as energy efficiency, the use of renewable materials, and innovative design techniques. We'll also highlight some iconic examples of sustainable buildings around the world and discuss how architects are incorporating green technologies into their designs. Whether you're an architecture enthusiast or someone interested in sustainability, this article will inspire you to think differently about the spaces we inhabit and how they can contribute to a greener future.",
    image: "/images/image5.jpg",
    createdAt: new Date("2024-08-14T08:00:00"),
  },
];
