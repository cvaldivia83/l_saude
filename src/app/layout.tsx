
import type { Metadata } from "next";
import StyledComponentsRegistry from "./registry";
import { Nunito } from 'next/font/google';
import '../styles/layout.css'
import { GlobalLayoutWrapper, MainContent } from "../components/GlobalLayoutWrapper";
import Header from "../components/Header"
import Footer from "../components/Footer";
const nunito = Nunito({subsets: ['latin'], display: 'swap' });


export const metadata: Metadata = {
  title: "Lacrei Saúde",
  description: "Cuidado seguro para todxs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={nunito.className}>
      <body>
        <StyledComponentsRegistry>
          <GlobalLayoutWrapper>
            <Header />
              
                <MainContent>
                  {children}
                </MainContent>    
              
            <Footer /> 
          </GlobalLayoutWrapper>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
