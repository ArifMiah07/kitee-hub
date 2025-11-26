import { motion } from "framer-motion"; // Fixing the import
import { useState } from "react";

// Reusable button component
// eslint-disable-next-line react/prop-types
export const RefreshButton = ({ handleAnimationByClick, n, count }) => {
  return (
    <button
      onClick={handleAnimationByClick}
      className="w-full max-w-[200px] px-4 py-2 text-white text-lg font-medium font-sans bg-green-500 rounded-lg hover:bg-blue-500 focus:bg-blue-600 focus:border-2 focus:border-green-500 focus:drop-shadow-md focus:scale-105 focus:delay-300 focus:duration-150"
    >
      Refresh | {count} {"-->"} {n} |
    </button>
  );
};

const Box1 = () => {
  //  Separate count for each button using an object
  const [counts, setCounts] = useState({ btn1: 0, btn2: 0, btn3: 0 });

  //  Update only the clicked button's count
  //  Handle click logic with toggle condition
  const handleAnimationByClick = (btnKey, n) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [btnKey]: prevCounts[btnKey] ===  n ? 0 : prevCounts[btnKey] + n, // Toggle logic
    }));
  };

  return (
    <div className="w-full flex flex-col items-center p-12 min-h-screen bg-gray-100">
      <h1 className="text-center text-2xl font-semibold text-gray-800">
        This is the Motion Page
      </h1>

      {/* Motion Animation Sections */}
      <div className="w-full max-w-xl mt-10 space-y-10">
        {/* Button 1 */}
        <div className="flex flex-col items-center bg-white p-6 shadow-lg rounded-xl">
          <RefreshButton
            count={counts.btn1}
            n={1}
            handleAnimationByClick={() => handleAnimationByClick("btn1", 1)}
          />
          {/* animate motion div ==> rotate 360 degree */}
          <div className="w-full flex justify-center mt-6">
            {counts.btn1 > 0 && (
              <motion.div
                animate={{ rotate: 360 }}
                className="w-20 h-20 bg-red-500 border-2 border-green-400 rounded-md"
              ></motion.div>
            )}
          </div>
        </div>

        {/* Button 2 */}
        <div className="flex flex-col items-center bg-white p-6 shadow-lg rounded-xl">
          <RefreshButton
            count={counts.btn2}
            n={2}
            handleAnimationByClick={() => handleAnimationByClick("btn2", 2)}
          />
          {/* animate ==> rotate, scale, transition => duration */}
          <div className="w-full h-[200px] mt-16 flex justify-center">
            {counts.btn2 > 0 && (
              <motion.div
                animate={{
                  rotate: 360,
                  scale: 10,
                  transition: { duration: 2 },
                }}
                className="w-5 h-5 mt-12 bg-red-500 border border-green-400 rounded-md"
              ></motion.div>
            )}
          </div>
        </div>

        {/* Button 3 */}
        <div className="flex flex-col items-center bg-white p-6 shadow-lg rounded-xl">
          <RefreshButton
            count={counts.btn3}
            n={3}
            handleAnimationByClick={() => handleAnimationByClick("btn3", 3)}
          />
          {/* Enter animation */}
          {/* When a component enters the page, it will automatically animate from the rendered value, but you can provide different values via the initial prop. */}
          <div className="w-full flex justify-center mt-6">
            {counts.btn3 > 0 && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="w-24 h-12 flex items-center justify-center text-white text-lg font-bold bg-red-500 border border-green-500 rounded-md"
              >
                Click
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Box1;
