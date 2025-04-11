import Button from "@/components/Button";

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        <h1 className="text-4xl font-bold">Welcome to Blog App!</h1>
        <p className="mt-4">Share your thoughts, ideas, and more!</p>
        <div className="mt-8 space-x-4">
          <Button href="/signup" text="Sign Up" />
          <Button href="/signin" text="Sign In" />
        </div>
      </div>

    </>
  );
}
