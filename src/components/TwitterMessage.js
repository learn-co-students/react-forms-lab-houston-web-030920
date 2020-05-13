import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      tweet: ''
    };
  }

  handleTweetChange = event => {
    this.setState({
      tweet: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={ this.state.tweet } onChange={ event => this.handleTweetChange(event) } />
        <span>{ this.props.maxChars - this.state.tweet.length }</span>
      </div>
    );
  }
}

export default TwitterMessage;
