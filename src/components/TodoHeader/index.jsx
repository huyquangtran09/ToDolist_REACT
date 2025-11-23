import React from "react";

const TodoHeader = ({ progress, total, completed, inProgress, search, setSearch }) => {
  return (
    <>
      <div
        className="
  bg-cyan-300 
  border-4 border-black 
  shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] 
  p-6 mb-6
"
      >
        <div className="text-center">
          <h2 className="text-2xl font-black text-black mb-4">
            MISSION PROGRESS
          </h2>

          <div className="text-3xl font-black text-black mb-4">
            <span>
              {
                completed === total
                  ? "ALL MISSIONS COMPLETE!"
                  : `You've completed ${completed}/${total} tasks` 
              }
              
            </span>
          </div>
        </div>

        <div
          className="
    bg-white 
    border-[3px] border-black
    shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
    h-8 
    overflow-hidden
  "
        >
          <div
            className="
          bg-green-400 
          h-full
          border-r-[3px] border-black
          transition-all duration-500
          flex items-center justify-center
        "
            style={{ width: `${progress.percent}%` }}
          >
            {progress.percent.toFixed(0)}%
          </div>
        </div>

        <p className="text-lg font-bold text-black mt-4 text-center">
          {inProgress === 0 ? "Ready for launch!" : `${inProgress} missions remaining`}
        </p>
      </div>
    </>
  );
};

export default TodoHeader;
