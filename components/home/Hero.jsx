import { Button } from '../Button';
import { Features } from './Features';
import Image from 'next/image';
import hero from '../../public/hero.png'

export const Hero = () => {
  return (
    <div className="">
      <div className="grid grid-cols-1 gap-6 mt-12 md:grid-cols-2 lg:grid-cols-[1fr_max-content]">
        <div className="flex flex-col items-center text-center md:text-left md:items-start">
          <h1 className="text-4xl font-semibold tracking-tight leading-[1.3] lg:text-5xl lg:leading-[1.2] xl:text-6xl xl:leading-[1.3]">
            The Next Generation{' '}
            <span className="bg-[url('/underline.svg')] bg-contain bg-no-repeat bg-bottom pb-1">
              Ecommerce
            </span>{' '}
            fueled by Blockchain
          </h1>
          <p className="mt-4 text-white/60 lg:text-lg lg:mt-6 xl:text-xl">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry.
          </p>
          <Button className="mt-8 md:mt-10 lg:mt-12">Start Shopping</Button>
        </div>
        <div className="flex justify-center">
          <Image
            src={hero}
            alt="hero"
            height={440}
            width={550}
            className="max-w-xs sm:max-w-sm md:w-full xl:max-w-lg"
          />
        </div>
      </div>
      <div className="hidden md:block mt-16 lg:mt-20">
        <Features />
      </div>
    </div>
  );
};
