import type { Metadata } from "next";
import "./globals.css";
import "./registry";
import StyledComponentsRegistry from "./registry";

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
    <html lang="pt-BR">
      <body>
       <StyledComponentsRegistry>{children}</StyledComponentsRegistry> 
      </body>
    </html>
  );
}
