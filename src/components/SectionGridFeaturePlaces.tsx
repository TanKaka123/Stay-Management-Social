'use client';
import React, { FC, ReactNode, useState } from "react";
import { DEMO_STAY_LISTINGS } from "@/data/listings";
import { StayDataType } from "@/data/types";
import ButtonPrimary from "@/shared/ButtonPrimary";
import HeaderFilter from "./HeaderFilter";
import StayCard from "./StayCard";

// OTHER DEMO WILL PASS PROPS
const DEMO_DATA: StayDataType[] = DEMO_STAY_LISTINGS

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
  const [filterTag, setFilterTag] = useState<string | undefined>(undefined);
  const [visibleCount, setVisibleCount] = useState(8); // Initial count of visible items
  const allListings = stayListings || [];

  const tabsFilter = allListings
    .map((s) => s.tags ?? [])
    .flat()
    .reduce((acc: string[], item) => {
      if (!acc.includes(item)) {
        acc.push(item);
      }
      return acc;
    }, []);

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 8); // Load 8 more items
  };

  return (
    <div className="nc-SectionGridFeaturePlaces relative">
      <HeaderFilter
        tabActive={filterTag}
        subHeading={subHeading}
        tabs={tabsFilter}
        onClickTab={(item: string) =>
          setFilterTag((prevTag) => (item === prevTag ? undefined : item))
        }
        heading={heading}
      />
      <div
        className={`grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ${gridClass}`}
      >
        {allListings
          .filter((s) => !filterTag || s.tags?.includes(filterTag))
          .slice(0, visibleCount) // Show only the visible items
          .map((stay) => (
            <StayCard key={stay.id} data={stay} />
          ))}
      </div>
      {visibleCount < allListings.length && ( // Show button only if there are more items to load
        <div className="flex mt-16 justify-center items-center">
          <ButtonPrimary onClick={handleShowMore}>Show me more</ButtonPrimary>
        </div>
      )}
    </div>
  );
};

export default SectionGridFeaturePlaces;
