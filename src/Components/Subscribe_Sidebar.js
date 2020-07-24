import React from 'react';


class Subscribe_Sidebar extends React.Component {

    render() {

        return (
            <div className="widget widget_easymeals_core_contact_form_7"
                data-area="about">
                <div className="qodef-contact-form-7">
                    <div className="wpcf7">
                        <div className="screen-reader-response"></div>
                        <form action="#">

                            <div className="newsletter">
                                <h3>Never Miss A Post!</h3>
                                <p className="newsletter-text">
                                    Sign up for free and be
                                    the first to get
                                    notified about updates.
																							</p>
                                <p>
                                    <span className="wpcf7-form-control-wrap your-email">
                                        <input type="email"
                                            placeholder="Your Email*" />
                                    </span>
                                    <button
                                        type="submit"
                                        className="wpcf7-form-control wpcf7-submit qodef-button qodef-size--normal qodef-type--filled qodef-m">
                                        <span className="qodef-m-text">Subscribe</span></button>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        )
    }

}

export default Subscribe_Sidebar;
