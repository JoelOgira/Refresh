import axios from "axios"
import { useState,useEffect } from "react"

const CatFacts = () => {
    const [catFact, setCatFact] = useState("");

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
    <div className="container overflow-y-auto grow mx-auto md:w-3/4">
        
        <h1 className="text-4xl text-center mb-6 underline font-semibold">
            Cat Facts
        </h1>
        
        <div className="flex flex-col flex-wrap w-3/4 h-96 rounded-lg shadow-black bg-gray-400 p-4 mx-auto">

            <div className="mx-auto mt-3 text-white">
                <button onClick={fetchCatFacts} className="bg-primary p-3 px-5 rounded-full">Fetch Cat Facts</button>
            </div>

            <p className="py-3 text-center">{catFact}</p>
            
        </div>
    </div>
    )
}

export default CatFacts;