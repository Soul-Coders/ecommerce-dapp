import Head from 'next/head';
import { Hero } from '../components/home/Hero';
import logo from '../public/logo.svg'
import Image from 'next/image';

const Home = () => {
  return (
    <div>
      <Head>
        <title>Home | ShoppingVerse</title>
        <meta
          name="description"
          content="Homepage for the ShoppingVerse distributed ecommerce app"
        />
        <link rel="icon" href="/icon.svg" />
      </Head>

      <main>
        <section>
          <div className="container py-12">
            <div className="flex justify-between items-center w-full">
              <div className="w-44">
                <Image src={logo} alt="logo" className="w-full" />
              </div>
              <button className="hidden md:block rounded-full bg-gradient-to-r from-brand-red to-brand-purple">
                <div className="rounded-full py-2.5 px-7 text-sm bg-background m-[1px]">
                  Get Started
                </div>
              </button>
            </div>
            <Hero />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
