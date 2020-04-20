const sh = document.querySelector("#smallhand");

function tick() {
  let delta = 1;
  setInterval(() => {
    sh.style.transform = `rotate(${delta}deg)`;
    delta = delta + 1;
    console.log(delta);
  }, 1000);
}

// tick();
