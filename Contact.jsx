import React, { useState , useEffect} from 'react';
import "./contact.css";
import{toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
export default function Contact() {
  // Define state variables for form fields
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
//   const [displayToast,setDisplayToast]=useState(false);
const [redirectToHome, setRedirectToHome] = useState(false);

  useEffect(() => {
    // Redirect to home page after 3 seconds
    if (redirectToHome) {
      setTimeout(() => {
        window.location.href = '/'; // Change the URL to your home page URL
      }, 3000); // Redirect after 3 seconds
    }
  }, [redirectToHome]);
  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form submission logic here, such as sending data to a server

    // Redirect to home page
    // window.location.href = '/'; // Change the URL to your home page URL
    // setDisplayToast(false);
    setRedirectToHome(true);
 
//   if(displayToast)
  toast.info("Thanks For your feedback,Your Response is being recorded.")
  };
  return (
    <>
    <div className="contact">
      <section class="contact-form">
        <div class=" abhishek container">
            <div class="form-wrapper">
                <form onSubmit={handleSubmit} class="form"> <br/>
                    <h1 class="lg-heading text-black">CONTACT US</h1> <br/>
                    <p class="text-gray">Let us know your questions, suggestions and concerns by filling out the contact form below.</p>
                    <div class="form-group"> <br/>
                        <label htmlFor="username" autoFocus={true}>USERNAME:</label>
                        <input type="text" placeholder='Enter Your Username' name="username" id="username" value={username} onChange={(e) => setUsername(e.target.value)}  required/>
                    </div>
                    <div class="form-group">
                        <label htmlFor="email">EMAIL:</label>
                        <input type="email" placeholder='Enter Your Email' name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}   required/>
                    </div>
                    <div class="form-group">
                        <label htmlFor="phone">PHONE:</label>
                        <input type="tel" placeholder='Enter Your Mobile Number' name="phone" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} minLength="10" maxLength="10"  required />
                    </div>
                    <div class="form-group">
                        <label htmlFor="message">MESSAGE:</label>
                        <textarea name="message" placeholder='Write Your Feedback Here' id="message" value={message} onChange={(e) => setMessage(e.target.value)}  required> </textarea>
                    </div>
                    <button type="submit" class='form-btn' >Submit</button>
                </form>
            </div>
        </div>
    </section>
    </div>
    <footer class='footer'>
        <div class="social-media-links">
            <i class="fab fa-facebook fa-4x"></i>
            <i class="fab fa-twitter fa-4x"></i>
            <i class="fab fa-instagram fa-4x"></i>
        </div>
        <br/>
        <p>Suchna Kendra &copy; 2024, All Rights Reserved</p>
    </footer>
    </>
  )
}
