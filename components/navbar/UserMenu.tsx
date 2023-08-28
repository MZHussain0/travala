"use client";
import { FC, useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { MenuIcon, User2Icon } from "lucide-react";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandSeparator,
} from "../ui/command";

interface UserMenuProps {}

const UserMenu: FC<UserMenuProps> = ({}) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          className="hidden sm:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 tranisition cursor-pointer"
          onClick={() => {}}>
          Rent your property
        </div>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="default"
              size="lg"
              role="combobox"
              aria-expanded={open}
              aria-label="User menu"
              className="rounded-full p-6 flex items-center justify-center">
              <MenuIcon className="mr-2" size={30} />
              <div className="hidden sm:block">
                <User2Icon size={30} />
              </div>
            </Button>
          </PopoverTrigger>

          <PopoverContent className="w-[200px] rounded-xl">
            <Command className="">
              <CommandGroup className="text-left">
                <CommandItem
                  className="rounded-lg hover:bg-primary text-xl font-semibold p-4"
                  onSelect={() => {}}>
                  Login
                </CommandItem>
                <CommandItem
                  className="rounded-lg hover:bg-primary text-xl font-semibold p-4"
                  onSelect={() => {}}>
                  SignUp
                </CommandItem>
              </CommandGroup>
            </Command>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default UserMenu;
