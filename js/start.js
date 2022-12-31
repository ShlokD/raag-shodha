import { getPrahaar } from "./utils";

export const start = async () => {
  console.log("hello");
  const raagas = await import("./raagas.json");
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
  const prahaarTime = getPrahaar();
  const name = NAME_MAP[prahaarTime - 1];
  prahaar.textContent = name;
  const currentRagas = raagas.filter((raag) => raag.time === `${prahaarTime}`);

  raagList.innerHTML = "";

  const fragment = new DocumentFragment();
  const ul = document.createElement("ul");

  currentRagas.forEach((raag) => {
    const li = document.createElement("li");
    const link = document.createElement("a");
    link.textContent = raag.name;
    link.href = `https://www.youtube.com/results?search_query=raag+${raag.name}`;
    link.setAttribute("rel", "noreferrer noopener");
    link.setAttribute("target", "_blank");
    li.appendChild(link);
    ul.appendChild(li);
  });

  fragment.appendChild(ul);
  raagList.appendChild(fragment);
};
