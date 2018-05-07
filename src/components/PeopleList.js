import React from "react";
import "./peoples.css";

function PeopleList(props) {
  return (
    <div className="card">
      <div>{props.person.name}</div>
      <div>{props.person.age}</div>
      <button
        className="select"
        onClick={() => props.handleConfirm(props.person)}
      >
        Add to Team
      </button>
    </div>
  );
}
export default PeopleList;
