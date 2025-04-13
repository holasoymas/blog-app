"use client";

import React, { useState } from "react";
import * as Storage from "@/app/utils/storage"
import { useRouter } from "next/navigation";
import { LoginBtn } from "@/components/Button";
import Link from "next/link";
import { SignUpData } from "@/types";
import { validateUserData } from "../utils/validations";

export default function Signup() {

  const router = useRouter();

  // for collecting user input data 
  const [formData, setFormData] = useState<SignUpData>({
    name: "",
    email: "",
    password: ""
  });

  // for rendering user errors 
  const [formErrors, setFormErrors] = useState<Partial<SignUpData>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));

    // clear the errors on again user input 
    setFormErrors(prev => ({
      ...prev,
      [name]: ""
    }));
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const errors = validateUserData(formData);
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // console.log(formData);
    Storage.setItem("authUser", formData);

    router.push("/login");
  }

  return (
    <>
      <form className="forms" onSubmit={handleSubmit}>
        <h1 className="form-title">Sign Up</h1>

        <div className="field-container">
          <div>
            <label htmlFor="name" className="label-name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="input-field"
              placeholder="Enter your name"
              required
            />
            {formErrors.name && <p className="field-error">{formErrors.name}</p>}
          </div>

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
            {formErrors.email && <p className="field-error">{formErrors.email}</p>}
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
            {formErrors.password && <p className="field-error">{formErrors.password}</p>}
          </div>

          <h3 className="text-center"> Already have an account ? <Link className="text-blue-400 underline" href="/login">Login</Link></h3>

          <LoginBtn text="Sign Up" />
        </div>
      </form>
    </>
  );
}
