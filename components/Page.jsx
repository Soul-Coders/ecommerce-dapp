import Head from 'next/head';
import Sidebar from './sidebar/Sidebar';
import Navbar from './Navbar';
import { useState } from 'react';

const Page = ({
  children,
  name,
  username = '',
  options = '',
  items,
  setSearches,
}) => {
  const [collapsed, setCollapsed] = useState(true);
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
        <Navbar
          onClick={() => setCollapsed(false)}
          page={name}
          items={items}
          setSearches={setSearches}
        />
        <div className="container">
          {!collapsed && (
            <Sidebar
              setCollapsed={setCollapsed}
              onClick={() => setCollapsed(true)}
              collapsed={collapsed}
              name={name}
            />
          )}
          <div className="mt-16 mb-8">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8 md:mb-0">
              <div
                className={`flex items-center text-xl py-4 font-bold md:text-2xl md:py-6 lg:pt-8 lg:text-3xl ${
                  username && 'gap-2'
                }`}
              >
                <h3 className="font-extrabold text-transparent bg-clip-text bg-gradient-to-tr from-brand-purple to-brand-red">
                  {`${username}${username && "'s"}`}
                </h3>
                <h3>{name}</h3>
              </div>
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
