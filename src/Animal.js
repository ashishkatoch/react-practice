import {useState} from 'react';
import cat from './svg/cat.svg';
import dog from './svg/dog.svg';
import cow from './svg/cow.svg';
import bird from './svg/bird.svg';
import heart from './svg/heart.svg';
export default function Animal({type}){
    const svgMap = {cat,dog,cow,bird};
    const [size,setSize] =useState(30);
    const handleIncreaseSize = ()=>{
        setSize(size+5);
    }
return <>
<div className="animal" onClick={handleIncreaseSize}>
    <img alt="animal" src={svgMap[type]}></img>
    <img style={{width:size+'px'}} className="heart" alt="heart" src={heart}></img> </div>
</>;
}
