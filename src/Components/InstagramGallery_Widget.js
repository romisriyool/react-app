import React from 'react';


class InstagramGallery_Widget extends React.Component {

    render() {

        return (
            <div>
                <div className="sidebar-gallery-wrapper">
                    <div className="gallery-title">
                        <h5>Instagram Gallery</h5>
                    </div>
                    <div className="qodef-grid qodef-layout--template gallery-content">
                        <div className="qodef-grid-inner clear">
                            <div className="qodef-grid-item qodef-col--12 gallery-content-row">
                                <img src={this.props.pageRestriction == "Single-Blog" ? "../assets/img/gallery1.png" : "assets/img/gallery1.png"} alt="" />
                                <img src={this.props.pageRestriction == "Single-Blog" ? "../assets/img/gallery2.png" : "assets/img/gallery2.png"} alt="" />
                                <img src={this.props.pageRestriction == "Single-Blog" ? "../assets/img/gallery3.png" : "assets/img/gallery3.png"} alt="" />
                            </div>
                            <div className="qodef-grid-item qodef-col--12 gallery-content-row">
                                <img src={this.props.pageRestriction == "Single-Blog" ? "../assets/img/gallery1.png" : "assets/img/gallery1.png"} alt="" />
                                <img src={this.props.pageRestriction == "Single-Blog" ? "../assets/img/gallery2.png" : "assets/img/gallery2.png"} alt="" />
                                <img src={this.props.pageRestriction == "Single-Blog" ? "../assets/img/gallery3.png" : "assets/img/gallery3.png"} alt="" />
                            </div>
                            <div className="qodef-grid-item qodef-col--12 gallery-content-row">
                                <img src={this.props.pageRestriction == "Single-Blog" ? "../assets/img/gallery1.png" : "assets/img/gallery1.png"} alt="" />
                                <img src={this.props.pageRestriction == "Single-Blog" ? "../assets/img/gallery2.png" : "assets/img/gallery2.png"} alt="" />
                                <img src={this.props.pageRestriction == "Single-Blog" ? "../assets/img/gallery3.png" : "assets/img/gallery3.png"} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default InstagramGallery_Widget;
