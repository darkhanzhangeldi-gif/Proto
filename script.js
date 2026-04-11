const venues = [
  {
    id: 1,
    name: "Royal Garden Hall",
    city: "Almaty",
    guests: 250,
    price: 2800000,
    rating: 4.9,
    type: "Wedding",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
    booked: true,
    saved: false,
  },
  {
    id: 2,
    name: "Skyline Celebration Loft",
    city: "Astana",
    guests: 180,
    price: 1900000,
    rating: 4.7,
    type: "Birthday",
    image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1200&q=80",
    booked: false,
    saved: false,
  },
  {
    id: 3,
    name: "Pearl Ballroom",
    city: "Shymkent",
    guests: 350,
    price: 3400000,
    rating: 4.8,
    type: "Wedding",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80",
    booked: false,
    saved: false,
  },
  {
    id: 4,
    name: "Sunset Family Resort",
    city: "Turkistan",
    guests: 120,
    price: 1500000,
    rating: 4.6,
    type: "Anniversary",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=80",
    booked: false,
    saved: false,
  },
];

const providers = [
  {
    id: 1,
    category: "Photography",
    name: "Aruzhan Moments Studio",
    company: "Moments Studio",
    priceFrom: 350000,
    rating: 4.9,
    phone: "+7 777 101 2200",
    email: "hello@momentsstudio.kz",
    city: "Almaty",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1000&q=80",
    saved: false,
  },
  {
    id: 2,
    category: "Decoration",
    name: "Golden Petal Decor",
    company: "Golden Petal",
    priceFrom: 500000,
    rating: 4.8,
    phone: "+7 777 202 3300",
    email: "team@goldenpetal.kz",
    city: "Astana",
    image: "https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?auto=format&fit=crop&w=1000&q=80",
    saved: false,
  },
  {
    id: 3,
    category: "Catering",
    name: "Dastarkhan Premium Catering",
    company: "Dastarkhan Premium",
    priceFrom: 12000,
    rating: 4.7,
    phone: "+7 777 303 4400",
    email: "events@dastarkhan.kz",
    city: "Shymkent",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1000&q=80",
    saved: false,
  },
  {
    id: 4,
    category: "Host / MC",
    name: "Nurlan Celebration Host",
    company: "Nurlan Events",
    priceFrom: 250000,
    rating: 4.6,
    phone: "+7 777 404 5500",
    email: "booking@nurlanevents.kz",
    city: "Almaty",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=1000&q=80",
    saved: false,
  },
  {
    id: 5,
    category: "Music",
    name: "Live Pulse Band",
    company: "Pulse Band",
    priceFrom: 420000,
    rating: 4.9,
    phone: "+7 777 606 7700",
    email: "manager@pulseband.kz",
    city: "Astana",
    image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1000&q=80",
    saved: false,
  },
];

const budget = [
  { id: 1, category: "Venue", planned: 2800000, actual: 2800000, status: "Paid" },
  { id: 2, category: "Photography", planned: 350000, actual: 200000, status: "Deposit" },
  { id: 3, category: "Decoration", planned: 500000, actual: 150000, status: "Deposit" },
  { id: 4, category: "Catering", planned: 1800000, actual: 0, status: "Planned" },
  { id: 5, category: "Music", planned: 420000, actual: 0, status: "Negotiation" },
];

const tasks = [
  { id: 1, title: "Confirm venue contract", owner: "Amina", due: "2026-05-02", priority: "High", done: true },
  { id: 2, title: "Approve menu tasting", owner: "Dias", due: "2026-05-08", priority: "High", done: false },
  { id: 3, title: "Book photographer", owner: "Amina", due: "2026-05-10", priority: "Medium", done: false },
  { id: 4, title: "Send invitation draft", owner: "Madina", due: "2026-05-14", priority: "Low", done: false },
  { id: 5, title: "Choose first dance song", owner: "Dias", due: "2026-05-16", priority: "Low", done: false },
];

const timeline = [
  { id: 1, time: "10:00", event: "Preparation starts", place: "Bridal suite" },
  { id: 2, time: "13:00", event: "Photo session", place: "City park" },
  { id: 3, time: "16:30", event: "Guest arrival", place: "Royal Garden Hall" },
  { id: 4, time: "17:00", event: "Ceremony", place: "Main stage" },
  { id: 5, time: "19:00", event: "Dinner service", place: "Banquet area" },
  { id: 6, time: "21:30", event: "Cake & dancing", place: "Ballroom" },
];

