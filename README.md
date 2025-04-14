# Blog App with Signup, Login, and Blog Management in **Next.js**

🔗 Live Demo: [https://blog-app-one-hazel.vercel.app/](https://blog-app-one-hazel.vercel.app/)  
💻 GitHub Repo: [https://github.com/holasoymas/blog-app](https://github.com/holasoymas/blog-app)  
💻 GitLab Repo: [https://gitlab.com/mahesh2855115/blog-app](https://gitlab.com/mahesh2855115/blog-app)  

## Install Dependencies 
Run on the base folder of your app, where `package.json` is included

```bash
npm install
# or 
yarn install 
# or 
pnpm install 
# or
bun install
```

## Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the project.

## Folder structure

```bash
.
├── app
│   ├── blogs
│   │   ├── add       // add blog route 
│   │   └── [slug]    // display blog
│   │       └── edit  // edit route for blogs 
│   ├── login         // login route
│   ├── signup        // signup route
│   └── utils         // utilities functions(dateFormatter, validations funs, wrapper for localstorage) etc...
├── components        // components route 
├── data              // dummy 5 INITIALIZED blogs  
├── hooks             // custom hook for getting localstorage, AuthGuard wrapper
├── public     
│   └── images        // images for blogs 
└── types             // types (Blog, User) etc
```

## 🔧 Tech Stack:
- Next.js
- Tailwind CSS
- localstorage (for auth and data persistence)

