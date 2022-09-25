import Head from 'next/head';
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
            <div className="w-min h-[50%] flex flex-col justify-between lg:h-[55%]">
              <h1 className="text-4xl font-semibold tracking-tight leading-[1.3] lg:text-5xl lg:leading-[1.2]">
                Welcome to Shoppingverse
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
