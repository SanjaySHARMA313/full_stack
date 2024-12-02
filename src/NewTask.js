import React, { useState } from 'react';
import "./NewTask.css"; // to the external CSS file
import Option from "./Option";

const NewTask = () => {
    const [price, setPrice] = useState(0);
    const [unitHover, setUnitHover] = useState(null); // For hover
    const [addToCartHover, setAddToCartHover] = useState(false);

    const btn = () => {
        if (price) {
            alert(`${price} USD, Item added successfully`);
            setPrice(0);
        }
    };

    return (
        <div className="maindiv">
            <div onClick={() => setPrice(10)} style={{ display: "flex", alignItems: "center" }}>
                <hr style={{ flex: 1 }} />
                <div className="yay">YAY! It's BOGO</div>
                <hr style={{ flex: 1 }} />
            </div>

            {/* Hover Effect for Unit 1 */}
            <div
                onClick={() => setPrice(10)}
                className="unitone"
                style={{
                    border: unitHover === 1 ? "2px solid #ff4500" : "2px solid grey",
                }}
                onMouseEnter={() => setUnitHover(1)}
                onMouseLeave={() => setUnitHover(null)}
            >
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <input className="inputtype" type="radio" name="unit" />
                        <div style={{ fontWeight: "bold" }}>1 Unit</div>
                        <span className="discount">10% Off</span>
                    </div>
                    <div>
                        <div className="pricebold">$10.00 USD</div>
                        <div className="price">$24.00 USD</div>
                    </div>
                </div>
                <div className="standard">Standard price</div>
                {unitHover === 1 && <Option />}
            </div>

            {/* Hover Effect for Unit 2 */}
            <div
                onClick={() => setPrice(18)}
                className="unittwo"
                style={{
                    border: unitHover === 2 ? "2px solid #ff4500" : "2px solid grey",
                }}
                onMouseEnter={() => setUnitHover(2)}
                onMouseLeave={() => setUnitHover(null)}
            >
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div></div>
                    <div className="most">MOST POPULAR</div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <input className="inputtype" type="radio" name="unit" />
                        <div style={{ fontWeight: "bold" }}>2 Units</div>
                        <span className="discount">20% Off</span>
                    </div>
                    <div>
                        <div className="pricebold">$18.00 USD</div>
                        <div className="price">$24.00 USD</div>
                    </div>
                </div>
                {unitHover === 2 && <Option />}
            </div>

            {/* Hover Effect for Unit 3 */}
            <div
                onClick={() => setPrice(24)}
                className="unitthree"
                style={{
                    border: unitHover === 3 ? "2px solid #ff4500" : "2px solid grey",
                }}
                onMouseEnter={() => setUnitHover(3)}
                onMouseLeave={() => setUnitHover(null)}
            >
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <input className="inputtype" type="radio" name="unit" />
                        <div style={{ fontWeight: "bold" }}>3 Units</div>
                        <span className="discount">30% Off</span>
                    </div>
                    <div>
                        <div className="pricebold">$24.00 USD</div>
                        <div className="price">$24.00 USD</div>
                    </div>
                </div>
                {unitHover === 3 && <Option />}
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", margin: "3px 4px" }}>
                <div className="freedelivery">Free Delivery</div>
                <div className="pricebold">Total: ${price} USD</div>
            </div>
            <button
                onClick={btn}
                className="button"
                style={{
                    backgroundColor: addToCartHover ? "#ff4500" : "red",
                }}
                onMouseEnter={() => setAddToCartHover(true)}
                onMouseLeave={() => setAddToCartHover(false)}
            >
                + Add to Cart
            </button>
        </div>
    );
};

export default NewTask;
