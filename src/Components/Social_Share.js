import React from 'react';
import generalData from "../jsonData/General";


class Social_Share extends React.Component {

    render() {

        return (
            <div>
                <div className="qodef-e qodef-info--social-share">
                    <div
                        className="qodef-shortcode qodef-m  qodef-social-share clear qodef-layout--text ">
                        <span className="qodef-social-title">Share:</span>
                        <ul className="qodef-shortcode-list">
                            <li className="qodef-facebook-share">
                                <a className="qodef-share-link" target="_blank" href={this.props.blogID.facebook ? this.props.blogID.facebook : generalData.general.facebook}
                                >
                                    <span
                                        className="qodef-icon-elegant-icons social_facebook_circle  qodef-social-network-icon"></span>
                                    <span className="qodef-social-network-text">Facebook</span>
                                </a>
                            </li>
                            <li className="qodef-twitter-share">
                                <a className="qodef-share-link" target="_blank" href={this.props.blogID.twitter ? this.props.blogID.twitter : generalData.general.twitter}>
                                    <span
                                        className="qodef-icon-elegant-icons social_twitter_circle  qodef-social-network-icon"></span>
                                    <span className="qodef-social-network-text">Twitter</span>
                                </a>
                            </li>
                            <li className="qodef-linkedin-share">
                                <a className="qodef-share-link" target="_blank" href={this.props.blogID.linkedin ? this.props.blogID.linkedin : generalData.general.linkedin}>
                                    <span
                                        className="qodef-icon-elegant-icons social_linkedin_circle  qodef-social-network-icon"></span>
                                    <span className="qodef-social-network-text">LinkedIn</span>
                                </a>
                            </li>
                            <li className="qodef-pinterest-share">
                                <a className="qodef-share-link" target="_blank" href={this.props.blogID.pinterest ? this.props.blogID.pinterest : generalData.general.pinterest}>
                                    <span
                                        className="qodef-icon-elegant-icons social_pinterest_circle  qodef-social-network-icon"></span>
                                    <span className="qodef-social-network-text">Pinterest</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }

}

export default Social_Share;