const formatKZT = (value) => `${new Intl.NumberFormat("en-US").format(value)} ₸`;

const navLinks = document.querySelectorAll(".nav-link");
const panels = document.querySelectorAll(".tab-panel");
const venueSearch = document.getElementById("venueSearch");
const providerSearch = document.getElementById("providerSearch");
const providerCategory = document.getElementById("providerCategory");

function switchTab(tabId) {
  navLinks.forEach((btn) => btn.classList.toggle("active", btn.dataset.tab === tabId));
  panels.forEach((panel) => panel.classList.toggle("active", panel.id === tabId));
}

navLinks.forEach((btn) => {
  btn.addEventListener("click", () => switchTab(btn.dataset.tab));
});

document.querySelectorAll("[data-go]").forEach((btn) => {
  btn.addEventListener("click", () => switchTab(btn.dataset.go));
});

function renderVenueSelectorCard() {
  const selected = venues.find((venue) => venue.booked);
  const wrapper = document.getElementById("selectedVenueCard");
  if (!selected) {
    wrapper.innerHTML = "<p class='empty-state'>No venue selected yet.</p>";
    return;
  }

  wrapper.innerHTML = `
    <div class="selected-venue">
      <img src="${selected.image}" alt="${selected.name}" />
      <div>
        <h3>${selected.name}</h3>
        <p class="venue-meta">${selected.city} • Up to ${selected.guests} guests • ${selected.type}</p>
        <div class="card-actions">
          <span class="status-badge">Booked</span>
          <span class="rating-badge">⭐ ${selected.rating}</span>
          <span class="category-badge">${formatKZT(selected.price)}</span>
        </div>
      </div>
    </div>
  `;
}

function renderMetrics() {
  const plannedTotal = budget.reduce((sum, item) => sum + item.planned, 0);
  const actualTotal = budget.reduce((sum, item) => sum + item.actual, 0);
  const completed = tasks.filter((task) => task.done).length;
  const percent = tasks.length ? Math.round((completed / tasks.length) * 100) : 0;

  document.getElementById("plannedTotal").textContent = formatKZT(plannedTotal);
  document.getElementById("actualTotal").textContent = formatKZT(actualTotal);
  document.getElementById("tasksDone").textContent = `${completed} / ${tasks.length}`;
  document.getElementById("progressPercent").textContent = `${percent}%`;

  document.getElementById("plannedTotalBudget").textContent = formatKZT(plannedTotal);
  document.getElementById("actualTotalBudget").textContent = formatKZT(actualTotal);
  document.getElementById("remainingTotalBudget").textContent = formatKZT(plannedTotal - actualTotal);
}

function renderVenues() {
  const grid = document.getElementById("venuesGrid");
  const value = venueSearch.value.trim().toLowerCase();
  const filtered = venues.filter((venue) =>
    `${venue.name} ${venue.city} ${venue.type}`.toLowerCase().includes(value)
  );

  grid.innerHTML = filtered
    .map(
      (venue) => `
      <article class="venue-card">
        <img src="${venue.image}" alt="${venue.name}" />
        <div class="venue-body">
          <div class="card-top">
            <div>
              <h3>${venue.name}</h3>
              <p class="venue-meta">${venue.city} • ${venue.type}</p>
            </div>
            <span class="rating-badge">⭐ ${venue.rating}</span>
          </div>

          <div class="venue-meta-grid">
            <div class="meta-box">
              <span class="venue-meta">Capacity</span>
              <strong>${venue.guests} guests</strong>
            </div>
            <div class="meta-box">
              <span class="venue-meta">From</span>
              <strong>${formatKZT(venue.price)}</strong>
            </div>
          </div>

          <div class="card-actions">
            <button class="book-btn" onclick="bookVenue(${venue.id})">${venue.booked ? "Selected venue" : "Book this venue"}</button>
            <button class="detail-btn" onclick="toggleSaveVenue(${venue.id})">${venue.saved ? "Saved" : "Save"}</button>
          </div>
        </div>
      </article>
    `
    )
    .join("");
}

