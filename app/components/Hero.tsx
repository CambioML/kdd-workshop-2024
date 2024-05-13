'use client';

import Container from './Container';
import Image from 'next/image';
import { imgPrefix } from '@/app/hooks/useImgPrefix';

interface HeroProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  image?: string;
}

const Hero = ({ title, subtitle, center, image }: HeroProps) => {
  return (
    <div
      className={`w-full h-full overflow-hidden relative mix-blend-overlay ${!image && 'bg-gradient-to-r from-slate-900 to-slate-600'}`}
    >
      {image && (
        <>
          <Image
            src={imgPrefix + image}
            alt="Hero"
            fill
            style={{
              objectFit: 'cover',
              zIndex: -1,
              backgroundPosition: 'center',
              filter: 'blur(2px)',
              opacity: 0.5,
            }}
            quality={100}
          />
          <div className="absolute -z-10 bg-gradient-to-r from-cambio-blue from-10% via-white to-cambio-blue to-90% h-full w-full" />
        </>
      )}
      <Container styles="h-[30vh] min-h-[200px]">
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
