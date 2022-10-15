const Label = ({ status }) => {
  return (
    <div>
      {(status.toLowerCase() === 'pending' && (
        <div
          className={
            'w-20 p-1.5 flex justify-center rounded-3xl border border-blue-400 text-blue-400 bg-blue-400/30'
          }
        >
          pending
        </div>
      )) ||
        (status.toLowerCase() === 'cancelled' && (
          <div
            className={
              'w-20 p-1.5 flex justify-center rounded-3xl border border-rose-400 text-rose-400 bg-rose-400/30'
            }
          >
            cancelled
          </div>
        )) || (
          <div
            className={
              'w-20 p-1.5 flex justify-center rounded-3xl border border-green-400 text-green-400 bg-green-400/30'
            }
          >
            delivered
          </div>
        )}
    </div>
  );
};

export default Label;
