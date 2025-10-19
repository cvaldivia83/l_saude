// import dynamic from 'next/dynamic';
// const Button = dynamic(() => import('../components/Button'));


import Avatar from "@/components/Avatar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main>
      <h1>Lacrei Saude Home</h1>
      <Avatar firstName="Carla" />
      <Footer />

    </main>   
  );
}
