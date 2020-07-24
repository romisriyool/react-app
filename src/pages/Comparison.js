import React, { Component } from 'react';
import Menu from '../Components/Menu';
import Custom_Footer from '../Components/Custom_Footer';
import Custom_H4_Heading from '../Components/Custom_H4_Heading';
import Custom_Paragraph from '../Components/Custom_Paragraph';
import Comparison_Table_Body from '../Components/Comparison_Table_Body';
import Comparison_Table_Head from '../Components/Comparison_Table_Head';
import Four_Col_Blogs from '../Components/Four_Col_Blogs';
import { Helmet } from 'react-helmet';
import generalData from "../jsonData/General";
import comparisonData from "../jsonData/Comparison";



class Comparison extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {

        return (

            <div className="comparison">

                <Helmet>
                    <title>{generalData.general.comparison_browserTab}</title>
                </Helmet>

                <Menu pagename="Comparison" />

                <div id="qodef-page-outer">
                    <div id="qodef-page-inner" className="qodef-content-grid">
                        <main id="qodef-page-content"
                            className="qodef-grid qodef-layout--template qodef-gutter--medium comparison-wrapper">
                            <div className="qodef-grid-inner clear">

                                <div className="qodef-grid-item qodef-col--12">
                                    <div className="qodef-e-inner">
                                        <div className="comparison-content">

                                            <Custom_H4_Heading title={comparisonData.general.title} />

                                            <Custom_Paragraph data={comparisonData.general.table_top_text} />

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>


                <div className="comparison-table-wrapper">
                    <div id="qodef-page-inner" className="qodef-content-grid">
                        <main id="qodef-page-content"
                            className="qodef-grid qodef-layout--template qodef-gutter--medium">
                            <div className="qodef-grid-inner clear">

                                <Comparison_Table_Head height="195" />
                                <Comparison_Table_Body src="assets/img/h4-img-5.jpg" height="195" type="fixed" />
                                <Comparison_Table_Body src="assets/img/h4-img-5.jpg" height="195" type="fixed" />
                                <Comparison_Table_Body src="assets/img/h4-img-5.jpg" height="195" type="fixed" />


                                <Comparison_Table_Head height="90" text="Lorem Ipsum Dollar Sit imet dollar sit" />
                                <Comparison_Table_Body src="assets/img/tick.png" height="90" />
                                <Comparison_Table_Body src="assets/img/cross.png" height="90" />
                                <Comparison_Table_Body src="assets/img/tick.png" height="90" />


                                <Comparison_Table_Head height="90" text="Lorem Ipsum Dollar Sit imet dollar sit" />
                                <Comparison_Table_Body src="assets/img/tick.png" height="90" />
                                <Comparison_Table_Body src="assets/img/cross.png" height="90" />
                                <Comparison_Table_Body src="assets/img/tick.png" height="90" />


                                <Comparison_Table_Head height="90" text="Lorem Ipsum Dollar Sit imet dollar sit" />
                                <Comparison_Table_Body src="assets/img/tick.png" height="90" />
                                <Comparison_Table_Body src="assets/img/cross.png" height="90" />
                                <Comparison_Table_Body src="assets/img/tick.png" height="90" />


                                <Comparison_Table_Head height="90" text="Lorem Ipsum Dollar Sit imet dollar sit" />
                                <Comparison_Table_Body src="assets/img/tick.png" height="90" />
                                <Comparison_Table_Body src="assets/img/cross.png" height="90" />
                                <Comparison_Table_Body src="assets/img/tick.png" height="90" />


                                <Comparison_Table_Head height="90" text="Lorem Ipsum Dollar Sit imet dollar sit" />
                                <Comparison_Table_Body src="assets/img/tick.png" height="90" />
                                <Comparison_Table_Body src="assets/img/cross.png" height="90" />
                                <Comparison_Table_Body src="assets/img/tick.png" height="90" />


                                <Comparison_Table_Head height="90" text="Lorem Ipsum Dollar Sit imet dollar sit" />
                                <Comparison_Table_Body src="assets/img/tick.png" height="90" />
                                <Comparison_Table_Body src="assets/img/cross.png" height="90" />
                                <Comparison_Table_Body src="assets/img/tick.png" height="90" />


                                <Comparison_Table_Head height="90" text="Lorem Ipsum Dollar Sit imet dollar sit" />
                                <Comparison_Table_Body src="assets/img/tick.png" height="90" />
                                <Comparison_Table_Body src="assets/img/cross.png" height="90" />
                                <Comparison_Table_Body src="assets/img/tick.png" height="90" />


                                <Comparison_Table_Head height="90" text="Lorem Ipsum Dollar Sit imet dollar sit" />
                                <Comparison_Table_Body src="assets/img/tick.png" height="90" />
                                <Comparison_Table_Body src="assets/img/cross.png" height="90" />
                                <Comparison_Table_Body src="assets/img/tick.png" height="90" />


                                <Comparison_Table_Head height="90" text="More Info" />
                                <Comparison_Table_Body height="90" />
                                <Comparison_Table_Body height="90" />
                                <Comparison_Table_Body height="90" />


                            </div>
                        </main>
                    </div>
                </div>




                <div id="qodef-page-outer">
                    <div id="qodef-page-inner" className="qodef-content-grid">
                        <main id="qodef-page-content"
                            className="qodef-grid qodef-layout--template qodef-gutter--medium comparison-wrapper">
                            <div className="qodef-grid-inner clear">
                                <div className="qodef-grid-item qodef-col--12">
                                    <div className="qodef-e-inner">
                                        <div className="comparison-content">

                                            <Custom_Paragraph data={comparisonData.general.table_bottom_text} />

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>


                <Four_Col_Blogs sectionHead="yes" />

                <Custom_Footer />

            </div >
        )
    }

}

export default Comparison;
