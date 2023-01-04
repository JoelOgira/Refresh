import axios from "axios"
import { useState,useEffect } from "react"
import useToggle from "../../Hooks/useToggle";

const CatFacts = () => {
    const [catFact, setCatFact] = useState("");
    const {state:isVisible, toggle} = useToggle();

    const fetchCatFacts = async () => {
        try {
            const response = await axios.get(`https://catfact.ninja/fact`);
            setCatFact(response.data.fact);
        } catch (err) {
            console.log(err.message);
        }
    }
    useEffect(() => {
        fetchCatFacts();
    }, [])

    return (
    <div className="container overflow-y-auto grow mx-auto md:w-3/4 text-white">
        
        <h1 className="text-4xl text-center mb-6 underline font-semibold">
            Cat Facts
        </h1>
        
        <div className="flex flex-col flex-wrap w-3/4 h-96 rounded-lg shadow-black bg-gray-500 p-4 mx-auto my-6">

            <div className="mx-auto mt-3 text-white">
                <button onClick={fetchCatFacts} className="bg-primary p-3 px-5 rounded-full">Fetch Cat Facts</button>
            </div>

            <p className="py-3 text-center">{catFact}</p>
            
        </div>

        <div className="flex flex-col mx-auto items-center space-y-6 md:space-y-0">
            <button 
                className="border-2 p-3 px-6 rounded-full "
                onClick={toggle}
            >
                {isVisible? 'Hide Text' : 'Show Text'}
            </button>
            {isVisible && <p className="text-center">This is the text</p>}
        </div>

    </div>
    )
}

export default CatFacts;