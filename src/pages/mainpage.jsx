// Der Background wurde mithilfe von https://particles.js.org/ erstellt.
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";


const Mainpage = () => {
  const particlesInit = async (main) => {
    console.log(main);
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <div className="body">
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        "fullScreen": {
            "enable": true,
            "zIndex": -2
        },
        "fpsLimit": 120,
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#ff0000",
                "animation": {
                    "enable": true,
                    "speed": 20,
                    "sync": true
                }
            },
            "opacity": {
                "value": 0.5
            },
            "size": {
                "value": {
                    "min": 0.1,
                    "max": 3
                }
            },
            "links": {
                "enable": true,
                "distance": 100,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 0.4,
                "direction": "none",
                "outModes": {
                    "default": "out"
                }
            }
        },
        "interactivity": {
            "events": {
                "onHover": {
                    "enable": true,
                    "mode": "repulse"
                },
                "onClick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "repulse": {
                    "distance": 200
                },
                "push": {
                    "quantity": 4
                }
            }
        },
        "detectRetina": true,
        "background": {
            "color": "#808080"
        }
    }}
    />
      <div className="content">
                <h1>Willkommen auf deiner E-Learning Plattform</h1>
                <h2>für Big Data</h2>
            </div>
      
    </div>
  ); 
};

export default Mainpage; 















/* function Mainpage () {
    return (
        <div className='main'>
            <div className="overlay"></div>
        <video src={videoBg} autoPlay muted loop/>
            <div className="content">
                <h1>Willkommen auf deiner E-Learning Plattform</h1>
                <h2>für Big Data</h2>
            </div>
        </div>
        
    )
}
export default Mainpage; */