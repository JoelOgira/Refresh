import { useState } from "react";
import axios from "axios";

const Agify = () => {
    const [bio, setBio] = useState(``);
    const [name, setName] = useState(``);

    const predictAge = async () => {
        try {
            const response = await axios.get(`https://api.agify.io/?name=${name}`);
            setBio(response.data);
            setName('');
        } catch (err) {
            console.log(err.message);
        }
    }

    return (
        <div className="container overflow-y-auto grow mx-auto md:w-3/4">
            <input 
                type="text"
                className="p-3 px-4 rounded-full bg-gray-400 placeholder-black text-white focus:outline-none"
                placeholder="Enter Name"
                required
                value={name}
                onChange={e => setName(e.target.value)}
            />    
      
            <button onClick={predictAge} type="submit" className='bg-primary border border-gray-400 text-white p-3 mx-4 my-3 rounded-full px-5 hover:bg-gray-400 hover:text-black'>
                Predict Age
            </button>

            <div className="bg-primary text-white">
                <p className="my-2">Name: <span className="text-secondary">{bio?.name}</span></p>
                <p className="my-2">Age: <span className="text-secondary">{bio?.age}</span></p>
                <p className="my-2">Count: <span className="text-secondary">{bio?.count}</span></p>
            </div>
        </div>
    )
}

export default Agify;