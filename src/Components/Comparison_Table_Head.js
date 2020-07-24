import React, { Component } from 'react';


class Comparison_Table_Head extends React.Component {

    render() {

        return (
            <div className={`qodef-grid-item qodef-col--3 grey-bg-table-col border-dark-right border-bottom min-height-${this.props.height}`}>
                <div className="comparison-table-content">
                    {this.props.text ? <p>{this.props.text}</p> : ""}
                </div>
            </div>
        )
    }

}

export default Comparison_Table_Head;
