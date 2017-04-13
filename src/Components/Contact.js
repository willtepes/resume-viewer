import React, { Component } from 'react';


class Contact extends Component {
  render() {
     if(this.props.data){
      var name = this.props.data.name;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone = this.props.data.phone;
      var link = 'mailto:'+ this.props.data.email;
      var email = this.props.data.email;
    }
    return (
       <section id="contact">
         <div className="row section-head">
            <div className="two columns header-col">
               <h1><span>Get In Touch.</span></h1>
            </div>
            <div className="ten columns">
                  <p className="lead">Check out my Linkedin and Github pages and please feel free to reach out to me by email or phone regarding any web developer oppurtunities in the greater Seattle area.  Let me put my passion and dedication to excelence to work for you.
                  </p>
            </div>
         </div>
         <div className="row">
            <div className="eight columns">
              <h4>Email</h4>
              <a href={link}>{email}</a>
            </div>
            <aside className="four columns footer-widgets">
               <div className="widget widget_contact">
                  <h4>Address and Phone</h4>
                  <p className="address">
                    {name}<br />
                    {street} <br />
                    {city}, {state} {zip} US<br />
                    <span>{phone}</span>
                  </p>
				      </div>
            </aside>
          </div>
      </section>
    );
  }
}

export default Contact;