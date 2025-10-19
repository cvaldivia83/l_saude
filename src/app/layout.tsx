
import type { Metadata } from "next";
import StyledComponentsRegistry from "./registry";
import ThemeProviderWrapper from "@/components/ThemeProviderWrapper";
import { Nunito } from 'next/font/google';
import '../styles/layout.css'

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
          <ThemeProviderWrapper>
            {children}
          </ThemeProviderWrapper>
        </StyledComponentsRegistry> 
      </body>
    </html>
  );
}
