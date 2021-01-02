import React from 'react';

class Navbar extends React.Component {
    constructor() {
        super()
        this.state = {
            music_state: 'stoped'
        }
        this.play = this.play.bind(this)
    }
    song = document.getElementById('song')
    play() {
        this.setState({music_state: this.state.music_state === 'stoped' ? 'play' : 'stoped'})
        if(this.state.music_state === 'stoped') {
            this.song.pause()
            console.log('paused')
        }
        else {
            this.song.play()
            console.log('playing')
        }
    }

    render() {
        return (
            <div className="navbar_dark">
                <h1>Chill my NIS</h1>
                <div>
                    <iframe width="120" height="65" src="https://www.youtube.com/embed/dpgO44UQuRc?controls=0" 
                    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; 
                    picture-in-picture; " allowfullscreen></iframe>
                </div>
            </div>
        )
    }
}

export default Navbar;