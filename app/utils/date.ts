import type { Blog } from "@/types";

// for displaying blogs in human readable format date 
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "medium",
    timeStyle: "short"
  }).format(date);
}

export const sortBlogsByDate = (blogs: Blog[]): Blog[] => {
  return blogs.sort((a, b) => {
    const dateA = new Date(a.createdAt);
    const dateB = new Date(b.createdAt);

    // Sort in descending order (newest first)
    return dateB.getTime() - dateA.getTime();
  });
};
