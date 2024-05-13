'use client';

import { useWindowScroll } from '@/app/hooks/useWindowScroll';

const Navbar = () => {
  const isScrolled = useWindowScroll(50);

  return (
    <div
      className={`fixed w-full z-50 flex flex-col justify-center ${isScrolled ? 'bg-slate-900 shadow-sm h-[75px]' : 'bg-transparent h-[100px]'} transition-all duration-300 ease-in-out`}
    >
      <div
        className="
        py-4
        "
      >
        <div
          className={`
                mx-auto
                xl:px-20
                md:px-10
                sm:px-4
                px-4
                h-full
                `}
        >
          <div
            className="
          flex
          flex-row
          items-center
          justify-between
          gap-3
          md: gap-0
          text-xl
          text-neutral-100
          "
          >
            KDD Workshop 2024
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
