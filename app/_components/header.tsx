"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { signIn, useSession } from "next-auth/react";
import { AlignJustify } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const Header = () => {
  const { data, status } = useSession();
  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-3 items-center">
        <Image src="/logo.png" alt="Logo" width={30} height={32} />
        <h1 className="text-xl font-semibold text-primary">Fullstack Trips</h1>
      </div>
      {status === "authenticated" ? (
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
