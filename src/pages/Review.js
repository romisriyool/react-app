import React, { Component } from 'react';
import Menu from '../Components/Menu';
import Custom_Footer from '../Components/Custom_Footer';
import Review_Pick_Box from '../Components/Review_Pick_Box';
import Four_Col_Blogs from '../Components/Four_Col_Blogs';
import Custom_Paragraph from '../Components/Custom_Paragraph';
import Custom_H4_Heading from '../Components/Custom_H4_Heading';
import { Helmet } from 'react-helmet';
import reviewData from "../jsonData/Review";
import generalData from "../jsonData/General";


class Review extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {

        return (
            <div className="review">

                <Helmet>
                    <title>{generalData.general.review_browserTab}</title>
                </Helmet>

                <Menu pagename="Review" />

                <div id="qodef-page-outer">
                    <div id="qodef-page-inner" className="qodef-content-grid">
                        <main id="qodef-page-content"
                            className="qodef-grid qodef-layout--template qodef-gutter--medium review-wrapper">
                            <div className="qodef-grid-inner clear">
                                <div className="qodef-grid-item qodef-page-content-section qodef-col--6 left">
                                    <div className="qodef-e-main-image">
                                        <img src={reviewData.general.img} className="attachment-full size-full wp-post-image"
                                            alt="d" />
                                    </div>
                                </div>

                                <div className="qodef-grid-item qodef-col--6 right">
                                    <div className="qodef-e-inner">
                                        <div className="qodef-m-image">
                                            <a href="#">
                                                <img src={generalData.general.author_img} />
                                            </a>
                                            <div className="qodef-m-text">
                                                <a className="qodef-e-info-author-link" href="#">
                                                    {generalData.general.author} </a>
                                                <p className="entry-date updated">{generalData.general.date}</p>
                                            </div>
                                        </div>

                                        <div className="review-top-content">

                                            <Custom_H4_Heading title={reviewData.general.main_title} />

                                            <Custom_Paragraph data={reviewData.general.main_title_bottom_text} />

                                            <h6>{reviewData.general.sub_heading}</h6>

                                            <Custom_Paragraph data={reviewData.general.sub_heading_bottom_text} />

                                        </div>


                                    </div>

                                </div>
                            </div>
                        </main>
                    </div>
                </div>

                {
                    reviewData.boxes.map((data, key) => {
                        return (
                            <Review_Pick_Box
                                key={key}
                                headTitle={data.label}
                                src={data.img}
                                title={data.title}
                                desc={data.desc}
                                detail={data.detail}
                            />
                        );
                    })
                }




                <Four_Col_Blogs sectionHead="yes" />

                <Custom_Footer />

            </div >
        )
    }

}

export default Review;
