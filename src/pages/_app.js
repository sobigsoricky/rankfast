import "@/styles/globals.css";
import { Poppins } from "next/font/google";
import localFont from 'next/font/local'

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});


export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${poppins.style.fontFamily};
          overflow-x: hidden;
        }
        body {
          font-family: ${poppins.style.fontFamily};
          overflow-x: hidden;
        }
        font-impact{
          font-family: 'Impact'
        }
       
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
