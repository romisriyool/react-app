import React, { Component } from 'react';
import aboutData from "../jsonData/About";



class About_CookBooks extends React.Component {

    render() {

        return (
            <div>

                {/* {console.log(aboutData.cookbooks)} */}

                <section
                    className="elementor-element elementor-element-08f7b1b elementor-section-boxed elementor-section-height-default elementor-section-height-default qodef-elementor-content-no elementor-section elementor-inner-section">
                    <div
                        className="elementor-container elementor-column-gap-default">
                        <div className="elementor-row">
                            <div
                                className="elementor-element elementor-element-b4a6721 elementor-column elementor-col-50 elementor-inner-column">
                                <div className="elementor-widget-wrap">
                                    <div
                                        className="elementor-element elementor-element-502bb6c elementor-widget__width-auto elementor-widget elementor-widget-text-editor about-cookbooks">
                                        <div
                                            className="elementor-widget-container">
                                            <div
                                                className="elementor-text-editor elementor-clearfix">
                                                <p
                                                    style={{ fontSize: "12px" }}>
                                                    {aboutData.general.cookbook_head}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="elementor-element elementor-element-8bf19ab elementor-column elementor-col-50 elementor-inner-column">
                                <div className="elementor-column-wrap">
                                    <div className="elementor-widget-wrap">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="elementor-element elementor-element-4ca72b2 elementor-widget elementor-widget-easymeals_core_product_list"
                    data-id="4ca72b2" data-element_type="widget"
                    data-widget_type="easymeals_core_product_list.default">
                    <div className="elementor-widget-container">
                        <div className="qodef-shortcode qodef-m  qodef-woo-shortcode qodef-woo-product-list qodef-item-layout--info-below qodef-grid qodef-layout--columns  qodef-gutter--normal qodef-col-num--4 qodef-item-layout--info-below qodef--no-bottom-space qodef-pagination--off qodef-responsive--custom qodef-col-num--1440--4 qodef-col-num--1366--4 qodef-col-num--1024--2 qodef-col-num--768--2 qodef-col-num--680--1 qodef-col-num--480--1"
                        >
                            <div className="qodef-grid-inner clear">

                                {

                                    aboutData.cookbooks.map((data, key) => {

                                        return (

                                            <div key={key} className="qodef-e qodef-grid-item qodef-item--full product type-product post-404 status-publish first instock product_cat-cookbooks product_cat-kitchen-tools product_tag-books product_tag-tomatoe has-post-thumbnail shipping-taxable purchasable product-type-simple">
                                                <div className="qodef-woo-product-inner">
                                                    <div
                                                        className="qodef-woo-product-image">
                                                        <img width="600"
                                                            height="749"
                                                            src={data.img}
                                                            className="attachment-full size-full wp-post-image"
                                                        />
                                                        <div
                                                            className="qodef-woo-product-image-inner">
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="qodef-woo-product-content">
                                                        <h6
                                                            className="qodef-woo-product-title entry-title">
                                                            
                                                                {data.title} 
                                                        </h6>
                                                        <div
                                                            className="qodef-woo-product-price price">
                                                            <span
                                                                className="woocommerce-Price-amount amount"><span
                                                                    className="woocommerce-Price-currencySymbol">&#036;</span>{data.price}</span>
                                                        </div>

                                                    </div>
                                                    {/* <a href="#"
                                                        className="woocommerce-LoopProduct-link woocommerce-loop-product__link"></a> */}
                                                </div>
                                            </div>


                                        );
                                    })
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }

}

export default About_CookBooks;
