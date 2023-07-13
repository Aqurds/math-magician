import '../App.css';

function Block(props) {
  return (
    <span className={props.classList} onClick={props.clickEvent}>{props.sign}</span>
  );
}

export default Block;
