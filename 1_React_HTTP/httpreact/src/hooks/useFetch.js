import { useEffect, useState} from 'react'

export const useFetch = (url) => {
    const [data, setData] = useState(null)

    const [config, setConfig] = useState(null)
    const [method, setMethod] = useState(null);
    const [callFetch, setCallFetch] = useState(false)
    
    const httpConfig= (data, method) =>{
    const httpConfig= (data, method) =>{
        if(method === 'POST'){
            setConfig({
                method,
                header: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(data)
            })
            setMethod(method)
        }
    }
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(url)

            const json = await res.json()

            setData(json)
        };
        fetchData();
    },[url])
    useEffect(() => {
        const httpsRequest = async () =>{
            if(method === 'POST'){

                let fetchOptions= [url, config];
            
                const res = await fetch(...fetchOptions);
            
                const json = await res.json();
            
                setCallFetch(json)
            }
        }

        httpsRequest();
    }, [config, method, url])
    return { data, httpConfig };
}
}