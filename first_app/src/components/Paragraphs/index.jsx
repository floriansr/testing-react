import React from 'react';
import cat from "assets/img/cat.jpeg";


class Paragraphs extends React.Component {
  render() {
    const { text } = this.props;
    return (
      <>
        <p>{text}</p>;
        <img src={cat} alt="" />
      </>
    );
  }
}

export default Paragraphs;