import React from "react";

class MixedContent extends React.Component {
  
  sayHeyOnClick = () => {
    console.log("hey");
  };

  render() {
    const { title, text, src} = this.props;

    return (
      <>
      	<h2>{title}</h2>
        <p>{text}</p>
        <img onClick={this.sayHeyOnClick} src={src} alt={text} />
      </>
    );
  }
}

export default MixedContent;