'use client';

import Container from './Container';

interface HeroProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  image?: string;
}

const Hero = ({ title, subtitle, center, image }: HeroProps) => {
  return (
    <div
      className={`pt-20 pb-10 w-full h-full overflow-hidden relative mix-blend-overlay ${!image && 'bg-gradient-to-r from-slate-900 to-slate-600'}`}
    >
      <Container styles="h-[25vh] min-h-[150px]">
        <div className={`flex flex-col justify-center ${center && 'items-center'} h-full w-full`}>
          <div className="max-w-[900px]">
            <h1 className={`text-6xl font-bold text-neutral-100 pt-4 pb-5 ${center && 'text-center'}`}>{title}</h1>
            {subtitle && <div className={`mt-3 text-3xl text-neutral-100 ${center && 'text-center'}`}>{subtitle}</div>}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
