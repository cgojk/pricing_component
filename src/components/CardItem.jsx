

export default function CardItem({
    title, priceannually,
     pricemonthly, Gigabytes, 
     UserAllowed, SendUpTo,
     isMonthly
     })
     {
    return (
        <div className="card">
            <h2 className="title">{title}</h2>
            <h1 className="price">
            ${isMonthly ? pricemonthly : priceannually}</h1>
            <div className="info">
              <p className="storage">{Gigabytes}</p>
              <p className="users">{UserAllowed}</p>
              <p className="send">{SendUpTo}</p>
            </div>
            <button className="btn btn-secondary">Learn More</button>
        </div>
    )
}