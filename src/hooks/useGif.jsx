import axios from 'axios'
import { useState,useEffect } from 'react';

function useGif(tag){
    const API_KEY ='q2Q9vKsTSSAoZoTEHSjiw0F2D8EX8Vl7'  ;
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;

    const [gif , setGif] = useState("");
    const [loading , setLoading] = useState(false);

    async function fetchData(){
        setLoading(true);
        const {data} = await axios.get(tag ? `${url}&tag=${tag}`:url);
        console.log(data);
        const imageSource = data.data.images.downsized_large.url;
        console.log(imageSource);
        setGif(imageSource);
        setLoading(false);
    }

    useEffect( () => 
         fetchData()
    ,[]);

    return{
        gif ,
        loading,
        fetchData
    }
    
}

export default useGif;