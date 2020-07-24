import React, { Component } from 'react';
import Menu from '../Components/Menu';
import Custom_Paragraph from '../Components/Custom_Paragraph';
import Custom_Footer from '../Components/Custom_Footer';
import About_CookBooks from '../Components/About_CookBooks';
import InstagramGallery_Widget from '../Components/InstagramGallery_Widget';
import Posts_Widget from '../Components/Posts_Widget';
import Subscribe_Sidebar from '../Components/Subscribe_Sidebar';
import Custom_H1_Heading from '../Components/Custom_H1_Heading';
import Big_Single_Image from '../Components/Big_Single_Image';
import { Helmet } from 'react-helmet';
import aboutData from "../jsonData/About";
import generalData from "../jsonData/General";



class About extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {

        return (

            <div className="about">

                {/* {console.log(aboutData.general)} */}

                <Helmet>
                    <title>{generalData.general.about_browserTab}</title>
                </Helmet>

                <Menu pagename="About" />

                <div id="qodef-page-outer">
                    <div id="qodef-page-inner" className="qodef-content-grid">
                        <main id="qodef-page-content" className="qodef-grid qodef-layout--template ">
                            <div className="qodef-grid-inner clear">
                                <div className="qodef-grid-item qodef-page-content-section qodef-col--12">
                                    <div data-elementor-type="wp-page" data-elementor-id="761" className="elementor elementor-761"
                                        data-elementor-settings="[]">
                                        <div className="elementor-inner">
                                            <div className="elementor-section-wrap">
                                                <section
                                                    className="elementor-element elementor-element-66ccde3 elementor-section-boxed elementor-section-height-default elementor-section-height-default qodef-elementor-content-no elementor-section elementor-top-section"
                                                    data-id="66ccde3" data-element_type="section">
                                                    <div className="elementor-container elementor-column-gap-default">
                                                        <div className="elementor-row">
                                                            <div className="elementor-element elementor-element-985f894 elementor-column elementor-col-50 elementor-top-column"
                                                                data-id="985f894" data-element_type="column">
                                                                <div className="elementor-column-wrap  elementor-element-populated">
                                                                    <div className="elementor-widget-wrap">
                                                                        <div className="elementor-element elementor-element-c5911d4 elementor-widget elementor-widget-easymeals_core_section_title"
                                                                            data-id="c5911d4" data-element_type="widget"
                                                                            data-widget_type="easymeals_core_section_title.default">
                                                                            <div className="elementor-widget-container">
                                                                                <div className="qodef-shortcode qodef-m  qodef-section-title qodef-alignment--left   "
                                                                                    data-holder-options="{&quot;line-breaks&quot;:&quot;&quot;}">

                                                                                    <Custom_H1_Heading title={aboutData.general.title} />

                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="elementor-element elementor-element-3902a1d elementor-widget elementor-widget-image"
                                                                            data-id="3902a1d" data-element_type="widget"
                                                                            data-widget_type="image.default">
                                                                            <div className="elementor-widget-container">

                                                                                <Big_Single_Image src={aboutData.general.img} />

                                                                            </div>
                                                                        </div>

                                                                        <Custom_Paragraph mb="20px" data={aboutData.general.img_bottom_text} />

                                                                        <About_CookBooks />

                                                                        <Custom_Paragraph mt="50px" mb="100px" data={aboutData.general.cookbook_bottom_text} />

                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="elementor-element elementor-element-57d40b5 elementor-column elementor-col-50 elementor-top-column"
                                                            >
                                                                <div className="elementor-column-wrap  elementor-element-populated">
                                                                    <div className="elementor-widget-wrap">
                                                                        <div className="elementor-element elementor-element-06bdb66 elementor-widget elementor-widget-sidebar"
                                                                            data-id="06bdb66" data-element_type="widget"
                                                                            data-widget_type="sidebar.default">
                                                                            <div className="elementor-widget-container">

                                                                                <Subscribe_Sidebar />

                                                                                <Posts_Widget widgetname="Popular Posts" limit="5" />

                                                                                <Posts_Widget widgetname="Recent Posts" limit="3" />

                                                                                <InstagramGallery_Widget />

                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </section>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>

                <Custom_Footer />

            </div >
        )
    }

}

export default About;
