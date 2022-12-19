import { useState, useEffect, createContext } from "react";
import useAxiosFetchHook from "../Hooks/useAxiosFetchHook";

const DataContext = createContext({});

export const DataProvider = ({children}) => {

  const [bikes, setBikes] = useState([]);
  const { data, error, isLoading } = useAxiosFetchHook('http://localhost:8000/bikes');

  useEffect(() => {
    setBikes(data);
  }, [data])

  return (
    <DataContext.Provider value={{
        bikes, setBikes, error, isLoading
    }}>
        {children}
    </DataContext.Provider>
  )
}

export default DataContext;