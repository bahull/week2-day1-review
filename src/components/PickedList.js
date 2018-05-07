import React from "react";
import "./peoples.css";

function PickedList(props) {
  return (
    <div class="card">
      <div>{props.person.name}</div>
      <div>{props.person.age}</div>
      <button class="remove" onClick={() => props.deletePicked(props.person)}>
        Remove from team
      </button>
    </div>
  );
}
export default PickedList;
