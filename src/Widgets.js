import React from 'react';
import './Widgets.css';
import {TwitterTweetEmbed} from 'react-twitter-embed'
import { Search } from '@material-ui/icons';

function Widgets() {
    return (
        <div  className="widgets">
            <div className="widgets__input">
                <Search className="widgets_searchIcon" />
                <input placeholder="Search" type="text" />
            </div>

            <div className="widgets_widgetContainer">
                <h2>What's Happening</h2>

                <TwitterTweetEmbed tweetId={"1305052651432935425"} />
            </div>
        </div>
    )
}

export default Widgets