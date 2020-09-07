import React from 'react';
import './VideoFooter.css';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import Ticker from 'react-ticker';

const VideoFooter = ({channel, description, song}) => {
    return (
        <div className="video_footer">
            <div className="video_footer_text">
                <h3>@{channel}</h3>
                <p>{description}</p>
                <div className="video_footer_ticker">
                    <MusicNoteIcon className="video_footer_icon"/>
                    <Ticker mode="smooth">
                        {({index}) => (
                            <>
                                <p>{song}</p>
                            </>
                        )

                        }
                    </Ticker>
                </div>
            </div>
            <img className="video_footer_spinner" src="https://static.thenounproject.com/png/934821-200.png" alt="spinner"/>
        </div>
    );
}
export default VideoFooter;