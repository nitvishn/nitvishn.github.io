import React from 'react';

export const Talks = (props) => {
    const talks = props.talks.map((talk) => (
        <>
            <div className="row justify-content-center">
                <div class="col-9 embed-responsive embed-responsive-16by9">
                    <iframe class="embed-responsive-item" src={"https://www.youtube.com/embed/" + talk.videoid} allowfullscreen></iframe>
                </div>
            </div>
            <br></br>
        </>
    ));
    return (
        <>
            <h1 className="text-center">Talks and Videos</h1>
            <hr></hr>
            <br></br>
            {talks}
        </>
    );
}