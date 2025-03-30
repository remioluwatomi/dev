import "@/styles/globals.css";
import "@/styles/skills.css";
import isGithubPage from "@/utils/isGIthubPage";
import type { AppProps } from "next/app";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    document.documentElement.style.setProperty("--bg-url", `url(${isGithubPage() ? "/dev" : ""}/grain-bg.png)`)
  }, [])
  return <Component {...pageProps} />;
}
