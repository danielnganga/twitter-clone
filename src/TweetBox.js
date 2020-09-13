import React, {useState} from 'react';
import './TweetBox.css';
import {Avatar, Button} from "@material-ui/core";
import db from './firebase';


function TweetBox () {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");

    const sendTweet = e => {
        e.preventDefault();

        db.collection('posts').add({
            displayName: 'Daniel Njoroge',
            userName: 'danielnjoroge',
            verified: true,
            text: tweetMessage,
            avatar: 'https://lh3.googleusercontent.com/ogw/ADGmqu-Koj_D-z-2c0efndloEQd100oj38nmgMJugCfW=s32-c-mo',
            image: tweetImage
        })

        setTweetMessage("");
        setTweetImage("");
    };

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://lh3.googleusercontent.com/ogw/ADGmqu-Koj_D-z-2c0efndloEQd100oj38nmgMJugCfW=s32-c-mo"></Avatar>
                    <input 
                    onChange = {(e) => setTweetMessage(e.target.value)}
                    value={tweetMessage}
                    type="text" placeholder="What's happenning?" />
                </div>

                <input 
                onChange = {(e) => setTweetImage(e.target.value)}
                value={tweetImage}
                type="text" placeholder="Add Image url" className="tweetBox__inputImage" />

                <Button type="submit" onClick={sendTweet} className="tweetBox__Button">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
