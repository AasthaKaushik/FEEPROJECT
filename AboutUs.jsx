import React from 'react';
import './aboutUs.css';
import { Link } from 'react-router-dom';
export default function AboutUs() {
  return (
    <>
      <div className='a'>
        <div className='headingAU'>
          <h1 className='abouth1'>ABOUT US</h1>
        <marquee>Hey user ! Welcome to our blog website IDEA FORGE . Here you can engage with our blog posts, read trending news or you can even publish your own blog that too for FREE!!!!!
</marquee>
        </div>
        <div className='containerAU'>
          <section className='aboutAU'>
            <div className='about-imageAU'>
              <img src='https://png.pngtree.com/thumb_back/fh260/background/20220319/pngtree-about-us-service-online-render-photo-image_5085.jpg' alt='heheh'/>
            </div>
            <div className='about-contentAU'>
              <h2>What We Offer:</h2>
                <p>
In today's digital age, where information is at our fingertips, blog websites serve as invaluable platforms for sharing knowledge, insights, and experiences on a multitude of topics. Whether you're seeking advice on personal finance, exploring the latest trends in technology, or delving into the intricacies of ancient history, there's a blog out there catering to your interests and needs.

One of the primary offerings of a blog website is its diverse range of content. From informative articles and in-depth analyses to engaging stories and opinion pieces, blogs provide a wealth of information in various formats to cater to different preferences and learning styles. Whether you prefer reading long-form essays, watching video tutorials, or listening to podcasts, you can find content that suits your preferences on a blog website.


                </p>
            </div>
          </section>
        </div>
      </div>
      <br></br><br></br><br></br>
      <footer className='footer'>
        <div className="social-media-links">
            <i className="fab fa-facebook fa-4x"></i>
            <i className="fab fa-twitter fa-4x"></i>
            <a href='https://www.instagram.com/ideaforgeeeee?igsh=YmtpeW9ta3Nka3Fn'><i className="fab fa-instagram fa-4x"></i></a>
        </div>
        <p>Idea Forge &copy; 2024, All Rights Reserved</p>
    </footer>
    </>
  );
}
