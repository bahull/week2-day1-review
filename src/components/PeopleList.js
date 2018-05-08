import React from "react";
import "./peoples.css";

function PeopleList(props) {
  return (
    <div className="card">
      <div>{props.person.name}</div>
      <div>{props.person.age}</div>
      <button
        className={props.currClass}
        onClick={() => props.handleConfirm(props.person)}
      >
        {props.text}
      </button>
    </div>
  );
}
export default PeopleList;
