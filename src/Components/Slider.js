import React, { Component } from 'react';
import sliderData from '../jsonData/Slider'


class Slider extends React.Component {

    render() {

        const mystyle = {
            background: "transparent",
            padding: "0",
            backgroundImage: "url(assets/img/slider.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            top: "-80px"
        };


        return (

            <div>
                {
                    // sliderData.map(function (person) {
                    //     console.log(person)  
                    // })

                    // console.log(sliderData[0].title)


                    // sliderData.map((data, key) => {
                    //     return (
                    //         <div key={key}>
                    //         {data.id +
                    //             " , " +
                    //             data.title +
                    //             " ," +
                    //             data.btn_text}
                    //         </div>
                    //     );
                    // })
                }

                <div
                    className="elementor-element elementor-element-081cc9b elementor-section-full_width elementor-section-height-default elementor-section-height-default qodef-elementor-content-no elementor-section elementor-top-section"
                >
                    <div className="elementor-container elementor-column-gap-default">
                        <div className="elementor-row">
                            <div className="elementor-element elementor-element-798765e elementor-column elementor-col-100 elementor-top-column"
                            >
                                <div className="elementor-column-wrap  elementor-element-populated">
                                    <div className="elementor-widget-wrap">
                                        <div className="elementor-element elementor-element-9c47878 elementor-widget elementor-widget-slider_revolution"
                                        >
                                            <div className="elementor-widget-container">

                                                <div className="wp-block-themepunch-revslider">

                                                    <p className="rs-p-wp-fix"></p>
                                                    <rs-module-wrap id="rev_slider_9_1_wrapper"

                                                        style={mystyle}>
                                                        <rs-module id="rev_slider_9_1"
                                                            style={{ display: "none" }}
                                                        >
                                                            <rs-slides>

                                                                {

                                                                    sliderData.map((data, key) => {
                                                                        return (

                                                                            <rs-slide key={key}
                                                                                data-title="Slide"
                                                                                data-thumb=""
                                                                                data-anim="ei:power1.in;eo:power1.inOut;s:800ms;r:0;t:fade;sl:0;"
                                                                                className="sp">
                                                                                <img src="assets/img/transparent.png"
                                                                                    alt="j"
                                                                                    title="h4-img-20"
                                                                                    width="1920"
                                                                                    height="1106"
                                                                                    className="rev-slidebg"
                                                                                    data-no-retina />

                                                                                <rs-layer
                                                                                    
                                                                                    data-type="text"
                                                                                    data-color="#6b6768"
                                                                                    data-xy="xo:302px,164px,124px,29px;y:m;yo:-86px,-57px,-103px,-80px;"
                                                                                    data-text="w:normal;s:50,50,20,43;l:50,50,0,45;"
                                                                                    data-dim="w:555px,469px,489px,335px;"
                                                                                    data-basealign="slide"
                                                                                    data-rsp_o="off"
                                                                                    data-rsp_bd="off"
                                                                                    data-frame_0="x:-50;"
                                                                                    data-frame_1="st:60;sp:800;sR:60;"
                                                                                    data-frame_999="o:0;st:w;sR:4140;"
                                                                                    style={{ zIndex: "8" }}>
                                                                                    <div className="qodef-shortcode qodef-m  qodef-recipe-list qodef-item-layout--info-below    qodef-hover-type--none   qodef-grid qodef-layout--columns  qodef-gutter--normal qodef-col-num--1 qodef-item-layout--info-below qodef--no-bottom-space qodef-pagination--off qodef-responsive--predefined"
                                                                                        data-options="{&quot;plugin&quot;:&quot;easymeals_core&quot;,&quot;module&quot;:&quot;plugins/recipe/post-types/recipe/shortcodes&quot;,&quot;shortcode&quot;:&quot;recipe-list&quot;,&quot;post_type&quot;:&quot;recipe&quot;,&quot;next_page&quot;:&quot;2&quot;,&quot;max_pages_num&quot;:1,&quot;behavior&quot;:&quot;columns&quot;,&quot;images_proportion&quot;:&quot;full&quot;,&quot;columns&quot;:&quot;1&quot;,&quot;columns_responsive&quot;:&quot;predefined&quot;,&quot;columns_1440&quot;:&quot;3&quot;,&quot;columns_1366&quot;:&quot;3&quot;,&quot;columns_1024&quot;:&quot;3&quot;,&quot;columns_768&quot;:&quot;3&quot;,&quot;columns_680&quot;:&quot;3&quot;,&quot;columns_480&quot;:&quot;3&quot;,&quot;space&quot;:&quot;normal&quot;,&quot;posts_per_page&quot;:&quot;1&quot;,&quot;orderby&quot;:&quot;date&quot;,&quot;order&quot;:&quot;DESC&quot;,&quot;additional_params&quot;:&quot;id&quot;,&quot;post_ids&quot;:&quot;1473&quot;,&quot;tax&quot;:&quot;recipe-category&quot;,&quot;layout&quot;:&quot;info-below&quot;,&quot;title_tag&quot;:&quot;h1&quot;,&quot;custom_padding&quot;:&quot;no&quot;,&quot;enable_top_info&quot;:&quot;yes&quot;,&quot;enable_categories&quot;:&quot;yes&quot;,&quot;enable_author_date&quot;:&quot;yes&quot;,&quot;enable_share&quot;:&quot;no&quot;,&quot;enable_like&quot;:&quot;no&quot;,&quot;enable_bookmark&quot;:&quot;no&quot;,&quot;enable_excerpt&quot;:&quot;yes&quot;,&quot;excerpt_length&quot;:&quot;240&quot;,&quot;excerpt_font_size&quot;:&quot;18&quot;,&quot;white_bg&quot;:&quot;no&quot;,&quot;tags_column&quot;:&quot;no&quot;,&quot;hover_type&quot;:&quot;none&quot;,&quot;appear_effect&quot;:&quot;no&quot;,&quot;zoom_out_effect&quot;:&quot;no&quot;,&quot;pagination_type&quot;:&quot;no-pagination&quot;,&quot;info_below_enable_button&quot;:&quot;no&quot;,&quot;info_below_hide_image&quot;:&quot;yes&quot;,&quot;object_class_name&quot;:&quot;EasyMealsCoreRecipeListShortcode&quot;,&quot;taxonomy_filter&quot;:&quot;recipe-category&quot;,&quot;additional_query_args&quot;:{&quot;orderby&quot;:&quot;post__in&quot;,&quot;post__in&quot;:[&quot;1473&quot;]},&quot;text_styles&quot;:[&quot;font-size: 18px&quot;],&quot;unique&quot;:&quot;1&quot;,&quot;space_value&quot;:15}">
                                                                                        <div
                                                                                            className="qodef-grid-inner clear">
                                                                                            <article
                                                                                                className="qodef-e qodef-grid-item qodef-item--full post-1473 recipe type-recipe status-publish has-post-thumbnail hentry recipe-category-pies recipe-tag-60-minutes-or-less">
                                                                                                <div
                                                                                                    className="qodef-e-inner">
                                                                                                    <div
                                                                                                        className="qodef-e-content">
                                                                                                        <div
                                                                                                            className="qodef-e-info-top">
                                                                                                            <p
                                                                                                                className="qodef-recipe-video-length">
                                                                                                                <img src="assets/img/play.png"
                                                                                                                    alt="" />
                                                                                                                <span
                                                                                                                    id="slider-latest-posts">Latest
																																Posts</span>
                                                                                                            </p>
                                                                                                        </div>
                                                                                                        <h1
                                                                                                            className="qodef-e-title entry-title">
                                                                                                            <a
                                                                                                                className="qodef-e-title-link slider-title"
                                                                                                                href="#">
                                                                                                                {data.title}
                                                                                                            </a>
                                                                                                        </h1>

                                                                                                        <div
                                                                                                            className="qodef-e-info-bottom">
                                                                                                            <div
                                                                                                                className="qodef-e-left">
                                                                                                                <div
                                                                                                                    className="qodef-e qodef-info--author-date">
                                                                                                                    <div
                                                                                                                        className="qodef-m-image">
                                                                                                                        <a
                                                                                                                            href="#">
                                                                                                                            <button
                                                                                                                                className="qodef-theme-button slider-btn">
                                                                                                                                <span
                                                                                                                                    className="qodef-m-text">{data.btn_text} </span>
                                                                                                                            </button>
                                                                                                                        </a>
                                                                                                                    </div>

                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </article>
                                                                                        </div>
                                                                                    </div>
                                                                                </rs-layer>

                                                                            </rs-slide>

                                                                        );
                                                                    })
                                                                }


                                                            </rs-slides>

                                                            <rs-static-layers>

                                                                <rs-layer
                                                                    id="slider-9-slide-9-layer-10"
                                                                    className="rs-layer-static"
                                                                    data-type="image"
                                                                    data-xy="x:c;y:b,b,m,m;yo:0,-10px,300px,300px;"
                                                                    data-text="w:normal;"
                                                                    data-dim="w:1582px,1347px,1724px,1724px;h:212px,181px,231px,231px;"
                                                                    data-vbility="t,t,f,f"
                                                                    data-basealign="slide"
                                                                    data-rsp_o="off"
                                                                    data-rsp_bd="off"
                                                                    data-onslides="s:1;"
                                                                    data-frame_0="x:left;"
                                                                    data-frame_1="sp:0;"
                                                                    data-frame_999="o:0;st:w;sR:4200;"
                                                                    style={{ zIndex: "9" }}><img
                                                                        src="assets/img/h4-img-19-1.png"
                                                                        alt="z" width="1582"
                                                                        height="212"
                                                                        data-no-retina />
                                                                </rs-layer>

                                                                <rs-layer
                                                                    id="slider-9-slide-9-layer-11"
                                                                    className="rs-layer-static"
                                                                    data-type="text"
                                                                    data-xy="x:c;y:b,b,m,m;yo:93px,65px,289px,289px;"
                                                                    data-text="w:normal;s:20,16,9,7;l:25,20,11,8;"
                                                                    data-vbility="t,t,f,f"
                                                                    data-basealign="slide"
                                                                    data-rsp_o="off"
                                                                    data-rsp_bd="off"
                                                                    data-onslides="s:1;"
                                                                    data-frame_0="x:-50;"
                                                                    data-frame_1="sp:0;"
                                                                    data-frame_999="o:0;st:w;sR:4400;"
                                                                    style={{ zIndex: "10" }}>
                                                                    <div role="form"
                                                                        className="wpcf7"
                                                                        id="wpcf7-f644-p540-o4"
                                                                        lang="en-US" dir="ltr">
                                                                        <div className="screen-reader-response"
                                                                            aria-live="polite">
                                                                        </div>
                                                                        <form action="#"
                                                                            method="post"
                                                                            className="wpcf7-form"
                                                                        >

                                                                            <div
                                                                                className="qodef-subscription-form">
                                                                                <h3>Lorem Ipsum
                                                                                Dollar Sit.
																										</h3>
                                                                                <p><span
                                                                                    className="wpcf7-form-control-wrap your-name"><input
                                                                                        type="text"
                                                                                        name="your-name"

                                                                                        size="40"
                                                                                        className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                                                                                        aria-required="true"
                                                                                        aria-invalid="false"
                                                                                        placeholder="Your Name*" /></span><span
                                                                                            className="wpcf7-form-control-wrap your-email"><input
                                                                                            type="email"
                                                                                            name="your-email"

                                                                                            size="40"
                                                                                            className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email"
                                                                                            aria-required="true"
                                                                                            aria-invalid="false"
                                                                                            placeholder="Your Email*" /></span><button
                                                                                                type="submit"
                                                                                                className="wpcf7-form-control wpcf7-submit qodef-button qodef-size--normal qodef-type--filled qodef-m subscribe-btn"><span
                                                                                                    className="qodef-m-text">Subscribe</span></button>
                                                                                </p>
                                                                            </div>

                                                                        </form>
                                                                    </div>
                                                                </rs-layer>

                                                            </rs-static-layers>

                                                        </rs-module>

                                                    </rs-module-wrap>

                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div
                    className="mobile_subscriber elementor-element elementor-element-b3e965c elementor-section-full_width elementor-section-content-middle elementor-hidden-desktop elementor-section-height-default elementor-section-height-default qodef-elementor-content-no elementor-section elementor-top-section"
                >
                    <div className="elementor-container elementor-column-gap-default">
                        <div className="elementor-row">
                            <div className="elementor-element elementor-element-4780ba5 elementor-column elementor-col-100 elementor-top-column"
                                data-id="4780ba5" data-element_type="column"
                                data-settings="{&quot;background_background&quot;:&quot;classic&quot;,&quot;animation_tablet&quot;:&quot;none&quot;}">
                                <div className="elementor-column-wrap  elementor-element-populated">
                                    <div className="elementor-widget-wrap">
                                        <div className="elementor-element elementor-element-586ec31 elementor-widget elementor-widget-wp-widget-easymeals_core_contact_form_7"
                                            data-id="586ec31" data-element_type="widget"
                                            data-widget_type="wp-widget-easymeals_core_contact_form_7.default">
                                            <div className="elementor-widget-container">
                                                <div className="qodef-contact-form-7">
                                                    <div role="form" className="wpcf7"
                                                        id="wpcf7-f644-p540-o5" lang="en-US"
                                                        dir="ltr">
                                                        <div className="screen-reader-response"
                                                            aria-live="polite"></div>
                                                        <form action="#" method="post"
                                                            className="wpcf7-form">

                                                            <div
                                                                className="qodef-subscription-form">
                                                                <h3>Lorem Ipsum Dollar Sit.</h3>
                                                                <p><span
                                                                    className="wpcf7-form-control-wrap your-name"><input
                                                                        type="text"
                                                                        name="your-name"
                                                                        size="40"
                                                                        className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                                                                        aria-required="true"
                                                                        aria-invalid="false"
                                                                        placeholder="Your Name*" /></span><span
                                                                            className="wpcf7-form-control-wrap your-email"><input
                                                                            type="email"
                                                                            name="your-email"
                                                                            size="40"
                                                                            className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email"
                                                                            aria-required="true"
                                                                            aria-invalid="false"
                                                                            placeholder="Your Email*" /></span>
                                                                    <button type="submit"
                                                                        className="wpcf7-form-control wpcf7-submit qodef-button qodef-size--normal qodef-type--filled qodef-m subscribe-btn"><span
                                                                            className="qodef-m-text">Subscribe</span></button>
                                                                </p>
                                                            </div>

                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        )
    }

}

export default Slider;
