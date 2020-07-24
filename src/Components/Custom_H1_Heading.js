import React from 'react';


class Custom_H1_Heading extends React.Component {

    render() {

        return (
            <div>
                <h1 className="qodef-m-title">
                    <span>{this.props.title ? this.props.title : ""}</span>
                </h1>
            </div>
        )
    }

}

export default Custom_H1_Heading;
