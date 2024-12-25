{
  anime
    .timeline({})
    .add({
      targets: ".logo",
      scale: ["0", "1"],
      easing: "easeInOutCubic",
      duration: 500,
    })
    .add({
      targets: ".img .bg",
      width: ["0%", "40%"],
      easing: "easeInOutCubic",
      duration: 500,
    })
    .add({
      targets: ".img img",
      opacity: ["0", "1"],
      easing: "easeInOutQuad",
    })
    .add({
      targets: ".boximg .bg",
      width: ["0%", "100%"],
      easing: "easeInOutCubic",
      duration: 500,
    })
    .add({
      targets: ".boximg img",
      translateX: [-200, -190],
      translateY: [10],
      opacity: ["0", "1"],
      easing: "easeInOutQuad",
    })
    .add({
      targets: ["nav ul li", "header a"],
      translateX: [-150, 0],
      delay: anime.stagger(300, { direction: "reverse" }),
      easing: "easeInOutQuad",
    })
    .add({
      targets: "h1",
      translateY: [-150, 0],
      skewX: [150, 0],
      delay: anime.stagger(300, { direction: "reverse" }),
      easing: "easeInOutQuad",
    })
    .add({
      targets: "p",
      translateY: [50, 0],
      opacity: ["0", "1"],
      easing: "easeInOutQuad",
    });
}
