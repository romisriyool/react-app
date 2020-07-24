import React, { Component } from 'react';
import Menu from '../Components/Menu';
import Custom_Footer from '../Components/Custom_Footer';
import InstagramGallery_Widget from '../Components/InstagramGallery_Widget';
import Posts_Widget from '../Components/Posts_Widget';
import Subscribe_Sidebar from '../Components/Subscribe_Sidebar';
import Custom_H1_Heading from '../Components/Custom_H1_Heading';
import Author_Info from '../Components/Author_Info';
import Social_Share from '../Components/Social_Share';
import Big_Single_Image from '../Components/Big_Single_Image';
import Custom_H4_Heading from '../Components/Custom_H4_Heading';
import Heart_Icon from '../Components/Heart_Icon';
import Comment_Icon from '../Components/Comment_Icon';
import Custom_Paragraph from '../Components/Custom_Paragraph';
import { Helmet } from 'react-helmet';
import generalData from "../jsonData/General";


class Blog extends React.Component {

	componentDidMount() {
        window.scrollTo(0, 0)
    }

	render() {

		return (
			<div className="blog-posts">

				<Helmet>
					<title>{generalData.general.blog_browserTab}</title>
				</Helmet>

				<Menu pagename="Blog" />

				<div id="qodef-page-outer">
					<div id="qodef-page-inner" className="qodef-content-grid">
						<main id="qodef-page-content" className="qodef-grid qodef-layout--template qodef-gutter--medium">
							<div className="qodef-grid-inner clear">
								<div className="qodef-grid-item qodef-page-content-section qodef-col--8">
									<div className="qodef-recipe qodef-m  qodef-recipe-single qodef-item-layout--default">
										<article
											className="qodef-recipe-list-item qodef-e post-275 recipe type-recipe status-publish has-post-thumbnail hentry recipe-category-fast-to-make recipe-tag-15-minutes-or-less">
											<div className="qodef-e-inner">

												<Custom_H1_Heading title="Healthy spaghetti bolognese with mushrooms and peppers" />

												<div className="qodef-e-content qodef-e-content-above-image">

													<Author_Info blogID="" />

													<Social_Share blogID="" />

												</div>

												<Big_Single_Image src="assets/img/h4-img-5.jpg" mb="20px" />

												<div className="recipies-subtitle-wrapper">

													<Custom_H4_Heading title="7 Secrets For Leadership Success" />

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
																									<small>2 days ago / by Masum
																									Rana / 3 min
																								read</small>

																									<Custom_Paragraph />

																									<Custom_Paragraph />

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

export default Blog;
