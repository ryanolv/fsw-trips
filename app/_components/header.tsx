"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { signIn, signOut, useSession } from "next-auth/react";
import { AlignJustify, LogOut, ScrollText } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Separator } from "./ui/separator";

const Header = () => {
  const { data, status } = useSession();
  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-3 items-center">
        <Image src="/logo.png" alt="Logo" width={30} height={32} />
        <h1 className="text-xl font-semibold text-primary">Fullstack Trips</h1>
      </div>
      {status === "authenticated" ? (
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="border rounded-full border-solid p-2"
            >
              <AlignJustify size={24} className="text-muted" />
              <Avatar className="w-[26] h-[26]">
                <AvatarImage src={data?.user?.image as string} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </Button>
          </SheetTrigger>
          <SheetContent className="w-[85%]">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <div className="flex items-center py-6 gap-2">
              <Avatar className="w-11 h-11">
                <AvatarImage src={data?.user?.image as string} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div>
                <h2 className="text-sm font-semibold">
                  {data?.user?.name as string}
                </h2>
                <p className="text-muted text-xs">
                  {data?.user?.email as string}
                </p>
              </div>
            </div>
            <Separator />

            <div className="flex flex-col py-6">
              <Button
                variant="ghost"
                className="text-sm font-normal flex  justify-start"
              >
                <ScrollText size={16} />
                Minhas reservas
              </Button>
              <Button
                variant="ghost"
                className="text-sm font-normal text-destructive/80 flex justify-start"
                onClick={() => signOut()}
              >
                <LogOut size={16} />
                Sair da conta
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      ) : (
        <Button
          variant="ghost"
          className="text-primary hover:text-primary font-semibold"
          onClick={() => signIn()}
        >
          Login
        </Button>
      )}
    </div>
  );
};

export default Header;
