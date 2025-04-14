"use client";

import { redirect } from "next/navigation";
import { useState } from "react";
import * as Storage from "@/app/utils/storage";
import { LoginBtn } from "@/components/Button";
import Link from "next/link";
import { LoginData, SignUpData } from "@/types";
import { dummyBlogs } from "@/data/dummyBlogs";
import { useUserAuth } from "@/hooks/userAuth";
import AuthGuard from "@/hooks/AuthGuard";

const LogIn = () => {

  // if the user is already logged in redirect to /blogs page
  // const isLoggedIn = Storage.getItem<boolean>("isLoggedIn");
  // if (isLoggedIn) redirect("/blogs");
  const { isLoggedIn } = useUserAuth();

  if (isLoggedIn) redirect("/blogs");

  const [formData, setFormData] = useState<LoginData>({
    email: "",
    password: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));

    // clear the error on again user typing 
    setError("");
  }

  //for showing error 
  const [error, setError] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const authUser = Storage.getItem<SignUpData>("authUser");
    // console.log(authUser);

    // if there is no authUser, return invalid Credentials as the user doesnt exist yet
    if (!authUser) return setError("Invalid Credentials");

    const { email, password } = authUser;

    // check the authuser data with the user input data 
    if (email != formData.email || password != formData.password) {
      setError("Invalid Credentials");
      return;
    }

    //NOTE:  if credentials match ,set the isLoggedIn flag and redirect to blogs page
    Storage.setItem("isLoggedIn", true);

    // store the initialized blogs as soo as log in  
    Storage.setItem("blogs", dummyBlogs);
    redirect("/blogs");
  }

  return (
    // wrap it with auth guard as when authenticated user visit login page redirect to blogs page 
    <AuthGuard redirectIfAuthenticated={true}>
      <>
        <form className="forms" onSubmit={handleSubmit}>
          <h1 className="form-title">Log In</h1>

          <div className="field-container">
            {error && <p className="text-red-500">{error}</p>}
            <div>
              <label htmlFor="email" className="label-name">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="input-field"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="label-name">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="input-field"
                placeholder="Enter your password"
                required
              />
            </div>
            <h3 className="text-center"> Don't have an account ? <Link className="text-blue-400 underline" href="/signup">Sign up</Link></h3>
            <LoginBtn text="Log In" />
          </div>
        </form>
      </></AuthGuard>
  )
};

export default LogIn;
