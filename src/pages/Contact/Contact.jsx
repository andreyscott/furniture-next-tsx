import React from "react";
import {
  Map,
  ContactContainer,
  ContactItem,
  ContactInfo,
  Form,
  FormContainer,
} from "./index";

// === Components ===
import TopSection from "../../components/TopSection/TopSection";
import Btn from "../../subComponents/Btn/Btn";
import Maps from "./Map";

const Contact = () => {
  return (
    <main>
      <TopSection title="CONTACT" name="CONTACT" />
      <section className="container">
        <Map>
          <Maps />
          {/* <iframe src="https://maps.google.com/maps?q=121%20King%20St%2C%20Melbourne%20VIC%203000%2C%20Australia&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"></iframe> */}
        </Map>
        <ContactContainer>
          <ContactItem className="col-lg-4">
            <div>
              <h2>Contact Info</h2>
              <ContactInfo>
                <h3>Phone:</h3>
                <div>
                  <p>
                    <a href="tel:+2347066800620">070 6680 0620</a>
                  </p>
                  <p>
                    <a href="tel:+2347066800620">070 6680 0620</a>
                  </p>
                </div>
              </ContactInfo>
              <ContactInfo>
                <h3>Email:</h3>
                <div>
                  <p>
                    <a href="mailto:email@here.com">email@here.com</a>
                  </p>
                  <p>
                    <a href="mailto:your@email.here">your@email.here</a>
                  </p>
                </div>
              </ContactInfo>
              <ContactInfo>
                <h3>Address:1</h3>
                <div>
                  <p>51, Urubi</p>
                  <p>street, Benin City, Edo State.</p>
                </div>
              </ContactInfo>
              <ContactInfo>
                <h3>Address:2</h3>
                <div>
                  <p>27 Mission Rd</p>
                  <p> Avbiama 300102,
Benin City Edo State.</p>
                </div>
              </ContactInfo>
              <ContactInfo>
                <h3>Address:3</h3>
                <div>
                  <p>Suite 101, KU Plaza,, opposite</p>
                  <p>Road, Junction 300104, Benin City</p>
                </div>
              </ContactInfo>
            </div>
          </ContactItem>
          <ContactItem className="col-lg-8">
            <div>
              <h2>Get In Touch</h2>
              <Form>
                <FormContainer>
                  <label htmlFor="first-name">First Name</label>
                  <input type="text" id="first-name" />
                </FormContainer>
                <FormContainer>
                  <label htmlFor="last-name">Last Name</label>
                  <input type="text" id="last-name" />
                </FormContainer>
                <FormContainer>
                  <label htmlFor="subject">Subject</label>
                  <input type="text" id="subject" />
                </FormContainer>
                <FormContainer>
                  <label htmlFor="message">Message</label>
                  <textarea rows="8" id="message" name="message"></textarea>
                </FormContainer>
                <Btn type="submit">SEND MESSAGE</Btn>
              </Form>
            </div>
          </ContactItem>
        </ContactContainer>
      </section>
    </main>
  );
};

export default Contact;
