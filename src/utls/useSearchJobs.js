import { useState } from "react";
import { useEffect } from "react";

const useSearchJobs=()=>{

    const [jobApiResponse,setJobResponse]=useState({
        loading:true,
        error:false,
        data:[]
    })

    useEffect(()=>{
      getJobs();
    },[])

    const getJobs=()=>{
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const body = JSON.stringify({
            "limit": 10,
            "offset": 0
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body
        };

        fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions)
        .then((response) =>{ 
            return response.json()
        })
        .then((result) =>{
            setJobResponse({
                loading:false,
                error:false,
                data:result.jdList
            })

            // console.log(result)
        })
        .catch((error) => {
           console.error(error)

            setJobResponse({
                loading:false,
                error:true,
                data:[]
            })

        });
    }

    return jobApiResponse;
}

export default useSearchJobs;