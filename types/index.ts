export interface SignUpData {
  name: string,
  email: string,
  password: string,
}

export type LoginData = Omit<SignUpData, "name">

// the generic btn type 
export interface BaseButtonProps {
  href: string,
  text: string,
}

// for buttons like submitting form like login, signup etc
export interface AuthBtn { text: string }

export interface Blog {
  id: string,
  title: string,
  description: string,
  image: string,
  createdAt: Date,
}

export interface AuthGuardProps {
  children: React.ReactNode;
  redirectIfAuthenticated?: boolean;
  redirectTo?: string;
}
