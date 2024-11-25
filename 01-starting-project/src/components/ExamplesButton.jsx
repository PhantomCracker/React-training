export default function ExamplesButton(props) {
  return (
    <li>
      <button
        className={props.isSelected ? "active" : ""}
        onClick={props.onSelect}
      >
        {props.children}
      </button>
    </li>
  );
}
