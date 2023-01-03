import { useState } from "react";
import axios from "axios";

const Excuser = () => {
    const [excuses, setExcuses] = useState({});

    const fetchExcuse = async (excuse) => {
        try {
            const response = await axios.get(`https://excuser.herokuapp.com/v1/excuse/${excuse}/`);
          
            setExcuses(response.data[0]);
        } catch (err) {
            console.log(err.message);
        }
    }

    return (
        <div className="container overflow-y-auto grow mx-auto md:w-3/4">
            <h1 className="text-4xl text-center font-semibold capitalize underline mb-6 text-white">
                Generate believable excuses
            </h1>

            <hr className="my-4" />      

            <div className="flex flex-row justify-between space-x-5 my-6 text-white">
                <button
                    className="p-3 px-6 bg-gray-700 rounded-full hover:text-primary"
                    onClick={() => {
                        fetchExcuse('party');                        
                    }}
                >
                    Party
                </button>
                <button
                    className="p-3 px-6 bg-gray-700 rounded-full hover:text-primary"
                    onClick={() => {
                        fetchExcuse('office');                        
                    }}
                >
                    Office
                </button>
                <button
                    className="p-3 px-6 bg-gray-700 rounded-full hover:text-primary"
                    onClick={() => {
                        fetchExcuse('family');                        
                    }}
                >
                    Family
                </button>
            </div>

            <div>
                <h2 className="mx-auto my-5 text-3xl underline">{excuses?.category}</h2>
                <div className="w-full mx-auto">
                    <p className="my-5">{excuses?.excuse}</p>
                </div>
            </div>

        </div>
    )
}

export default Excuser;