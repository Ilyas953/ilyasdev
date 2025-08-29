"use client"

import Image from "next/image";

import { HeroSection } from "./herosection";
import { Section2 } from "./Section2";
import { Section3 } from "./section3";
import { Section4 } from "./section4";


export default function Home() {
  return (
    <>
    <HeroSection />
    <Section2 />
    <Section3 />
    <Section4 />
    </>
  );
}

