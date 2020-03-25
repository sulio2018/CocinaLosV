import React from "react";
import about1 from "../../images/about1.jpg";
import about2 from "../../images/about2.jpg";
import about3 from "../../images/about3.jpg";
import "./style.css";

function About() {
    return (
        <div className='container'>

            <div className='about'>
                <img id='aboutimg' src={about1} className='center' alt="about"></img>

                <p>For as long as I can remember my parents have been asked by friends and family to cook for their events. The requests where anywhere from small family gatherings to sweet 15's to even a few family weddings. There was a reason why my parents where always asked to cook. </p>

                <img id='aboutimg' src={about2} className='center' alt="about"></img>

                <p>It was their special touch that always made their dishes so flavorful. But, this dish right here stood out from the rest. So I grabbed it and ran! A traditional and flavorful Mexican dish, Birria De Res.</p>

                <img id='aboutimg' src={about3} className='center' alt="about"></img>

                <p>Cupim cow alcatra kielbasa frankfurter tail ham pancetta sirloin. Biltong ground round pig, kevin jerky capicola tongue pork loin rump. Beef tri-tip kevin, kielbasa brisket alcatra bacon. Cow shoulder rump ham pork loin filet mignon prosciutto landjaeger jowl cupim beef ribs kielbasa drumstick tenderloin brisket. Biltong shankle bresaola tail t-bone picanha frankfurter, landjaeger meatloaf tri-tip chislic turducken strip steak. Pork chop sirloin meatloaf cow biltong doner chislic short loin pork belly. Fatback biltong picanha pancetta.</p>

            </div>

        </div>
    );
}

export default About;