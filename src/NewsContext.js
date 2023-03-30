import React, { createContext, useEffect, useState} from "react";

import axios from "axios";

 export const NewsContext = createContext();
 export const NewsContextProvider = (props) => { 
    const [data,setdata] = useState();

    const apiKey = "e37027be1047417aa2c56da9a3d8c10b";

    useEffect(() => {
    axios
    .get(
        `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`
    )
    .then((response) => setdata(response.data))
    .catch((error) => console.log(error));
    }, [data]);

    return (
        
        <NewsContext.Provider value = {{data}}>
            {props.children}
        </NewsContext.Provider>
    );
};