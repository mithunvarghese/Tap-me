window.addEventListener('load', () => {
  const sounds = document.querySelectorAll('.sound');
  const pads = document.querySelectorAll(".pads div");
  const visual = document.querySelector('.visual');
  const colors = [
    "#718093",
    "#1abc9c",
    "#bdc3c7",
    "#e67e22",
    "#34495e",
    "#2ecc71",
    "#d35400"
];


  pads.forEach((pad, index) =>{
  pad.addEventListener('click',function () {
    sounds[index].currentTime= 0; // audio will beplayed from start
    sounds[index].play(); // play function

    setInterval( () => {
      if(sounds[index].currentTime > 10)
          sounds[index].pause();
    }, 1000);


    createBubbles(index);
    });
  });


  // Create a function tht enables bubbles

  const createBubbles = (index) => {
    const bubble = document.createElement("div");
    visual.appendChild(bubble);
    bubble.style.backgroundColor = colors[index];
    bubble.style.animation = "jump 1s ease";
    bubble.addEventListener('animationend', function () {
      visual.removeChild(this);
    });
  };
});
