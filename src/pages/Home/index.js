import React from "react";
import Carousel from "../../components/Carousel";
import video1 from "../../images/video1.mp4";
import "./style.css"


function Home() {
    return (
        <div className='container'>
            <Carousel />

            <div>
                <p>Our Birria De Res is full of flavor and made with Bone In Beef Imported from Mexicali. 
                    Our Consomé and Birria Ramen will have you coming back for more!</p>

                <h1 className="header">Here is what people are saying...</h1>

                <h4>@dsy.creations "Working 6-6 and you guys have me drooling over here.. I’m about to eat my phone."</h4>

                <h4>@eatwhateveryouwant "Ohhhh my lord this is my type of food!"</h4>

                <h4>@epicureancowboy "It is so good This should be illegal!!"</h4>

                <h4>@letsgogrub "4 more sleeps until RAMEN BIRRIA!"</h4>

                <h4>@mejiaalicia56 "The best in the world."</h4>

                <h4>@supremechef247 "These are the best tacos hands down!!!"</h4>

                <h1 className="header2">And if you don't believe us, just ask Thrillist...</h1>

                <div className="link" >
                    <a href="https://www.facebook.com/Thrillist/videos/466651490930296/" target="_blank"
                        rel="noopener noreferrer">Cocina Los V on Thrillist</a>
                </div>

                <h1>But most importantly, you cannot leave without trying the World Famous Birria Ramen!</h1>

                <div className="ramen">
                    {/* eslint-disable-next-line */}
                    <object data={video1} className="vid" width="100%" height="420"></object>
                </div>

            </div>
            
        </div>
    )
}

export default Home;