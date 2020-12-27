import "./App.css";
import Show from "./components/Show";
import "bootstrap/dist/css/bootstrap.min.css";
import store from "./store";
import { fetchPost } from "./actionsCreator";

function App() {
	function fetchBtnPost() {
		store.dispatch(fetchPost());
	}

	return (
		<div className="App">
			<Show />
			<button
				className="btn btn-danger mt-2"
				onClick={() => {
					fetchBtnPost();
				}}
			>
				Fetch Post Data
			</button>
		</div>
	);
}

export default App;
