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
        <div>
            {
                cats.map((cat, idx)=> <Feature key={idx} cat={cat}></Feature>)
            }
        </div>
    );
};

export default Features;