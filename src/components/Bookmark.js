import React from 'react'

const Bookmark = (props) => {
    return (
        <div>
            {!props.bookmarked&&<i class="far fa-bookmark"></i>}
            {props.bookmarked && <i class="fas fa-bookmark"></i>}
        </div>
    )
}

export default Bookmark
