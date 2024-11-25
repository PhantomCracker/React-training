export default function ReactFeatures(props) {
    return (
        <li>
            <img src={props.imageSource} alt={props.title} />
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </li>
    )
}