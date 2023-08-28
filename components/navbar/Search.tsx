"use client";
import { FC } from "react";
import { Search as SearchIcon } from "lucide-react";

interface SearchProps {}

const Search: FC<SearchProps> = ({}) => {
  return (
    <div className="border-2 border-primary w-full md:w-auto py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer">
      <div className="flex flex-row items-center justify-between ">
        <div className="text-sm font-semibold px-6">Anywhere</div>
        <div className="hidden sm:block text-sm font-semibold px-6 border-x-2 flex-1 text-center">
          Anyweek
        </div>
        <div className="text-sm pl-6 pr-2 text-muted-foreground flex flex-row items-center gap-3">
          <div className="hidden sm:block">Add Guests</div>
          <div className="p-2 bg-primary rounded-full text-primary-foreground">
            <SearchIcon size={20} className="cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
