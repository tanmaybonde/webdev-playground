import ProfileCard from "./profileCard";
import AlexaImage from "./images/alexa.png"
import CortanaImage from "./images/cortana.png"
import SiriImage from "./images/siri.png"
import "../node_modules/bulma/css/bulma.css"
function App(){
  return(
    <div>

      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">Personal Assistant</p>
        </div>
      </section>

      <div className="container">
        <section className="section">
        <div className="columns" >
          <div className="column is-4">         
             <ProfileCard title="Alexa" handler="@Alexa23" image={AlexaImage}/>
          </div>

          <div className="column is-4">
            <ProfileCard title="Cortana" handler="@Cortana23" image={CortanaImage}/>
          </div>

          <div className="column is-4">
            <ProfileCard title="Siri" handler="@Siri24" image={SiriImage}/>
          </div>
        </div>
        
        </section>
      </div>

    </div>
  );
}
export default App;