import React, {Component} from 'react';
import {Row,Col} from 'react-bootstrap';
import './css/Cards.css';

 class Cards extends Component{
    render () {
        return( 
        
        <div  className="container py-5 justify-content-around" id='stats'>
            <Row>
                <Col md={6} xl={3}>
                    <div  className="card cardBackground order-card">
                        <div  className="card-block">
                            <h2  className="m-b-20">Satisfaction</h2>
                            <h3  className="text-center "><i  className="fa fa-cart-plus f-left"></i><span>100%</span></h3>
                            <p  className="m-b-0">of our client are satisfied about our products and reorder after receiving their products</p>
                        </div>
                    </div>
                </Col>
                
                <div  className="col-md-6 col-xl-3">
                    <div  className="card cardBackground order-card">
                        <div  className="card-block">
                            <h2  className="m-b-20 ">Delivery fee</h2>
                            <h3  className="text-center "><i  className="fa fa-rocket f-left"></i><span>100%</span></h3>
                            <p  >of the delivery fee is taken in charge by our services wherever you are in the world</p>
                        </div>
                    </div>
                </div>
                <Col md={6} xl={3}>
                    <div  className="card cardBackground order-card">
                        <div  className="card-block">
                            <h2  className="m-b-20 ">French quality</h2>
                            <h3  className="text-center"><i  className="fa fa-refresh f-left"></i><span>100%</span></h3>
                            <p  className="m-b-0">of our products are handmade by a small but yet competent team, situated in France</p>
                        </div>
                    </div>
                </Col>
                
                <Col md={6} xl={3}>
                    <div  className="card cardBackground order-card">
                        <div  className="card-block">
                            <h2  className="m-b-20 ">Authentical</h2>
                            <h3  className="text-center "><i  className="fa fa-credit-card f-left"></i><span>100%</span></h3>
                            <p  className="m-b-0 ">of our products are authentical and respects the aestethic of your favourite DBH game<span  className="f-right"></span></p>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
        )
    }
}
export default Cards;