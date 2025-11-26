import { useState } from "react";

export const SquareMesh = () => {
  const [clientsX, setClientsX] = useState(0);
  const [clientsY, setClientsY] = useState(0);

  const handleMouseMove = (e) => {
    setClientsX(e.clientX);
    setClientsY(e.clientY);
    console.log(`Mouse at: X=${e.clientX}, Y=${e.clientY}`);
  };

  // console.log( 'clientsX: ', clientsX , "clientsY: ",clientsY)

  // return ;

  const handleCngPosition = (e) => {
    console.log(e);
    // console.log("Event Type:", e.type);
    // console.log("React Event Name:", e._reactName);
    // console.log("Target Element:", e.target);
    // console.log("Current Target Element:", e.currentTarget);
    // console.log("Native Event:", e.nativeEvent);
    // console.log("Client X:", e.clientX);
    // console.log("Client Y:", e.clientY);
    // console.log("Page X:", e.pageX);
    // console.log("Page Y:", e.pageY);
    // console.log("Screen X:", e.screenX);
    // console.log("Screen Y:", e.screenY);
    // console.log("Alt Key Pressed:", e.altKey);
    // console.log("Ctrl Key Pressed:", e.ctrlKey);
    // console.log("Shift Key Pressed:", e.shiftKey);
    // console.log("Meta Key Pressed (Cmd in Mac):", e.metaKey);
    // console.log("Button Pressed (Mouse Events):", e.button);
    // console.log("Buttons Pressed (Mouse Events):", e.buttons);
    // console.log("Event Bubbles:", e.bubbles);
    // console.log("Event Cancelable:", e.cancelable);
    // console.log("Event Timestamp:", e.timeStamp);
    // console.log("Event Phase:", e.eventPhase);
    // console.log("Is Event Trusted:", e.isTrusted);
    // console.log("Movement X:", e.movementX);
    // console.log("Movement Y:", e.movementY);
    // console.log("Related Target:", e.relatedTarget);
    // console.log("Prevent Default Called?:", e.defaultPrevented);
    // console.log("View (Window Object):", e.view);
    // console.log("Modifier State (CapsLock Example):", e.getModifierState("CapsLock"));
    // console.log("Is Default Prevented?:", e.isDefaultPrevented());
    // console.log("Is Propagation Stopped?:", e.isPropagationStopped());
  };

  const arr = new Array(16).fill(" ");
  const array = new Array(16).fill(" ");
  // console.log(arr);

  return (
    <>
      <div onMouseMove={handleMouseMove} className="p-5">
        <h1>{`mouse position: ${clientsX} , ${clientsY}`}</h1>
        <h1>this is square mash</h1>
        <div className="flex flex-wrap  flex-shrink items-center justify-center ">
          {arr?.map((a, i) => (
            <>
              <div key={i}>
                {array.map((arr, i) => (
                  <div
                    onClick={handleCngPosition}
                    className={`w-10 h-10 p-2 border-r border-b border-gray-700   bg-teal-300  hover:border hover:border-green-500 hover:border-dashed hover:bg-purple-800 focus:border-r focus:border-b focus:border-gray-700 focus:bg-orange-600`}
                    key={i + 1}>
                    {arr}
                  </div>
                ))}
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export const DraggableDiv = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);

  const handleMouseDown = (e) => {
    // Start dragging and calculate initial offset (clientX, clientY)
    setDragging(true);
    const offsetX = e.clientX - position.x; // Calculate the difference between click position and current position
    const offsetY = e.clientY - position.y;

    const handleMouseMove = (moveEvent) => {
      if (dragging) {
        // Use clientX and clientY to update the position of the div
        setPosition({
          x: moveEvent.clientX - offsetX, // Move the div based on the mouse's position
          y: moveEvent.clientY - offsetY,
        });
      }
    };

    const handleMouseUp = () => {
      setDragging(false); // Stop dragging
      window.removeEventListener("mousemove", handleMouseMove); // Cleanup listeners
      window.removeEventListener("mouseup", handleMouseUp);
    };

    window.addEventListener("mousemove", handleMouseMove); // Start moving the div
    window.addEventListener("mouseup", handleMouseUp); // End dragging
  };

  return (
    <div
      onMouseDown={handleMouseDown} // Start dragging when mouse is pressed down
      style={{
        position: "absolute",
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: "100px",
        height: "100px",
        backgroundColor: "teal",
        cursor: "move",
      }}>
      {/* Drag me! */}
    </div>
  );
};

const BoxGen = () => {
  const [ab, setAn] = useState([]);
  console.log(ab, setAn);

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

  function MakeMatrix(N) {
    let matrix = [];

    for (let row = 1; row <= N; row++) {
      let rowArray = [];
      for (let column = 1; column < N + 1; column = column + column) {
        rowArray.push(row * column);
      }
      matrix.push(rowArray);
    }
    return matrix;
  }

  const matrix = MakeMatrix(10);
  // console.log(matrix)

  const mapMatrix = matrix.map((elements) =>
    elements.map((el) => {
      console.log(el);
      return el;
    })
  );

  console.log(mapMatrix);

  return (
    <div className="w-full h-full flex flex-col items-center border border-red-500">
      <h1>Box gen</h1>

      <div className="p-4 w-full h-full">
        <SquareMesh></SquareMesh>
      </div>

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
        <div className="w-full  h-fit flex flex-row flex-wra items-end gap-2 border border-green-900 4">
          {matrix.map((els, indx) => (
            <div
              className="w-full h-fit flex items-end gap-2 bg-[#ffecaa] border border-green-900 4"
              key={indx}>
              {els.map((el, i) => (
                <div className="bg-[#aaccee] " key={i}>
                  <div
                    //   style={{ width: "3px", height: `${ac}px` }}
                    className="bg-green-400 mt-1 ">
                    <p className=" flex flex-row text-center text-[10px] ">
                      {el}
                    </p>
                  </div>
                  <div
                    style={{ width: "3px", height: `${el}px` }}
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
          ))}
        </div>
      </div>
      {/* <div className="relative p-4 w-full h-full">
        <DraggableDiv></DraggableDiv>
      </div> */}
    </div>
  );
};

export default BoxGen;
