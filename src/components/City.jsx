import { Link } from "react-router-dom";

function City(props) {
  return (
    <Link to={`/${props.name}`}>
      <div className="city">
        {props.name}
      </div>
    </Link>
  );
}

export default City;
