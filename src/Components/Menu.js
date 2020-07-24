import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Menu extends React.Component {

	state = {
		isDesktopMenu: false,
		isMobileMenu: false
	}


	render() {

		const pagename = this.props.pagename;

		console.log(pagename);

		{

            // var url = window.location.href;
            // var to = url.lastIndexOf('/');
            // to = to == -1 ? url.length : to + 1;
            // url = url.substring(0, to);
            // console.log(url);
       }

		return (
			<div>
				<header id="qodef-page-mobile-header" className={`desktop-header ${pagename !== "Home" ? "recipies-header" : ""}`}>
					<div id="qodef-page-mobile-header-inner">
						<div className="qodef-page-mobile-header-holder qodef-content-grid">
							<Link to={"/home"} className="qodef-mobile-header-logo-link">
								<img width="356" height="48" src={pagename == 'Single-Blog' ? '../assets/img/logo.png' : 'assets/img/logo.png' }
									className="qodef-header-logo-image qodef--main" alt="logo main" /> 
							</Link>
							<div id="easymeals_membership_login_opener-4"
								className="widget widget_easymeals_membership_login_opener qodef-mobile-header-widget-area-one"
								data-area="mobile-header">
								<div className="qodef-login-opener-widget qodef-user-logged--out">
									<a href="#" className="qodef-login-opener qodef-register">
										<span className="qodef-icon-linear-icons lnr-magnifier lnr"></span>
									</a>
								</div>
							</div>
							<a className="qodef-mobile-vertical-menu-opener" href="#" onClick={() => this.setState({ isDesktopMenu: !this.state.isDesktopMenu })} >
								<span className="lnr-line lnr"></span>
								<span className="lnr-line lnr"></span>
								<span className="lnr-line lnr"></span>
							</a>
							<div className={this.state.isDesktopMenu ? "qodef-mobile-side-area" : "qodef-mobile-side-area opened"}>
								<div className="qodef-mobile-side-area-inner">
									<nav id="qodef-vertical-mobile-header-navigation" className="qodef-m" role="navigation"
										aria-label="Mobile Menu">
										<div className="qodef-grid">
											<div className="qodef-m-inner">
												<ul id="qodef-mobile-header-navigation-menu" className="">
													<li
														className={`menu-item menu-item-type-custom menu-item-object-custom ${pagename === "Home" ? "current-menu-parent" : ""} `}>
														<Link to={"/home"}><span>Home</span></Link>
													</li>
													<li className={`menu-item menu-item-type-custom menu-item-object-custom ${pagename === "About" ? "current-menu-parent" : ""} `}>
														<Link to={"/about"}><span>About</span></Link>
													</li>
													<li className={`menu-item menu-item-type-custom menu-item-object-custom ${pagename === "Recipes" ? "current-menu-parent" : ""} `}>
														<Link to={"/recipes"}><span>Recipes</span></Link>
													</li>
													<li className={`menu-item menu-item-type-custom menu-item-object-custom ${pagename === "Review" ? "current-menu-parent" : ""} `}>
														<Link to={"/review"}><span>Review Articles</span></Link>
													</li>
													<li className={`menu-item menu-item-type-custom menu-item-object-custom ${pagename === "Comparison" ? "current-menu-parent" : ""} `}>
														<Link to={"/comparison"}><span>Comparison Articles</span></Link>
													</li>
													<li className={`menu-item menu-item-type-custom menu-item-object-custom ${pagename === "Blog" || pagename === "Single-Blog" ? "current-menu-parent" : ""} `}>
														<Link to={"/blog"}><span>Blog Posts</span></Link>
													</li>
												</ul>
											</div>
										</div>
									</nav>
								</div>
							</div>
						</div>
					</div>
				</header>




				<header id="qodef-page-mobile-header" className="mobile-header">
					<div id="qodef-page-mobile-header-inner">
						<div className="qodef-page-mobile-header-holder qodef-content-grid">
							<Link to={"/home"} className="qodef-mobile-header-logo-link">
								<img width="356" height="48" src={pagename == 'Single-Blog' ? '../assets/img/logo.png' : 'assets/img/logo.png' }
									className="qodef-header-logo-image qodef--main" alt="logo main" />
							</Link>
							<a className="mobile-menu-open" href="#" onClick={() => this.setState({ isMobileMenu: !this.state.isMobileMenu })}>
								<span className="qodef-icon-linear-icons lnr-menu lnr"></span>
							</a>
							<div className={this.state.isMobileMenu ? "qodef-mobile-side-area opened" : "qodef-mobile-side-area"}>
								<div className="qodef-close-mobile-side-area-holder">
									<a className="mobile-menu-close" href="#" onClick={() => this.setState({ isMobileMenu: !this.state.isMobileMenu })}>
										<span className="qodef-icon-linear-icons lnr-cross lnr" ></span>
									</a>
								</div>
								<div className="qodef-mobile-side-area-inner">
									<nav id="qodef-vertical-mobile-header-navigation" className="qodef-m" role="navigation"
										aria-label="Mobile Menu">
										<div className="qodef-grid">
											<div className="qodef-m-inner">
												<ul id="qodef-mobile-header-navigation-menu" className="">
													<li
														className={`menu-item menu-item-type-custom menu-item-object-custom ${pagename === "Home" ? "current-menu-parent" : ""} `}>
														<Link to={"/home"}><span>Home</span></Link>
													</li>
													<li className={`menu-item menu-item-type-custom menu-item-object-custom ${pagename === "About" ? "current-menu-parent" : ""} `}>
														<Link to={"/about"}><span>About</span></Link>
													</li>
													<li className={`menu-item menu-item-type-custom menu-item-object-custom ${pagename === "Recipes" ? "current-menu-parent" : ""} `}>
														<Link to={"/recipes"}><span>Recipes</span></Link>
													</li>
													<li className={`menu-item menu-item-type-custom menu-item-object-custom ${pagename === "Review" ? "current-menu-parent" : ""} `}>
														<Link to={"/review"}><span>Review Articles</span></Link>
													</li>
													<li className={`menu-item menu-item-type-custom menu-item-object-custom ${pagename === "Comparison" ? "current-menu-parent" : ""} `}>
														<Link to={"/comparison"}><span>Comparison Articles</span></Link>
													</li>
													<li className={`menu-item menu-item-type-custom menu-item-object-custom ${pagename === "Blog" || pagename === "Single-Blog" ? "current-menu-parent" : ""} `}>
														<Link to={"/blog"}><span>Blog Posts</span></Link>
													</li>
												</ul>
											</div>
										</div>
									</nav>
								</div>
							</div>
						</div>
					</div>
				</header>
			</div>
		)
	}


}

export default Menu;
