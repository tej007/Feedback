import {Component} from 'react'

class Feedback extends Component {
  state = {setFeedback: false}

  onSettingState = () => this.setState({setFeedback: true})

  onFeedbackQuestion = () => {
    const {feedbackData} = this.props
    const {emojis} = feedbackData
    return (
      <div className="feed-back-question-container">
        <h1 className="feedback-title">
          How satisfied are you with our customer support performance?
        </h1>
        <ul className="emojis-list-container">
          {emojis.map(emoji => (
            <li
              key={emoji.id}
              className="list-item-container"
              onClick={this.onSettingState}
            >
              <img src={emoji.imageUrl} alt={emoji.name} className="emoji" />
              <p className="emoji-title">{emoji.name}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  onFeedbackSummary = () => {
    const {feedbackData} = this.props
    const {loveEmojiUrl} = feedbackData
    return (
      <div className="feedback-summary-container">
        <img src={loveEmojiUrl} alt="loveEmoji" className="love-emoji" />

        <p className="feedback-summary">
          We’ll use your feedback to improve our customer support performance.
        </p>
      </div>
    )
  }

  render() {
    return (
      <div className="app=container">
        <div className="feedback-card">
          {setFeedback ? this.onFeedbackSummary() : this.onFeedbackQuestion()}
        </div>
      </div>
    )
  }
}

export default Feedback
