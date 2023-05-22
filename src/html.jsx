import React from 'react';

const html = () => {

    return (
        <>
            {/*START PRELOADER*/}
            <div className="preloader">
                <div className="spinner">
                    <div className="double-bounce1"></div>
                    <div className="double-bounce2"></div>
                </div>
            </div>
            {/*END PRELOADER*/}

            <div id="main-container-panel" className="main-container-panel">
                {/*Start main container panel*/}
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2 col-md-3 col-sm-4">
                            <a className="logo-img" href="index.html"><img src="assets/img/logo.png" alt="logo"/></a>
                        </div>
                        <div className="col-lg-7 col-md-9 col-sm-8">
                            <ul className="tab-buttons">
                                <li className="selected"><a href="#" data-rel="item-one"><span>About</span></a></li>
                                <li><a href="#" data-rel="item-two"><span>Resume</span></a></li>
                                <li><a href="#" data-rel="item-three"><span>Service</span></a></li>
                                <li><a href="#" data-rel="item-four"><span>Portfolio</span></a></li>
                                <li><a href="#" data-rel="item-five"><span>Blog</span></a></li>
                                <li><a href="#" data-rel="item-six"><span>Contact</span></a></li>
                            </ul>
                        </div>
                        <ul className="tab-buttons tab-buttons-mobile">
                            <li className="selected"><a href="#" data-rel="item-one"><span className="ti-home"></span></a></li>
                            <li><a href="#" data-rel="item-two"><span className="ti-file"></span></a></li>
                            <li><a href="#" data-rel="item-three"><span className="ti-receipt"></span></a></li>
                            <li><a href="#" data-rel="item-four"><span className="ti-gallery"></span></a></li>
                            <li><a href="#" data-rel="item-five"><span className="ti-book"></span></a></li>
                            <li><a href="#" data-rel="item-six"><span className="ti-support"></span></a></li>
                        </ul>
                        <div className="col-lg-3 col-md-3 col-sm-8">
                            <div className="social_profile">
                                <ul>
                                    <li><a href="#" className="ti-facebook"></a></li>
                                    <li><a href="#" className="ti-twitter"></a></li>
                                    <li><a href="#" className="ti-instagram"></a></li>
                                    <li><a href="#" className="ti-tumblr"></a></li>
                                </ul>
                            </div>
                            {/*END SOCIAL PROFILE*/}
                        </div>
                        {/*END Col*/}
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-sm-12 col-xs-12">
                            <div className="right-panel">
                                <div id="tab-box">
                                    <div className="tab-container">
                                        <div id="item-one" style="display: block">
                                            <div className="row">
                                                <div className="col-lg-4 col-sm-12 col-xs-12">
                                                    <div className="about_me">
                                                        <img src="assets/img/profile-pic.png" className="img-fluid" alt=""/>
                                                        <a href="#">Hire Me</a>
                                                    </div>
                                                </div>
                                                <div className="col-lg-8 col-sm-12 col-xs-12">
                                                    <div className="about_me_content">
                                                        <span> - I Am Ajmain Abru</span>
                                                        <h1 className="typewrite" data-period="2000"
                                                            data-type='[ "DESIGNER", "FREELANCER", "ENTREPRENEUR"]'>
                                                            <span className="wrap"></span></h1>
                                                    </div>
                                                    <div className="basic-info">
                                                        <div className="single-basic-info sbi_one">
                                                            <p>Name: <br/><span>Ajmain Abru</span></p>
                                                        </div>
                                                        <div className="single-basic-info sbi_two">
                                                            <p>Date of birth: <br/><span>January 26, 1991</span></p>
                                                        </div>
                                                        <div className="single-basic-info sbi_three">
                                                            <p>Email: <br/><span><a href="/cdn-cgi/l/email-protection"
                                                                                    className="__cf_email__"
                                                                                    data-cfemail="e58c8b838aa5809d8488958980cb868a88">[email&#160;protected]</a></span>
                                                            </p>
                                                        </div>
                                                        <div className="single-basic-info sbi_four">
                                                            <p>Phone: <br/><span>+456 789 321</span></p>
                                                        </div>
                                                        <div className="single-basic-info sbi_five">
                                                            <p>Address: <br/><span>New Winchester</span></p>
                                                        </div>
                                                        <div className="single-basic-info sbi_six">
                                                            <p>Nationality: <br/><span>USA</span></p>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/*END COL*/}
                                            </div>
                                            {/*END ROW*/}
                                        </div>
                                        {/*END ITEM*/}
                                        <div id="item-two">
                                            <div className="row">
                                                <div className="col-lg-12 text-center">
                                                    <div className="page_heading">
                                                        <h1>Resume</h1>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-sm-12 col-xs-12">
                                                    <h4 className="timeline_title">Education</h4>
                                                    <div className="single_timeline">
                                                        <h4>University of Toronto</h4>
                                                        <span className="active_year">2007</span>
                                                        <span className="active_company">- Bachelor's Degree in Computer Science.</span>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                            Beatae accusantium consectetur.</p>
                                                    </div>
                                                    <div className="single_timeline">
                                                        <h4>Programming Course</h4>
                                                        <span className="active_year">2010</span>
                                                        <span className="active_company">- WordPress, Javascript, iOS, Android.</span>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                            Beatae accusantium consectetur.</p>
                                                    </div>
                                                    <div className="single_timeline">
                                                        <h4>Web developer courses</h4>
                                                        <span className="active_year">2012</span>
                                                        <span className="active_company">- WordPress and JavaScript.</span>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                            Beatae accusantium consectetur.</p>
                                                    </div>
                                                </div>
                                                {/*END COL*/}
                                                <div className="col-lg-6 col-sm-12 col-xs-12">
                                                    <h4 className="timeline_title">Experience</h4>
                                                    <div className="single_timeline">
                                                        <h4>Wrap Market</h4>
                                                        <span className="active_year">2013</span>
                                                        <span className="active_company">- Designer.</span>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                            Beatae accusantium consectetur.</p>
                                                    </div>
                                                    <div className="single_timeline">
                                                        <h4>ABC Studiod</h4>
                                                        <span className="active_year">2016</span>
                                                        <span className="active_company">-  Front-End Developer.</span>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                            Beatae accusantium consectetur.</p>
                                                    </div>
                                                    <div className="single_timeline single_timeline_mbnone">
                                                        <h4>Digital Web Studio.</h4>
                                                        <span className="active_year">2017 to Present</span>
                                                        <span className="active_company">- Senior Developer.</span>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                            Beatae accusantium consectetur.</p>
                                                    </div>
                                                </div>
                                                {/*END COL*/}
                                                <div className="col-lg-6 col-sm-12 col-xs-12">
                                                    <h4 className="timeline_title">Design Skills</h4>
                                                    <div className="ds_bg ds_bg_mt">
                                                        <div className="progress-bar-linear">
                                                            <p className="progress-bar-text">Logo Design </p>
                                                            <div className="progress">
                                                                <div className="progress-bar" role="progressbar"
                                                                     style="width: 85%;" aria-valuenow="85"
                                                                     aria-valuemin="0" aria-valuemax="100">85%
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="progress-bar-linear">
                                                            <p className="progress-bar-text">Web Design</p>
                                                            <div className="progress">
                                                                <div className="progress-bar" role="progressbar"
                                                                     style="width: 75%;" aria-valuenow="75"
                                                                     aria-valuemin="0" aria-valuemax="100">75%
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="progress-bar-linear">
                                                            <p className="progress-bar-text">Print Design</p>
                                                            <div className="progress">
                                                                <div className="progress-bar" role="progressbar"
                                                                     style="width: 70%;" aria-valuenow="70"
                                                                     aria-valuemin="0" aria-valuemax="100">70%
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="progress-bar-linear">
                                                            <p className="progress-bar-text">Graphic Design</p>
                                                            <div className="progress">
                                                                <div className="progress-bar" role="progressbar"
                                                                     style="width: 80%;" aria-valuenow="80"
                                                                     aria-valuemin="0" aria-valuemax="100">80%
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/*END COL*/}
                                                <div className="col-lg-6 col-sm-12 col-xs-12">
                                                    <h4 className="timeline_title">Coding Skills</h4>
                                                    <div className="ds_bg">
                                                        <div className="progress-bar-linear">
                                                            <p className="progress-bar-text">HTML5/CSS3</p>
                                                            <div className="progress">
                                                                <div className="progress-bar" role="progressbar"
                                                                     style="width: 75%;" aria-valuenow="75"
                                                                     aria-valuemin="0" aria-valuemax="100">75%
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="progress-bar-linear">
                                                            <p className="progress-bar-text">Php</p>
                                                            <div className="progress">
                                                                <div className="progress-bar" role="progressbar"
                                                                     style="width: 65%;" aria-valuenow="65"
                                                                     aria-valuemin="0" aria-valuemax="100">65%
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="progress-bar-linear">
                                                            <p className="progress-bar-text">Javascript</p>
                                                            <div className="progress">
                                                                <div className="progress-bar" role="progressbar"
                                                                     style="width:70%;" aria-valuenow="70"
                                                                     aria-valuemin="0" aria-valuemax="100">70%
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="progress-bar-linear">
                                                            <p className="progress-bar-text">Laravel</p>
                                                            <div className="progress">
                                                                <div className="progress-bar" role="progressbar"
                                                                     style="width:60%;" aria-valuenow="60"
                                                                     aria-valuemin="0" aria-valuemax="100">60%
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/*END COL*/}
                                            </div>
                                            {/*END ROW*/}
                                        </div>
                                        {/*END ITEM*/}
                                        <div id="item-three">
                                            <div className="row">
                                                <div className="col-lg-12 text-center">
                                                    <div className="page_heading">
                                                        <h1>Services</h1>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="section-title"><h4>What i do</h4></div>
                                                </div>
                                                <div className="col-lg-6 col-sm-6 col-xs-12">
                                                    <div className="single_about">
                                                        <span className="ti-bookmark-alt"></span>
                                                        <h4>Identity</h4>
                                                        <p>It is a long established fact that a reader will be
                                                            distracted by the readable content of a page when looking at
                                                            its layout.</p>
                                                    </div>
                                                </div>
                                                {/*END COL*/}
                                                <div className="col-lg-6 col-sm-6 col-xs-12">
                                                    <div className="single_about">
                                                        <span className="ti-pencil-alt"></span>
                                                        <h4>Design</h4>
                                                        <p>It is a long established fact that a reader will be
                                                            distracted by the readable content of a page when looking at
                                                            its layout.</p>
                                                    </div>
                                                </div>
                                                {/*END COL*/}
                                                <div className="col-lg-6 col-sm-6 col-xs-12">
                                                    <div className="single_about">
                                                        <span className="ti-medall"></span>
                                                        <h4>Logo</h4>
                                                        <p>It is a long established fact that a reader will be
                                                            distracted by the readable content of a page when looking at
                                                            its layout.</p>
                                                    </div>
                                                </div>
                                                {/*END COL*/}
                                                <div className="col-lg-6 col-sm-6 col-xs-12">
                                                    <div className="single_about">
                                                        <span className="ti-cup"></span>
                                                        <h4>Marketing</h4>
                                                        <p>It is a long established fact that a reader will be
                                                            distracted by the readable content of a page when looking at
                                                            its layout.</p>
                                                    </div>
                                                </div>
                                                {/*END COL*/}
                                            </div>
                                            {/*END ROW*/}
                                            <div className="padding-50"></div>
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <div className="section-title"><h4>Testimonials</h4></div>
                                                </div>
                                                {/*END COL*/}
                                                <div className="col-lg-12">
                                                    <div id="testimonial-slider" className="owl-carousel">
                                                        <div className="testimonial">
                                                            <span className="icon fa fa-quote-left"></span>
                                                            <p className="description">
                                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                                Nullam justo neque, aliquet sit amet elementum vel
                                                                vehicula.
                                                            </p>
                                                            <div className="testimonial-content">
                                                                <div className="pic"><img
                                                                    src="assets/img/testimonial/img-1.jpg"
                                                                    className="img-fluid" alt=""/></div>
                                                                <h3 className="title">Mark Linomi</h3>
                                                                <span className="post">Abru INC</span>
                                                            </div>
                                                        </div>
                                                        <div className="testimonial">
                                                            <span className="icon fa fa-quote-left"></span>
                                                            <p className="description">
                                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                                Nullam justo neque, aliquet sit amet elementum vel
                                                                vehicula.
                                                            </p>
                                                            <div className="testimonial-content">
                                                                <div className="pic"><img
                                                                    src="assets/img/testimonial/img-2.jpg"
                                                                    className="img-fluid" alt=""/></div>
                                                                <h3 className="title">Amira Yerden</h3>
                                                                <span className="post">Abru INC</span>
                                                            </div>
                                                        </div>
                                                        <div className="testimonial">
                                                            <span className="icon fa fa-quote-left"></span>
                                                            <p className="description">
                                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                                Nullam justo neque, aliquet sit amet elementum vel
                                                                vehicula.
                                                            </p>
                                                            <div className="testimonial-content">
                                                                <div className="pic"><img
                                                                    src="assets/img/testimonial/img-3.jpg"
                                                                    className="img-fluid" alt=""/></div>
                                                                <h3 className="title">Steve Thomas</h3>
                                                                <span className="post">Abru INC</span>
                                                            </div>
                                                        </div>
                                                        <div className="testimonial">
                                                            <span className="icon fa fa-quote-left"></span>
                                                            <p className="description">
                                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                                Nullam justo neque, aliquet sit amet elementum vel
                                                                vehicula.
                                                            </p>
                                                            <div className="testimonial-content">
                                                                <div className="pic"><img
                                                                    src="assets/img/testimonial/img-4.jpg"
                                                                    className="img-fluid" alt=""/></div>
                                                                <h3 className="title">Marina Mojo</h3>
                                                                <span className="post">Abru INC</span>
                                                            </div>
                                                        </div>
                                                        <div className="testimonial">
                                                            <span className="icon fa fa-quote-left"></span>
                                                            <p className="description">
                                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                                Nullam justo neque, aliquet sit amet elementum vel
                                                                vehicula.
                                                            </p>
                                                            <div className="testimonial-content">
                                                                <div className="pic"><img
                                                                    src="assets/img/testimonial/img-1.jpg"
                                                                    className="img-fluid" alt=""/></div>
                                                                <h3 className="title">Fennouni Ayoub</h3>
                                                                <span className="post">Abru INC</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/*END COL*/}
                                            </div>
                                            {/*END ROW*/}
                                            <div className="padding-50"></div>
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <div className="section-title"><h4>Clients</h4></div>
                                                </div>
                                                {/*END COL*/}
                                                <div className="col-lg-2 col-sm-3 col-xs-12">
                                                    <div className="partner_logo">
                                                        <a href="#"><img src="assets/img/partner/1.png"
                                                                         alt="partner-logo"/></a>
                                                    </div>
                                                </div>
                                                {/*END COL*/}
                                                <div className="col-lg-2 col-sm-3 col-xs-12">
                                                    <div className="partner_logo">
                                                        <a href="#"><img src="assets/img/partner/2.png"
                                                                         alt="partner-logo"/></a>
                                                    </div>
                                                </div>
                                                {/*END COL*/}
                                                <div className="col-lg-2 col-sm-3 col-xs-12">
                                                    <div className="partner_logo">
                                                        <a href="#"><img src="assets/img/partner/3.png"
                                                                         alt="partner-logo"/></a>
                                                    </div>
                                                </div>
                                                {/*END COL*/}
                                                <div className="col-lg-2 col-sm-3 col-xs-12">
                                                    <div className="partner_logo">
                                                        <a href="#"><img src="assets/img/partner/4.png"
                                                                         alt="partner-logo"/></a>
                                                    </div>
                                                </div>
                                                {/*END COL*/}
                                                <div className="col-lg-2 col-sm-3 col-xs-12">
                                                    <div className="partner_logo">
                                                        <a href="#"><img src="assets/img/partner/5.png"
                                                                         alt="partner-logo"/></a>
                                                    </div>
                                                </div>
                                                {/*END COL*/}
                                                <div className="col-lg-2 col-sm-3 col-xs-12">
                                                    <div className="partner_logo">
                                                        <a href="#"><img src="assets/img/partner/6.png"
                                                                         alt="partner-logo"/></a>
                                                    </div>
                                                </div>
                                                {/*END COL*/}
                                            </div>
                                            {/*END  ROW */}
                                            <div className="padding-50"></div>
                                            <div className="row counter_feature">
                                                <div className="col-lg-12">
                                                    <div className="section-title"><h4>Fun facts</h4></div>
                                                </div>
                                                {/*END COL*/}
                                                <div className="col-lg-3 col-sm-6 col-xs-12 no-padding">
                                                    <div className="sp sp-one">
                                                        <h2 className="counter-num">191</h2>
                                                        <h3>Happy Client</h3>
                                                    </div>
                                                </div>
                                                {/*END COL*/}
                                                <div className="col-lg-3 col-sm-6 col-xs-12 no-padding">
                                                    <div className="sp sp-two">
                                                        <h2 className="counter-num">221</h2>
                                                        <h3>Successful Project</h3>
                                                    </div>
                                                </div>
                                                {/*END COL*/}
                                                <div className="col-lg-3 col-sm-6 col-xs-12 no-padding">
                                                    <div className="sp sp-three">
                                                        <h2 className="counter-num">89</h2>
                                                        <h3>ui / ux projects</h3>
                                                    </div>
                                                </div>
                                                {/*END COL*/}
                                                <div className="col-lg-3 col-sm-6 col-xs-12 no-padding">
                                                    <div className="sp sp-four">
                                                        <h2 className="counter-num">33</h2>
                                                        <h3>Team Members</h3>
                                                    </div>
                                                </div>
                                                {/*END COL*/}
                                            </div>
                                            {/*END  ROW */}
                                        </div>
                                        {/*END ITEM*/}
                                        <div id="item-four">
                                            <div className="row portfolio_item">
                                                <div className="col-lg-12 text-center">
                                                    <div className="page_heading">
                                                        <h1>Portfolio</h1>
                                                    </div>
                                                </div>
                                                <div className="col-xs-12 col-sm-6 col-lg-6">
                                                    <div className="box">
                                                        <img src="assets/img/portfolio/1.jpg" alt=""/>
                                                        <div className="box-content">
                                                            <h3 className="title">Design Landing Page</h3>
                                                            <span className="post">Branding , Design</span>
                                                        </div>
                                                        <ul className="icon">
                                                            <li><a href="assets/img/portfolio/1.jpg"
                                                                   className="port-icon lightbox" data-gall="gall-work"><i
                                                                className="fa fa-eye"></i></a></li>
                                                            <li><a href="https://www.google.com" target="_blank"><i
                                                                className="fa fa-link"></i></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                {/*END COL*/}
                                                <div className="col-xs-12 col-sm-6 col-lg-6">
                                                    <div className="box">
                                                        <img src="assets/img/portfolio/2.jpg" alt=""/>
                                                        <div className="box-content">
                                                            <h3 className="title">Web Project</h3>
                                                            <span className="post">Website, logo</span>
                                                        </div>
                                                        <ul className="icon">
                                                            <li><a href="assets/img/portfolio/2.jpg"
                                                                   className="port-icon lightbox" data-gall="gall-work"><i
                                                                className="fa fa-eye"></i></a></li>
                                                            <li><a href="https://www.google.com" target="_blank"><i
                                                                className="fa fa-link"></i></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                {/*END COL*/}
                                                <div className="col-xs-12 col-sm-6 col-lg-6">
                                                    <div className="box">
                                                        <img src="assets/img/portfolio/3.jpg" alt=""/>
                                                        <div className="box-content">
                                                            <h3 className="title">logo company</h3>
                                                            <span className="post">logo,graphics</span>
                                                        </div>
                                                        <ul className="icon">
                                                            <li><a href="assets/img/portfolio/3.jpg"
                                                                   className="port-icon lightbox" data-gall="gall-work"><i
                                                                className="fa fa-eye"></i></a></li>
                                                            <li><a href="https://www.google.com" target="_blank"><i
                                                                className="fa fa-link"></i></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                {/*END COL*/}
                                                <div className="col-xs-12 col-sm-6 col-lg-6">
                                                    <div className="box">
                                                        <img src="assets/img/portfolio/4.jpg" alt=""/>
                                                        <div className="box-content">
                                                            <h3 className="title">Digital Marketing</h3>
                                                            <span className="post">Design, Web</span>
                                                        </div>
                                                        <ul className="icon">
                                                            <li><a href="assets/img/portfolio/4.jpg"
                                                                   className="port-icon lightbox" data-gall="gall-work"><i
                                                                className="fa fa-eye"></i></a></li>
                                                            <li><a href="https://www.google.com" target="_blank"><i
                                                                className="fa fa-link"></i></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                {/*END COL*/}
                                                <div className="col-xs-12 col-sm-6 col-lg-6">
                                                    <div className="box">
                                                        <img src="assets/img/portfolio/5.jpg" alt=""/>
                                                        <div className="box-content">
                                                            <h3 className="title">Print media</h3>
                                                            <span className="post">Video, print</span>
                                                        </div>
                                                        <ul className="icon">
                                                            <li><a href="assets/img/portfolio/5.jpg"
                                                                   className="port-icon lightbox" data-gall="gall-work"><i
                                                                className="fa fa-eye"></i></a></li>
                                                            <li><a href="https://www.google.com" target="_blank"><i
                                                                className="fa fa-link"></i></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                {/*END COL*/}
                                                <div className="col-xs-12 col-sm-6 col-lg-6">
                                                    <div className="box">
                                                        <img src="assets/img/portfolio/6.jpg" alt=""/>
                                                        <div className="box-content">
                                                            <h3 className="title">Logo Marketing</h3>
                                                            <span className="post">social, media</span>
                                                        </div>
                                                        <ul className="icon">
                                                            <li><a href="assets/img/portfolio/6.jpg"
                                                                   className="port-icon lightbox" data-gall="gall-work"><i
                                                                className="fa fa-eye"></i></a></li>
                                                            <li><a href="https://www.google.com" target="_blank"><i
                                                                className="fa fa-link"></i></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                {/*END COL*/}
                                                <div className="col-xs-12 col-sm-6 col-lg-6">
                                                    <div className="box">
                                                        <img src="assets/img/portfolio/7.jpg" alt=""/>
                                                        <div className="box-content">
                                                            <h3 className="title">design agency work</h3>
                                                            <span className="post">logo, graphics</span>
                                                        </div>
                                                        <ul className="icon">
                                                            <li><a href="assets/img/portfolio/7.jpg"
                                                                   className="port-icon lightbox" data-gall="gall-work"><i
                                                                className="fa fa-eye"></i></a></li>
                                                            <li><a href="https://www.google.com" target="_blank"><i
                                                                className="fa fa-link"></i></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                {/*END COL*/}
                                                <div className="col-xs-12 col-sm-6 col-lg-6">
                                                    <div className="box">
                                                        <img src="assets/img/portfolio/8.jpg" alt=""/>
                                                        <div className="box-content">
                                                            <h3 className="title">Video marketing</h3>
                                                            <span className="post">Portfolio, Personal</span>
                                                        </div>
                                                        <ul className="icon">
                                                            <li><a href="assets/img/portfolio/8.jpg"
                                                                   className="port-icon lightbox" data-gall="gall-work"><i
                                                                className="fa fa-eye"></i></a></li>
                                                            <li><a href="https://www.google.com" target="_blank"><i
                                                                className="fa fa-link"></i></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                {/*END COL*/}
                                                <div className="col-xs-12 col-sm-6 col-lg-6">
                                                    <div className="box sb_none">
                                                        <img src="assets/img/portfolio/9.jpg" alt=""/>
                                                        <div className="box-content">
                                                            <h3 className="title">Social media</h3>
                                                            <span className="post">logo, design</span>
                                                        </div>
                                                        <ul className="icon">
                                                            <li><a href="assets/img/portfolio/9.jpg"
                                                                   className="port-icon lightbox" data-gall="gall-work"><i
                                                                className="fa fa-eye"></i></a></li>
                                                            <li><a href="https://www.google.com" target="_blank"><i
                                                                className="fa fa-link"></i></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                {/*END COL*/}
                                                <div className="col-xs-12 col-sm-6 col-lg-6">
                                                    <div className="box sb_none">
                                                        <img src="assets/img/portfolio/1.jpg" alt=""/>
                                                        <div className="box-content">
                                                            <h3 className="title">Design Landing Page</h3>
                                                            <span className="post">Branding , Design</span>
                                                        </div>
                                                        <ul className="icon">
                                                            <li><a href="assets/img/portfolio/1.jpg"
                                                                   className="port-icon lightbox" data-gall="gall-work"><i
                                                                className="fa fa-eye"></i></a></li>
                                                            <li><a href="https://www.google.com" target="_blank"><i
                                                                className="fa fa-link"></i></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                {/*END COL*/}
                                            </div>
                                            {/*END ROW*/}
                                        </div>
                                        {/*END ITEM*/}
                                        <div id="item-five">
                                            <div className="row">
                                                <div className="col-lg-12 text-center">
                                                    <div className="page_heading">
                                                        <h1>Blog</h1>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-sm-6 col-xs-12">
                                                    <div className="single_blog">
                                                        <div className="blog-img">
                                                            <img src="assets/img/blog/1.jpg" className="img-fluid"
                                                                 alt="image"/>
                                                            <a href="single_blog.html">Development</a>
                                                        </div>
                                                        <div className="blog_content">
                                                            <span>Nov 21, 2022</span>
                                                            <span>By - <a href="single_blog.html">John Doe</a></span>
                                                            <h2><a href="single_blog.html">Autumn is a second spring
                                                                when every leaf is a flower</a></h2>
                                                            <p>Lorem ipsum dolor amet consectetur adipiscing elit justo
                                                                neque aliquet sit amet elementum vel vehicula.</p>
                                                            <a href="single_blog.html">Continue Reading -</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/*END COL*/}
                                                <div className="col-lg-6 col-sm-6 col-xs-12">
                                                    <div className="single_blog">
                                                        <div className="blog-img">
                                                            <img src="assets/img/blog/2.jpg" className="img-fluid"
                                                                 alt="image"/>
                                                            <a href="single_blog.html">Development</a>
                                                        </div>
                                                        <div className="blog_content">
                                                            <span>Nov 22, 2022</span>
                                                            <span>By - <a href="single_blog.html">John Doe</a></span>
                                                            <h2><a href="single_blog.html">Never let your memories be
                                                                greater than your dreams</a></h2>
                                                            <p>Lorem ipsum dolor amet consectetur adipiscing elit justo
                                                                neque aliquet sit amet elementum vel vehicula.</p>
                                                            <a href="single_blog.html">Continue Reading -</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/*END COL*/}
                                                <div className="col-lg-6 col-sm-6 col-xs-12">
                                                    <div className="single_blog">
                                                        <div className="blog-img">
                                                            <img src="assets/img/blog/3.jpg" className="img-fluid"
                                                                 alt="image"/>
                                                            <a href="single_blog.html">Development</a>
                                                        </div>
                                                        <div className="blog_content">
                                                            <span>Nov 23, 2022</span>
                                                            <span>By - <a href="single_blog.html">John Doe</a></span>
                                                            <h2><a href="single_blog.html">Self-observation is the first
                                                                step of inner unfolding</a></h2>
                                                            <p>Lorem ipsum dolor amet consectetur adipiscing elit justo
                                                                neque aliquet sit amet elementum vel vehicula.</p>
                                                            <a href="single_blog.html">Continue Reading -</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/*END COL*/}
                                                <div className="col-lg-6 col-sm-6 col-xs-12">
                                                    <div className="single_blog">
                                                        <div className="blog-img">
                                                            <img src="assets/img/blog/4.jpg" className="img-fluid"
                                                                 alt="image"/>
                                                            <a href="single_blog.html">Development</a>
                                                        </div>
                                                        <div className="blog_content">
                                                            <span>Nov 24, 2022</span>
                                                            <span>By - <a href="single_blog.html">John Doe</a></span>
                                                            <h2><a href="single_blog.html">Dramatically improve your
                                                                cooking using just your imagination</a></h2>
                                                            <p>Lorem ipsum dolor amet consectetur adipiscing elit justo
                                                                neque aliquet sit amet elementum vel vehicula.</p>
                                                            <a href="single_blog.html">Continue Reading -</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/*END COL*/}
                                                <div className="col-lg-6 col-sm-6 col-xs-12">
                                                    <div className="single_blog sb_none">
                                                        <div className="blog-img">
                                                            <img src="assets/img/blog/5.jpg" className="img-fluid"
                                                                 alt="image"/>
                                                            <a href="single_blog.html">Development</a>
                                                        </div>
                                                        <div className="blog_content">
                                                            <span>Nov 24, 2022</span>
                                                            <span>By - <a href="single_blog.html">John Doe</a></span>
                                                            <h2><a href="single_blog.html">I do not stick to rules when
                                                                cooking. I rely on my imagination</a></h2>
                                                            <p>Lorem ipsum dolor amet consectetur adipiscing elit justo
                                                                neque aliquet sit amet elementum vel vehicula.</p>
                                                            <a href="single_blog.html">Continue Reading -</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/*END COL*/}
                                                <div className="col-lg-6 col-sm-6 col-xs-12">
                                                    <div className="single_blog sb_none">
                                                        <div className="blog-img">
                                                            <img src="assets/img/blog/6.jpg" className="img-fluid"
                                                                 alt="image"/>
                                                            <a href="single_blog.html">Development</a>
                                                        </div>
                                                        <div className="blog_content">
                                                            <span>Nov 26, 2022</span>
                                                            <span>By - <a href="single_blog.html">John Doe</a></span>
                                                            <h2><a href="single_blog.html">The mind and body are not
                                                                separate. what affects one</a></h2>
                                                            <p>Lorem ipsum dolor amet consectetur adipiscing elit justo
                                                                neque aliquet sit amet elementum vel vehicula.</p>
                                                            <a href="single_blog.html">Continue Reading -</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/*END COL*/}
                                            </div>
                                            {/*END ROW*/}
                                        </div>
                                        {/*END ITEM*/}
                                        <div id="item-six">
                                            <div className="row">
                                                <div className="col-lg-12 text-center">
                                                    <div className="page_heading">
                                                        <h1>Contact</h1>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12 col-sm-12 col-xs-12">
                                                    <div className="map">
                                                        <iframe
                                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.957183635167!2d-74.00402768559431!3d40.71895904512855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2598a1316e7a7%3A0x47bb20eb6074b3f0!2sNew%20Work%20City%20-%20(CLOSED)!5e0!3m2!1sbn!2sbd!4v1600305497356!5m2!1sbn!2sbd"
                                                            style="border:0;" allowfullscreen="" aria-hidden="false"
                                                            tabindex="0"></iframe>
                                                    </div>
                                                </div>
                                                {/*END COL*/}
                                            </div>
                                            {/*END ROW*/}
                                            <div className="row">
                                                <div className="col-lg-12 col-xs-12">
                                                    <div className="contact">
                                                        <form className="form" name="enq" method="post" action="contact.php"
                                                              onsubmit="return validation();">
                                                            <div className="row">
                                                                <div className="form-group col-md-6">
                                                                    <input type="text" name="name" className="form-control"
                                                                           placeholder="Full Name" required="required"/>
                                                                </div>
                                                                <div className="form-group col-md-6">
                                                                    <input type="email" name="email"
                                                                           className="form-control" placeholder="Email"
                                                                           required="required"/>
                                                                </div>
                                                                <div className="form-group col-md-12">
                                                                    <input type="text" name="subject"
                                                                           className="form-control" placeholder="Subject"
                                                                           required="required"/>
                                                                </div>
                                                                <div className="form-group col-md-12">
                                                                    <textarea rows="6" name="message"
                                                                              className="form-control"
                                                                              placeholder="Your Message"
                                                                              required="required"></textarea>
                                                                </div>
                                                                <div className="col-md-12">
                                                                    <button type="submit" value="Send message"
                                                                            name="submit" id="submitButton"
                                                                            className="btn_contact"
                                                                            title="Submit Your Message!">Send Message
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                                {/*END COL */}
                                            </div>
                                            {/*END ROW*/}
                                        </div>
                                        {/*END ITEM*/}
                                    </div>
                                    {/*END TAB CONTAINER*/}
                                </div>
                                {/*END TAB BOX*/}
                            </div>
                            {/*END RIGHT PANEL*/}
                        </div>
                        {/*END COL*/}
                    </div>
                    {/*END ROW*/}
                </div>
                {/*END CONTAINER*/}
            </div>
            {/*End MAIN CONTAINER*/}

            {/*START FOOTER*/}
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="copyright">
                                <p>Copyright &copy; 2022 | All Rights Reserved.</p>
                            </div>
                        </div>
                        {/*END COL*/}
                    </div>
                    {/*END ROW*/}
                </div>
                {/*END CONTAINER*/}
            </div>
            {/*END FOOTER*/}
        </>
    );
};

export default html;
