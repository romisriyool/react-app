import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import generalData from "../jsonData/General";

class Custom_Footer extends React.Component {

    render() {

        return (
            <div>
                <footer id="qodef-page-footer">
                    <div id="qodef-page-footer-bottom-area">
                        <div id="qodef-page-footer-bottom-area-inner" className="qodef-content-grid">
                            <div
                                className="qodef-grid qodef-layout--columns qodef-responsive--custom qodef-col-num--3 qodef-col-num--1024--1 qodef-col-num--768--1 qodef-col-num--680--1 qodef-col-num--480--1">
                                <div className="qodef-grid-inner clear">

                                    <div className="footer-grid">
                                        <div id="nav_menu-3" className="widget widget_nav_menu"
                                            data-area="footer_bottom_area_column_2">
                                            <div className="menu-footer-main-home-container">
                                                <ul id="menu-footer-main-home" className="menu">
                                                    <li id="menu-item-52"
                                                        className="menu-item menu-item-type-custom menu-item-object-custom">
                                                        <Link to={"/home"}>Home</Link>
                                                    </li>
                                                    <li id="menu-item-52"
                                                        className="menu-item menu-item-type-custom menu-item-object-custom">
                                                        <Link to={"/about"}>About</Link>
                                                    </li>
                                                    <li id="menu-item-54"
                                                        className="menu-item menu-item-type-custom menu-item-object-custom">
                                                        <Link to={"/recipes"}>Recipes</Link>
                                                    </li>
                                                    <li id="menu-item-53"
                                                        className="menu-item menu-item-type-custom menu-item-object-custom">
                                                        <Link to={"/review"}>Review Articles</Link>
                                                    </li>
                                                    <li id="menu-item-56"
                                                        className="menu-item menu-item-type-custom menu-item-object-custom">
                                                        <Link to={"/comparison"}>Comparison Articles</Link>
                                                    </li>
                                                    <li id="menu-item-55"
                                                        className="menu-item menu-item-type-custom menu-item-object-custom">
                                                        <Link to={"/blog"}>Blog Posts</Link>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div id="easymeals_core_social_icons_group-2"
                                                className="widget widget_easymeals_core_social_icons_group"
                                                data-area="footer_bottom_area_column_3">
                                                <div className="qodef-social-icons-group">
                                                    <span
                                                        className="qodef-shortcode qodef-m  qodef-icon-holder  qodef-layout--normal">
                                                        <a href={generalData.general.facebook} target="_blank">
                                                            <span
                                                                className="qodef-icon-elegant-icons social_facebook qodef-icon qodef-e"></span>
                                                        </a>
                                                    </span>
                                                    <span
                                                        className="qodef-shortcode qodef-m  qodef-icon-holder  qodef-layout--normal">
                                                        <a href={generalData.general.twitter} target="_blank">
                                                            <span
                                                                className="qodef-icon-font-awesome fab fa-twitter qodef-icon qodef-e"></span>
                                                        </a>
                                                    </span>
                                                    <span
                                                        className="qodef-shortcode qodef-m  qodef-icon-holder  qodef-layout--normal">
                                                        <a href={generalData.general.instagram} target="_blank">
                                                            <span
                                                                className="qodef-icon-font-awesome fab fa-instagram qodef-icon qodef-e"></span>
                                                        </a>
                                                    </span>
                                                    <span
                                                        className="qodef-shortcode qodef-m  qodef-icon-holder  qodef-layout--normal">
                                                        <a href={generalData.general.linkedin} target="_blank">
                                                            <span
                                                                className="qodef-icon-font-awesome fab fa-linkedin qodef-icon qodef-e"></span>
                                                        </a>
                                                    </span>
                                                    <span
                                                        className="qodef-shortcode qodef-m  qodef-icon-holder  qodef-layout--normal">
                                                        <a href={generalData.general.youtube} target="_blank">
                                                            <span
                                                                className="qodef-icon-elegant-icons social_youtube qodef-icon qodef-e"></span>
                                                        </a>
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="textwidget">
                                                <p>{generalData.general.copyright_text}</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </footer>

                <a id="qodef-back-to-top" href="#">
                    <span className="qodef-back-to-top-icon">
                        <span className="qodef-icon-elegant-icons arrow_carrot-up"></span> </span>
                </a>
            </div >
        )
    }

}

export default Custom_Footer;
