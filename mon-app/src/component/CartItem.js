import './css/Cart.css'


function CartItem(props){

    return(
        <>
            
            <div className="cartWrap text-white">
                <div className="items odd">
                    <div className="infoWrap"> 
                        <div className="cartSection">
                            <img src={"http://localhost:1337"+(props.element.attributes.image.data && props.element.attributes.image.data.attributes.url)} alt="" className="itemImg" />
                            <h3>{props.element.attributes.name}</h3>
                            <p className="stockStatus"> In Stock</p>
                        </div>     
                        
                        <div className="prodTotal cartSection text-end">
                            <p>${props.element.attributes.price}</p>
                        </div>
                        <div className="cartSection removeWrap text-end">
                            <p onClick={() => props.removeArticle(props.element)} className="myButton">x</p>
                        </div>
                    </div>
                </div>
            </div>
             
        </>
    );
}

export default CartItem;