import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Collapse from 'react-bootstrap/Collapse';
import { useNavigate } from 'react-router-dom';
import './SearchBar.css';



const SearchBar = () => {


    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const [minTenants, setMinTeanat] = useState('');
    const [type, setType] = useState(1);
    const [searchText, setSearchText] = useState('');
    const [minBed, setMinBed] = useState('');
    const [is_kitchen, setKitchen] = useState('');
    const [size, setSize] = useState(0);
    const [price, setPrice] = useState(1000000000000000);

    // navigate('/rental-post',{state:{minTenants,type,searchText,minBed,is_kitchen,size,price}});




    return (
        <>
            <div className="searchbar-home sticky-top" data-aos="fade-down" >


                <Navbar expand="lg" className="bg-body-tertiary" bg="light" data-bs-theme="dark">

                    <Container>

                        <div style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                            < Form>

                                <Row>
                                    <Navbar.Toggle aria-controls="basic-navbar-nav" >
                                        <span style={{ color: 'red' }}><i class="bi bi-sliders2-vertical"></i><small className='text-muted'> Filter Option</small></span>
                                    </Navbar.Toggle>
                                    <Navbar.Collapse id="basic-navbar-nav">

                                        <Form.Group as={Col} lg={1} className="d-flex justify-content-center align-items-center">
                                            <Button variant="danger" onClick={() => setOpen(!open)}
                                                aria-controls="example-collapse-text"
                                                aria-expanded={open} >
                                                <i class="bi bi-sliders"></i>
                                            </Button>
                                        </Form.Group>

                                        <Form.Group as={Col} lg={2} className="d-flex justify-content-center align-items-center" >

                                            <Form.Control type="number" placeholder="*Min Tenants" value={minTenants} onChange={(e) => setMinTeanat(e.target.value)} min='1'  />

                                        </Form.Group>


                                        <Form.Group as={Col} lg={3} className="d-flex justify-content-center align-items-center">

                                            <Form.Select aria-label="Default select example" className='text-muted' value={type} onChange={(e)=>setType(e.target.value)}>
                                                <option value="1">All Types</option>
                                                <option value="2">Boarding Room</option>
                                                <option value="3">Boarding Building</option>
                                                <option value="4">Renatal House</option>
                                            </Form.Select>

                                        </Form.Group>

                                        <Form.Group as={Col} lg={3} className="d-flex justify-content-center align-items-center mx-auto">
                                            <Form.Select aria-label="Default select example" className='text-muted' value={price} onChange={(e) => setPrice(e.target.value)} >
                                                <option value="100000000000.00">Monthly Price *Rs</option>
                                                <option value="3000.00">less than 3000</option>
                                                <option value="4000.00">less than 4000</option>
                                                <option value="8000.00">less than 8000</option>
                                                <option value="10000.00">less than 10000</option>
                                                <option value="100000000000.00">greater than 10,000</option>
                                            </Form.Select>
                                        </Form.Group>



                                        <Form.Group as={Col} lg={3} className="d-flex justify-content-center align-items-center" >
                                            <InputGroup >
                                                <Form.Control
                                                    type="search"
                                                    placeholder="District,City,Area..."
                                                    aria-label="Search"
                                                    aria-describedby="basic-addon2"
                                                    value={searchText}
                                                    onChange={(e) => setSearchText(e.target.value)}
                                                />
                                                <Button className="btn-danger" id="button-addon2" type='button'  onClick={(e) => {
                                                    navigate('/rental-post', {
                                                        state: {
                                                            minTenants,
                                                            type,
                                                            searchText,
                                                            minBed,
                                                            is_kitchen,
                                                            size,
                                                            price
                                                        }
                                                    });
                                                }} >
                                                    <i class="bi bi-search"></i>
                                                </Button>
                                            </InputGroup>
                                        </Form.Group>
                                    </Navbar.Collapse>
                                </Row>
                                <Row>
                                    <Collapse in={open}>
                                        <div id="example-collapse-text">
                                            <Row className='mt-3'>
                                                <div className="d-flex justify-content-center align-items-center" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                                                    <Form.Group as={Col} lg={3} className="d-flex justify-content-center align-items-center mx-1">

                                                        <Form.Control type="number" placeholder="*Min Beds" value={minBed} onChange={(e) => setMinBed(e.target.value)} min='1' />

                                                    </Form.Group>

                                                    <Form.Group as={Col} lg={3} className="d-flex justify-content-center align-items-center mx-1">

                                                        <Form.Control type="text" placeholder="Range of Area" />

                                                    </Form.Group>

                                                    <Form.Group as={Col} lg={3} className="d-flex justify-content-center align-items-center mx-1">
                                                        <Form.Select aria-label="Default select example" className='text-muted' value={is_kitchen.toString()} onChange={(e) => setKitchen(e.target.value === 'true')}>
                                                            <option value='false'>Exist of Kitchen</option>
                                                            <option value='true'>Need a Kitchen</option>
                                                        </Form.Select>
                                                    </Form.Group>



                                                    <Form.Group as={Col} lg={3} className="d-flex justify-content-center align-items-center mx-1">
                                                        <Form.Select aria-label="Default select example" className='text-muted' value={size} onChange={(e) => setSize(e.target.value)}>
                                                            <option value='0'>Room<small>  *sq.ft</small></option>
                                                            <option value="100">greater than 100 sq.ft</option>
                                                            <option value="500">greater than 500 sq.ft</option>
                                                            <option value="1000">greater than 1000 sq.ft</option>
                                                        </Form.Select>
                                                    </Form.Group>

                                                </div>
                                            </Row>
                                        </div>
                                    </Collapse>

                                </Row>

                            </Form>

                        </div>
                    </Container>
                </Navbar>
            </div >
        </>
    );
}

export default SearchBar;