import React from 'react';
import Card from '../components/Card';


export default function home (){
    return (
        <section className="Pricing">
             <div className="toggle">
                <p className="annually">Annually</p>
                <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round"></span>
                </label>
                <p className="monthly">Monthly</p>

             </div>
                
<Card />

        </section>
    )
}