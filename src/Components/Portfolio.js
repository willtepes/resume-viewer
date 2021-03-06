import React, { Component } from 'react';


class Portfolio extends Component {
  render() {
    return (
    <section id="portfolio">
      <div className="row">
         <div className="twelve columns collapsed">
            <h1>Check Out Some of My Work.</h1>
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          	   <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                    <div id="carousel-portfolio" className="carousel slide" data-ride="carousel">
                        {/* Indicators */}
                        <ol className="carousel-indicators">
                        <li data-target="#carousel-portfolio" data-slide-to="0" className="active"></li>
                        <li data-target="#carousel-portfolio" data-slide-to="1"></li>
                        <li data-target="#carousel-portfolio" data-slide-to="2"></li>
                        <li data-target="#carousel-portfolio" data-slide-to="3"></li>
                        <li data-target="#carousel-portfolio" data-slide-to="4"></li>
                        </ol>

                        {/* Wrapper for slides */}
                        <div className="carousel-inner" role="listbox">
                        <div className="item active slide">
                            <img src="images/dojolife.gif" alt="Gif of Unity game" />
                            <div className="carousel-caption caption">
                            <h3>DojoLyfe</h3>
                            <p>Tamagotchi style game developed in Unity (C#)</p>
                            <p><a href="https://github.com/willtepes/dOjoLyfe" className="btn btn-primary" role="button">See the code <i className="fa fa-fw fa-github"></i></a></p>
                            
                            </div>
                        </div>
                        <div className="item slide">
                            <img src="images/sage.jpg" alt="Image from SAGE LP application" />
                            <div className="carousel-caption caption">
                            <h3>SAGE LP</h3>
                            <p>Learning platform demo developed with Django (Python)</p>
                            <p><a href="https://github.com/willtepes/SAGE-LP" className="btn btn-primary" role="button">See the code <i className="fa fa-fw fa-github"></i></a></p>
                            
                            </div>
                        </div>
                        <div className="item slide">
                            <img src="images/cwall.jpg" alt="Image from Wall application" />
                            <div className="carousel-caption caption">
                            <h3>The Wall</h3>
                            <p>Simple Message board built with .NET Core (C#)</p>
                            <p><a href="https://github.com/willtepes/Wall" className="btn btn-primary" role="button">See the code <i className="fa fa-fw fa-github"></i></a></p>
                           
                            </div>
                        </div>
                        <div className="item slide">
                            <img src="images/website.jpg" alt="Image from this site" />
                            <div className="carousel-caption caption">
                            <h3>This Website</h3>
                            <p>Website template rebuilt with React and API call to Node server</p>
                            <p><a href="https://github.com/willtepes/resume-viewer" className="btn btn-primary" role="button">See the code <i className="fa fa-fw fa-github"></i></a></p>
                            </div>
                        </div>
                        <div className="item slide">
                            <img src="images/budget.jpg" alt="Image from budget tracker" />
                            <div className="carousel-caption caption">
                            <h3>Family Budget Tracker</h3>
                            <p>Web app for tracking my family budget built with .NET Core (C#) and hosted on Azure</p>
                            <p><a href="https://github.com/willtepes/budget" className="btn btn-primary" role="button">See the code <i className="fa fa-fw fa-github"></i></a></p>
                            </div>
                        </div>
                        </div>
                        {/* Controls */}
                        <a className="left carousel-control" href="#carousel-portfolio" role="button" data-slide="prev">
                        <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                        </a>
                        <a className="right carousel-control" href="#carousel-portfolio" role="button" data-slide="next">
                        <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                        </a>
                    </div>
                 </div> {/* end of col */}
               </div> {/* end of row */}
              </div> {/* end of container */}
            </div> 
         </div> 
      </div> 
   </section>
    );
  }
}

export default Portfolio;