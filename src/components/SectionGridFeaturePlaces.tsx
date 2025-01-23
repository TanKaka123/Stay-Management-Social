'use client';
import React, { FC, ReactNode } from "react";
import { DEMO_STAY_LISTINGS } from "@/data/listings";
import { StayDataType } from "@/data/types";
import ButtonPrimary from "@/shared/ButtonPrimary";
import HeaderFilter from "./HeaderFilter";
import StayCard from "./StayCard";

// OTHER DEMO WILL PASS PROPS
const DEMO_DATA: StayDataType[] = DEMO_STAY_LISTINGS.filter((_, i) => i < 8);

//
export interface SectionGridFeaturePlacesProps {
  stayListings?: StayDataType[];
  gridClass?: string;
  heading?: ReactNode;
  subHeading?: ReactNode;
}

const SectionGridFeaturePlaces: FC<SectionGridFeaturePlacesProps> = ({
  stayListings = DEMO_DATA,
  gridClass = "",
  heading = "Featured places to stay",
  subHeading = "Popular places to stay that Chisfis recommends for you",
}) => {
  const [filterTag, setFilterTag] = React.useState<string | undefined>(undefined);
  const tabsFilter = stayListings
  .map(s => s.tags ?? [])
  .flat()
  .reduce((acc: string[], item) => {
    if (!acc.includes(item)) {
      acc.push(item);
    }
    return acc;
  }, []);
  return (
    <div className="nc-SectionGridFeaturePlaces relative">
      <HeaderFilter
        tabActive={filterTag}
        subHeading={subHeading}
        tabs={tabsFilter}
        onClickTab={(item: string) => setFilterTag(prevTag => item === prevTag ? undefined : item)}
        heading={heading}
      />
      <div
        className={`grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ${gridClass}`}
      >
        {stayListings.filter(s => !filterTag || s.tags?.includes(filterTag)).map((stay) => <StayCard key={stay.id} data={stay} />)}
      </div>
      <div className="flex mt-16 justify-center items-center">
        <ButtonPrimary loading>Show me more</ButtonPrimary>
      </div>
    </div> 
  );
};

export default SectionGridFeaturePlaces;
