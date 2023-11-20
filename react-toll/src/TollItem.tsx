import  { useEffect, useState } from "react";

function TollItem({toll, onCountUpdate, onVehicleUpdate,}) : TollItemProps {
    
    const [isActive, setIsActive] = useState(false)

    const [count, setCount] = useState(0)
    const [vehicle, setVehicle] = useState('')

    useEffect(() => {
        if(isActive) {
            onCountUpdate(count);
            onVehicleUpdate(vehicle);
        }
    }, [isActive, count, vehicle]);

    function addToll() {
        if(!isActive) {
            setIsActive(true);
            setCount(count + 1);
            onCountUpdate(count);
            setVehicle(toll.toll_vehicle);
            onVehicleUpdate(vehicle);

        }
        else {
            setIsActive(false);
            setCount(0);
            onCountUpdate(0);
            onVehicleUpdate('');
        }

    }
 
    
    return (
        <button onClick={addToll} aria-label={toll.toll_vehicle} className={`flex flex-col items-center justify-center w-32 lg:w-48 2xl:w-64 h-32 lg:h-48 2xl:h-64 m-2 text-black transition-colors duration-150 rounded-md focus:shadow-outline hover:bg-gray-800/25 ${isActive ? 'bg-green-800/50': ''}`}>
            <img className="align-self-start w-24 lg:w-36 2xl:w-48 h-24 lg:h-36 2xl:h-48 m-1 " src={toll.toll_image}></img>
            <p className="align-self-end text-sm lg:text-base p-1">{toll.toll_vehicle}</p>
            <p className="align-self-end font-bold text-sm lg:text-lg">{toll.price_1} {toll.denomination_1}</p>
            <p className="align-self-end font-bold text-sm lg:text-lg">{toll.price_2} {toll.denomination_2}</p> 
        </button>
    )
}

export default TollItem