import React, { Component } from 'react';
import blogData from "../jsonData/Blogs.json";


class One_Col_Blog extends React.Component {

    render() {

        return (
            <div>

                {/* { console.log(blogData.big_post.title) } */}

                <section
                    className="elementor-element elementor-element-8bf46f7 qodef-elementor-content-grid elementor-section-boxed elementor-section-height-default elementor-section-height-default elementor-section elementor-top-section"
                >
                    <div className="elementor-container elementor-column-gap-default">
                        <div className="elementor-row">
                            <div className="elementor-element elementor-element-ec25c70 elementor-column elementor-col-100 elementor-top-column"
                                data-id="ec25c70" data-element_type="column"
                                data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                <div className="elementor-column-wrap  elementor-element-populated">
                                    <div className="elementor-widget-wrap">
                                        <div className="elementor-element elementor-element-8bcb0a1 elementor-widget elementor-widget-easymeals_core_recipe_list"
                                            data-id="8bcb0a1" data-element_type="widget"
                                            data-widget_type="easymeals_core_recipe_list.default">
                                            <div className="elementor-widget-container">
                                                <div className="qodef-shortcode qodef-m  qodef-recipe-list qodef-item-layout--info-on-right qodef-item--white-bg   qodef-hover-type--zoom   qodef-grid qodef-layout--columns  qodef-gutter--normal qodef-col-num--1 qodef-item-layout--info-on-right qodef--no-bottom-space qodef-pagination--off qodef-responsive--predefined"
                                                    data-options="{&quot;plugin&quot;:&quot;easymeals_core&quot;,&quot;module&quot;:&quot;plugins\/recipe\/post-types\/recipe\/shortcodes&quot;,&quot;shortcode&quot;:&quot;recipe-list&quot;,&quot;post_type&quot;:&quot;recipe&quot;,&quot;next_page&quot;:&quot;2&quot;,&quot;max_pages_num&quot;:1,&quot;behavior&quot;:&quot;columns&quot;,&quot;images_proportion&quot;:&quot;full&quot;,&quot;columns&quot;:&quot;1&quot;,&quot;columns_responsive&quot;:&quot;predefined&quot;,&quot;columns_1440&quot;:&quot;3&quot;,&quot;columns_1366&quot;:&quot;3&quot;,&quot;columns_1024&quot;:&quot;3&quot;,&quot;columns_768&quot;:&quot;3&quot;,&quot;columns_680&quot;:&quot;3&quot;,&quot;columns_480&quot;:&quot;3&quot;,&quot;space&quot;:&quot;normal&quot;,&quot;posts_per_page&quot;:&quot;1&quot;,&quot;orderby&quot;:&quot;date&quot;,&quot;order&quot;:&quot;ASC&quot;,&quot;additional_params&quot;:&quot;tax&quot;,&quot;tax&quot;:&quot;recipe-category&quot;,&quot;tax_slug&quot;:&quot;waffles&quot;,&quot;layout&quot;:&quot;info-on-right&quot;,&quot;title_tag&quot;:&quot;h2&quot;,&quot;custom_padding&quot;:&quot;no&quot;,&quot;enable_top_info&quot;:&quot;yes&quot;,&quot;enable_categories&quot;:&quot;yes&quot;,&quot;enable_author_date&quot;:&quot;yes&quot;,&quot;enable_share&quot;:&quot;yes&quot;,&quot;enable_like&quot;:&quot;no&quot;,&quot;enable_bookmark&quot;:&quot;yes&quot;,&quot;enable_excerpt&quot;:&quot;yes&quot;,&quot;excerpt_length&quot;:&quot;175&quot;,&quot;white_bg&quot;:&quot;yes&quot;,&quot;tags_column&quot;:&quot;no&quot;,&quot;hover_type&quot;:&quot;zoom&quot;,&quot;appear_effect&quot;:&quot;no&quot;,&quot;zoom_out_effect&quot;:&quot;no&quot;,&quot;pagination_type&quot;:&quot;no-pagination&quot;,&quot;info_below_enable_button&quot;:&quot;no&quot;,&quot;info_below_hide_image&quot;:&quot;no&quot;,&quot;info_right_image_layout&quot;:&quot;no&quot;,&quot;object_class_name&quot;:&quot;EasyMealsCoreRecipeListShortcode&quot;,&quot;taxonomy_filter&quot;:&quot;recipe-category&quot;,&quot;additional_query_args&quot;:{&quot;tax_query&quot;:[{&quot;taxonomy&quot;:&quot;recipe-category&quot;,&quot;field&quot;:&quot;slug&quot;,&quot;terms&quot;:&quot;waffles&quot;}]},&quot;unique&quot;:&quot;5&quot;,&quot;space_value&quot;:15}">
                                                    <div className="qodef-grid-inner clear">
                                                        <article
                                                            className="qodef-e qodef-grid-item qodef-item--full post-588 recipe type-recipe status-publish has-post-thumbnail hentry recipe-category-waffles recipe-tag-tips-and-tricks">
                                                            <div className="qodef-e-inner">
                                                                <div className="qodef-e-image">
                                                                    <div
                                                                        className="qodef-e-media-image">
                                                                        <a
                                                                            href="#">
                                                                            <img width="1300"
                                                                                height="914"
                                                                                src={ blogData.big_post.img }
                                                                                className="attachment-full size-full wp-post-image"
                                                                                alt="d" />
                                                                        </a>
                                                                    </div>

                                                                </div>
                                                                <div className="qodef-e-content">
                                                                    <div
                                                                        className="qodef-e-info-top">
                                                                        <p
                                                                            className="qodef-recipe-prep-time">
                                                                            <span
                                                                                className="fa fa-heart heart-icon"></span>
																									{ blogData.big_post.likes } </p>
                                                                        <p
                                                                            className="qodef-recipe-difficulty">
                                                                            <img src="assets/img/comment-icon.png"
                                                                                alt="" />
                                                                            <span>{ blogData.big_post.comments }</span> </p>
                                                                    </div>
                                                                    <h2
                                                                        className="qodef-e-title entry-title">
                                                                        <a
                                                                            className="qodef-e-title-link"
                                                                            href="#">
                                                                                { blogData.big_post.title }
                                                                        </a>
                                                                    </h2>
                                                                    <p className="small-text"> 
                                                                    { blogData.big_post.post_time } ago / 
                                                                    by { blogData.big_post.author } / 
                                                                    { blogData.big_post.read_time } read</p>
                                                                    <p
                                                                        className="qodef-e-excerpt">
                                                                        { blogData.big_post.desc } </p>

                                                                </div>
                                                            </div>
                                                        </article>
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

export default One_Col_Blog;
