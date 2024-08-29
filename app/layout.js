import { Montserrat, Montserrat_Alternates } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";


const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "---font-montserrat",
});

const montserrat_alt = Montserrat_Alternates({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "---font-montserrat-alternates",
});


export const metadata = {
    title: "Nidarsh N",
    description: "Portfolio",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${montserrat_alt.variable} ${montserrat.variable}`}>
              <Header/>
              <StairTransition/>
              <PageTransition>
                {children}
              </PageTransition>
            </body>
        </html>
    );
}
