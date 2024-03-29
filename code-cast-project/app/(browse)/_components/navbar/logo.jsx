import Image from 'next/image';
import Link from 'next/link';

export const Logo = () => {
  return (
    <Link href="/">
    <div className="flex items-center">
      <Image
        src="/logo3.svg" 
        alt="CodeCast Logo"
        width={90} 
        height={90} 
      />
    </div>
    </Link>
  );
};