
import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'

import Feed from './feed'

const InstaFeeds = (props) => {
    const [feeds, setFeedsData] = useState(props.feed)
    //use useRef to store the latest value of the prop without firing the effect
    // const tokenProp = useState(token);
    // tokenProp.current = token;
    // console.log(`token outside ${tokenProp}`);
    // console.log(props.limit);

    useEffect(() => {
        setFeedsData(props.feed)
        console.log(props.feed)
    }, [props.feed])

    return (
        <div className="insta-container">
            {feeds.map((feed) => (
                <Feed key={feed.id} feed={feed} />
            ))}
        </div>
    );
}



export default InstaFeeds;