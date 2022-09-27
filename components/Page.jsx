import Head from 'next/head';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { useState } from 'react';
import { useRouter } from 'next/router';

const Page = ({ children }) => {
  const router = useRouter();
  var name = router.asPath.split('/').slice(2)[0];
  name = name[0].toUpperCase() + name.slice(1);
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
        <Navbar onClick={changeCollapse} />
        <div className="container">
          {!collapsed && (
            <Sidebar onClick={changeCollapse} collapsed={collapsed} />
          )}
          <div className="p-2 mt-16">
            <h1 className="p-3 text-xl font-bold md:text-xl lg:text-2xl">
              {name}
            </h1>
            {children}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Page;
