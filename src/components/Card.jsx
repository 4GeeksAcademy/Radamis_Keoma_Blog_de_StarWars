import { Link } from "react-router-dom";

export default function CardG() {

    return (
        <div>
            <div className="card" style={{width: "18rem"}}>
                <img src="https://blog.teufelaudio.es/wp-content/uploads/2022/05/titelbild-star-wars.jpg.webp" class="card-img-top" alt="..."/>
                <div className="card-body">
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                </div>
                <div className="but">
                <button>Learn More!</button>
                <button className="like">♥</button>
                </div>
            </div>
        </div>
    );
}