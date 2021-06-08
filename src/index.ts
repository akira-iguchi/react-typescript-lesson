import World from './world';

const root: HTMLElement | null = document.getElementById("root")
const world = new World("Hellooooooo World!!!");
world.sayHello(root);