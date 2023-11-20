import Particles from "react-tsparticles";
import ParticleConfig from './config/particlesjs-config'
import ParticleConfigHexa from './config/particlesjs-config-2'
import './css/Particles.css'

const ParticleBackground = (props) => {

    switch(props.type){
        case "normal":
            return(
                <div >
                <Particles id="particles" options={ParticleConfig} />
            </div>
            );

        case "hexa":
            return(
                <div >
                <Particles id="particles" options={ParticleConfigHexa} />
            </div>
            )
        default:
            return;    
    }
}
export default ParticleBackground;