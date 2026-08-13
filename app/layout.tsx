import type { Metadata } from "next";
import { Sora, Manrope } from "next/font/google";
import "./globals.css";
import EventbriteWidget from "@/components/EventbriteWidget";
import Script from "next/script";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["500", "700","800"],
});

export const metadata: Metadata = {
  title: "Granville | DJ Festival",
  description: "Granville | DJ Festival",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${manrope.variable} font-sora h-full antialiased`}
    >
      <body className=" min-h-full flex flex-col">
        {children}
        
        
        {/* <EventbriteWidget /> */}

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-4FCJPH3NP6"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-4FCJPH3NP6');
          `}
        </Script>

        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');

            fbq('init', '27685811997766260');
            fbq('track', 'PageView');
          `}
        </Script>

        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=27685811997766260&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>


      </body>
    </html>
  );
}
