import React from 'react'
import Sound from 'react-sound'

class MakeSound extends Component {
    state = { 

    }
    render() { 
        return ( 
        <Sound
          url='../sounds/chicken-sound.mp3'
          playStatus={Sound.status.PLAYING}
          playFromPosition={300 /* in milliseconds */}
          onLoading={this.handleSongLoading}
          onPlaying={this.handleSongPlaying}
          onFinishedPlaying={this.handleSongFinishedPlaying}
        />
         );
    }
}
 
export default MakeSound;