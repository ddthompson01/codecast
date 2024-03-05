import { Poppins } from "next/font/google";
import Image from "next/image";

import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const Logo = () => {
  return (
    <><div className="flex flex-col items-center gap-y-4">

          <Image
              src="logo3.svg"
              alt="CodeCast"
              height="300"
              width="300" />
      </div><div className={cn(
          "flex flex-col items-center",
          font.className
      )}>



          </div></>
  );
};