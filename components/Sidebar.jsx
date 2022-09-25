import Link from 'next/link';
import { useRouter } from 'next/router';

import seller_sidebar from '../utils/seller_sidebar';
import buyer_sidebar from '../utils/buyer_sidebar';

const Sidebar = () => {
  const router = useRouter();
  const child = router.asPath.split('/').pop();
  const parent = router.asPath.split('/').slice(0, -1).join('/');

  const sidebarItems =
    (parent.slice(1) == 'seller' && seller_sidebar) || buyer_sidebar;
  return (
    <div>
      <div
        className={
          'flex flex-col justify-between bg-dimmed-black border-t-2 border-blue-500 min-w-[15rem] min-h-full'
        }
      >
        <ul>
          {sidebarItems.above.map(({ icon, title, id }) => (
            <li key={title} className="p-2">
              <Link href={`${parent}/${id}`}>
                <div
                  className={`${
                    child == id && 'bg-[#242323] rounded-md'
                  } p-3 hover:bg-blue-500 rounded-md`}
                >
                  <div className="flex flex-wrap gap-2 w-fit h-fit cursor-pointer">
                    {icon}
                    <h3 className="text-sm lg:text-base xl:text-base font-semibold">
                      {title}
                    </h3>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <div className="p-1">
          <hr />
          <ul>
            {sidebarItems.below.map(({ icon, title, id }) => (
              <li key={title} className="p-2">
                <Link href={`${parent}/${id}`}>
                  <div
                    className={`${
                      child == id && 'bg-[#242323]'
                    } p-3 hover:bg-blue-500 rounded-md`}
                  >
                    <div className="flex flex-wrap gap-2 w-fit h-fit cursor-pointer">
                      {icon}
                      <h3 className="text-sm lg:text-base xl:text-base font-semibold">
                        {title}
                      </h3>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
