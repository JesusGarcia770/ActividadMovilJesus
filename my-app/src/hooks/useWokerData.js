import { useEffect, useState } from "react";

const useWorkerData = () => {
    const [workerData, setWorkerData] = useState([]);
    const [loading, setLoading] = useState(true);


    //funcion para obtener los datos de los pokemon desde la API
    const fetchWorkerData = async () => {
        try {
            setLoading(true);
            const response = await fetch(`https://retoolapi.dev/GH2Ivb/dataMovil`);
            const data = await response.json();

            setWorkertData(data);
        } catch (error) {
            console.error('Error fetching Worker data:', error);
        } 
            setLoading(false);
    };
  

    useEffect(() => {
        fetchWorkerData();
    }, []);

    return { workerData, loading};
};

export default useWorkerData;