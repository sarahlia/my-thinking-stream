import {useState} from "react";

interface Props {
    name: String
}

export default function Greeter({name}: Props) {
    const [counter, setCounter] = useState(0);

    function onClick() {
        console.log("clicked!");
        setCounter(counter + 1);
    }

    return (
        <div onClick={onClick}>I want to say Hello, {name}! Clicked {counter} times.</div>
    )
}