function bookVenue(id) {
  venues.forEach((venue) => {
    venue.booked = venue.id === id;
  });
  renderVenues();
  renderVenueSelectorCard();
}

function toggleSaveVenue(id) {
  const venue = venues.find((item) => item.id === id);
  if (!venue) return;
  venue.saved = !venue.saved;
  renderVenues();
  renderSaved();
}

window.bookVenue = bookVenue;
window.toggleSaveVenue = toggleSaveVenue;

function populateProviderCategories() {
  const categories = ["All", ...new Set(providers.map((provider) => provider.category))];
  providerCategory.innerHTML = categories
    .map((category) => `<option value="${category}">${category}</option>`)
    .join("");
}

function renderProviders() {
  const grid = document.getElementById("providersGrid");
  const searchValue = providerSearch.value.trim().toLowerCase();
  const categoryValue = providerCategory.value;

  const filtered = providers.filter((provider) => {
    const text = `${provider.name} ${provider.company} ${provider.category} ${provider.city}`.toLowerCase();
    const categoryMatch = categoryValue === "All" || provider.category === categoryValue;
    return text.includes(searchValue) && categoryMatch;
  });

  grid.innerHTML = filtered
    .map(
      (provider) => `
      <article class="provider-card">
        <img src="${provider.image}" alt="${provider.name}" />
        <div class="provider-body">
          <div class="card-top">
            <div>
              <span class="category-badge">${provider.category}</span>
              <h3 style="margin-top: 10px;">${provider.name}</h3>
              <p class="provider-sub">${provider.company} • ${provider.city}</p>
            </div>
            <span class="rating-badge">⭐ ${provider.rating}</span>
          </div>
          <div class="provider-info">
            <span>from ${formatKZT(provider.priceFrom)}</span>
            <span>${provider.phone}</span>
            <span>${provider.email}</span>
          </div>
          <div class="card-actions">
            <button class="primary-btn">Contact</button>
            <button class="detail-btn" onclick="toggleSaveProvider(${provider.id})">${provider.saved ? "Saved" : "Save"}</button>
          </div>
        </div>
      </article>
    `
    )
    .join("");
}

function toggleSaveProvider(id) {
  const provider = providers.find((item) => item.id === id);
  if (!provider) return;
  provider.saved = !provider.saved;
  renderProviders();
  renderSaved();
}

window.toggleSaveProvider = toggleSaveProvider;

function renderSaved() {
  const savedVenuesGrid = document.getElementById("savedVenuesGrid");
  const savedProvidersGrid = document.getElementById("savedProvidersGrid");

  const savedVenues = venues.filter((item) => item.saved);
  const savedProviders = providers.filter((item) => item.saved);

  savedVenuesGrid.innerHTML = savedVenues.length
    ? savedVenues
        .map(
          (venue) => `
          <article class="venue-card">
            <img src="${venue.image}" alt="${venue.name}" />
            <div class="venue-body">
              <div class="card-top">
                <div>
                  <h3>${venue.name}</h3>
                  <p class="venue-meta">${venue.city} • ${venue.type}</p>
                </div>
                <span class="rating-badge">⭐ ${venue.rating}</span>
              </div>
              <div class="card-actions">
                <button class="book-btn" onclick="bookVenue(${venue.id})">${venue.booked ? "Selected venue" : "Book"}</button>
                <button class="detail-btn" onclick="toggleSaveVenue(${venue.id})">Remove</button>
              </div>
            </div>
          </article>
        `
        )
        .join("")
    : "<p class='empty-state'>No saved venues yet.</p>";

  savedProvidersGrid.innerHTML = savedProviders.length
    ? savedProviders
        .map(
          (provider) => `
          <article class="provider-card">
            <img src="${provider.image}" alt="${provider.name}" />
            <div class="provider-body">
              <div class="card-top">
                <div>
                  <span class="category-badge">${provider.category}</span>
                  <h3 style="margin-top: 10px;">${provider.name}</h3>
                  <p class="provider-sub">${provider.company} • ${provider.city}</p>
                </div>
                <span class="rating-badge">⭐ ${provider.rating}</span>
              </div>
              <div class="card-actions">
                <button class="primary-btn">Contact</button>
                <button class="detail-btn" onclick="toggleSaveProvider(${provider.id})">Remove</button>
              </div>
            </div>
          </article>
        `
        )
        .join("")
    : "<p class='empty-state'>No saved providers yet.</p>";
}

