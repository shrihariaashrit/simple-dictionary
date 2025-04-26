import React, { useEffect, useState } from "react";
import {useDispatch , useSelector} from "react-redux";
import { fetchword } from "./slicer1";
import Read  from "./Read";
import { PlayAudio } from "./Read";

export default function Word()
{
    const dispatch = useDispatch();
    const [word , setWord] = useState("hello");
    const {data , loading , error} = useSelector((state)=>state.slice1);

    useEffect(()=>{
        dispatch(fetchword(word));
    } ,[]);

    function handleClick()
    {
        dispatch(fetchword(word));
    }



    if(loading){
        return <h1>Data is loading....</h1>
    }
    if(error){
        return <h1>Error has occurred</h1>
    }


    return (
      <>
<div className="p-4 max-w-full flex flex-col shadow-xl max-h-full bg-white rounded-2xl">

          <div className="text-center font-bold text-2xl">{data[0]?.word?data[0].word:"Invalid Word"}</div>

          <div key={word} className="text-center flex flex-wrap max-w-md">
            { data[0]?.meanings?.[0]?.definitions?.[0]?.definition ? 
            data[0].meanings[0].definitions[0].definition     //<- if exists  ,  bottom line if doesnot exist 
            : "Definition not found"}                    
          </div>

          <div className="m-3 flex  items-center justify-between">
            <button className="px-2 py-2  flex justify-center items-center rounded bg-emerald-500 text-white rounded hover:bg-emerald-600" onClick={()=>Read(data[0]?.word || "Invalid Word")}>Read the Word</button>         
            <button className="px-2 py-2 flex justify-center items-center rounded bg-emerald-500 text-white rounded hover:bg-emerald-600" onClick={()=>Read(data[0]?.meanings?.[0]?.definitions?.[0]?.definition || "Definition not found")}>Read the Meaning</button>         
          </div>

          <div className="mt-2 mb-2">
            <label className="text-xl">Enter a word : </label>
            <input
            className="w-max p-2 border-1 rounded-2xl  border-emerald-500 "
            type="text"
            value={word}
            onChange={(a) => setWord(a.target.value)}
            ></input>
          </div>
          <button
            className=" px-2 py-2 bg-emerald-500 text-white rounded hover:bg-emerald-600"
            onClick={handleClick}
          >
            Search
          </button>
          </div>
          </>
    );
}

