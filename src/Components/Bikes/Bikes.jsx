import { useState } from "react";

const Bikes = () => {

    const [bikes, setBikes] = useState([
        {
          id: 1,
          bikeName: "Harley Davidson",
          completed: false
        },
        {
          id: 2,
          bikeName: "Honda",
          completed: false
        },
        {
          id: 3,
          bikeName: "Yamaha",
          completed: false
        }
      ]);
      const [motorBike, setMotorBike] = useState('');
      const [message, setMessage] = useState('');
      const [errorArea, setErrorArea] = useState(true);
    
      const addBike = () => {
        const id = bikes.length ? bikes[bikes.length - 1 ].id + 1 : 1;
        const newBike = {id, bikeName:motorBike, completed: false}
        if (motorBike === "") {
          setMessage("You cannot add an empty Item !!!")
          setErrorArea(false);
        } else {
          setBikes([...bikes, newBike]);
          setMotorBike('');
        }
      }
    
      const markedBike = (id) => {
         setBikes(bikes.map(bike => bike.id === id ? {id, bikeName: bike.bikeName, completed: !bike.completed} : bike));    
      }
    
      const deleteBike = (id) => {
        setBikes(bikes.filter((bike) => bike.id !== id));
      }

    return (
        <div className="card container mx-auto md:w-3/4">
            <ul className='my-5'>
                {
                bikes.length ?
                (bikes.map(bike => (
                    <li className={` ${(!bike.completed) ? 'bg-gray-200' : 'bg-secondary'} rounded-full px-4  flex flex-row justify-between my-3`} key={bike.id}>
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

            <input 
                type="text"
                className="p-3 px-4 rounded-full bg-gray-400 placeholder-black text-white focus:outline-none"
                placeholder="Add Bike"
                value={motorBike}
                onChange={e => setMotorBike(e.target.value)}
            />    
            
            <button className='bg-primary text-white p-3 mx-4 my-3 rounded-full px-5 hover:bg-gray-400 hover:text-black' onClick={addBike}>
                Add Bike
            </button>
            <div className={`${errorArea ? 'hidden' : 'flex flex-row'} space-x-6`}>
                <p className="text-2xl text-red-600 py-3">
                {`${message}`}
                </p>
                <button onClick={() => setErrorArea(!errorArea)} className='bg-green-500 px-4 rounded-xl hover:bg-green-100'>OK</button>
            </div>
        </div>
    )
}

export default Bikes;