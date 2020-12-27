import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/posts";

//eta holo aync action creator
const fetchPost = () => {
	return async function (dispatch) {
		let res;
		try {
			res = await axios.get(url);
			let clonedata = res.data.map((obj) => obj.title);
			//dispatch er vetor action creator toiri korte partam korini
			dispatch({ type: "SUCCESS", data: clonedata });
			//ai 'dispatch' method ta as6e 'returned function' argument theke
		} catch (e) {
			console.log(e);
			dispatch({ type: "FAILURE", payload: { error: e } });
		}
	};
};

export { fetchPost };