function renderBudget() {
  const body = document.getElementById("budgetTableBody");
  body.innerHTML = budget
    .map(
      (item) => `
      <tr>
        <td>${item.category}</td>
        <td>${formatKZT(item.planned)}</td>
        <td>${formatKZT(item.actual)}</td>
        <td><span class="status-badge">${item.status}</span></td>
        <td><button class="delete-btn" onclick="removeBudgetItem(${item.id})">Delete</button></td>
      </tr>
    `
    )
    .join("");
}

function removeBudgetItem(id) {
  const index = budget.findIndex((item) => item.id === id);
  if (index >= 0) {
    budget.splice(index, 1);
    renderBudget();
    renderMetrics();
  }
}

window.removeBudgetItem = removeBudgetItem;

document.getElementById("addBudgetBtn").addEventListener("click", () => {
  const category = document.getElementById("newBudgetCategory").value.trim();
  const planned = Number(document.getElementById("newBudgetPlanned").value);
  if (!category || !planned) return;

  budget.push({
    id: Date.now(),
    category,
    planned,
    actual: 0,
    status: "Planned",
  });

  document.getElementById("newBudgetCategory").value = "";
  document.getElementById("newBudgetPlanned").value = "";
  renderBudget();
  renderMetrics();
});

function renderTasks() {
  const list = document.getElementById("tasksList");
  list.innerHTML = tasks
    .map(
      (task) => `
      <article class="task-card">
        <div class="task-main">
          <button class="task-toggle ${task.done ? "done" : ""}" onclick="toggleTask(${task.id})"></button>
          <div>
            <h3 class="task-title ${task.done ? "done" : ""}">${task.title}</h3>
            <p class="task-sub">Owner: ${task.owner} • Due: ${task.due}</p>
          </div>
        </div>
        <div class="card-actions">
          <span class="priority-badge priority-${task.priority.toLowerCase()}">${task.priority}</span>
          <span class="status-badge">${task.done ? "Completed" : "Open"}</span>
        </div>
      </article>
    `
    )
    .join("");
}

function toggleTask(id) {
  const task = tasks.find((item) => item.id === id);
  if (!task) return;
  task.done = !task.done;
  renderTasks();
  renderMetrics();
}

window.toggleTask = toggleTask;

document.getElementById("addTaskBtn").addEventListener("click", () => {
  const title = document.getElementById("newTaskInput").value.trim();
  if (!title) return;

  tasks.push({
    id: Date.now(),
    title,
    owner: "You",
    due: "2026-05-20",
    priority: "Medium",
    done: false,
  });

  document.getElementById("newTaskInput").value = "";
  renderTasks();
  renderMetrics();
});

function renderTimeline() {
  const list = document.getElementById("timelineList");
  const ordered = [...timeline].sort((a, b) => a.time.localeCompare(b.time));

  list.innerHTML = ordered
    .map(
      (item) => `
      <div class="timeline-item">
        <div class="timeline-time">${item.time}</div>
        <div class="timeline-card">
          <h3>${item.event}</h3>
          <p class="timeline-place">${item.place}</p>
        </div>
      </div>
    `
    )
    .join("");
}

document.getElementById("addTimelineBtn").addEventListener("click", () => {
  const time = document.getElementById("timelineTime").value;
  const event = document.getElementById("timelineEvent").value.trim();
  const place = document.getElementById("timelinePlace").value.trim();
  if (!time || !event || !place) return;

  timeline.push({
    id: Date.now(),
    time,
    event,
    place,
  });

  document.getElementById("timelineTime").value = "";
  document.getElementById("timelineEvent").value = "";
  document.getElementById("timelinePlace").value = "";
  renderTimeline();
});

venueSearch.addEventListener("input", renderVenues);
providerSearch.addEventListener("input", renderProviders);
providerCategory.addEventListener("change", renderProviders);

populateProviderCategories();
renderMetrics();
renderVenueSelectorCard();
renderVenues();
renderProviders();
renderSaved();
renderBudget();
renderTasks();
renderTimeline();
