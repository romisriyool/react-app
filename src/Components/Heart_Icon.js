import React from 'react';
import generalData from "../jsonData/General";



class Heart_Icon extends React.Component {

    render() {

        return (

            <div>
                <p className="qodef-recipe-prep-time">
                    <span className="fa fa-heart heart-icon"></span> {this.props.blogID.likes ? this.props.blogID.likes : generalData.general.likes}
				</p>
            </div>

        )
    }

}

export default Heart_Icon;
