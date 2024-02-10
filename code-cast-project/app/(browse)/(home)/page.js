import Button from "../_components/button/page";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Home() {
  return ( 
    <div>
      <div className="flex justify-between items-center">
        You are signed in!
        <div>
          <UserButton/>
        </div>
      </div>
      <div>
        <Button href="/categories/">Categories</Button>
      </div>
    </div> 
  );
}
