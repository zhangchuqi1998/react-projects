import ProfileCard from "./ProfileCard";
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';
import 'bulma/css/bulma.css'

function App() {
    return (
        <div>
            <section className="hero is-primary">
                <div className="hero-body">
                    <p className="title">
                    Personal Degital Card
                    </p>
                </div>
            </section>

            <div className="container">
                <section className="section">
                    <div className="columns">
                    <div className="column is-4">
                        <ProfileCard title="Alexa" handle="@alexa99" image={AlexaImage} description="alexa" />
                    </div>
                    <div className="column is-4">
                        <ProfileCard title="Cortana" handle="@cortana32"  image={CortanaImage} description="cortana"/>
                    </div>
                    <div className="column is-4">
                        <ProfileCard title="Siri" handle="@siri01" image={SiriImage} description="siri"/>
                    </div>
                    </div>
                   
                </section>
            </div>
        </div>
    );
}

export default App;