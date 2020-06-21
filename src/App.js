import React, { useReducer } from "react";
import { initialState, reducer } from "./reducers";
import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";
import { connect } from "react-redux";

const App = (props) => {
	const [state, dispatch] = useReducer(initialState, reducer);
	console.log("App props:", props);
	return (
		<div className="boxes">
			<div className="box">
				<Header car={props.car} />
				<AddedFeatures car={props.car} />
			</div>
			<div className="box">
				<AdditionalFeatures additionalFeatures={props.additionalFeatures} />
				<Total car={props.car} additionalPrice={props.additionalPrice} />
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return state;
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(App);
