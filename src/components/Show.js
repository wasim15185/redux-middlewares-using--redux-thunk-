import React from "react";
import EachFriends from "./EachFriends";
import "bootstrap/dist/css/bootstrap.min.css";

export default function () {
	return (
		<>
			<h2>Frineds List</h2>
			<ul className="list-group">
				<EachFriends />
			</ul>
		</>
	);
}
