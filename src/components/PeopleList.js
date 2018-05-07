import React from "react";
import "./peoples.css";

function PeopleList(props) {
  return (
    <div class="card">
      <div>{props.person.name}</div>
      <div>{props.person.age}</div>
      <button
        class={props.currClass}
        onClick={() => props.handleChange(props.person)}
      >
        {props.teamText}
      </button>
    </div>
  );
}
export default PeopleList;
