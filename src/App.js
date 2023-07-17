import './App.css';
import './Animal.css';
import {useState} from 'react';
import Animal from './Animal';
function getRandomAnimal(){
    const animals = ['bird','cat','cow','dog'];
    return animals[Math.floor(Math.random() * animals.length)];
}
function App(){    
    const [animals,setAnimals] = useState([]);

    const handleClick = () =>{
        setAnimals([...animals,getRandomAnimal()]);
        
    };
    const AnimalList = animals.map((animal,i)=>{
        return <Animal type={animal} key={i}></Animal>;
    });
   

    return <>
    <button onClick={handleClick}>Add Animal</button>
    <div className="animal-list">{AnimalList}</div>
    </>
}
export default App;