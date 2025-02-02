import { useState } from "react";

const BoxGen = () => {

    const [ab, setAn] = useState([])

    const a = [];
    const randomSize = ()=>{
        for(let i = 0; i < 20; i++){
            const c = (i * i) 
            a.push(c);
        }
    }
    randomSize();
    // setAn(a);
    console.log(a);
    const size = 96;


    return (
        <div className="w-full h-full flex flex-col items-center border border-red-500">
            <h1>Box gen</h1>
            <div className="bg-[#ff5fa0] w-full h-full flex flex-col items-center border border-green-900 ">
                <div className={`bg-[#ff0000] border-4 border-green-400 float-end w-full h-full  flex flex-col lg:flex-row  p-4 gap-4 `} >
                    {
                        a.map((ac, i)=> (
                            <div style={{width: '30px', height: `${ac}px`}} className={` flex lg:flex-row items-center justify-center   border-4 border-blue-400  bg-green-400`} key={i}>
                                <p className=" flex flex-row text-center p-5">{ac}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default BoxGen;