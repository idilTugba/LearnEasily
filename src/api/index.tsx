"use client";
import { IRequestData } from "@/context/requestContext";

export const TranslateRequest = async (requestData:IRequestData) => {
    
    const response = await fetch('http://localhost:3001/translate-it', {
        method: 'post',
        headers: {
            'content-type' : 'application/json' 
        },
        body: JSON.stringify(requestData)
    })  
    
    const res = await response.json();
    console.log(res)
    return res
}
