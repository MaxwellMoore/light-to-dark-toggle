src = "https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.7.1/lottie.min.js";

document.addEventListener("DOMContentLoaded", function () {
  var animationContainer = document.getElementById("animationContainer");
  var currentAnimation = null;
  var isFirstAnimation = false;

  // Function to toggle between the first and second animations
  function toggleAnimations() {
    // If there's a current animation, destroy it before loading the next one
    if (currentAnimation) {
      currentAnimation.destroy();
    }

    // Load and play the appropriate animation based on the toggle state
    var animationPath = isFirstAnimation
      ? "./night-to-day.json"
      : "./day-to-night.json";

    currentAnimation = lottie.loadAnimation({
      container: animationContainer,
      renderer: "svg",
      loop: false,
      autoplay: false, // Set autoplay to false
      path: animationPath,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid meet",
      },
    });

    // Play the current animation after loading
    currentAnimation.play();

    // Toggle the animation state for the next click
    isFirstAnimation = !isFirstAnimation;

    // Change body background color based on the current state
    document.body.style.transition = "background-color 500ms ease";
    document.body.style.backgroundColor = !isFirstAnimation
      ? "#ffffff"
      : "#000000";
  }

  // Add a click event listener to the container to toggle animations
  animationContainer.addEventListener("click", toggleAnimations);

  // Load the initial animation without autoplay
  currentAnimation = lottie.loadAnimation({
    container: animationContainer,
    renderer: "svg",
    loop: false,
    autoplay: false, // Set autoplay to false
    path: "./day-to-night.json",
    rendererSettings: {
      preserveAspectRatio: "xMidYMid meet",
    },
  });
});
