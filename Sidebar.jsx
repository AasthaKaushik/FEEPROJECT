import './sidebar.css'

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>About Us</span>
        <img className='aboutusImg' src='https://st2.depositphotos.com/4107269/7705/i/450/depositphotos_77053627-stock-photo-journalist-working-on-his-new.jpg' alt='HEHE'></img>
        <p>Crafting an "about us" paragraph is a personal endeavor that should reflect your unique personality, experiences, and aspirations. Here's a general template to get you started:

---
Hello! I'm XYZ, a Web Developer with a passion for Your Interests or Hobbies. Originally from  ABCO hometown, I've always been drawn to  Passion or Interest. With 86516554643 years of experience in that, I've had the opportunity to Highlight Significant Achievements or Experiences. Outside of work, you can often find me Describe Your Hobbies or Activities. I believe in Your Personal Philosophy or Values and I'm constantly seeking new ways to Your Goals or Aspirations. I'm excited to Your Intentions or Plans. Let's connect and Your Call to Action!
---

Feel ts who you are.</p>
      </div>
      <div className='sidebarItem'>
      <span className='sidebarTitle'>Trendings News Categories&#x1F4F0;</span>
      <ul className='sidebarList'>
      <li className='sidebarListItem'><a className="postsss" href="https://indianexpress.com/section/lifestyle/life-style/"> Life</a></li>
      <li className='sidebarListItem'><a  className="postsss" href='https://www.hindustantimes.com/entertainment/music'>Music</a></li>
      <li className='sidebarListItem'><a className="postsss" href='https://indianexpress.com/section/sports/'>Sports</a></li>
      <li className='sidebarListItem'><a className="postsss" href='https://timesofindia.indiatimes.com/life-style/fashion'>Style</a></li>
      <li className='sidebarListItem'><a className="postsss" href='https://timesofindia.indiatimes.com/topic/indian-cinema/news'>Cinema</a></li>
      <li className='sidebarListItem'><a className="postsss" href='https://indianexpress.com/section/technology/'>Tech</a></li>
      </ul>
      </div>
      <div className='sidebarItem'>
      <span className='sidebarTitle'>Fun Facts &#x1F602; </span>
     
      <ul className='sidebarList'>
      <div className='funfacts'>1)Octopuses have three hearts: One heart pumps blood through the body, while the other two pump .</div>
      <div className='funfacts'>2)The Eiffel Tower can be 15 cm taller during the summer: This is due to the expansion of the iron</div>
      <div className='funfacts'>3)The world's largest desert isn't the Sahara: The Antarctic Desert is the largest desert in the world.</div>
      <div className='funfacts'>4)Penguins can jump up to 6 feet in the air: Despite their waddling gait on land.</div>
      <div className='funfacts'>5)The unicorn is the national animal of Scotland: Yes, Scotland has a mythical creature as its national animal.</div>
      </ul>
      </div>
      <div className='sidebarItem'>
      <span className='sidebarTitle'>Follow us</span>
      <div className='sidebarSocial'>
      <i className="sidebarIcon fa-brands fa-facebook"></i>
     <i className="sidebarIcon fa-brands fa-x-twitter"></i>
     <i className="sidebarIcon fa-brands fa-square-instagram"></i>
     <i className="sidebarIcon fa-brands fa-pinterest"></i>
      </div>
      </div>
    </div>
  )
}
