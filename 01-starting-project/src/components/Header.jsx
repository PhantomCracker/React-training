import reactLogo from '../assets/react-core-concepts.png';

function genRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
}
  
export default function Header() {
    const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];
    const descriptionOfReact = reactDescriptions[genRandomInt(2)];

    return (
        <header>
            <img src={reactLogo} alt="Stylized atom" />
            <h1>React Essentials</h1>
            <p>
                { descriptionOfReact } React concepts you will need for almost any app you are
                going to build!
            </p>
        </header>
    )
}