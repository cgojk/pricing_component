import React from 'react';
import CardItem from './CardItem';
import data from '../data';


export default function Card(){
    return (
        <div className="card">
            {data.map((item, index) => (
                <CardItem key={index} {...item} />
            ))}
        </div>
    )
}