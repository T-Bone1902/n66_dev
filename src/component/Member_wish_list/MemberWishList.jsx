import React, { Component } from 'react';
import { Accordion, Card, Form, Button, Row, Col } from 'react-bootstrap';
import sotckholm from "./img/sotckholm-lhiver-1221 (2).jpg";
import { ReactComponent as Calendar } from "./img/calendar.svg";
import { ReactComponent as Like } from "./img/like.svg";
import './member_wish_list.css'



class WishList extends Component {
    state = {}
    render() {
        return (
            <div className="wish-list-container">
                <Row>
                    <Col className="wish-list-title">
                        <span>願望清單</span>
                    </Col>
                </Row>
                <Row >
                    <Col className="card-container d-flex">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={sotckholm} />
                            <Card.Body className="py-3">
                                <span style={{ color: '#96daf0' }}>瑞典</span>
                                <Card.Title className="mt-1 mb-2">冬季的斯德哥爾摩</Card.Title>
                                <div className="d-flex align-items-center mb-2">
                                    <Calendar />
                                    <span className="ml-2">5天</span>
                                    <span className="vertical-align-middle product-duration">2020/01/04 - 2020/01/09</span>
                                </div>
                                <div>
                                    <h5>NT$ 18,000</h5>
                                </div>
                            </Card.Body>
                            <Card.Footer className="text-muted justify-content-center d-flex align-items-center"><Like /><span className="pl-1">移出願望清單</span></Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </div>

        );
    }
}

export default WishList;