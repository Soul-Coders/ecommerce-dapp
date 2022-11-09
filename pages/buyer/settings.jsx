import Page from '../../components/Page';
import Card from '../../components/Card';
import Form from '../../components/signup/Form';
import { useContext, useState } from 'react';
import { ConnectionContext } from '../../context/ConnectionContext';
import { Web3Storage } from 'web3.storage';

const Settings = () => {
  const client = new Web3Storage({
    token: process.env.NEXT_PUBLIC_WEB3_STORAGE_API_TOKEN,
  });
  const { currentAccount, updateAccount } = useContext(ConnectionContext);
  var info = { ...currentAccount.info };
  const onChange = (e) => {
    info[e.target.id] = e.target.value;
  };

  const handleChange = async (event) => {
    const file = event.target.files[0];
    console.log(file);
    const fileName = 'user.png';
    const newFile = new File([file], fileName, {
      type: file.type,
    });
    console.log(newFile);
    const rootCid = await client.put([newFile], {
      name: fileName,
    });
    console.log(rootCid);
    const web3URI = `https://${rootCid}.ipfs.dweb.link/${fileName}`;
    info.imgURL = web3URI;
    console.log(info.imgURL);
  };

  const onSave = () => {
    updateAccount({
      imgURL: info.imgURL,
      name: info.name,
      email: info.email,
      phone: info.phone,
      dob: info.dob,
      gender: info.gender,
      addr: info.addr,
      city: info.city,
      pinCode: info.pinCode,
    });
  };
  return (
    <Page
      name="Settings"
      option={
        <div className="">
          <button
            className="text-white/50 border md:flex justify-center items-center font-semibold 
        px-3 h-10 bg-grey-900 rounded-md hover:text-white hover:bg-rose-800"
          >
            Deactivate my account
          </button>
        </div>
      }
    >
      <div className="bg-dimmed-black rounded-md p-3 flex flex-col ">
        <div className="flex items-center md:items-start flex-col-reverse md:flex-row justify-evenly">
          <Form isUpdate={true} onChange={onChange} />
          <Card className={'mt-4 h-full'}>
            <div className="flex flex-col items-center p-4">
              <img
                src={currentAccount.info.imgURL}
                alt="User profile picture"
                height={200}
                width={200}
                className="pb-4 "
              />
              <input
                type={'file'}
                id="imgupload"
                onChange={(e) => handleChange(e)}
                className="hidden"
                accept="image/png, image/jpeg"
              />
              <label
                htmlFor="imgupload"
                className="text-sm flex cursor-pointer justify-center items-center font-semibold p-2 h-10 bg-gradient-to-r from-brand-red to-brand-purple rounded-md orm-control col-lg-2 col-md-2 col-sm-2"
              >
                <a>Change Profile Picture</a>
              </label>
            </div>
          </Card>
        </div>
        <div className="flex justify-center items-center">
          <button
            className="flex w-full md:w-fit h-10 justify-center items-center font-semibold px-9 bg-gradient-to-r from-brand-red to-brand-purple rounded-md"
            onClick={onSave}
          >
            Save Changes
          </button>
        </div>
      </div>
    </Page>
  );
};

export default Settings;
