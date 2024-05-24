// import {Link} from "react-router-dom";
import Post from '../post/Post'
import './posts.css'
import React from "react";
import Write from "../../pages/write/Write";
import { BrowserRouter as Router, Route,Link} from 'react-router-dom';
export default function Posts() {
  return (
    <div className='posts'>
    <Link className="postss" to="sidepost/SidePost">
      <Post 
      imgSrc="https://images.unsplash.com/photo-1595742771703-6ca9c1d4ceb3?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9vbiUyMGdpcmx8ZW58MHx8MHx8fDA%3D"
      postCatsContent1="Music"
      postCatsContent2="Life"
      postTitleContent="Moon Cycle"
      postDate="1 hour ago"
      postDesc="The moon, our celestial companion, dances through its phases in a captivating cycle that has entranced humanity for millennia. From the delicate crescent of the new moon, barely visible against the night sky, to the full, luminous orb of the full moon that bathes the earth in its silvery glow, each phase holds its own allure and significance. As the moon waxes and wanes, it marks the passage of time, influencing tides, agricultural practices, and even human emotions and behaviors according to folklore and belief. Whether it's the mystique of the new moon heralding new beginnings, or the intensity of the full moon stirring ancient tales of werewolves and romance, the moon's cycle continues to inspire wonder and fascination, reminding us of the beauty and mystery of the cosmos."/>
      </Link>
      
   <Link className="postss" to="sidepost2/SidePost2">
  <Post
        imgSrc="https://cdn.pixabay.com/photo/2024/04/12/12/23/logo-8691888_640.jpg"
        postCatsContent1="Music"
        postCatsContent2="Gaming"
        postTitleContent="Gaming Villan"
        postDate="2 days ago"
        postDesc="Gaming, a diverse realm of interactive entertainment, spans genres, platforms, and communities worldwide. From immersive role-playing adventures to competitive multiplayer battles, it captivates millions. Evolving technology continually pushes boundaries, fostering innovation and creativity. Gaming transcends mere leisure, becoming a cultural phenomenon, shaping society and forging connections across the globe."
      />
  </Link>
    <Link className="postss" to="sidepost3/SidePost3">
       <Post 
        imgSrc="https://img.etimg.com/thumb/width-1200,height-900,imgsize-1157704,resizemode-75,msid-94321543/news/sports/new-cricket-rules-saliva-ban-made-permanent-icc-announces-a-slew-of-changes-to-playing-conditions.jpg"
        postCatsContent1="Sports"
        postCatsContent2="Entertainment"
        postTitleContent="IPL fever"
        postDate="1 month ago"
        postDesc="The Indian Premier League (IPL), a dazzling spectacle of cricketing 
        prowess and entertainment, has emerged as one of the most electrifying sporti
        ng events on the planet. Since its inception, the IPL has captured the imagi
        nation of cricket enthusiasts worldwide with its blend of star power, fierce co
        mpetition, and pulsating action. With teams representing cities from across Indi
        a, the league showcases a melting pot of talent, featuring both international s
        uperstars and emerging domestic players. From thunderous sixes to acrobatic catch
        es, every match is a showcase of skill and flair, drawing millions of viewers to 
        their screens and stadiums each season. Beyond the boundaries of cricket, the IPL has become a cultural phenomenon, with its heady mix of cricket, music, and entertainment captivating audiences of all ages. Whether it's the fervent support of loyal fans or the nail-biting finishes that keep spectators on the edge of their seats, the IPL continues to reign as the crown jewel of T20 cricket, setting new standards of excitement and excellence with each passing season."
      />
      </Link>
      
      <Link className="postss" to="sidepost4/SidePost4">
      <Post
        imgSrc="https://media.istockphoto.com/id/1128909468/vector/banner-for-cinema-festival-with-old-movie-camera.jpg?s=612x612&w=0&k=20&c=w8gNR0eyxxozowkfIprdT3GYW_anWRVMF6UjPVO1BhI="
        postCatsContent1="Cinema"
        postCatsContent2="Music"
        postTitleContent="Movie Mania"
        postDate="2 month ago"
        postDesc="Movies, the magical realm where stories come alive on the silver scr
        een, hold an unparalleled ability to transport audiences to worlds beyond imaginati
        on. From the golden age classics to the latest blockbusters, each film is a testame
        nt to the creativity and ingenuity of filmmakers worldwide. Through the lens of ci
        nematography, we explore the depths of human emotion, embark on thrilling adventur
        es, and ponder the mysteries of existence. Whether it's the heart-wrenching drama that leaves us breathless, the laughter that echoes through theaters, or the awe-inspiring visuals that dazzle our senses, movies have the power to evoke a myriad of emotions and provoke thought long after the credits roll. As a cornerstone of modern culture, they serve as a mirror to society, reflecting its triumphs, struggles, and aspirations. From intimate indie productions to sprawling Hollywood epics, movies continue to captivate and inspire audiences, providing an escape from reality while also enriching our understanding of the human experience."
      />
      </Link>
      <Link className="postss" to="singlepost5/SinglePost5">
      <Post
         imgSrc="https://img.freepik.com/premium-vector/artificial-intelligence-technology-ai-flat-concept-illustration_584397-439.jpg"
        postCatsContent1="Tech"
        postCatsContent2="Information"
        postTitleContent="Tech AI"
        postDate="3 months ago"
        postDesc="Artificial Intelligence (AI), the cutting-edge frontier of te
  chnology, is revolutionizing virtually every aspect of our lives. With its ability to pro
  cess vast amounts of data, learn from patterns, and make decisions
  , AI is powering innovations across industries, from healthcare and finance to t
  ransportation and entertainment. In healthcare, AI algorithms are being employed to 
  diagnose diseases, personalize treatment plans, and enhance medical imaging, leading to more accurate diagnoses and improved patient outcomes. In finance, AI-driven algorithms analyze market trends, optimize trading strategies, and detect fraudulent activities, enabling more informed decision-making and risk management. Autonomous vehicles, powered by AI, are poised to reshape transportation, promising safer and more efficient journeys on roads and in the skies. In entertainment, AI is used to create immersive experiences, from virtual reality games to personalized content recommendations on streaming platforms. Despite its immense potential, AI also raises important ethical and societal questions regarding privacy, bias, and job displacement, highlighting the need for responsible development and deployment. As AI continues to evolve, it holds the promise of unlocking new frontiers of innovation and shaping the future in ways we are only beginning to imagine."
    />
    </Link>
    <Link className="postss" to="singlepost6/SinglePost6">
      <Post
         imgSrc="https://i.pinimg.com/736x/5d/9e/e3/5d9ee3bfd25a5fed43fe05db71ed2b68.jpg"
        postCatsContent1="Money"
        postCatsContent2="Grow"
        postTitleContent="10x Your Capital"
        postDate="5 months ago"
       postDesc="Money is the fingerprint of individuality, the unique m
  ark we leave on the world through our aesthetic choices. It's the art of self-expression, a language spoken through clothing, accessories, and personal flair. Whether it's the timeless elegance of a tailored suit, the bohemian charm of flowing fabrics, or the edgy allure of streetwear, style is as diverse and multifaceted as the individuals who embrace it. Beyond mere fashion trends, style is about cultivating a signature look that reflects our personality, passions, and aspirations. It's about feeling comfortable and confident in our own skin, empowered by the garments we choose to adorn ourselves with. From the way we tie a scarf to the way we walk into a room, style permeates every aspect of our lives, shaping how we are perceived by others and how we perceive ourselves. Ultimately, style is not just about what we wear, but how we wear it – with authenticity, creativity, and an unapologetic sense of self."  
      />   
</Link>
    </div>
  )
}
