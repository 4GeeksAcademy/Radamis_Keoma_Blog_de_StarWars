import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export function CardP({ img, data }) {
    const { name, created } = data;

    return (
        <div>
            <div className="card" style={{ width: "18rem" }}>
                <img
                    src={img}
                    className="card-img-top"
                    alt={name}
                    onError={(e) => {
                        e.target.src =
                            "https://starwars-visualguide.com/assets/img/placeholder.jpg";
                    }}
                />
                <div className="card-body">
                    <h4 className="card-text">{name}</h4>
                    <span>{created}</span>
                </div>
                <div className="but">
                    <button><Link to={`/demo/:uid`}>Learn More!</Link></button>
                    <button className="like">♥</button>
                </div>
            </div>
        </div>
    );
}

export function CardG({ img, data }) {
    if (!data) return null;
    const { name, uid } = data;

    return (
        <div className="card1">
            <div className="cardG">
                <div className="cardBody">
                    <img src={img}
                        className="card-img-top"
                        alt={name}
                        onError={(e) => {
                            e.target.src =
                                "https://starwars-visualguide.com/assets/img/placeholder.jpg";
                        }}
                    />
                    <p className="card-text">{name}</p>
                </div>
            </div>
            <div className="Links">
                <Link to={`/demo/${uid}`}>Color de Ojos</Link>
                <Link to={`/demo/${uid}`}>Altura</Link>
                <Link to={`/demo/${uid}`}>Massa</Link>
                <Link to={`/demo/${uid}`}>Gênero</Link>
            </div>

        </div>
    );
}