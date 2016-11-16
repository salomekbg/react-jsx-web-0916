const React = require('react');

class Tweet extends React.Component {
  render() {
    return (
      <div className="tweet">
        <img src="http://twitter.com/some-avatar.png" className="tweet_avatar" />
        <div className="tweet_body">
          <p>We're writing this tweet in JSX. Holy moly!</p>
        </div>
      </div>
    )
  }
}

module.exports = Tweet;
