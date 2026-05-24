export default function Card({title, priceannually, pricemonthly, Gigabytes, UserAllowed, SendUpTo}){
    return (
        <div className="card">
            <h2>{title}</h2>
            <h1 className="price">${priceannually}</h1>
            <h1 className="price">${pricemonthly}</h1>
            <p>{Gigabytes}</p>
            <p>{UserAllowed}</p>
            <p>{SendUpTo}</p>
            <button className="btn">Learn More</button>
        </div>
    )
}