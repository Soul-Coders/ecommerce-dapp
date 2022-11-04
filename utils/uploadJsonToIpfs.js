import { uid } from 'uid';
import { Web3Storage } from 'web3.storage';

const client = new Web3Storage({
  token: process.env.NEXT_PUBLIC_WEB3_STORAGE_API_TOKEN,
});

export const uploadJsonToIpfs = async (nftMetadata) => {
  try {
    const fileName = uid(12);
    const buffer = Buffer.from(JSON.stringify(nftMetadata));
    const newFile = new File([buffer], fileName, {
      type: 'object',
    });
    const rootCid = await client.put([newFile], {
      name: fileName,
    });
    return `https://${rootCid}.ipfs.dweb.link/${fileName}`;
  } catch (error) {
    console.log(error);
  }
};
