import React from "react";
import "./peoples.css";

function PickedList(props) {
  return (
    <div className="card">
      <div>{props.person.name}</div>
      <div>{props.person.age}</div>
      <button
        className="remove"
        onClick={() => props.deletePicked(props.person)}
      >
        Remove from team
      </button>
    </div>
  );
}
export default PickedList;
