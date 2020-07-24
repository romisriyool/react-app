import React, { Component } from 'react';


class Big_Single_Image extends React.Component {

    render() {

        return (
            <div style={{marginBottom: this.props.mb ? this.props.mb : ""}}>
                <div className="elementor-image">
                    <img width="1300" height="828"
                        src={this.props.src ? this.props.src : ""}
                        className="attachment-full size-full" />
                </div>
            </div>
        )
    }

}

export default Big_Single_Image;
