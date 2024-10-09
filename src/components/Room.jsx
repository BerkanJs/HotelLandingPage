import React from "react";
import { Link } from "react-router-dom";
import { BsArrowsFullscreen ,BsPeople } from "react-icons/bs";
const Room = ({ room }) => {
  const { id, name, image, size, maxPerson, description, price } = room;
  return (
    <div className="bg-white shadow-2xl min-h-[500px] group">
      <div className="overflow-hidden">
        <img
          className="w-full group-hover:scale-110 transition-all duration-200 "
          src={image}
          alt=""
        />
      </div>

      <div className="bg-white shadow-lg max-w-[350px] mx-auto h-[60px] -translate-y-1/2 flex justify-center items-center uppercase tracking-[1px] font-semibold text-[15px]">
        <div className="flex justify-between w-[80%]">
          <div className="flex items-center gap-x-2">
            <div className="text-amber-500">
              <BsArrowsFullscreen className="text-[15px]" />
            </div>
            <div className="flex gap-x-1">
              <div>Size</div>
              <div>{size} m2 </div>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-x-2">
              <div className="text-amber-500">
                <BsPeople className="text-[15px]" />
              </div>
              <div className="flex gap-x-1">
                <div>Max People</div>
                <div>{maxPerson} m2 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center flex flex-col items-center justify-center gap-y-3">
      <Link to={`/room/${id}`}>
      <h3 className="text-3xl font-bold">{name}</h3>
      </Link>
      <p className="max-w-[300px] mx-auto mb-3 lg:mb-6">{description.slice(0,56)}</p>
      <Link to={`/room/${id}`} className="bg-gray-900 max-w-[240px] mx-auto text-white tracking-[1px] text-xl p-2 mb-4 hover:bg-amber-500 hover:scale-110 transition-all duration-300">
      Book now from ${price}
      
      </Link>
      </div>
    



    </div>
  );
};

export default Room;
