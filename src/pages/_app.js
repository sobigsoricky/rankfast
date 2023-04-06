import "@/styles/globals.css";
import { Poppins } from "next/font/google";
import localFont from 'next/font/local'
import Head from "next/head";
import { useRouter } from "next/router";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});


export default function App({ Component, pageProps }) {
  const router = useRouter()
  console.log(router);
  return (
    <>
    <Head>
    <link rel="canonical" href={`https://rankfast.co${router.asPath.slice(0, router.asPath.indexOf('?'))}`}></link>
<meta property="og:url" content={`https://rankfast.co${router.asPath}`}></meta>


    </Head>
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
