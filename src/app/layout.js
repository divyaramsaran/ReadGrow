import "@/assets/css/icofont.min.css";
import "@/assets/css/popup.css";
import "@/assets/css/video-modal.css";
import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-cards";
import "./globals.css";
import FixedShadow from "@/components/shared/others/FixedShadow";
import PreloaderPrimary from "@/components/shared/others/PreloaderPrimary";

export const metadata = {
  title: "ReadGro - Learn & Earn Education Platform",
  description: "Master in-demand tech and business skills while unlocking real-world earning opportunities with ReadGro.",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Hind:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </head>

      <body
        className="relative leading-[1.8] bg-bodyBg dark:bg-bodyBg-dark z-0 font-sans antialiased text-slate-800 dark:text-slate-100"
      >
        <PreloaderPrimary />
        {children}

        <div>
          <FixedShadow />
          <FixedShadow align={"right"} />
        </div>
      </body>
    </html>
  );
}
