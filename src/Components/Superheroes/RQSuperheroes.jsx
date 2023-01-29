import { useQuery } from "react-query";
import axios from "axios";

const RQSuperheroes = () => {
    const { data: heroes, isError, isLoading, refetch } = useQuery(['super-heroes'], async () => {
        const res = await axios.get(`http://localhost:6500/superheroes`);
        return res.data;
    },
    {   
        enabled: false,
        refetchOnMount: true,
        refetchOnWindowFocus: true,
        refetchInterval: 2000,
        refetchIntervalInBackground: true,
    } 
    )

    return (
        <div className="flex flex-col items-center mx-auto bg-cyan-900 p-6 w-3/4">
            
            {isLoading && <p>Superheroes on the way... </p>}

            {!isLoading && isError  && <p>Your heroes will disappoint you!!!</p>}
            
            {!isLoading && !isError && 
                <ul className="my-6">
                    {(heroes) ?
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

            <button onClick={refetch} className="bg-secondary rounded-full py-3 px-6 mt-4">
                Summon Superheroes
            </button>

        </div>
    )
}

export default RQSuperheroes;