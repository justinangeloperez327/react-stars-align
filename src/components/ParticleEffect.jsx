import Particles from "@tsparticles/react";

const particleOptions = {
    fpsLimit: 120,
    interactivity: {
        events: {
            onClick: {
                enable: true,
                mode: "push",
            },
            onHover: {
                enable: true,
                mode: "repulse",
            },
            resize: true,
        },
        modes: {
            push: {
                quantity: 4,
            },
            repulse: {
                distance: 200,
                duration: 0.4,
            },
        },
    },
    particles: {
        color: {
            value: "#ffffff",
        },
        links: {
            color: "#ffffff",
            distance: 50,
            enable: true,
            opacity: 0.5,
            width: 1,
        },
        move: {
            direction: "none",
            enable: true,
            outModes: {
                default: "bounce",
            },
            random: false,
            speed: 1,
            straight: false,
        },
        number: {
            density: {
                enable: true,
                area: 1000,
            },
            value: 60,
        },
        opacity: {
            value: 0.5,
        },
        shape: {
            type: "star",
        },
        size: {
            value: { min: 1, max: 3 },
        },
    },
    detectRetina: true,
};

const ParticleEffect = () => (
    <Particles
        id="tsparticles"
        options={particleOptions}
    />
);

export default ParticleEffect;
