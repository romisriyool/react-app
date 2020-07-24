import React, { Component } from 'react';
import blogData from "../jsonData/Blogs";
import { Link } from 'react-router-dom';


class Posts_Widget extends React.Component {

    render() {

        return (
            <div className="sidebar-post-wrapper">
                <div className="post-title">
                    <h5>{this.props.widgetname}</h5>
                </div>

                {

                    blogData.posts.slice(0, this.props.limit ? this.props.limit : 4).reverse().map((data, key) => {

                        return (

                            <div className="post-content" key={key}>
                                <div className="left">
                                    <img src={this.props.pageRestriction=="Single-Blog" ? "../" + data.img : data.img} alt="" />
                                </div>
                                <div className="right">
                                    <Link to={"/single_blog/" + data.id}>
                                        <h6>{data.title}</h6>
                                    </Link>
                                    <small>2 days ago</small>
                                </div>
                            </div>

                        );
                    })
                }

            </div>
        )
    }

}

export default Posts_Widget;
