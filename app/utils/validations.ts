import type { Blog, SignUpData } from "@/types";

export function validateUserData(data: SignUpData): Partial<SignUpData> {
  // set the initial error empty object 
  const errors: Partial<SignUpData> = {};

  if (!data.name.trim()) {
    errors.name = "Name is required";
  } else if (data.name.length < 3) {
    errors.name = "Name must be at least 3 characters";
  }

  if (!data.email.trim()) {
    errors.email = "Email is required";
  } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(data.email)) {
    errors.email = "Invalid email format";
  }

  if (!data.password) {
    errors.password = "Password is required";
  } else if (data.password.length < 6) {
    errors.password = "Password must be at least 6 characters";
  }

  return errors;
}

export function validateBlog(data: Blog): Partial<Blog> {

  const errors: Partial<Blog> = {};

  if (data.title.length < 10) errors.title = "Too short title, must be > 10 characters";

  if (data.description.length < 20) errors.description = "To short description, must be > 20 charaters";

  if (!data.image) errors.image = "Please , select one image";

  return errors;
}
