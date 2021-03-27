import React from "react";

import "./index.css";

function Home(){

 

	return(
	<div className="main">
	<div className="top-container">	
  
   <h1 className="neon">
  <strong>Wecome To Food Delights</strong>
  </h1>
  
 </div>
 <div className="bottom-container">
   
   <h1 className="neon"><span>Get In Touch</span></h1>
    <h2 className="neon extra"><span>My contacts</span></h2>
    <p className="cms neon "><span>So I can  help u whenever u need my help.</span></p>
  <a className="footer-link neon" href="https://www.linkedin.com/in/bristi-jana-379a5b1b9/">LinkedIn</a>
  <a className="footer-link neon" href="https://twitter.com/bristi_jana">Twitter</a>
  <a className="footer-link neon" href="mailto:bristi0654@gmail.com">Mail</a>
  <p className="endp">© 2021 <strong><span>Bristi Jana</span></strong> . All Rights Reserved. Designed by me.</p>
 </div>
 </div>
);
}



export default Home;