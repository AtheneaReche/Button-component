import React from "react";
import "./App.css";

import Button from "./Button";

const App = () =>{

    return(
        <div>
            <h1>Buttons</h1>
            <div className="first">
                    <h5>{"<Button />"}</h5>
                    <Button/>
                    <h5>&:hover, &:focus</h5>
                    <Button/>
                </div>

                <div className="second">
                    <h5>{"<Button variant=”outline” />"}</h5>
                    <Button variant = "outline"/>
                    <h5>&:hover, &:focus</h5>
                    <Button/>
                </div>

                <div className="third">
                    <h5>{"<Button variant=”text” />"}</h5>
                    <Button variant = "text"/>
                    <h5>&:hover, &:focus</h5>
                    <Button/>
                </div>

                <div className="fourth">
                    <h5>{"<Button disableShadow />"}</h5>
                    <Button disableShadow/>
                </div>

                <div className="fifth">
                    <h5>{"<Button disabled />"}</h5>
                    <Button disabled/>
                    <h5>{"<Button variant=”text” disabled />"}</h5>
                    <Button variant = "text" disabled/>
                </div>

                <div className="sixth">
                    <h5>{"<Button disabled />"}</h5>
                    <Button disabled/>
                    <h5>{"<Button variant=”text” disabled />"}</h5>
                    <Button variant = "text" disabled/>
                </div>

                <div className="seventh">
                    <h5>{"<Button startIcon=”material-symbols-outlined” />"}</h5>
                    <Button startIcon = "fa-cart-plus"/>
                    <h5>{"<Button endIcon=”material-symbols-outlined” />"}</h5>
                    <Button endIcon = "fa-cart-plus"/>
                </div>

                <div className="eighth">
                    <h5>{"<Button size=”sm” />"}</h5>
                    <Button size = "sm"/>
                    <h5>{"<Button size=”md” />"}</h5>
                    <Button size = "md"/>
                    <h5>{"<Button size=”lg” />"}</h5>
                    <Button size = "lg"/>
                </div>

                <div className="ninth">
                    <h5>{"<Button color=”default” />"}</h5>
                    <Button/>
                    <h5>{"<Button color=”primary” />"}</h5>
                    <Button color = "primary"/>
                    <h5>{"<Button color=”secondary” />"}</h5>
                    <Button color = "secondary">Secondary</Button>
                    <h5>{"<Button color=”danger” />"}</h5>
                    <Button color = "danger">Danger</Button>
                </div>

                <div className="tenth">
                    <h5>{"&:hover, &:focus"}</h5>
                    <Button>Default</Button>
                    <Button>Secondary</Button>
                    <Button>Secondary</Button>
                    <Button>Danger</Button>
                </div>
        </div>
    );
};

export default App;
