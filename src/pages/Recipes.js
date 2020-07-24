import React, { Component } from 'react';
import Menu from '../Components/Menu';
import Custom_Footer from '../Components/Custom_Footer';
import Custom_H1_Heading from '../Components/Custom_H1_Heading';
import Custom_H4_Heading from '../Components/Custom_H4_Heading';
import Social_Share from '../Components/Social_Share';
import Author_Info from '../Components/Author_Info';
import Big_Single_Image from '../Components/Big_Single_Image';
import Recipe_Prep_Time from '../Components/Recipe_Prep_Time';
import Subscribe_Sidebar from '../Components/Subscribe_Sidebar';
import InstagramGallery_Widget from '../Components/InstagramGallery_Widget';
import Posts_Widget from '../Components/Posts_Widget';
import Heart_Icon from '../Components/Heart_Icon';
import Comment_Icon from '../Components/Comment_Icon';
import Custom_Paragraph from '../Components/Custom_Paragraph';
import { Helmet } from 'react-helmet';
import recipeData from "../jsonData/Recipes";
import generalData from "../jsonData/General";



class Recipes extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {

        return (
            <div className="recipies">

                <Helmet>
                    <title>{generalData.general.recipes_browserTab}</title>
                </Helmet>

                <Menu pagename="Recipes" />

                <div id="qodef-page-outer">
                    <div id="qodef-page-inner" className="qodef-content-grid">
                        <main id="qodef-page-content" className="qodef-grid qodef-layout--template qodef-gutter--medium">
                            <div className="qodef-grid-inner clear">
                                <div className="qodef-grid-item qodef-page-content-section qodef-col--8">
                                    <div className="qodef-recipe qodef-m  qodef-recipe-single qodef-item-layout--default">
                                        <article
                                            className="qodef-recipe-list-item qodef-e post-275 recipe type-recipe status-publish has-post-thumbnail hentry recipe-category-fast-to-make recipe-tag-15-minutes-or-less">
                                            <div className="qodef-e-inner">

                                                <Custom_H1_Heading title={recipeData.general.title} />

                                                <div className="qodef-e-content qodef-e-content-above-image">

                                                    <Author_Info blogID="" />

                                                    <Social_Share blogID="" />

                                                </div>

                                                <Big_Single_Image src={recipeData.general.img} mb="20px" />

                                                <Recipe_Prep_Time c={recipeData.general.clock_text} th={recipeData.general.thumb_text} f={recipeData.general.fork_text} ta={recipeData.general.tag_text} />

                                                <div className="recipies-subtitle-wrapper">

                                                    <Custom_H4_Heading title={recipeData.general.sub_heading} />

                                                    <div className="recipies-title-likes-comments">

                                                        <Heart_Icon blogID="" />

                                                        <Comment_Icon blogID="" />

                                                    </div>
                                                </div>

                                                <div className="qodef-e-content">
                                                    <div className="qodef-e qodef-recipe-content">
                                                        <div className="elementor elementor-275">
                                                            <div className="elementor-inner">
                                                                <div className="elementor-section-wrap">
                                                                    <section
                                                                        className="elementor-element elementor-element-eaad8ac elementor-section-full_width elementor-section-height-default elementor-section-height-default qodef-elementor-content-no elementor-section elementor-top-section">
                                                                        <div
                                                                            className="elementor-container elementor-column-gap-default">
                                                                            <div className="elementor-row">
                                                                                <div
                                                                                    className="elementor-element elementor-element-b3cc606 elementor-column elementor-col-100 elementor-top-column">
                                                                                    <div className="elementor-widget-wrap">
                                                                                        <div
                                                                                            className="elementor-element elementor-element-5d0dd20 elementor-widget elementor-widget-text-editor">
                                                                                            <div
                                                                                                className="elementor-widget-container">
                                                                                                <div
                                                                                                    className="elementor-text-editor elementor-clearfix">
                                                                                                    <small>
                                                                                                        {recipeData.general.post_time} ago /
                                                                                                        by {generalData.general.author} /
                                                                                                        {recipeData.general.read_time} read
                                                                                                    </small>


                                                                                                    <Custom_Paragraph data={recipeData.general.sub_heading_bottom_text} />

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


                                                    <div className="qodef-m-nutritions-table">
                                                        <h4 className="qodef-m-nutritions-title">{recipeData.general.nutritional_info_label}</h4>
                                                        <div className="qodef-m-nutritions-table-inner recipies-nutritional-info">

                                                            {
                                                                recipeData.nutritional_info.map((data, key) => {
                                                                    return (
                                                                        <div className="qodef-e qodef-nutrition-items" key={key}>
                                                                            <span className="qodef-nutrition-value">{data.value}</span>
                                                                            <span className="qodef-nutrition-label">{data.label}</span>
                                                                        </div>
                                                                    );
                                                                })
                                                            }

                                                        </div>
                                                    </div>

                                                    <div className="qodef-e qodef-recipe-content">
                                                        <div className="elementor elementor-275">
                                                            <div className="elementor-inner">
                                                                <div className="elementor-section-wrap">
                                                                    <section
                                                                        className="elementor-element elementor-element-eaad8ac elementor-section-full_width elementor-section-height-default elementor-section-height-default qodef-elementor-content-no elementor-section elementor-top-section">
                                                                        <div
                                                                            className="elementor-container elementor-column-gap-default">
                                                                            <div className="elementor-row">
                                                                                <div
                                                                                    className="elementor-element elementor-element-b3cc606 elementor-column elementor-col-100 elementor-top-column">
                                                                                    <div className="elementor-widget-wrap">
                                                                                        <div
                                                                                            className="elementor-element elementor-element-5d0dd20 elementor-widget elementor-widget-text-editor">
                                                                                            <div
                                                                                                className="elementor-widget-container">
                                                                                                <div
                                                                                                    className="elementor-text-editor elementor-clearfix">


                                                                                                    <Custom_Paragraph data={recipeData.general.nutritional_info_bottom_text} />

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

                                                        <div className="qodef-grid qodef-layout--template recipe-products">
                                                            <div className="qodef-grid-inner clear">

                                                                {
                                                                    recipeData.recipe_products.map((data, key) => {
                                                                        return (
                                                                            <div className="qodef-grid-item qodef-col--4 recipe-products-row" key={key}>
                                                                                <div className="box">
                                                                                    <div className="recipe-product-img">
                                                                                        <img src={data.img} alt="" />
                                                                                    </div>
                                                                                    <a href={data.link}>Buy Now</a>
                                                                                </div>
                                                                            </div>
                                                                        );
                                                                    })
                                                                }

                                                            </div>
                                                        </div>


                                                        <div className="recipe-ingre-direc-wrapper">

                                                            <div className="qodef-grid qodef-layout--template recipe-ingredients">
                                                                <div className="qodef-grid-inner clear">
                                                                    <div className="qodef-grid-item qodef-col--12">
                                                                        <h5>{recipeData.general.ingredients_label}</h5>
                                                                        <ol className="two-columns">

                                                                            {
                                                                                recipeData.ingredients.map((data, key) => {
                                                                                    return (
                                                                                        <li key={key}>{data.label}</li>
                                                                                    );
                                                                                })
                                                                            }

                                                                        </ol>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="qodef-grid qodef-layout--template recipe-directions">
                                                                <div className="qodef-grid-inner clear">
                                                                    <div className="qodef-grid-item qodef-col--12">
                                                                        <h5>{recipeData.general.directions_label}</h5>
                                                                        <Custom_Paragraph data={recipeData.general.directions_desc} />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                </div>

                                <div className="qodef-grid-item qodef-page-sidebar-section qodef-col--4">
                                    <aside id="qodef-page-sidebar">

                                        <Subscribe_Sidebar />

                                        <Posts_Widget widgetname="Popular Posts" limit="5" />

                                        <Posts_Widget widgetname="Recent Posts" limit="3" />

                                        <InstagramGallery_Widget />

                                    </aside>
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

export default Recipes;
