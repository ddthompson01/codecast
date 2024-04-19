import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Users } from "lucide-react"; // Import the Users icon which can represent 'Friends'

function FriendsButton() {
  return (
    <Link href="/friends" className="flex items-center justify-center">
      <Button variant="ghost">
        <Users className="w-6 h-6" />
      </Button>
    </Link>
  );
}

export default FriendsButton;
