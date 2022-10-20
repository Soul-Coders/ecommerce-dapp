import Head from 'next/head';
import Link from 'next/link';
import { useContext } from 'react';
import { Button } from '../../components/Button';
import { ConnectionContext } from '../../context/ConnectionContext';

const Login = () => {
  const { connectSeller, connectBuyer } = useContext(ConnectionContext);

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
        <div className="grid grid-cols-1 md:grid-cols-[40%_60%]">
          <div className="flex w-full h-screen items-center justify-center">
            <div className="w-min grid grid-rows-[min-content_1fr] h-full py-10 justify-between">
              <div className="flex w-full justify-center">
                <div className="w-44 lg:w-56">
                  <Link href={'/'}>
                    <img
                      src="/logo.svg"
                      alt="logo"
                      className="w-full cursor-pointer"
                    />
                  </Link>
                </div>
              </div>
              <div className="flex flex-col gap-10 justify-center lg:gap-16">
                <h1 className="text-4xl text-center w-[10ch] font-semibold tracking-tight leading-[1.3] lg:text-5xl lg:leading-[1.2]">
                  Welcome to the new era of e-commerce
                </h1>
                <div className="flex flex-col gap-5">
                  <Button
                    onClick={connectBuyer}
                    className="bg-white text-black py-3 font-bold lg:py-3.5"
                  >
                    Login as Buyer
                  </Button>
                  <Button
                    onClick={connectSeller}
                    className="bg-background border border-white py-3 font-medium lg:py-3.5"
                  >
                    Login as Seller
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <img
              className="object-cover object-center aspect-1 h-screen w-full"
              src="/login.png"
              alt="login-image"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
