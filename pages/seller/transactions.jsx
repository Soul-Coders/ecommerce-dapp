import Page from '../../components/Page';
import { Fragment, useContext, useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase-config';
import { ConnectionContext } from '../../context/ConnectionContext';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/20/solid';

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [viewTransaction, setViewTransaction] = useState(0);
  const { currentAccount } = useContext(ConnectionContext);

  const fetchTransactions = async () => {
    try {
      const docRef = doc(
        db,
        'seller_transactions',
        currentAccount.walletAddress
      );
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        setTransactions(data.transactions);
        console.log(data.transactions);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, [currentAccount]);

  return (
    <div>
      <Page name="Transactions">
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-10"
            onClose={() => setIsOpen((prev) => !prev)}
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-[2px]" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-dimmed-black p-6 text-left align-middle shadow-xl transition-all">
                    <div className="">
                      <div className="mb-2 flex items-center justify-between">
                        <h1 className="text-xl font-semibold">Transaction</h1>
                        <XMarkIcon
                          onClick={() => setIsOpen((prev) => !prev)}
                          className="h-6 w-6 cursor-pointer md:h-7 md:w-7"
                        />
                      </div>
                      {transactions && transactions[viewTransaction] && (
                        <>
                          <div className="flex flex-col gap-1 justify-between py-2">
                            <h2 className="text-lg font-medium text-dimmer-black">
                              Name
                            </h2>
                            {transactions[viewTransaction].name}
                          </div>
                          <div className="flex flex-col gap-1 justify-between py-2">
                            <h2 className="text-lg font-medium text-dimmer-black">
                              Date
                            </h2>
                            {transactions[viewTransaction].date}
                          </div>
                          <div className="flex flex-col gap-1 justify-between py-2">
                            <h2 className="text-lg font-medium text-dimmer-black">
                              To
                            </h2>
                            {transactions[viewTransaction].to}
                          </div>
                          <div className="flex flex-col gap-1 justify-between py-2">
                            <h2 className="text-lg font-medium text-dimmer-black">
                              From
                            </h2>
                            {transactions[viewTransaction].from}
                          </div>
                          <div className="flex flex-col gap-1 justify-between py-2">
                            <h2 className="text-lg font-medium text-dimmer-black">
                              Transaction Hash
                            </h2>
                            {transactions[viewTransaction].transactionHash}
                          </div>
                          <div className="flex flex-col gap-1 justify-between py-2">
                            <h2 className="text-lg font-medium text-dimmer-black">
                              Block Hash
                            </h2>
                            {transactions[viewTransaction].blockHash}
                          </div>
                          <div className="flex flex-col gap-1 justify-between py-2">
                            <h2 className="text-lg font-medium text-dimmer-black">
                              Gas Used
                            </h2>
                            {transactions[viewTransaction].gasUsed}
                          </div>
                        </>
                      )}
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
        <div className="w-full px-3 py-5 mb-7 bg-dimmed-black rounded-md mt-2 md:px-5 xl:p-7">
          <div className="hidden md:grid px-3 text-white/50 pt-6 pb-2 text-sm grid-cols-[25%_20%_25%_15%_15%] w-full items-center md:pt-7">
            <h2>Transaction hash</h2>
            <h2>Date</h2>
            <h2>Name</h2>
            <h2>Gas</h2>
            <h2>Action</h2>
          </div>
          <div className="mt-4 flex flex-col gap-4 md:gap-6">
            {transactions.map(
              ({ transactionHash, name, date, gasUsed }, index) => (
                <div key={transactionHash}>
                  <div className="">
                    <div className="md:hidden bg-[#252525]/70 p-4 rounded-md sm:p-6">
                      <div className="flex justify-between flex-grow">
                        <h3 className="font-medium text-sm uppercase sm:text-base">
                          <span className="text-brand-purple">#</span>
                          {transactionHash.slice(0, 10) + '...'}
                        </h3>
                        <h2 className="font-light text-sm sm:text-base tracking-wide text-white/80">
                          {name}
                        </h2>
                      </div>
                      <div className="flex justify-between flex-grow mt-4 items-end">
                        <div className="">
                          <h2 className="font-light text-sm sm:text-base text-white/80">
                            {date}
                          </h2>
                          <h1 className="font-semibold text-xl mt-1">
                            {gasUsed.slice(0, 4) + '...' + 'eth'}
                          </h1>
                        </div>
                        <button
                          onClick={() => {
                            setViewTransaction(index);
                            setIsOpen((prev) => !prev);
                          }}
                          className="text-sm font-semibold px-9 h-10 bg-gradient-to-r from-brand-red to-brand-purple rounded-md"
                        >
                          View
                        </button>
                      </div>
                    </div>
                    <div className="hidden md:block  bg-[#252525]/70 p-3 rounded-md lg:p-4">
                      <div className="grid grid-cols-[25%_20%_25%_15%_15%] w-full items-center">
                        <h3 className="font-medium text-base uppercase lg:text-lg">
                          <span className="text-brand-purple">#</span>
                          {transactionHash.slice(0, 10) + '...'}
                        </h3>
                        <h2 className="font-light text-white/80 lg:text-lg">
                          {date}
                        </h2>
                        <h2 className="font-light tracking-wide text-white/80 lg:text-lg md:font-normal">
                          {name}
                        </h2>
                        <h1 className="font-semibold text-xl mt-1">
                          {gasUsed.slice(0, 4) + '...' + 'eth'}
                        </h1>
                        <button
                          onClick={() => {
                            setViewTransaction(index);
                            setIsOpen((prev) => !prev);
                          }}
                          className="text-sm font-semibold px-9 h-10 bg-gradient-to-r from-brand-red to-brand-purple rounded-md"
                        >
                          View
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </Page>
    </div>
  );
};

export default Transactions;
