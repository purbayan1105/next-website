import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Roboto } from "next/font/google";

const roboto_init = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "500"],
  variable: "--font-roboto",
});
export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={roboto_init.variable}>
      <Component {...pageProps} />
    </main>
  );
}
