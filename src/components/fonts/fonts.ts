import { Roboto_Mono, Figtree } from "next/font/google";

export const figtree = Figtree({
  variable: "--font-secondary",
  subsets: ["latin"],
  display: "swap",
}); 

export const code = Roboto_Mono({
  variable: "--font-code",
  subsets: ["latin"],
  display: "swap",
});