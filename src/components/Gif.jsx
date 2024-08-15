import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';


function Gif(){
    // const API_KEY ='q2Q9vKsTSSAoZoTEHSjiw0F2D8EX8Vl7'  ;

    // const [gif , setGif] = useState("");
    const [tag,setTag] =useState("");
    // const [loading , setLoading] = useState(false);

    // async function fetchData(){
    //     setLoading(true);
    //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    //     const {data} = await axios.get(url);
    //     console.log(data);
    //     const imageSource = data.data.images.downsized_large.url;
    //     console.log(imageSource);
    //     setGif(imageSource);
    //     setLoading(false);
    // }

    // useEffect( () => 
    //      fetchData()
    // ,[]);
    // fetchData();

    // custom hook 

    const {gif , loading,fetchData} = useGif(tag);
    
    function changeHandler(){
        fetchData();
    }


    return(
        <div className=' w-1/2 mt-[15px] bg-blue-500 rounded-lg border border-black flex flex-col items-center gap-y-5  '>

            <h1 className='text-2xl underline font-bold uppercase'>{`Random ${tag} Gif` }</h1>

             { 
                loading ? <Spinner></Spinner> : <img src={gif} alt="" />
             }

            <input type="text" 
            // className="w-9/12 text-lg py-2 rounded-lg mb-[3px] text-center"
            className='w-9/12 bg-slate-300 text-center rounded-md px-3 py-2 text-xl font-semibold mb-[2px] '
            onChange={ (event) => setTag(event.target.value) }
            value={tag}
            />

            <button className='w-9/12 bg-slate-300 rounded-md px-3 py-2 text-xl font-semibold mb-[20px] '
            onClick={changeHandler} >
                Generate
            </button>
        </div>
    )
}

export default Gif