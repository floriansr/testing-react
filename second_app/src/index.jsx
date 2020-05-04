import React from "react";
import ReactDOM from "react-dom";
import MixedContent from "./components/MixedContent";
import cat from "assets/img/cat.png";
import dog from "assets/img/dog.jpg";
import horse from "assets/img/horse.jpg";
import cow from "assets/img/cow.jpeg";
import snake from "assets/img/snake.jpeg";

class App extends React.Component {
  render() {
    return (
      <>
	    <MixedContent title="title1" text="text1" src={cat} />
	    <MixedContent title="title2" text="text2" src={dog} />
	    <MixedContent title="title3" text="text3" src={horse} />
	    <MixedContent title="title4" text="text4" src={cow} />
	    <MixedContent title="title5" text="text5" src={snake} />
	  </>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));