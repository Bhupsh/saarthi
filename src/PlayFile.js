import React from 'react'
import { Link, withRouter } from 'react-router-dom';

class PlayFile extends React.Component
{
    
    
    render()
    {
        return(
            <div>
        <audio ref="audio_tag" src="http://localhost/react/02%20Titli%20-%20Chennai%20Express.mp3" controls autoPlay/>
      </div>
        )
    }
}

// I have tried my best but i wasnt able to create local api end point for the audio file so i gave it a local api and a local file name 


export default withRouter(PlayFile);