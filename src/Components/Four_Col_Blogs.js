import React, { Component } from 'react';
import blogData from "../jsonData/Blogs";
import { Link } from 'react-router-dom';


class Four_Col_Blogs extends React.Component {

    render() {

        return (
            <div className={this.props.sectionHead === "yes" ? "recent-blog-wrapper" : ""}>

                {/* { console.log(blogData.posts) } */}

                {this.props.sectionHead === "yes" ? <h6>Recent Blogs</h6> : ""}

                <section
                    className="elementor-element elementor-element-b8c4c5b qodef-elementor-content-grid elementor-section-boxed elementor-section-height-default elementor-section-height-default elementor-section elementor-top-section"
                >
                    <div className="elementor-container elementor-column-gap-default">
                        <div className="elementor-row">
                            <div className="elementor-element elementor-element-967c71b elementor-column elementor-col-100 elementor-top-column"
                                data-id="967c71b" data-element_type="column">
                                <div className="elementor-column-wrap  elementor-element-populated">
                                    <div className="elementor-widget-wrap">
                                        <div className="elementor-element elementor-element-95924b7 elementor-widget elementor-widget-easymeals_core_recipe_list"
                                            data-id="95924b7" data-element_type="widget"
                                            data-widget_type="easymeals_core_recipe_list.default">
                                            <div className="elementor-widget-container">
                                                <div className="qodef-shortcode qodef-m  qodef-recipe-list qodef-item-layout--info-below    qodef-hover-type--move   qodef-grid qodef-layout--columns  qodef-gutter--normal qodef-col-num--4 qodef-item-layout--info-below qodef--no-bottom-space qodef-pagination--off qodef-responsive--custom qodef-col-num--1440--4 qodef-col-num--1366--4 qodef-col-num--1024--2 qodef-col-num--768--2 qodef-col-num--680--1 qodef-col-num--480--1"
                                                >
                                                    <div className="qodef-grid-inner clear">

                                                        {
// blogData.posts.slice(0, this.props.limit ? this.props.limit : 4).reverse().map((data, key) => {

                                                            blogData.posts.slice(0, this.props.limit ? this.props.limit : 4).map((data, key) => {

                                                                return (

                                                                    <article key={key}
                                                                        className="qodef-e qodef-grid-item qodef-item--full post-557 recipe type-recipe status-publish has-post-thumbnail hentry recipe-category-quick-ideas recipe-tag-cheese">
                                                                        <div className="qodef-e-inner">
                                                                            <div className="qodef-e-image">
                                                                                <div
                                                                                    className="qodef-e-media-image">
                                                                                    <Link to={"/single_blog/" + data.id}>
                                                                                        <img width="1300"
                                                                                            height="1657"
                                                                                            src={data.img}
                                                                                            className="attachment-full size-full wp-post-image"
                                                                                            alt="d" />
                                                                                    </Link>
                                                                                </div>
                                                                            </div>
                                                                            <div className="qodef-e-content">
                                                                                <div
                                                                                    className="qodef-e-info-top">
                                                                                    <p
                                                                                        className="qodef-recipe-prep-time">
                                                                                        <span
                                                                                            className="fa fa-heart heart-icon"></span>
                                                                                        {data.likes} </p>
                                                                                    <p
                                                                                        className="qodef-recipe-difficulty">
                                                                                        <img src="assets/img/comment-icon.png"
                                                                                            alt="" />
                                                                                        <span>{data.comments}</span> </p>
                                                                                </div>
                                                                                <h4
                                                                                    className="qodef-e-title entry-title">
                                                                                    <Link to={"/single_blog/" + data.id}>
                                                                                        {data.title}
                                                                                    </Link>
                                                                                </h4>
                                                                            </div>
                                                                        </div>
                                                                    </article>
                                                                );
                                                            })
                                                        }

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>

        )
    }

}

export default Four_Col_Blogs;
