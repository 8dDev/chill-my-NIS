import React from 'react'

class Info extends React.Component {
    render() {
        return (
            <div>
                <div className="gif">
                    <img src="https://media.giphy.com/media/l0Iych4GHWMRxci2I/giphy.gif"/>
                    <p>This is Doggy. Doggy loves Chill my NIS. Be like Doggy</p>
                </div>
                <div className="info">
                    <div>
                        <h5>Created by: Era💻</h5>
                        <img className="avatar" src="https://i.pinimg.com/originals/6d/74/1b/6d741b30eb8014afe1d9030c932eed7e.png"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Info;