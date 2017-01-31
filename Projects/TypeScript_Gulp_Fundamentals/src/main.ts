import {greet} from "./greet";

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = greet(name);
}

showHello("greeting", "TypeScript");