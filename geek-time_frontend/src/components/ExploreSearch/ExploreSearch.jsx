import React from 'react';
import './ExploreSearch.css';

export default function ExploreSearch(props) {
    return (
        <div className="explore_search">
                <div className="bn iconfont">&#xe688;</div>
                <span className="inp">
                    <input text="text" placeholder="Linux 性能优化实战"></input>
                </span>
        </div>
    )
}

ExploreSearch.propTypes = {
}