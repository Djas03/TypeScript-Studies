import React from "react";

interface Props {
    name: string;
    color?: string;
}


function Component({name, color}: Props){
    return <h1> My Component {name}</h1>
}


export default Component;