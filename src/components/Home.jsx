import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";


const Home = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch("https://api.tvmaze.com/search/shows?q=all")
            .then(res => res.json())
            .then(data => setMovies(data))
    }, [])

    return (
        <div className="container mx-auto py-5">
            <h2 className="text-center mb-4">All Show</h2>
            <div className="row">
                {
                    movies?.map(movie =>
                        <div key={movie.show.id} className="col-lg-4 mb-4">
                            <Card bg="success">
                                <Card.Img variant="top" style={{ height: "500px" }} src={movie.show.image.original} />
                                <Card.Body>
                                    <div className="d-flex justify-content-between">
                                        <Card.Title className="text-center text-white">{movie.show.name}</Card.Title>
                                        <Card.Title className="text-white"><FaStar /> {movie.show?.rating?.average} </Card.Title>
                                    </div>
                                    <hr />
                                    <div className="text-center">
                                        <Link to={`/show-details/${movie.show.id}`}>
                                            <button className="btn btn-danger">Show Details</button></Link>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>)
                }
            </div>
        </div>
    );
};

export default Home;