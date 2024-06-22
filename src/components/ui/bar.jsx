import React from "react";

export default function Bar(props) {
  return (
    <div>
      <div className="relative flex flex-col items-center flex-grow pb-5 group">
        <span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">
          $37,500
        </span>
        <div className="relative flex justify-center w-full  bg-indigo-300" />
        <div className="relative flex justify-center w-full h-16 bg-indigo-400" />
        <span className="absolute bottom-0 text-xs font-bold">Jan</span>
      </div>
    </div>
  );
}
