import Head from 'next/head';
import Sidebar from './sidebar/Sidebar';
import Navbar from './Navbar';
import { useState } from 'react';

const Page = ({ children, name, options = '' }) => {
  const [collapsed, setCollapsed] = useState(true);
  const changeCollapse = () => {
    setCollapsed(!collapsed);
  };
  const title = `${name} | ShoppingVerse`;
  return (
    <div className="bg-background">
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="Dashboard is an easy place to sort out history the right way"
        />
        <link rel="icon" href="/icon.svg" />
      </Head>
      <main>
        <Navbar onClick={changeCollapse} page={name} />
        <div className="container">
          {!collapsed && (
            <Sidebar
              onClick={changeCollapse}
              collapsed={collapsed}
              name={name}
            />
          )}
          <div className="mt-16 mb-8">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8 md:mb-0">
              <h1 className="text-xl py-4 font-bold md:text-2xl md:py-6 lg:pt-8 lg:text-3xl">
                {name}
              </h1>
              {options}
            </div>
            {children}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Page;
