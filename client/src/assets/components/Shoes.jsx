
function Shoes(props) {
    return (
        <div className="card w-full bg-slate-900 shadow-xl m-auto">
            <figure><img src="/img/kampanya.png" alt="Kampanya" /></figure>
            <div className="card-body">
                <h2 className="card-title text-md">
                    {props.name}!
                    <div className="badge badge-secondary">İNDİRİM</div>
                    <div className="badge badge-success badge-lg">{props.price}</div>
                </h2>
                <p>{props.description}</p>
                {/* <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                </div> */}
            </div>
        </div>
    )
}

export default Shoes;