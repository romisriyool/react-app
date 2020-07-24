import React, { Component } from 'react';


class Comparison_Table_Body extends React.Component {

    render() {

        return (
            <div className={`qodef-grid-item qodef-col--3 normal-bg-table-col display-center border-light-right border-bottom min-height-${this.props.height}`}>
                <div className={`${this.props.type === "fixed" ? "fixed-width" : ""} comparison-table-content`}>
                    {
                        this.props.src ?
                            <img src={this.props.src} /> :
                                <a href="#">buy on amazon</a>
                    }
                </div>
            </div>
        )
    }

}

export default Comparison_Table_Body;
