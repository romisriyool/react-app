import React from 'react';


class Recipe_Prep_Time extends React.Component {

    render() {

        return (
            <div>
                <div className="qodef-e-content qodef-e-content-under-image recipies-status">
                    <p className="qodef-recipe-prep-time">
                        <span
                            className="qodef-icon-linear-icons lnr-clock lnr qodef-icon qodef-e"></span> {this.props.c}
											</p>
                    <p className="qodef-recipe-difficulty">
                        <span
                            className="qodef-icon-linear-icons lnr-thumbs-up lnr qodef-icon qodef-e"></span>{this.props.th}
											</p>
                    <p className="qodef-recipe-serves">
                        <span
                            className="qodef-icon-linear-icons lnr-dinner lnr qodef-icon qodef-e"></span>{this.props.f}
											</p>
                    <p className="qodef-recipe-serves">
                        <span
                            className="qodef-icon-linear-icons lnr-tag lnr qodef-icon qodef-e"></span>{this.props.ta}
											</p>
                </div>
            </div>
        )
    }

}

export default Recipe_Prep_Time;
