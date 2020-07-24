import React, { Component } from 'react';
import blogData from "../jsonData/Blogs";


class Three_Col_Blogs extends React.Component {

    render() {

        return (
            <div>

                {
                    // console.log(blogData.masonary_posts[0].left_posts)
                }

                <section
                    className="elementor-element elementor-element-f2a0f20 qodef-elementor-content-grid elementor-section-boxed elementor-section-height-default elementor-section-height-default elementor-section elementor-top-section"
                    data-id="f2a0f20" data-element_type="section">
                    <div className="elementor-container elementor-column-gap-default">
                        <div className="elementor-row">
                            <div className="elementor-element elementor-element-cc6ab27 elementor-column elementor-col-33 elementor-top-column"
                                data-id="cc6ab27" data-element_type="column">
                                <div className="elementor-column-wrap  elementor-element-populated">
                                    <div className="elementor-widget-wrap">
                                        <div className="elementor-element elementor-element-2fa3ef3 elementor-widget elementor-widget-easymeals_core_recipe_list"
                                            data-id="2fa3ef3" data-element_type="widget"
                                            data-widget_type="easymeals_core_recipe_list.default">
                                            <div className="elementor-widget-container">
                                                <div className="qodef-shortcode qodef-m  qodef-recipe-list qodef-item-layout--info-below    qodef-hover-type--zoom   qodef-grid qodef-layout--columns  qodef-gutter--normal qodef-col-num--1 qodef-item-layout--info-below qodef--no-bottom-space qodef-pagination--off qodef-responsive--custom qodef-col-num--1440--1 qodef-col-num--1366--1 qodef-col-num--1024--2 qodef-col-num--768--2 qodef-col-num--680--1 qodef-col-num--480--1"
                                                    data-options="{&quot;plugin&quot;:&quot;easymeals_core&quot;,&quot;module&quot;:&quot;plugins\/recipe\/post-types\/recipe\/shortcodes&quot;,&quot;shortcode&quot;:&quot;recipe-list&quot;,&quot;post_type&quot;:&quot;recipe&quot;,&quot;next_page&quot;:&quot;2&quot;,&quot;max_pages_num&quot;:3,&quot;behavior&quot;:&quot;columns&quot;,&quot;images_proportion&quot;:&quot;full&quot;,&quot;columns&quot;:&quot;1&quot;,&quot;columns_responsive&quot;:&quot;custom&quot;,&quot;columns_1440&quot;:&quot;1&quot;,&quot;columns_1366&quot;:&quot;1&quot;,&quot;columns_1024&quot;:&quot;2&quot;,&quot;columns_768&quot;:&quot;2&quot;,&quot;columns_680&quot;:&quot;1&quot;,&quot;columns_480&quot;:&quot;1&quot;,&quot;space&quot;:&quot;normal&quot;,&quot;posts_per_page&quot;:&quot;2&quot;,&quot;orderby&quot;:&quot;date&quot;,&quot;order&quot;:&quot;ASC&quot;,&quot;additional_params&quot;:&quot;tax&quot;,&quot;tax&quot;:&quot;recipe-category&quot;,&quot;tax_slug&quot;:&quot;snacks&quot;,&quot;layout&quot;:&quot;info-below&quot;,&quot;title_tag&quot;:&quot;h4&quot;,&quot;custom_padding&quot;:&quot;no&quot;,&quot;enable_top_info&quot;:&quot;yes&quot;,&quot;enable_categories&quot;:&quot;no&quot;,&quot;enable_author_date&quot;:&quot;yes&quot;,&quot;enable_share&quot;:&quot;no&quot;,&quot;enable_like&quot;:&quot;no&quot;,&quot;enable_bookmark&quot;:&quot;no&quot;,&quot;enable_excerpt&quot;:&quot;no&quot;,&quot;excerpt_length&quot;:&quot;150&quot;,&quot;white_bg&quot;:&quot;no&quot;,&quot;tags_column&quot;:&quot;no&quot;,&quot;hover_type&quot;:&quot;zoom&quot;,&quot;appear_effect&quot;:&quot;no&quot;,&quot;zoom_out_effect&quot;:&quot;no&quot;,&quot;pagination_type&quot;:&quot;no-pagination&quot;,&quot;info_below_enable_button&quot;:&quot;no&quot;,&quot;info_below_hide_image&quot;:&quot;no&quot;,&quot;object_class_name&quot;:&quot;EasyMealsCoreRecipeListShortcode&quot;,&quot;taxonomy_filter&quot;:&quot;recipe-category&quot;,&quot;additional_query_args&quot;:{&quot;tax_query&quot;:[{&quot;taxonomy&quot;:&quot;recipe-category&quot;,&quot;field&quot;:&quot;slug&quot;,&quot;terms&quot;:&quot;snacks&quot;}]},&quot;unique&quot;:&quot;6&quot;,&quot;space_value&quot;:15}">
                                                    <div className="qodef-grid-inner clear">

                                                        {
                                                            blogData.masonary_posts[0].left_posts.map((data, key) => {
                                                                return (

                                                                    <article key={key}
                                                                        className="qodef-e qodef-grid-item qodef-item--full post-2081 recipe type-recipe status-publish has-post-thumbnail hentry recipe-category-snacks recipe-tag-60-minutes-or-less recipe-tag-bake recipe-tag-dessert recipe-tag-dip recipe-tag-easy recipe-tag-fast-food recipe-tag-gluten recipe-tag-latin-inspired recipe-tag-lunch recipe-tag-meat recipe-tag-oil recipe-tag-olive-oil recipe-tag-one-bowl recipe-tag-pasta recipe-tag-recipes recipe-tag-snacks recipe-tag-soy-free recipe-tag-spring recipe-tag-tips-and-tricks recipe-tag-trans-fat recipe-tag-vegetables">
                                                                        <div className="qodef-e-inner">
                                                                            <div className="qodef-e-image">
                                                                                <div
                                                                                    className="qodef-e-media-image">
                                                                                    <img width="1300"
                                                                                            height="883"
                                                                                            src={data.img}
                                                                                            className="attachment-full size-full wp-post-image"
                                                                                            alt="d" />
                                                                                   
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
                                                                                    {data.title}
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
                            <div className="elementor-element elementor-element-e5bb8fb elementor-column elementor-col-33 elementor-top-column"
                                data-id="e5bb8fb" data-element_type="column">
                                <div className="elementor-column-wrap  elementor-element-populated">
                                    <div className="elementor-widget-wrap">
                                        <div className="elementor-element elementor-element-84369d5 elementor-widget elementor-widget-easymeals_core_recipe_list"
                                            data-id="84369d5" data-element_type="widget"
                                            data-widget_type="easymeals_core_recipe_list.default">
                                            <div className="elementor-widget-container">
                                                <div className="qodef-shortcode qodef-m  qodef-recipe-list qodef-item-layout--info-below qodef-item--white-bg   qodef-hover-type--zoom   qodef-grid qodef-layout--columns  qodef-gutter--normal qodef-col-num--1 qodef-item-layout--info-below qodef--no-bottom-space qodef-pagination--off qodef-responsive--custom qodef-col-num--1440--1 qodef-col-num--1366--1 qodef-col-num--1024--1 qodef-col-num--768--1 qodef-col-num--680--1 qodef-col-num--480--1"
                                                >
                                                    <div className="qodef-grid-inner clear">
                                                        <article
                                                            className="qodef-e qodef-grid-item qodef-item--full post-2094 recipe type-recipe status-publish has-post-thumbnail hentry recipe-category-snacks recipe-tag-60-minutes-or-less recipe-tag-bake recipe-tag-dessert recipe-tag-dip recipe-tag-easy recipe-tag-fast-food recipe-tag-gluten recipe-tag-latin-inspired recipe-tag-lunch recipe-tag-meat recipe-tag-oil recipe-tag-olive-oil recipe-tag-one-bowl recipe-tag-pasta recipe-tag-recipes recipe-tag-snacks recipe-tag-soy-free recipe-tag-spring recipe-tag-tips-and-tricks recipe-tag-trans-fat recipe-tag-vegetables">
                                                            <div className="qodef-e-inner">
                                                                <div className="qodef-e-image">
                                                                    <div
                                                                        className="qodef-e-media-image">
                                                                        
                                                                            <img width="1300"
                                                                                height="834"
                                                                                src={blogData.masonary_posts[0].big_posts.img}
                                                                                className="attachment-full size-full wp-post-image"
                                                                                alt="d" />
                                                                        
                                                                    </div>
                                                                </div>
                                                                <div className="qodef-e-content">
                                                                    <div
                                                                        className="qodef-e-info-top">
                                                                        <p className="qodef-recipe-prep-time">
                                                                            <span className="fa fa-heart heart-icon"></span>
                                                                            {blogData.masonary_posts[0].big_posts.likes}
                                                                        </p>
                                                                        <p
                                                                            className="qodef-recipe-difficulty">
                                                                            <img src="assets/img/comment-icon.png"
                                                                                alt="" />
                                                                            <span>{blogData.masonary_posts[0].big_posts.comments}</span>
                                                                        </p>
                                                                    </div>
                                                                    <h2
                                                                        className="qodef-e-title entry-title">
                                                                        
                                                                            {blogData.masonary_posts[0].big_posts.title}
                                                                        
                                                                    </h2>
                                                                    <p
                                                                        className="qodef-e-excerpt">
                                                                        {blogData.masonary_posts[0].big_posts.desc}
                                                                    </p>

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
                            <div className="elementor-element elementor-element-0eb31c4 elementor-column elementor-col-33 elementor-top-column"
                                data-id="0eb31c4" data-element_type="column">
                                <div className="elementor-column-wrap  elementor-element-populated">
                                    <div className="elementor-widget-wrap">
                                        <div className="elementor-element elementor-element-400a607 elementor-widget elementor-widget-easymeals_core_recipe_list"
                                            data-id="400a607" data-element_type="widget"
                                            data-widget_type="easymeals_core_recipe_list.default">
                                            <div className="elementor-widget-container">
                                                <div className="qodef-shortcode qodef-m  qodef-recipe-list qodef-item-layout--info-below    qodef-hover-type--zoom   qodef-grid qodef-layout--columns  qodef-gutter--normal qodef-col-num--1 qodef-item-layout--info-below qodef--no-bottom-space qodef-pagination--off qodef-responsive--custom qodef-col-num--1440--1 qodef-col-num--1366--1 qodef-col-num--1024--2 qodef-col-num--768--2 qodef-col-num--680--1 qodef-col-num--480--1"
                                                    data-options="{&quot;plugin&quot;:&quot;easymeals_core&quot;,&quot;module&quot;:&quot;plugins\/recipe\/post-types\/recipe\/shortcodes&quot;,&quot;shortcode&quot;:&quot;recipe-list&quot;,&quot;post_type&quot;:&quot;recipe&quot;,&quot;next_page&quot;:&quot;2&quot;,&quot;max_pages_num&quot;:1,&quot;behavior&quot;:&quot;columns&quot;,&quot;images_proportion&quot;:&quot;full&quot;,&quot;columns&quot;:&quot;1&quot;,&quot;columns_responsive&quot;:&quot;custom&quot;,&quot;columns_1440&quot;:&quot;1&quot;,&quot;columns_1366&quot;:&quot;1&quot;,&quot;columns_1024&quot;:&quot;2&quot;,&quot;columns_768&quot;:&quot;2&quot;,&quot;columns_680&quot;:&quot;1&quot;,&quot;columns_480&quot;:&quot;1&quot;,&quot;space&quot;:&quot;normal&quot;,&quot;posts_per_page&quot;:&quot;2&quot;,&quot;orderby&quot;:&quot;date&quot;,&quot;order&quot;:&quot;ASC&quot;,&quot;additional_params&quot;:&quot;id&quot;,&quot;post_ids&quot;:&quot;2105,2109&quot;,&quot;layout&quot;:&quot;info-below&quot;,&quot;title_tag&quot;:&quot;h4&quot;,&quot;custom_padding&quot;:&quot;no&quot;,&quot;enable_top_info&quot;:&quot;yes&quot;,&quot;enable_categories&quot;:&quot;no&quot;,&quot;enable_author_date&quot;:&quot;yes&quot;,&quot;enable_share&quot;:&quot;no&quot;,&quot;enable_like&quot;:&quot;no&quot;,&quot;enable_bookmark&quot;:&quot;no&quot;,&quot;enable_excerpt&quot;:&quot;no&quot;,&quot;excerpt_length&quot;:&quot;150&quot;,&quot;white_bg&quot;:&quot;no&quot;,&quot;tags_column&quot;:&quot;no&quot;,&quot;hover_type&quot;:&quot;zoom&quot;,&quot;appear_effect&quot;:&quot;no&quot;,&quot;zoom_out_effect&quot;:&quot;no&quot;,&quot;pagination_type&quot;:&quot;no-pagination&quot;,&quot;info_below_enable_button&quot;:&quot;no&quot;,&quot;info_below_hide_image&quot;:&quot;no&quot;,&quot;object_class_name&quot;:&quot;EasyMealsCoreRecipeListShortcode&quot;,&quot;taxonomy_filter&quot;:&quot;recipe-category&quot;,&quot;additional_query_args&quot;:{&quot;orderby&quot;:&quot;post__in&quot;,&quot;post__in&quot;:[&quot;2105&quot;,&quot;2109&quot;]},&quot;unique&quot;:&quot;8&quot;,&quot;space_value&quot;:15}">
                                                    <div className="qodef-grid-inner clear">

                                                        {
                                                            blogData.masonary_posts[0].right_posts.map((data, key) => {
                                                                return (

                                                                    <article key={key}
                                                                        className="qodef-e qodef-grid-item qodef-item--full post-2105 recipe type-recipe status-publish has-post-thumbnail hentry recipe-category-snacks recipe-tag-60-minutes-or-less recipe-tag-bake recipe-tag-dessert recipe-tag-dip recipe-tag-easy recipe-tag-fast-food recipe-tag-gluten recipe-tag-latin-inspired recipe-tag-lunch recipe-tag-meat recipe-tag-oil recipe-tag-olive-oil recipe-tag-one-bowl recipe-tag-pasta recipe-tag-recipes recipe-tag-snacks recipe-tag-soy-free recipe-tag-spring recipe-tag-tips-and-tricks recipe-tag-trans-fat recipe-tag-vegetables">
                                                                        <div className="qodef-e-inner">
                                                                            <div className="qodef-e-image">
                                                                                <div
                                                                                    className="qodef-e-media-image">
                                                                                    
                                                                                        <img width="1300"
                                                                                            height="883"
                                                                                            src={ data.img }
                                                                                            className="attachment-full size-full wp-post-image"
                                                                                            alt="d" />
                                                                                    
                                                                                </div>
                                                                            </div>
                                                                            <div className="qodef-e-content">
                                                                                <div
                                                                                    className="qodef-e-info-top">
                                                                                    <p
                                                                                        className="qodef-recipe-prep-time">
                                                                                        <span
                                                                                            className="fa fa-heart heart-icon"></span>
																									{ data.likes } </p>
                                                                                    <p
                                                                                        className="qodef-recipe-difficulty">
                                                                                        <img src="assets/img/comment-icon.png"
                                                                                            alt="" />
                                                                                        <span>{ data.comments }</span> </p>
                                                                                </div>
                                                                                <h4
                                                                                    className="qodef-e-title entry-title">
                                                                                    
                                                                                        { data.title }
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

export default Three_Col_Blogs;
