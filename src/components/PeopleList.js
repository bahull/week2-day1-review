import React from "react";
import "./peoples.css";

function PeopleList(props) {
  return (
    <div class="card">
      <div>{props.person.name}</div>
      <div>{props.person.age}</div>
      <button class="select" onClick={() => props.handleConfirm(props.person)}>
        Add to team
      </button>
    </div>
  );
}
export default PeopleList;
