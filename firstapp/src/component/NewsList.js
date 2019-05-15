import React from 'react';

const NewsList = (props) => {
    console.log(">>Inside News Component<<<<",props)

    const listnews = props.mynews.map((data) => {
        return(
            <div>
                <h3>{data.title}</h3>
                <h5>{data.feed}</h5>
            </div>
        )
    })

    return(
        <div>
            {listnews}
        </div>
    )
}

export default NewsList;