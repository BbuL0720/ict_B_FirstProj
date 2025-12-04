import React from 'react'

const SlackPage: React.FC = () => {
  return (
    <div>
      
<div className="slack-container d-flex">

    <div className="workspace-bar d-flex flex-column align-items-center">
        <div className="workspace-icon">
            <span>WS</span>
        </div>
        <button className="btn btn-dark mt-3">+</button>
    </div>

    <div className="sidebar p-3">
        <div className="workspace-title">
            My Workspace
        </div>

        <div className="section-title mt-4">CHANNELS</div>
        <div className="nav flex-column">
            <a className="nav-link active"># general</a>
            <a className="nav-link"># random</a>
            <a className="nav-link"># design</a>
            <a className="nav-link"># dev-team</a>
        </div>

        <div className="section-title mt-4">DIRECT MESSAGES</div>
        <div className="nav flex-column">
            <a className="nav-link">John Doe</a>
            <a className="nav-link">Jane</a>
            <a className="nav-link">Bot Assistant</a>
        </div>
    </div>

    <div className="chat-area d-flex flex-column">

        <div className="chat-header d-flex justify-content-between align-items-center px-3">
            <div className="channel-title"># general</div>
            <input className="form-control search-box" placeholder="Search..." />
        </div>

        <div className="messages p-3 flex-grow-1">
            <div className="message mb-3">
                <strong>John</strong> <span className="text-muted small">10:12 AM</span>
                <div>Hello team! 👋</div>
            </div>

            <div className="message mb-3">
                <strong>You</strong> <span className="text-muted small">10:13 AM</span>
                <div>Hi John!</div>
            </div>
        </div>

        <div className="input-area p-3">
            <input className="form-control" placeholder="Message #general..." />
        </div>

    </div>

</div>
    </div>
  )
}

export default SlackPage