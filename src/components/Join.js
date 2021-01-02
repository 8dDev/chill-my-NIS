import React from 'react'

class Join extends React.Component {
    constructor(props) {
        super()
        this.state = {
            link: props.link
        }
    }

    render() {
        return (
            <div className="button_container">
                <h1>Станьте частью сервера!</h1>
                <form action={this.state.link} method="get" target="_blank">
                    <button type="submit" className="join">Join</button>
                </form>
            </div>
        );
    }
}

export default Join;