import Head from 'next/head';
import Card from '../../components/Card';
import Form from '../../components/signup/Form';
import logo from '../../public/logo.svg';
import Image from 'next/image';

const Signup = () => {
  return (
    <div>
      <Head>
        <title>Signup | ShoppingVerse</title>
        <meta
          name="description"
          content="Signup page for the ShoppingVerse distributed ecommerce app"
        />
        <link rel="icon" href="/icon.svg" />
      </Head>
      <main className="container py-12">
        <div className="flex justify-center">
          <div className="w-44">
            <Image src={logo} alt="logo" className="w-full" />
          </div>
        </div>
        <div className="mt-8 flex justify-center">
          <Card>
            <h1 className="text-xl font-bold md:text-2xl">Sign up</h1>
            <Form />
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Signup;
