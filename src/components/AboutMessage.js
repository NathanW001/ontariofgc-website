
let window_size = Math.floor(window.innerWidth/3.5)
if (window.innerWidth < 1000) {
  window_size = window_size*2.5
}

function AboutMessage() {
  return(
    <div className="about-box">
      <div className="about-image-wrapper">
        <img src={"14c227203342611.png"} alt="an offline event" width={window_size} height={Math.floor(window_size*0.665)}/>
      </div>
      <div className="about-text">The Ontario Fighting Game Community is a vibrant and inclusive group of fighting game enthusiasts, competitors, and organizers across Ontario, Canada. United by a shared passion for fighting games like Street Fighter, Tekken, Guilty Gear, and more, our community thrives on the love of the game. Whether you're a seasoned player or just starting out, the Ontario FGC offers a welcoming environment where players of all skill levels can connect, improve, and enjoy fighting games. From local tournaments and casual meetups to regional events, we hope you can find what you're looking for!</div>
    </div>
  )
};

export default AboutMessage
