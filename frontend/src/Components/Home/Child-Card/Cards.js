import './Card.css';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
import axios from 'axios';


const Cards = ({ title, animation, CardAnimate, type }) => {

   

    const [cards, setCard] = useState([]);
    useEffect(() => {
        const fetchCardData = async (type) => {
            try {
                const response = await axios.get(`http://localhost:5001/postadd/${type}`);
                console.log('Response:', response.data); // Log the response data
                setCard(response.data.postData[0].slice(0,12));
            } catch (err) {
                console.error('can not fetch the card data' + err);
            }
        }
        fetchCardData(type);
    }, [type])

    return (
        <section className='post-add-card-home' id={title}>
            <Container>
                <div className='text-center' style={{ color: '#4D4D4D' }} data-aos={animation}>
                    <h2>Latest From {title}</h2>
                    <div className='text-muted'>
                        --Get Our Latest Posts--
                    </div>
                </div>
                <Row className='gy-3 my-3'>
                    {Array.isArray(cards) && cards.map(card => (

                        <Col sm={6} md={4} lg={3} key={card.post_id}>
                            <div className='holder' data-aos={CardAnimate}>
                                <Card >
                                    <Card.Body>
                                        <Card.Img variant="top" src={`http://localhost:5001/uploads/${card.post_id}/${card.room_inside_img1}`} className='custom-image-size' />
                                        <div className='price-reviews'>
                                            <Card.Link style={{ color: '#FFFFFF', background: 'green', borderRadius: '5px', paddingLeft: '2px', paddingRight: '2px' }}>Rs:{card.advertised_price}</Card.Link>
                                            <Card.Link>{card.district}</Card.Link>
                                        </div>

                        

                                       <Card.Text className='truncated-text text-muted'>
                                            {card.description}
                                       </Card.Text>

                                    <div className='d-flex justify-content-between align-items-center'>
                                        <Button href="/Description">Read More <i class="bi bi-arrow-right-circle-fill"></i></Button>
                                        <button className='heart-btn'><i class="bi bi-heart-fill"></i></button>
                                    </div>
                                    </Card.Body>
                                </Card>
                            </div>
                        </Col>
                    ))}



                </Row>

            </Container>

        </section>
    );
}

export default Cards;