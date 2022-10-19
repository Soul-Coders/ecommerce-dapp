
function Status(status){
  let circleColor, textColor;
  if (status === 'Delivered') {
    circleColor = 'bg-[#173B52]';
    textColor = 'text-[#00B594]';
  } else if (status === 'Pending') {
    circleColor = 'bg-[#4A3A39]';
    textColor = 'text-[#F27200]';
  } else {
    circleColor = 'bg-[#732F46]';
    textColor = 'text-[#FA3434]';
  }

  return (
    <div className={`${circleColor} rounded-xl w-4/12`}>
      <div className="">
        <h1 className={`px-2 ${textColor} text-sm text-center`}>{status}</h1>
      </div>
    </div>
  );
};

export default Status;
