import Script from "next/script";
import { Inter } from "next/font/google";
import SchemaOrg from "@/components/layout/SchemaOrg";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import Footer from "@/components/layout/Footer";
import CookieBanner from "@/components/layout/CookieBanner";
import { Navbar } from "@/components/navbar/Navbar";

const GTM_ID = "GTM-KF823TM7";

const inter = Inter({ subsets: ["latin"] });

/**
 * Estructura compartida para los root layouts por locale.
 * Permite tener <html lang="es|en|fr"> distinto sin duplicar la configuración.
 */
export default function RootShell({
  lang,
  children,
}: {
  lang: "es" | "en" | "fr" | "ca";
  children: React.ReactNode;
}) {
  return (
    <html lang={lang}>
      <head>
        <SchemaOrg />
      </head>
      <body className={`${inter.className} antialiased bg-white text-gray-900`}>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height={0}
            width={0}
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
        <Script id="consent-default" strategy="beforeInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;
gtag('consent', 'default', {
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  analytics_storage: 'denied',
  functionality_storage: 'granted',
  personalization_storage: 'denied',
  security_storage: 'granted',
  wait_for_update: 500
});`}
        </Script>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
        <Navbar lang={lang} />
        <div className="pt-20">{children}</div>

        <Footer lang={lang} />
        <CookieBanner lang={lang} />
        <WhatsAppButton />
      </body>
    </html>
  );
}
