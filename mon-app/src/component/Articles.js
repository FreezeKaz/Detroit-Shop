
import './css/Articles.css'
import React from 'react';
import MyModal from './Modal';






function Articles(props){
    const [modalShow, setModalShow] = React.useState(false);

        return(

            <>
            <div className='col-md-3 pt-3'>
                <div className="shop-card">
                    <div className="title">
                        {props.article.attributes.name}
                    </div>
                    <div className="desc text-white">  
                        {props.article.attributes.label}
                    </div>
                    <figure data-color="#E24938, #A30F22">
                        <img alt="" src={"http://localhost:1337"+(props.article.attributes.image.data && props.article.attributes.image.data.attributes.url)} />
                    </figure>
                    <div className="cta">
                        <div className="price">{props.article.attributes.price}€</div>
                        <button className="myButton" onClick={() => props.addToCart(props.article)}>Add to cart</button>
                    </div>
                    <div className="More">
                        <button className="myButton " onClick={() => setModalShow(true)}>More</button>   
                        <MyModal    
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                            article = {props.article}
                            addToCart={props.addToCart}
                        /> 
                    </div>
                </div>  
                </div>


            </>
        );

}

export default Articles;