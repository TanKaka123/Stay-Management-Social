import React from "react";
import BgGlassmorphism from "@/components/BgGlassmorphism";
import SectionGridFeaturePlaces from "@/components/SectionGridFeaturePlaces";
import HeroSearchForm from "./(client-components)/(HeroSearchForm)/HeroSearchForm";

function PageHome() {
  return (
    <main className="nc-PageHome relative overflow-hidden pt-6">
      <BgGlassmorphism />
      <div className={`container relative space-y-24 mb-24 lg:space-y-28 lg:mb-28 nc-SectionHero flex flex-col-reverse lg:flex-col`}>
        <HeroSearchForm />
        <SectionGridFeaturePlaces/>
      </div>
    </main>
  );
}

export default PageHome;
