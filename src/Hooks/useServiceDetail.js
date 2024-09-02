import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
//use service
const useServiceDetail = (id) => {
    const [item, setItem] = useState([]);  
    useEffect(() => {
        
            const url = `http://localhost:4000/package/${id}`
            fetch(url)
            .then(response => response.json())
        .then(data=>setItem(data))
    },[item])
    return {item,setItem}
};


export default useServiceDetail;