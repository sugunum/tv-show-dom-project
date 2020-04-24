//You can edit ALL of the code here
function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}

function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  rootElem.textContent = `Got ${episodeList.length} episode(s)`;


  for (let i = 0; i < episodeList.length; i++) {

    let placeHolder = document.createElement("div");
    placeHolder.id = "placeHolder";
    rootElem.appendChild(placeHolder); //(<div></div> created with loop without text) assigned the div inside the root

  }




}

window.onload = setup;
