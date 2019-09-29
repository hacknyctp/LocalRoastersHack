import React, { Component } from 'react';
import "../styles/Slides.css"


const Slides = ({ price, coffee, name, img, address, beans }) => {
    for (let i = 0; i < 4; i++) {

    }
    const filled = false;

    return (
        <div className="e-flex align-items-center justify-content border m-3 p-3" style={{ width: "100%" }}>
            <h1> {name} </h1>
            <hr />
            <div style={{ padding: "0 100px" }}>
                <img className="img-fluid rounded mt-3 mb-3" src={img} />
            </div>
            <p style={{ float: "right ", fontSize: "2rem" }}>${price}</p>
            <div style={{ width: "60%" }}>
                {beans == 1 ?
                    <div>
                        <img className="img" src={require("../assets/coffee-grain-fill.svg")} />
                        <img className="img" src={require("../assets/coffee-grain.svg")} />
                        <img className="img" src={require("../assets/coffee-grain.svg")} />
                        <img className="img" src={require("../assets/coffee-grain.svg")} /> </div> : null}
                {beans == 2 ?
                    <div>
                        <img className="img" src={require("../assets/coffee-grain-fill.svg")} />
                        <img className="img" src={require("../assets/coffee-grain-fill.svg")} />
                        <img className="img" src={require("../assets/coffee-grain.svg")} />
                        <img className="img" src={require("../assets/coffee-grain.svg")} /> </div> : null}
                {beans == 3 ?
                    <div>
                        <img className="img" src={require("../assets/coffee-grain-fill.svg")} />
                        <img className="img" src={require("../assets/coffee-grain-fill.svg")} />
                        <img className="img" src={require("../assets/coffee-grain-fill.svg")} />
                        <img className="img" src={require("../assets/coffee-grain.svg")} /> </div> : null}
                {beans == 4 ?
                    <div>
                        <img className="img" src={require("../assets/coffee-grain-fill.svg")} />
                        <img className="img" src={require("../assets/coffee-grain-fill.svg")} />
                        <img className="img" src={require("../assets/coffee-grain-fill.svg")} />
                        <img className="img" src={require("../assets/coffee-grain-fill.svg")} /> </div> : null}

            </div>
            <br />
            <a className="btn btn-success" href={`https://www.google.com/maps/place/${address}`}> Take me </a>
        </div >
    )
}

export default Slides;