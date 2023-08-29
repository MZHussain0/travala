"use client";
import { FC, useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { MenuIcon, User2Icon } from "lucide-react";
import { Command, CommandGroup, CommandItem } from "../ui/command";
import { SignOutButton, useAuth } from "@clerk/nextjs";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

interface UserMenuProps {}

const UserMenu: FC<UserMenuProps> = ({}) => {
  const { isSignedIn } = useAuth();
  console.log("🚀 ~ isSignedIn:", isSignedIn);
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          className="hidden sm:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-primary tranisition cursor-pointer"
          onClick={() => {}}>
          Rent your property
        </div>
        <Popover>
          <PopoverTrigger asChild>
            {isSignedIn ? (
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
            ) : (
              <Link href={"/sign-in"}>
                <Button
                  variant={"default"}
                  size={"lg"}
                  className="rounded-xl text-xl font-semibold">
                  Login
                </Button>
              </Link>
            )}
          </PopoverTrigger>

          {isSignedIn && (
            <PopoverContent className="w-[200px] rounded-xl">
              <Command className="">
                <CommandGroup className="text-left">
                  <Link href={"/sign-in"}>
                    <CommandItem
                      className="rounded-lg hover:bg-primary text-xl font-semibold p-4"
                      onSelect={() => {}}>
                      Login
                    </CommandItem>
                  </Link>
                  <Link href={"/sign-up"}>
                    <CommandItem
                      className="rounded-lg hover:bg-primary text-xl font-semibold p-4"
                      onSelect={() => {}}>
                      SignUp
                    </CommandItem>
                  </Link>
                  <SignOutButton>SignOut</SignOutButton>
                </CommandGroup>
              </Command>
            </PopoverContent>
          )}
        </Popover>
      </div>
    </div>
  );
};

export default UserMenu;
