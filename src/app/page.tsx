import { AboutUs } from "@/components/AboutUs";
import { Ad } from "@/components/Ad";
import Faq from "@/components/Faq";
import { Hero } from "@/components/Hero";
import { HowitWorks } from "../components/HowitWorks";
import { Partner } from "../components/Partner";
import { Testimonial } from "@/components/Testimonial";



export default function Home() {
  return (
    <>
      <Hero/>
      <Partner/>
      <HowitWorks/>
      <AboutUs/>
      <Testimonial/>
      <Faq/>
      <Ad/>
    </>
  );
}
