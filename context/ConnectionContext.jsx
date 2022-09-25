import { ethers } from 'ethers';
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
  });
  const [formType, setFormType] = useState('');

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
      const Seller = await contract.isSeller();
      const Buyer = await contract.isBuyer();

      setCurrentAccount({
        walletAddress: accounts[0],
        buyerStatus: Buyer,
        sellerStatus: Seller,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const connectSeller = () => {
    try {
      if (currentAccount.sellerStatus) {
        router.push('/');
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
        router.push('/');
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
      const tx = await contract.addSeller(
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
      router.push('/');
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
      router.push('/');
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
