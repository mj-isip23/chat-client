import React from 'react'
import ReactEmoji from 'react-emoji'

import './message.css'

const Message = ({ message: { user, text }, name }) => (
    user === name ? (
        <div className="messageContainer justifyEnd">
            <p className="sentText pr-10">
                {name}
            </p>
            <div className="messageBox backgroundBlue">
                <p className="messageText colorWhite">
                    {ReactEmoji.emojify(text)}
                </p>
            </div>
        </div>
    ) : (
        <div className="messageContainer justifyStart">
            <div className="messageBox backgroundWhite">
                <p className="messageText colorDark">
                    {ReactEmoji.emojify(text)}
                </p>
            </div>
            <p className="sentText pl-10">
                {user}
            </p>
        </div>
    )
)

export default Message