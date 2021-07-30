const ConfigParticle = 
    {
        particles: {
          number: {
            value: 346,
            density: {
              enable: true,
              value_area: 800
            }
          },
          color: {
            value: "#b9b5d9"
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#8188a7"
            },
            polygon: {
              nb_sides: 10
            },
            image: {
              src: "img/github.svg",
              width: 100,
              height: 100
            }
          },
          opacity: {
            value: 0.5,
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false
            }
          },
          size: {
            value: 4.00602506169279,
            random: true,
            anim: {
              enable: false,
              speed: 40,
              size_min: 0.1,
              sync: false
            }
          },
          line_linked: {
            enable: true,
            distance: 128.19280197416927,
            color: "#659992",
            opacity: 0.09614460148062694,
            width: 1.9228920296125387
          },
          move: {
            enable: true,
            speed: 6,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "bounce",
            bounce: false,
            attract: {
              enable: true,
              rotateX: 6249.399096240751,
              rotateY: 5368.073582668338
            }
          }
        },
        interactivity: {
          detect_on: "window",
          events: {
            onhover: {
              enable: true,
              mode: "repulse"
            },
            onclick: {
              enable: true,
              mode: "push"
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 400,
              line_linked: {
                opacity: 1
              }
            },
            bubble: {
              distance: 206.93852708460147,
              size: 340.839926962873,
              duration: 2.1911138161898984,
              opacity: 0.8926759991884771,
              speed: 3
            },
            repulse: {
              distance: 73,
              duration: 0.4
            },
            push: {
              particles_nb: 4
            },
            remove: {
              particles_nb: 2
            }
          }
        },
        retina_detect: false
      }

    
export default ConfigParticle;
