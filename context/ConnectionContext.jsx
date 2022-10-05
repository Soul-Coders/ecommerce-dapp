import { BigNumber, ethers } from 'ethers';
import { useRouter } from 'next/router';
import { createContext, useEffect, useState } from 'react';
import Shoppingverse from '../backend/artifacts/contracts/Shoppingverse.sol/Shoppingverse.json';

export const ConnectionContext = createContext();

const getContract = () => {
  if (typeof window.ethereum !== 'undefined') {
    const { ethereum } = window;
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const smartContract = new ethers.Contract(
      process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
      Shoppingverse.abi,
      signer
    );

    return smartContract;
  }
};

export const ConnectionProvider = ({ children }) => {
  const router = useRouter();
  const [currentAccount, setCurrentAccount] = useState({
    walletAddress: '',
    buyerStatus: false,
    sellerStatus: false,
    info: {},
  });
  const [formType, setFormType] = useState();

  const setAccount = async () => {
    try {
      if (!ethereum) {
        alert(
          'Metamask not detected. Please try again from a Metamask enabled browser.'
        );
        return;
      }

      const accounts = await ethereum.request({
        method: 'eth_requestAccounts',
      });

      const contract = getContract();
      const seller = await contract.isSeller();
      const buyer = await contract.isBuyer();
      const info = await ((seller && contract.getSellerInfo()) ||
        contract.getBuyerInfo());

      setCurrentAccount({
        walletAddress: accounts[0],
        buyerStatus: buyer,
        sellerStatus: seller,
        info: info,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const connectSeller = () => {
    try {
      if (currentAccount.sellerStatus) {
        router.push('/seller/dashboard');
      } else {
        setFormType('Seller');
        router.push('/auth/signup');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const connectBuyer = () => {
    try {
      if (currentAccount.buyerStatus) {
        router.push('/buyer/dashboard');
      } else {
        setFormType('Buyer');
        router.push('/auth/signup');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const createSeller = async ({
    name,
    email,
    phone,
    dob,
    gender,
    addr,
    city,
    zip,
  }) => {
    try {
      if (!ethereum) {
        alert(
          'Metamask not detected. Please try again from a Metamask enabled browser.'
        );
        return;
      }

      const contract = getContract();
      const value = BigNumber.from(9193000000000000n);
      const tx = await contract.addSeller(
        name,
        email,
        phone,
        dob,
        gender,
        addr,
        city,
        zip,
        { value: value }
      );
      await tx.wait();
      console.log('Success');
      setAccount();
      router.push('/seller/dashboard');
    } catch (error) {
      console.log(error);
    }
  };

  const createBuyer = async ({
    name,
    email,
    phone,
    dob,
    gender,
    addr,
    city,
    zip,
  }) => {
    try {
      if (!ethereum) {
        alert(
          'Metamask not detected. Please try again from a Metamask enabled browser.'
        );
        return;
      }

      const contract = getContract();
      const tx = await contract.addBuyer(
        name,
        email,
        phone,
        dob,
        gender,
        addr,
        city,
        zip
      );
      await tx.wait();
      console.log('Success');
      setAccount();
      router.push('/buyer/dashboard');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setAccount();
    if (window.ethereum) {
      window.ethereum.on('accountsChanged', setAccount);
    }
  }, []);

  return (
    <ConnectionContext.Provider
      value={{
        currentAccount,
        connectSeller,
        connectBuyer,
        createSeller,
        createBuyer,
        formType,
      }}
    >
      {children}
    </ConnectionContext.Provider>
  );
};
