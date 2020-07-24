import React from 'react';
import generalData from "../jsonData/General";


class Author_Info extends React.Component {

    render() {

        return (
            <div>

                {/* { console.log(this.props.blogID) } */}

                <div className="qodef-e qodef-info--author-date">
                    <div className="qodef-m-image">
                        <a href="#">
                            <img src={this.props.blogID.author_img ? "../" + this.props.blogID.author_img : generalData.general.author_img}
                                width="48" height="48" alt={generalData.author_img}
                                className="avatar avatar-48 wp-user-avatar wp-user-avatar-48 alignnone photo" />
                        </a>
                    </div>
                    <div className="qodef-m-text">
                        <a className="qodef-e-info-author-link" href="#">
                        {this.props.blogID.author ? this.props.blogID.author : generalData.general.author} </a>
                        <p className="entry-date updated">{this.props.blogID.date ? this.props.blogID.date : generalData.general.date}</p>
                    </div>
                </div>
            </div>
        )
    }

}

export default Author_Info;
