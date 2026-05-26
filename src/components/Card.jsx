import React from 'react';
import CardItem from './CardItem';
import data from '../data.js';


export default function Card(){

   const [isMonthly, setIsMonthly] = React.useState(true);


    const cardItemsMonthly = data.map((item) => (
        <CardItem
        key={item.id}
        title={item.title}
        pricemonthly={item.pricemonthly}
        Gigabytes={item.Gigabytes}
        UserAllowed={item.UserAllowed}
        SendUpTo={item.SendUpTo}
        isMonthly={isMonthly}
     
        />
    ));

    const cardItemsAnnually = data.map((item) => (
        <CardItem
        key={item.id}
        title={item.title}
        priceannually={item.priceannually}
        Gigabytes={item.Gigabytes}
        UserAllowed={item.UserAllowed}
        SendUpTo={item.SendUpTo}
      
       
        />
    ));


   
     function handleToggleMonthly(){
        setIsMonthly(!isMonthly);
       
     }
     console.log(isMonthly);
   
    return (
    <section className="pricing ">
        <h1 className="pricing-title">Our Pricing</h1>
        <div className="toggle">
            <p className="monthly">Monthly</p>
            <label className="switch">
                <input type="checkbox" onChange={handleToggleMonthly} />
                <span className="slider round"></span>
            </label>
             <p className="annually">Annually</p>
       </div>
        <div className="cardItems container">
            {isMonthly ? cardItemsMonthly : cardItemsAnnually}
        </div>
    </section>
    );
}