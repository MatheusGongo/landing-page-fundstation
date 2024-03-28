import Image from "next/image";
import Head from "next/head";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import SectionTitle from "../components/sectionTitle";
import Benefits from "../components/benefits";
import SectionCards from "../components/sectionCards";
import { benefitOne, benefitTwo, cards } from "../components/data";

export default function Home() {
  return (
  <>
    <Navbar />
    <Hero />
    <SectionTitle
        pretitle="Por que escolher a Fundstation?"
        title="Especialmente projetado para o mercado de ações">
    </SectionTitle>
    <SectionCards data={cards}></SectionCards>
    <Benefits imgPos="left" data={benefitOne} />
    <Benefits imgPos="right" data={benefitTwo} />
  </>
  );
}
