import { getPrahaar } from "./utils";

export const start = async () => {
  const raagas = await (await import("./raagas.js")).default;
  const NAME_MAP = [
    "Purvanha",
    "Madhyanha",
    "Aparanha",
    "Sayanha",
    "Pradosha",
    "Nishitha",
    "Triyama",
    "Usha",
  ];
  const prahaar = document.querySelector("#prahaar");
  const raagList = document.querySelector("#raag-list");
  const hero = document.querySelector("#hero");
  const prahaarTime = getPrahaar();
  const name = NAME_MAP[prahaarTime - 1];
  const currentRagas = raagas.filter((raag) => raag.time === `${prahaarTime}`);
  const imgUrl = new URL(`../headers/${prahaarTime}.jpg`, import.meta.url).href;
  hero.src = `${imgUrl}`;
  hero.addEventListener("load", () => {
    prahaar.textContent = name;
    hero.classList.remove("dn");
  });

  raagList.innerHTML = "";

  const fragment = new DocumentFragment();
  const ul = document.createElement("ul");

  ul.classList.add(
    "list",
    "flex",
    "flex-row-ns",
    "flex-column",
    "flex-wrap",
    "pa0",
    "ma0",
    "items-center",
    "justify-center"
  );

  currentRagas.forEach((raag) => {
    const li = document.createElement("li");
    li.classList.add(
      "pa4",
      "ba",
      "b--black-70",
      "br4",
      "ma2",
      "f3",
      "bw2",
      "shadow-1",
      "bg-navy",
      "tc",
      "w-90",
      "w-40-m",
      "w-20-l",
      "pointer",
      "shadow-1"
    );
    const link = document.createElement("a");
    link.classList.add("white");
    const raagName = raag.name.split("/")[0];
    link.textContent = raagName;
    link.href = `https://www.youtube.com/results?search_query=raag+${raagName}`;
    link.setAttribute("rel", "noreferrer noopener");
    link.setAttribute("target", "_blank");
    li.appendChild(link);
    ul.appendChild(li);
  });

  fragment.appendChild(ul);
  raagList.appendChild(fragment);
};
