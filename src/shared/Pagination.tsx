import { CustomLink } from "@/data/types";
import React, { FC } from "react";
import twFocusClass from "@/utils/twFocusClass";
import Link from "next/link";
import { Route } from "@/routers/types";

export interface PaginationProps {
  className?: string;
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: FC<PaginationProps> = ({
  className = "",
  currentPage,
  totalItems,
  itemsPerPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handleClick = (page: number) => {
    onPageChange(page);
  };

  const renderItem = (page: number) => {
    const isActive = page === currentPage;
    return (
      <span
        key={page}
        onClick={() => !isActive && handleClick(page)}
        className={`inline-flex w-11 h-11 items-center justify-center rounded-full ${
          isActive
            ? "bg-primary-6000 text-white"
            : "bg-white hover:bg-neutral-100 border border-neutral-200 text-neutral-6000 dark:text-neutral-400 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:border-neutral-700"
        } ${twFocusClass()} cursor-pointer`}
      >
        {page}
      </span>
    );
  };

  const renderPaginationItems = () => {
    const items = [];
    for (let i = 1; i <= totalPages; i++) {
      items.push(renderItem(i));
    }
    return items;
  };

  return (
    <nav className={`nc-Pagination inline-flex space-x-1 text-base font-medium ${className} gap-4`}>
      {renderPaginationItems()}
    </nav>
  );
};

export default Pagination;
