import { useState,useEffect } from "react";
import finnHub from "../APIs/finnHub";

export const AutoComplete=()=>{
    const [search,setSearch]=useState("");
    const [result,setResult]=useState([]);
    useEffect(()=>{
        let isMounted=true
        const fetchData=async()=>{
            try{
                const response =await finnHub.get("/search",{
                    params:{
                        q:search
                    }
                })

            console.log(response)
            if(isMounted){
              setResult(response.data.result)  
            }
            
            }
            
            catch(err){
                console.log(err)
            }
        }
        if(search.length > 0){
          fetchData()  
        }
        return ()=>(isMounted=false)
        
    },[search])
    return (
        <div className="w-50 p-5 rounded mx-auto">
            <div className="form-floating dropdown">
                <input style={{ backgroundColor:"rgba(145,178,171,0.04)"}} type="text" id="search" className="form-control" value={search} placeholder="Search" autoComplete="off" onChange={(e)=>setSearch(e.target.value)}/>
                <label htmlFor="search">Search</label>
                <ul className="dropdown-menu">
                    <li>Stock 1</li>
                    <li>Stock 2</li>
                    <li>Stock 3</li>
                </ul>

            </div>
        </div>
    ) 
}