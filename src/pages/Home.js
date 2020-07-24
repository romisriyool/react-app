import React, { Component } from 'react';
import Menu from '../Components/Menu';
import Slider from '../Components/Slider';
import Four_Col_Blogs from '../Components/Four_Col_Blogs';
import One_Col_Blog from '../Components/One_Col_Blog';
import Three_Col_Blog from '../Components/Three_Col_Blogs';
import Add_Banner from '../Components/Add_Banner';
import Custom_Footer from '../Components/Custom_Footer';
import { Helmet } from 'react-helmet';
import generalData from "../jsonData/General";


class Home extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {

        const redirectUrl = window.location.pathname;

        if (redirectUrl == '/react-app/home') {
            // console.log("/home");
            window.location.href = window.location.origin + "/react-app/";
        }

        return (
            <div className="homepage">

                <Helmet>
                    <title>{generalData.general.home_browserTab}</title>
                </Helmet>

                <Menu pagename="Home" />

                <Slider />

                <div id="qodef-page-outer">
                    <div id="qodef-page-inner" className="qodef-content-full-width">
                        <main id="qodef-page-content" className="qodef-grid qodef-layout--template ">
                            <div className="qodef-grid-inner clear">
                                <div className="qodef-grid-item qodef-page-content-section qodef-col--12">
                                    <div data-elementor-type="wp-page" data-elementor-id="540" className="elementor elementor-540"
                                        data-elementor-settings="[]">
                                        <div className="elementor-inner">
                                            <div className="elementor-section-wrap">

                                                <Four_Col_Blogs />

                                                <One_Col_Blog />

                                                <Three_Col_Blog />

                                                <Add_Banner />

                                                <Four_Col_Blogs limit="8" />

                                            </div>
                                        </div >
                                    </div >
                                </div >
                            </div >
                        </main >
                    </div >
                </div >

                <Custom_Footer />

            </div >
        )
    }

}

export default Home;
