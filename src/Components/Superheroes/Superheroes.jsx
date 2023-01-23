import axios from "axios";
import { useState, useEffect } from "react";

const Superheroes = () => {
    const [heroes, setHeroes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchHeroes = async () => {
        try {
            const res = await axios.get(`http://localhost:4500/superheroes`);
                setHeroes(res.data);            
            setError(null);
        } catch (err) {
            setError(err.message);
            setHeroes([]);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchHeroes();
    }, [])

    return (
        <div className="flex flex-col items-center mx-auto bg-cyan-900 p-6 w-3/4">
            
            {isLoading && <p>Superheroes on the way... </p>}

            {!isLoading && error  && <p>Your heroes will disappoint you!!!</p>}
            
            {!isLoading && !error && 
                <ul className="my-6">
                    {heroes?.length ?
                        (heroes || []).map(hero => 
                            <li key={hero?.id} className="py-3">
                                Name: {hero?.name} <br />
                                AlterEgo: {hero?.alterEgo}
                            </li>
                            
                        )
                    : (
                        <p>
                            There are no heroes in this city
                        </p>
                    )}
                </ul>
            }

        </div>
    )
}

export default Superheroes;