import React from "react";
import ReactDOM from "react-dom";
import Paragraphs from "./components/Paragraphs"

class App extends React.Component {
  render() {
	return (
	  <>
	    <Paragraphs text="Bonjour" />
	    <Paragraphs text="Comment allez vous ?" />
	    <Paragraphs text="Je suis un composant" />
	  </>
	);
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));