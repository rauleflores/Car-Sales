import React from "react";
import { connect } from "react-redux";
import { addFeature } from "../actions";

const AdditionalFeature = (props) => {
	console.log("additional features props:", props);
	return (
		<li>
			{/* Add an onClick that will let you add a feature to your car */}
			<button className="button" onClick={props.addFeature}>
				Add
			</button>
			{props.feature.name} (+${props.feature.price})
		</li>
	);
};

const mapStateToProps = (state) => {
	console.log("additional feature state:", state);
	return state;
};

const mapDispatchToProps = { addFeature };

export default connect(mapStateToProps, mapDispatchToProps)(AdditionalFeature);
