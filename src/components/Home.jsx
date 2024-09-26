import React from 'react';
import "./Home.css"
import img from "../download1.jpeg"

const LegalPartners = () => {
  return (
    <div>
    <p class="Naam">Adarsh Ramani<br/>2261001</p>
    <div class = "f">
    </div>
    <br/>
    <p class="about">About</p>
    <div class="content">
      <div class="text">
        <p>
          <div class="subhead">Firm Overview</div>
          Legal Partners is dedicated to providing exceptional legal services with a focus on integrity, professionalism, and client respect. Located in Nagpur, Maharashtra, our mission is to offer personalized legal solutions tailored to the unique needs of each client.
          History and Background
          Founded in 2003 by Mahesh Patel, Legal Partners has grown to be a leading law firm in Nagpur, Maharashtra. Over the years, we've reached significant milestones and achievements, solidifying our reputation for excellence.
          <div class="subhead">Practice Areas</div>
          We specialize in a variety of legal fields, including:
          <ul>
            <li>Family Law: Handling cases related to divorce, child custody, and more.</li>
            <li>Personal Injury: Representing clients in cases of accidents, medical malpractice, and wrongful death.</li>
            <li>Corporate Law: Providing legal services for businesses, including contract drafting, mergers, and acquisitions.</li>
            <li>Criminal Defense: Defending clients against criminal charges, ensuring their rights are protected.</li>
          </ul>
          <div class="subhead">Our Team</div>
          Our team comprises experienced and dedicated legal professionals. Leading the firm is Hemant Patel, a partner with over 20 years of experience in corporate law. Each member of our team brings a wealth of knowledge and expertise, ensuring comprehensive legal representation for our clients.
          <div class="subhead">Core Values</div>
          We believe in providing legal services with honesty, transparency, and a commitment to justice. Our core values drive us to offer the highest standard of legal support, ensuring that our clients receive fair and ethical treatment.
        </p>
        
      </div>
      <img class="img" src={img} />
    </div>
    <div class="footer">
      <h1 class ="siteName" >Legal Partners</h1>
      <div class="social-icons">
        <a href="https://www.facebook.com" class="facebook" target="_blank"><i class="fab fa-facebook-f"></i></a>
        <a href="https://www.twitter.com" class="twitter" target="_blank"><i class="fab fa-twitter"></i></a>
        <a href="https://www.instagram.com" class="instagram" target="_blank"><i class="fab fa-instagram"></i></a>
        <a href="https://www.linkedin.com" class="linkedin" target="_blank"><i class="fab fa-linkedin-in"></i></a>
      </div>
      <h1 class ="contact">Contact Us</h1><br/>
    </div>
   <div class="coninfo"> <p>Phone: 9999999999<br/>email: xyz@gamil.com</p></div>
   </div>
  );
};

export default LegalPartners;
