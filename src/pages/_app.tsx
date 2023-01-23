import "@/styles/globals.css";
import { Poppins } from "@next/font/google";

import type { AppProps } from "next/app";
import Head from "next/head";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

interface CustomAppProps extends Omit<AppProps, "Component"> {
  Component: AppProps["Component"] & {
    seo: { title: string; description: string };
  };
}

export default function App({ Component, pageProps }: CustomAppProps) {
  const seo_title = Component.seo?.title
    ? `${Component.seo.title} | interviewME`
    : "interviewME";
  const seo_description = Component.seo?.description ?? "";
  return (
    <main className={`${poppins.variable} font-sans`}>
      <Head>
        <title>{seo_title}</title>
        <meta name="description" content={seo_description} />
      </Head>
      <Component {...pageProps} />
    </main>
  );
}
