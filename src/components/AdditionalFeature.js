import React from "react";
import { connect } from "react-redux";
import { buyItem, updateTotal } from "../actions/featureActions";

const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button
        onClick={e => {
          e.preventDefault();
          props.buyItem(props.feature.id);
          props.updateTotal();
        }}
        className="button"
      >
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default connect(null, { buyItem, updateTotal })(AdditionalFeature);
