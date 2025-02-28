import { useState } from "react";

const BoxGen = () => {
  const [ab, setAn] = useState([]);

  const a = [];
  const randomSize = () => {
    for (let i = 0; i < 20; i++) {
      const c = i * i;
      a.push(c);
    }
  };
  randomSize();

  const priceValue = [
    {
      name: "Wireless Mouse",
      price: 350,
    },
    {
      name: "Bluetooth Speaker",
      price: 299,
    },
    {
      name: "USB Flash Drive (128GB)",
      price: 199,
    },
    {
      name: "Phone Case",
      price: 150,
    },
    {
      name: "Portable Charger",
      price: 299,
    },
    {
      name: "LED Desk Lamp",
      price: 199,
    },
    {
      name: "Smart Watch Strap",
      price: 249,
    },
    {
      name: "Cable Organizer",
      price: 129,
    },
  ];

  // setAn(a);
  console.log(a);
  // const size = 96;

  return (
    <div className="w-full h-full flex flex-col items-center border border-red-500">
      <h1>Box gen</h1>
      <div className="bg-[#ff5fa0] p-12 w-full h-full flex flex-row items-center border border-green-900 ">
        <div className=" w-fit h-[400px] flex flex-col items-end justify-between border-green-900 p-4  ">
          <div
            //   style={{ width: "3px", height: `${ac}px` }}
            className="bg-green-400 mt-1 ">
            <p className=" flex flex-row text-center text-[10px] ">{"400"}</p>
          </div>
          <div
            //   style={{ width: "3px", height: `${ac}px` }}
            className="bg-green-400 mt-1 ">
            <p className=" flex flex-row text-center text-[10px] ">{"300"}</p>
          </div>
          <div
            //   style={{ width: "3px", height: `${ac}px` }}
            className="bg-green-400 mt-1 ">
            <p className=" flex flex-row text-center text-[10px] ">{"200"}</p>
          </div>
          <div
            //   style={{ width: "3px", height: `${ac}px` }}
            className="bg-green-400 mt-1 ">
            <p className=" flex flex-row text-center text-[10px] ">{"100"}</p>
          </div>
          <div
            //   style={{ width: "3px", height: `${ac}px` }}
            className="bg-green-400 mt-1 ">
            <p className=" flex flex-row text-center text-[10px] ">{"0"}</p>
          </div>
        </div>
        <div className="w-full h-[400px] flex items-end gap-2 border border-green-900 4">
          {priceValue.map((ac, i) => (
            <div key={i}>
              <div
                //   style={{ width: "3px", height: `${ac}px` }}
                className="bg-green-400 mt-1 ">
                <p className=" flex flex-row text-center text-[10px] ">
                  {ac.price}
                </p>
              </div>
              <div
                style={{ width: "3px", height: `${ac.price}px` }}
                className="bg-green-400 ml-2"></div>
              <div
                //   style={{ width: "3px", height: `${ac}px` }}
                className="bg-green-400 mt-1 ">
                <p className=" flex flex-row text-center text-[10px] ">
                  {i + 1}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BoxGen;
