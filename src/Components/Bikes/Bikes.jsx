import { useState, useContext } from "react";
import DataContext from "../../Context/DataContext";
import api from "../../api/baseUrl"

const Bikes = () => {
  const { bikes, setBikes, error, isLoading } = useContext(DataContext);
    
  const [motorBike, setMotorBike] = useState('');

  const addBike = async (e) => {
    e.preventDefault();
    const id = bikes.length ? bikes[bikes.length - 1 ].id + 1 : 1;
    const newBike = {id, bikeName:motorBike, completed: false}

    try {
      const response = await api.post('/bikes', newBike);      
      setBikes([...bikes, response.data]);
      setMotorBike('');      
    } catch (err) {
      console.log(err.message);
    }    
  }

  const markedBike = async (id) => {
    
    setBikes((bikes || []).map(bike => bike?.id === id ? {...bike, completed: !bike?.completed} : bike ))
  }

  const deleteBike = async (id) => {
    try {
      await api.delete(`/bikes/${id}`);
      setBikes(bikes.filter((bike) => bike.id !== id));
    } catch (err) {
      console.log(err.message)
    }
  }

  return (
    <div className="card container overflow-y-auto grow mx-auto md:w-3/4">
        <ul className='my-5'>
            {
            bikes.length ?
            (bikes.map(bike => (
                <li className={` ${(!bike?.completed) ? 'bg-gray-200' : 'bg-secondary'} rounded-full px-4  flex flex-row justify-between my-3`} key={bike.id}>
                <p className='align-baseline py-4'>{bike.bikeName} </p>
                <div className='flex flex-row space-x-4 my-2'>
                    <button onClick={() => markedBike(bike.id)} className={`py-2 px-4 rounded-full bg-gray-400 hover:bg-primary hover:text-white`}>Marked</button>
                    <button onClick={() => deleteBike(bike.id)} className='bg-primary py-2 px-4  rounded-full cursor-pointer text-white hover:bg-red-500'>Delete</button>
                </div>
                </li>
            ))) : 
            (<p>There are No bikes in the list</p>)
            }
        </ul>

        <form onSubmit={addBike}>
          <input 
              type="text"
              className="p-3 px-4 rounded-full bg-gray-400 placeholder-black text-white focus:outline-none"
              placeholder="Add Bike"
              required
              value={motorBike}
              onChange={e => setMotorBike(e.target.value)}
          />    
          
          <button type="submit" className='bg-primary border border-gray-400 text-white p-3 mx-4 my-3 rounded-full px-5 hover:bg-gray-400 hover:text-black'>
              Add Bike
          </button>
        </form>

    </div>
  )
}

export default Bikes;