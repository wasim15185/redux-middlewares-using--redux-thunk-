import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";

const EachFriends = (props) => {
	let { post } = props;

	let listOfLis = post.map((li) => <li className="list-group-item">${li}</li>);

	return <> {listOfLis} </>;
};

const mapStateToProps = (state) => {
	return {
		post: state.post,
	};
};

export default connect(mapStateToProps)(EachFriends);
