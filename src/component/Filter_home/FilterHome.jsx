import React, { Component } from 'react';
import { Dropdown, DropdownButton, Form, Button, Col } from "react-bootstrap";
import "./filter_home.css";

class FilterHome extends Component {
    render() {
        return (
            <Form className="main-filter">
                <div className="row-form">
                    <Col className="filter-container">
                        <div controlId="exampleForm.ControlSelect1" className="filter-item-container" >
                            {/* <Form className="filter-items" as="select" >
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Form> */}
                            <DropdownButton id="dropdown-basic-button" title="Dropdown button" >
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </DropdownButton>
                        </div>
                    </Col>
                    <Col>
                        <Button>搜尋</Button>
                    </Col>
                </div>

            </Form>
        );
    }
}

export default FilterHome;