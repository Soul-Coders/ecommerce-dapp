import Head from 'next/head';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { useState } from 'react';

function Page({ name }) {
  const [collapsed, setCollapse] = useState(false);
  const changeCollapse = () => {
    setCollapse(!collapsed);
  };
  const title = `${name} | ShoppingVerse`;
  return (
    <div className="bg-black">
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="Dashboard is an easy place to sort out history the right way"
        />
        <link rel="icon" href="/icon.svg" />
      </Head>
      <main className="text-brand-lavender">
        <Navbar onClick={changeCollapse} />
        <div className="flex flex-1 min-h-[93vh]">
          {!collapsed && <Sidebar />}
          <div className="p-4">
            <h1 className="p-3 text-xl font-bold">{name}</h1>
            <div className="p-3 border border-rose-500 rounded-md">
              <h3>Content</h3>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Page;
