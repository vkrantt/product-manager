import React, { useState } from 'react'
import { Button, Modal, Container, Form, Row, Col } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../../state/store'

function MydModalWithGrid(props: any) {
    const dispatch: any = useDispatch();
    let [id, setId] = useState(6)
    const [product, setProduct] = useState({
        id: id,
        productName: '',
        category: '',
        freshness: '',
        description: '',
        price: '',
        comment: '',
        date: "2022-06-01"
    })

    const handleChange = (e: any) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e: any) => {
        setId(++id)
        e.preventDefault();
        dispatch(actionCreators.addProduct(product));
        props.onHide();
        setProduct({
            id: id,
            productName: '',
            category: '',
            freshness: '',
            description: '',
            price: '',
            comment: '',
            date: ''
        })
    }
    return (
        <Modal  {...props} aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header style={{ background: 'rgba(0, 0, 0, 0.88)' }} closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add new product
                </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ background: 'rgba(0, 0, 0, 0.88)' }} className="show-grid">
                <Container>
                    <Form>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>Product Name</Form.Label>
                                    <Form.Control type="text" placeholder="Name" name="productName" onChange={handleChange} value={product.productName} />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>Category</Form.Label>
                                    <Form.Control type="text" placeholder="Category" name="category" onChange={handleChange} value={product.category} />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>Freshness</Form.Label>
                                    <Form.Control type="text" placeholder="Freshness" name="freshness" onChange={handleChange} value={product.freshness} />
                                </Form.Group>
                            </Col>

                        </Row>

                        <Form.Group className="mb-3">
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text" placeholder="Enter Description" name="description" onChange={handleChange} value={product.description} />
                        </Form.Group>

                        <Row>
                            <Col lg="2">
                                <Form.Group className="mb-3">
                                    <Form.Label>Price</Form.Label>
                                    <Form.Control type="text" placeholder="$" name="price" onChange={handleChange} value={product.price} />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>Comment</Form.Label>
                                    <Form.Control type="text" placeholder="Comment" name="comment" onChange={handleChange} value={product.comment} />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Button size='sm' variant="primary" type="button" onClick={handleSubmit}>
                            Submit
                        </Button>
                    </Form>
                </Container>
            </Modal.Body>
            <Modal.Footer style={{ background: 'rgba(0, 0, 0, 0.88)' }}>
                <Button size='sm' onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

const PMModal = () => {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <Button variant="primary" onClick={() => setModalShow(true)}>
                Add Product
            </Button>

            <MydModalWithGrid show={modalShow} onHide={() => setModalShow(false)} />
        </>
    );
}

export default PMModal