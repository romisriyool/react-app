import React from 'react';


class Custom_H4_Heading extends React.Component {

    render() {

        return (
            
            <h4> {this.props.title ? this.props.title : ""}</h4>
            
        )
    }

}

export default Custom_H4_Heading;
