import { cn } from '@/lib/utils';

import { Button } from '@/components/ui/button';
import { Medal } from 'lucide-react';
import Link from 'next/link';
import localFont from 'next/font/local';
import { Poppins } from 'next/font/google';

const headingFont = localFont({
  src: '../../public/fonts/font.woff2',
});

const textFont = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const MarketingPage = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <div
        className={cn(
          'flex items-center justify-center flex-col',
          headingFont.className
        )}
      >
        <div className="mb-4 flex items-center border shadow-sm p-4 bg-teal-100 text-teal-700 rounded-full uppercase">
          <Medal className="h-6 w-6 mr-2" />
          No 1 task management
        </div>
        <h1 className="text-3xl md:text-6xl text-center text-neutral-800 mb-6">
          PlanPilot Navigate Success
        </h1>
        <div className="text-3xl md:text-6xl bg-gradient-to-r from-cyan-600 to-sky-600 text-white px-4 p-2 rounded-md pb-4 w-fit">
          Chart Your Course with Ease
        </div>
      </div>
      <div
        className={cn(
          'text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto',
          textFont.className
        )}
      >
        A hub where ideas align, tasks streamline, and teams unite. Streamline
        project management and enhance collaboration effortlessly. Prioritize,
        track, and achieve with ease. Embrace a smarter way of working with
        PlanPilot, where every step leads to success.
      </div>
      <Button
        className="mt-6 "
        size="lg"
        asChild
      >
        <Link href="/sign-up">Get PlanPilot for Free!</Link>
      </Button>
    </div>
  );
};

export default MarketingPage;