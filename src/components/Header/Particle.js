import React from "react";
import Particles from "react-tsparticles";


// https://codepen.io/matteobruni/pen/bGexNaZ

function Particle() {
  return (
        <Particles
          id="tsparticles"
          options={{
            fpsLimit: 60,
            interactivity: {
                detectsOn: "canvas",
                events: {
                  resize: true
                }
              },
            particles: {
              color: {
                value: "#2B2D42",
              },
              collisions: {
                enable: true,
              },
              number: {
                density: {
                  enable: true,
                  area: 1080
                },
                limit: 0,
                value: 200
              },
              opacity: {
                animation: {
                  enable: true,
                  minimumValue: 0.05,
                  speed: 1,
                  sync: false
                },
                random: {
                  enable: true,
                  minimumValue: 0.05
                },
                value: 1
              },
              shape: {
                type: "circle",
              },
              size: {
                random: {
                  enable: true,
                  minimumValue: .6
                },
                value: 1
              },
            },
            detectRetina: false,
          }}
        />
      );
    };

export default Particle;