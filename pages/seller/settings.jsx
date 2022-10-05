import Page from '../../components/Page';
import Card from '../../components/Card';
import Form from '../../components/signup/Form';

const Settings = () => {
  const setProfileImage = (e) => {
    const file = e.target.files[0];
    const rfile = new File([file], 'user.png');
  };
  return (
    <Page
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
          <Form />
          <Card className={'mt-4 h-full'}>
            <div className="flex flex-col items-center p-4">
              <img
                src="/user.png"
                alt="User icon"
                height={200}
                width={200}
                className="pb-4"
              />
              <input
                type={'file'}
                id="imgupload"
                onClick={(e) => setProfileImage(e)}
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
          <button className="flex h-10 justify-center items-center font-semibold px-9 bg-gradient-to-r from-brand-red to-brand-purple rounded-md">
            Save Changes
          </button>
        </div>
      </div>
    </Page>
  );
};

export default Settings;
