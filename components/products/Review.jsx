import ReactStars from 'react-rating-stars-component';
import { useState } from 'react';
const Review = ({ username = 'alex', title, rating, description }) => {
  return (
    <div className="mt-4 flex flex-col">
      {/* <div className='w-10 border rounded-lg '>{username}</div> */}
      <div className="border border-rose-400 bg-[#252525] backdrop-blur-md flex flex-col flex-1 justify-between p-3 rounded-lg h-28 overflow-y-scroll">
        <div className="flex justify-between">
          <div className="flex gap-2">
            <img src="/user.png" alt="user" className="h-9" />
            <div className="flex flex-col flex-wrap gap-0">
              <h1>{title}</h1>
              <h1>{`@${username}`}</h1>
            </div>
          </div>
          <ReactStars
            count={5}
            size={18}
            edit={false}
            value={rating}
            isHalf={true}
            activeColor="#ffd700"
          />
        </div>
        <Description description={description} limit={150} />
      </div>
    </div>
  );
};

const Description = ({ description, limit }) => {
  const [showAll, setShowAll] = useState(false);
  return (
    <div className=" text-base pt-3 font-normal pb-5">
      {description.length > limit ? (
        <div>
          {showAll ? (
            <div className="">
              <span className="">{description}</span>
              <button
                onClick={() => setShowAll(false)}
                className="text-primary text-blue-500"
              >
                &nbsp; Read Less
              </button>
            </div>
          ) : (
            <div>
              <span className="">
                {description.substring(0, limit).concat('...')}
              </span>
              <button
                onClick={() => setShowAll(true)}
                className="text-primary text-blue-500"
              >
                Read More
              </button>
            </div>
          )}
        </div>
      ) : (
        description
      )}
    </div>
  );
};

export default Review;
