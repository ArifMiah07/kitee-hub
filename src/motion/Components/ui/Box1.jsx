import { motion } from "motion/react";
import { useState } from "react";

const Box1 = () => {
  const [count, setCount] = useState(0);

  const handleAnimationByClick = () => {
    setCount(count + 1);
    if (count === 1) {
      setCount(!count);
    }
  };

  return (
    <div className="w-full p-12 ">
      <h1 className="text-center">This is motion page</h1>
      <button
        onClick={handleAnimationByClick}
        className="w-fit px-3 py-2 text-white text-lg font-medium font-sans bg-green-500 rounded-lg hover:bg-blue-500 focus:bg-blue-600 focus:border-2 focus:border-green-500 focus:drop-shadow-md focus:scale-105 focus:delay-300 focus:duration-150 ">
        Refresh
      </button>
      <div className="w-full p-20">
        {count && (
          <motion.div
            animate={{ rotate: 360 }}
            className="div w-20 h-20 bg-red-500 border-2 border-green-400"></motion.div>
        )}
      </div>
    </div>
  );
};

export default Box1;
