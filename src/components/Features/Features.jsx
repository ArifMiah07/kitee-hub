import { useEffect, useState } from "react";
import Feature from "../Feature/Feature";


const Features = () => {


    const [cats, setCats] = useState([]);

    useEffect( ()=>{
        fetch(`cats.json`)
        .then(res => res.json())
        .then(data => setCats(data));
    }, [])
    return (
        <div className="w-fit mx-auto grid grid-cols-1 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 xl:grid xl:grid-cols-4 2xl:grid 2xl:grid-cols-5 gap-4 p-3">
            {
                cats.map((cat, idx)=> <Feature key={idx} cat={cat}></Feature>)
            }
        </div>
    );
};

export default Features;