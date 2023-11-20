import {Modal} from 'react-bootstrap';


function MyModal(props) {
    return (
        <div>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                <img alt="" src={"http://localhost:1337"+(props.article.attributes.image.data && props.article.attributes.image.data.attributes.url)} />
                    {props.article.attributes.name}
                </Modal.Title>
                
                </Modal.Header>
                <Modal.Body>
                <h4>Description</h4>
                <p>
                    {props.article.attributes.description}
                </p>
                </Modal.Body>
                <Modal.Footer>
                <button className="myButton" onClick={() => props.addToCart(props.article)}>Add to cart</button>
                <button className="myButton" onClick={props.onHide}>Close</button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
export default MyModal;