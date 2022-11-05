import { BigNumber } from 'ethers';
import { useContext, useEffect, useState } from 'react';
import Page from '../../components/Page';
import { NftCard } from '../../components/warranties/NftCard';
import { ConnectionContext } from '../../context/ConnectionContext';

const Warranties = () => {
  const [userNfts, setUserNfts] = useState([]);
  const { getNftContract } = useContext(ConnectionContext);
  const fetchUserNfts = async () => {
    try {
      const contract = getNftContract();
      const tokens = await contract.getUserNfts();
      const nfts = await Promise.all(
        tokens.map(async (id) => {
          const tokenURI = await contract.tokenURI(id);
          const data = await fetch(tokenURI).then((data) => data.json());
          const nft = {
            id: id.toNumber(),
            name: data.name,
            image: data.image,
          };
          return nft;
        })
      );
      setUserNfts(nfts);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUserNfts();
  }, [fetchUserNfts]);

  return (
    <div>
      <Page name={'Warranties'}>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-5">
          {userNfts.length > 0 &&
            userNfts.map(({ id, image, name }, index) => (
              <NftCard index={index} id={id} image={image} name={name} key={index}/>
            ))}
        </div>
      </Page>
    </div>
  );
};

export default Warranties;
