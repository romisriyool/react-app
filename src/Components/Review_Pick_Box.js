import React from 'react';


class Review_Pick_Box extends React.Component {

    render() {

        return (
            <div>
                <div id="qodef-page-outer">
                    <div id="qodef-page-inner" className="qodef-content-grid">
                        <main id="qodef-page-content" className="qodef-grid qodef-layout--template qodef-gutter--medium">
                            <div className="qodef-grid-inner clear">
                                <div className="qodef-grid-item qodef-page-content-section qodef-col--12">
                                    <section
                                        className="elementor-element elementor-element-08f7b1b elementor-section-boxed elementor-section-height-default elementor-section-height-default qodef-elementor-content-no elementor-section elementor-inner-section">
                                        <div className="elementor-container elementor-column-gap-default">
                                            <div className="elementor-row">
                                                <div
                                                    className="elementor-element elementor-element-b4a6721 elementor-column elementor-col-50 elementor-inner-column">
                                                    <div className="elementor-widget-wrap">
                                                        <div
                                                            className="elementor-element elementor-element-502bb6c elementor-widget__width-auto elementor-widget elementor-widget-text-editor review-border-box-title">
                                                            <div className="elementor-widget-container">
                                                                <div className="elementor-text-editor elementor-clearfix">
                                                                    <p>{this.props.headTitle ? this.props.headTitle : "OUR PICK"}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    <div
                                        className="qodef-grid qodef-layout--template qodef-woo-product-list qodef-item-layout--info-below review-border-box">
                                        <div className="qodef-grid-inner">
                                            <div className="qodef-grid-item qodef-page-content-section qodef-col--4">
                                                <img src={this.props.src ? this.props.src : ""}
                                                    className="attachment-full size-full wp-post-image" />
                                            </div>

                                            <div className="qodef-grid-item qodef-page-content-section qodef-col--8 right">
                                                <h6>{this.props.title ? this.props.title : ""}</h6>
                                                <p>{this.props.desc ? this.props.desc : ""}</p>
                                                <a href="#">{this.props.headTitle ? this.props.headTitle : "OUR PICK"} Box</a>
                                            </div>
                                        </div>
                                    </div>

                                    <p className="review-border-box-bottom-text">
                                        {this.props.detail ? this.props.detail : ""}
							        </p>

                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        )
    }

}

export default Review_Pick_Box;
