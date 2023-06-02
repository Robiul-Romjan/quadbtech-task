import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link, useLoaderData, useParams } from "react-router-dom";
import ShowDetailsModal from './ShowDetailsModal';


const ShowDetails = () => {
    const [modalShow, setModalShow] = React.useState(false);
    const allMovies = useLoaderData();
    const movieId = useParams();

    const thisMovie = allMovies.find(movie => movie.show.id == movieId.id);

    return (
        <div className="container mx-auto py-5">
            <Link to="/">
                <button className="btn btn-danger">Back to Home page</button>
            </Link>
            <Card className="text-center mt-4">
                <Card.Header>Genres:
                    {
                        thisMovie.show?.genres.map((item, i) => <span key={i}> {item},</span>)
                    }
                </Card.Header>
                <Card.Body>
                    <div className="row d-flex align-items-center">
                        <div className="col-lg-5">
                            <img className='img-fluid rounded' style={{ height: "500px" }} src={thisMovie.show.image.original} alt="" />
                        </div>
                        <div className="col-lg-7">
                            <Card.Title>Details of {thisMovie.show.name}</Card.Title>
                            <Card.Text>
                                <strong>Summary:</strong> {thisMovie.show.summary}
                            </Card.Text>
                            <button onClick={() => setModalShow(true)} className="btn btn-danger">Book Ticket</button>
                        </div>
                    </div>
                </Card.Body>
                <Card.Footer className="text-muted">
                    Day:
                    {thisMovie.show?.schedule?.days.map((day, i) => <span key={i}> {day ? day : "upcoming"},</span>)}
                    <span className='ms-3'>Time: {thisMovie.show?.schedule?.time ? thisMovie.show.schedule.time : "upcoming"}</span></Card.Footer>
            </Card>
            <ShowDetailsModal
                show={modalShow}
                movie={thisMovie}
                onHide={() => setModalShow(false)}
            />
        </div>
    );
};

export default ShowDetails;