"use client";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Projects";
import { motion, useMotionValue, useTransform } from "framer-motion";

export default function ProjectsPage() {
    return (
    <main className="w-full">
      <Navbar />
      <Hero />
    </main>)
}