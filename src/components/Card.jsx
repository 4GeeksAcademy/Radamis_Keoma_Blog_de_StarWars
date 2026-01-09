import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export function CardP({ img, data }) {
    const { store, dispatch } = useGlobalReducer();
    const { name, created, uid } = data;

    const isFavorito = store.favoritos.some(fav => fav.uid === uid && fav.type === "personaje");

    const toggleFavorito = () => {
        if (isFavorito) {
            dispatch({
                type: "delete_favoritos",
                payload: { uid, type: "personaje" }
            });
        }
        else {
            dispatch({
                type: "add_favoritos",
                payload: { uid, name, img, type: "personaje" }
            });
        }
    };

    return (
        <div>
            <div className="card" style={{ width: "16rem" }}>
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
                    <button>
                        <Link to={`/demo/${uid}`}>Learn More!</Link>
                    </button>
                    <button className="like" onClick={toggleFavorito}>
                        {isFavorito ? "❤️" : "🤍"}
                    </button>
                </div>
            </div>
        </div>
    );
}

export function CardPdos({ img, data }) {
    const { store, dispatch } = useGlobalReducer();
    const { name, created, uid } = data;

    const isFavorito = store.favoritos.some(fav => fav.uid === uid && fav.type === "planeta");

    const toggleFavorito = () => {
        if (isFavorito) {
            dispatch({
                type: "delete_favoritos",
                payload: { uid, type: "planeta" }
            });
        }
        else {
            dispatch({
                type: "add_favoritos",
                payload: { uid, name, img, type: "planeta" }
            });
        }
    };
    return (
        <div>
            <div className="card" style={{ width: "16rem" }}>
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
                    <button><Link to={`/demos/${uid}`}>Learn More!</Link></button>
                    <button className="like" onClick={toggleFavorito}>
                        {isFavorito ? "❤️" : "🤍"}
                    </button>

                </div>
            </div>
        </div>
    );
}

export function CardPtres({ img, data }) {
    const { store, dispatch } = useGlobalReducer();
    const { name, created, uid } = data;

    const isFavorito = store.favoritos.some(fav => fav.uid === uid && fav.type === "veiculo");

    const toggleFavorito = () => {
        if (isFavorito) {
            dispatch({
                type: "delete_favoritos",
                payload: { uid, type: "veiculo" }
            });
        }
        else {
            dispatch({
                type: "add_favoritos",
                payload: { uid, name, img, type: "veiculo" }
            });
        }
    };

    return (
        <div>
            <div className="card" style={{ width: "16rem" }}>
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
                    <button><Link to={`/demoss/${uid}`}>Learn More!</Link></button>
                    <button className="like" onClick={toggleFavorito}>
                        {isFavorito ? "❤️" : "🤍"}
                    </button>

                </div>
            </div>
        </div>
    );
}

export function CardG({ img, data }) {
    if (!data) return null;
    const { uid, properties } = data;
    const { name, eye_color, height, gender, created, edited, birth_year, hair_color } = properties;

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
                        <div className="cajaInfo">
                            <h4 className="card-text">{name}</h4>
                            <p>Pelo: {hair_color}</p>
                            <p>Ojos: {eye_color}</p>
                            <p>Genero: {gender}</p>
                            <p>Creado: {created}</p>
                            <p>Editado: {edited}</p>
                            <p>Cumpleaños: {birth_year}</p>
                        </div>
                    </div>
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


export function CardGdos({ img, data }) {
    if (!data) return null;
    const { uid, properties } = data;
    const { name, climate, population, diameter, rotation_period, terrain, gravity } = properties;

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
                        <div className="cajaInfo">
                            <h4 className="card-text">{name}</h4>
                            <p>Clima: {climate}</p>
                            <p>Populación: {population}</p>
                            <p>Diametro: {diameter}</p>
                            <p>Rotación: {rotation_period}</p>
                            <p>Terreno: {terrain}</p>
                            <p>Gravidade: {gravity}</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export function CardGtres({ img, data }) {
    if (!data) return null;
    const { uid, properties } = data;
    const { name, consumables, cargo_capacity, passengers, crew, length, model } = properties;

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
                        <div className="cajaInfo">
                            <h4 className="card-text">{name}</h4>
                            <p>Consumibles: {consumables}</p>
                            <p>Capacidad de carga: {cargo_capacity}</p>
                            <p>Pasajeros: {passengers}</p>
                            <p>Multitud: {crew}</p>
                            <p>Longitud: {length}</p>
                            <p>Modelo: {model}</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}