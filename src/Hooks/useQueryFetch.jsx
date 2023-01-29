import axios from "axios";
import { useQuery } from "react-query";

const useQueryFetch = async (queryId, dataUrl) => {

    const fetchData = async () => {
        return    axios.get(dataUrl);
    }

    return useQuery(queryId, fetchData);
    
}

export default useQueryFetch;