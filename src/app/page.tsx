import Section from '@/components/Section';
import dynamic from 'next/dynamic';
const Hero = dynamic(() => import('../components/Hero'));


export default function Home() {
  return (
    <main>
      <Hero />
      <Section />
    </main>   
  );
}
