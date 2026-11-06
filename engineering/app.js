const grid = document.getElementById("grid");
const searchInput = document.getElementById("search");
const emptyState = document.getElementById("empty-state");
const detailOverlay = document.getElementById("detail");
const detailContent = document.getElementById("detail-content");
const closeDetailBtn = document.getElementById("close-detail");
const surpriseBtn = document.getElementById("surprise");

function cardHtml(d) {
  return `
    <article class="card" data-id="${d.id}" tabindex="0" role="button" aria-label="${d.name}">
      <div class="card-icon">${d.icon}</div>
      <h2>${d.name}</h2>
      <p>${d.blurb}</p>
      <div class="tags">${d.topics.map(t => `<span class="tag">${t}</span>`).join("")}</div>
    </article>
  `;
}

function renderGrid(list) {
  grid.innerHTML = list.map(cardHtml).join("");
  emptyState.hidden = list.length > 0;

  grid.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => openDetail(card.dataset.id));
    card.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openDetail(card.dataset.id);
      }
    });
  });
}

function matches(d, query) {
  if (!query) return true;
  const haystack = [d.name, d.blurb, ...d.topics].join(" ").toLowerCase();
  return haystack.includes(query);
}

function applyFilter() {
  const query = searchInput.value.trim().toLowerCase();
  renderGrid(DISCIPLINES.filter(d => matches(d, query)));
}

function openDetail(id) {
  const d = DISCIPLINES.find(item => item.id === id);
  if (!d) return;

  detailContent.innerHTML = `
    <div class="detail-icon">${d.icon}</div>
    <h2>${d.name}</h2>
    <p>${d.blurb}</p>
    <h3>Common topics</h3>
    <div class="tags">${d.topics.map(t => `<span class="tag">${t}</span>`).join("")}</div>
    <h3>Career paths</h3>
    <ul>${d.careers.map(c => `<li>${c}</li>`).join("")}</ul>
    <h3>Fun fact</h3>
    <p class="fact">${d.fact}</p>
  `;
  detailOverlay.hidden = false;
}

function closeDetail() {
  detailOverlay.hidden = true;
}

searchInput.addEventListener("input", applyFilter);
closeDetailBtn.addEventListener("click", closeDetail);
detailOverlay.addEventListener("click", e => {
  if (e.target === detailOverlay) closeDetail();
});
document.addEventListener("keydown", e => {
  if (e.key === "Escape" && !detailOverlay.hidden) closeDetail();
});

surpriseBtn.addEventListener("click", () => {
  const pick = DISCIPLINES[Math.floor(Math.random() * DISCIPLINES.length)];
  openDetail(pick.id);
});

renderGrid(DISCIPLINES);
