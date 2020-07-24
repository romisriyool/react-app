import React from 'react';
import generalData from "../jsonData/General";


class Comment_Icon extends React.Component {

    render() {

        return (

            <div>
                <p className="qodef-recipe-difficulty">
                    <img src="assets/img/comment-icon.png" alt="" />
                    <span>{this.props.blogID.comments ? this.props.blogID.comments : generalData.general.comments}</span> 
                </p>
            </div>

        )
    }

}

export default Comment_Icon;
