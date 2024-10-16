import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Shared/Navbar";
import Footer from "@/Components/Shared/Footer";
import AuthProvider from "./Services/AuthProvider"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Car Doctor ",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="carDoctorTheme">
      
      <body className={inter.className}>
      <AuthProvider>
        <Navbar></Navbar>
        <div className="bg-base-100"> {children}</div>
        <Footer></Footer>
        </AuthProvider>
        </body>
     
    </html>
  );
}
