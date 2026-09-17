import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { motion } from "framer-motion";
export default function Home() {
  return (
    <main className="w-full">
      <Navbar />
      <Hero />
    </main>
  );
}

