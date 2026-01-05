import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export function CardP({ img, data }) {
    const { name, created, uid } = data;

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
                    <button><Link to={`/demo/${uid}`}>Learn More!</Link></button>
                    <button className="like">♥</button>
                </div>
            </div>
        </div>
    );
}

export function CardG({ img, data }) {
    if (!data) return null;
    const { name, uid, eye_color, height, gender, homeworld, films } = data;

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
                    <div className="datos">
                    <h4 className="card-text">{name}</h4>
                    <p>{homeworld}</p></div>
                </div>
            </div>
            <div className="Links">
                <div className="datos">
                <h6>Colorde Ojos</h6>
                <p>{eye_color}</p>
                </div>
                <div className="datos">
                <h6>Altura</h6>
                <p>{height}</p>
                </div>
                <div className="datos">
                <h6>Genero</h6>
                <p>{gender}</p>
                </div>
            </div>

        </div>
    );
}