import React from 'react';
import CardItem from './CardItem';
import data from '../data.js';


export default function Card(){
    return (
        <div className="cardItems">
            {data.map((item, index) => (
                <CardItem key={index} {...item} />
            ))}
        </div>
    )
}