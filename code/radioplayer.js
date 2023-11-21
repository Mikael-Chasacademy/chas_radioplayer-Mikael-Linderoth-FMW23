// Steg 1. Gör en fetch till 'https://api.sr.se/api/v2/channels/?format=json'
document.addEventListener("DOMContentLoaded", function () {
  const channelsDiv = document.getElementById("channels");

  async function getRadio() {
    const response = await fetch(
      "https://api.sr.se/api/v2/channels/?format=json"
    );
    const data = await response.json();

    // Steg 2. loopa med tex forEach över data.channels - ta ut data och visa på html-sidan.
    data.channels.forEach((radio) => {
      console.log(radio);
      const radioDiv = document.createElement("div");
      radioDiv.setAttribute("class", "radiostyle");
      radioDiv.style.backgroundColor = "#" + radio.color;
      radioDiv.innerHTML = `
      <img src=${radio.image}>
      <div class="controller">
        <h2>${radio.name}</h2>
        <audio controls class="audiostyle">
          <source src=${radio.liveaudio.url} type="audio/mpeg" />
        </audio>
      </div>
      `;
      console.log(radioDiv);
      channelsDiv.appendChild(radioDiv);

      /* }); */

      // Steg 3. ta ut liveaudio.url från varje kanal och lägg i en audio tagg.
      // <audio controls>
      //   <source src="" type="audio/mpeg" />
      // </audio>
    });
  }
  getRadio();
});
