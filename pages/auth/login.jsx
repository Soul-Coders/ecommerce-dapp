import Head from 'next/head';
import { Button } from '../../components/Button';
import Image from 'next/image';
import logo from '../../public/logo.svg'
import hero from '../../public/hero.png'

const Login = () => {
  return (
    <div>
      <Head>
        <title>Login | ShoppingVerse</title>
        <meta
          name="description"
          content="Login page for the ShoppingVerse distributed ecommerce app"
        />
        <link rel="icon" href="/icon.svg" />
      </Head>

      <main>
        <div className="container py-12 grid grid-rows-[min-content_1fr] h-screen">
          <div className="flex justify-center">
            <div className="w-44">
              <Image src={logo} alt="logo" className="w-full" />
            </div>
          </div>
          <div className="flex flex-col gap-4 items-center justify-center lg:-mt-20">
            <Image
              src={hero}
              alt="hero"
              width={350}
              height={300}
            />
            <Button>Connect Wallet</Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
