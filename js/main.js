/* ==========================================================
   Shared behaviour: header, footer, menu, galleries, lightbox.
   Content lives in js/photos.js — you shouldn't need to edit this.
   ========================================================== */

(() => {
  const page = document.body.dataset.page;
  const pad = (n) => String(n).padStart(2, "0");

  const ICONS = {
    instagram: '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.6"/></svg>',
    mail: '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14"/><path d="M3 6l9 7 9-7"/></svg>',
    arrow: '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    prev: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5l-7 7 7 7"/></svg>',
    next: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5l7 7-7 7"/></svg>',
    close: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 5l14 14M19 5L5 19"/></svg>',
  };

  const LINKS = [
    { href: "monochrome.html", id: "monochrome", label: "Monochrome" },
    { href: "colour.html", id: "colour", label: "Current Project" },
    { href: "about.html", id: "about", label: "About" },
    { href: "contact.html", id: "contact", label: "Contact" },
  ];
  const current = (id) => (id === page ? ' aria-current="page"' : "");

  /* ---------- header ---------- */
  const header = document.querySelector(".site-header");
  if (header) {
    header.innerHTML = `
      <a class="brand" href="index.html" aria-label="${SITE.name} — home">
        <span class="brand-name">${SITE.shortName}</span>
        <span class="brand-role">Photography</span>
      </a>
      <nav class="nav" aria-label="Main">
        ${LINKS.map((l, i) => `<a href="${l.href}"${current(l.id)}><span class="nav-index">${pad(i + 1)}</span>${l.label}</a>`).join("")}
        <span class="nav-social">
          <a href="${SITE.instagram}" target="_blank" rel="noopener" aria-label="Instagram">${ICONS.instagram}</a>
          <a href="mailto:${SITE.email}" aria-label="Email">${ICONS.mail}</a>
        </span>
      </nav>
      <button class="menu-toggle" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-menu"><span></span><span></span></button>`;

    const menu = document.createElement("div");
    menu.className = "mobile-menu";
    menu.id = "mobile-menu";
    menu.innerHTML = `
      ${LINKS.map((l, i) => `<a class="big" href="${l.href}"${current(l.id)}><span class="label">${pad(i + 1)}</span>${l.label}</a>`).join("")}
      <div class="mobile-foot label">
        <a href="${SITE.instagram}" target="_blank" rel="noopener">Instagram</a>
        <a href="mailto:${SITE.email}">Email</a>
      </div>`;
    header.after(menu);

    const toggle = header.querySelector(".menu-toggle");
    const setMenu = (open) => {
      document.body.classList.toggle("menu-open", open);
      document.body.style.overflow = open ? "hidden" : "";
      toggle.setAttribute("aria-expanded", open);
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    };
    toggle.addEventListener("click", () => setMenu(!document.body.classList.contains("menu-open")));
    menu.addEventListener("click", (e) => e.target.closest("a") && setMenu(false));
    document.addEventListener("keydown", (e) => e.key === "Escape" && setMenu(false));

    // hide on scroll down, show on scroll up
    let lastY = 0;
    addEventListener("scroll", () => {
      const y = scrollY;
      header.classList.toggle("scrolled", y > 10);
      header.classList.toggle("hidden", y > lastY && y > 300 && !document.body.classList.contains("menu-open"));
      lastY = y;
    }, { passive: true });
  }

  /* ---------- footer ---------- */
  const footer = document.querySelector(".site-footer");
  if (footer) {
    footer.innerHTML = `
      <div class="wrap">
        <div class="footer-cta">
          <h2>Prints, commissions<br>&amp; <a href="contact.html">conversations.</a></h2>
          <a class="link-arrow" href="contact.html">Get in touch <span>→</span></a>
        </div>
        <div class="footer-grid">
          <div><span class="label">Work</span><ul>
            <li><a href="monochrome.html">Monochrome</a></li>
            <li><a href="colour.html">${PROJECT.title}</a></li></ul></div>
          <div><span class="label">Studio</span><ul>
            <li><a href="about.html">About</a></li>
            <li><a href="contact.html">Contact</a></li></ul></div>
          <div><span class="label">Follow</span><ul>
            <li><a href="${SITE.instagram}" target="_blank" rel="noopener">Instagram</a></li>
            <li><a href="mailto:${SITE.email}">Email</a></li></ul></div>
          <div><span class="label">Based in</span><ul><li>${SITE.location}</li></ul></div>
        </div>
        <div class="footer-base label">
          <span>© ${new Date().getFullYear()} ${SITE.name}. All images reserved.</span>
          <a class="to-top" href="#top">Back to top ↑</a>
        </div>
      </div>`;
  }

  /* ---------- frames ---------- */
  const frame = (p, i, extra = "") => `
    <figure class="frame reveal" data-index="${i}" ${extra} tabindex="0" role="button" aria-label="View ${p.title} larger">
      <div class="img-wrap"><img class="loading" src="${p.src}" alt="${p.title}, ${p.place} ${p.year}" width="${p.w}" height="${p.h}" loading="lazy" decoding="async"></div>
      <figcaption><span>${pad(i + 1)} — ${p.title}</span><span>${p.place}, ${p.year}</span></figcaption>
    </figure>`;

  /* ---------- page content ---------- */
  if (page === "home") {
    document.querySelector(".split-panel.mono img").src = HERO.mono.src;
    document.querySelector(".split-panel.colour img").src = HERO.colour.src;
    document.querySelectorAll("[data-project-title]").forEach((el) => (el.textContent = PROJECT.title));
    const strip = document.querySelector(".strip");
    strip.innerHTML = COLOUR.slice(0, 3).map((p, i) => frame(p, i)).join("");
    lightbox(strip, COLOUR.slice(0, 3));
  }

  if (page === "monochrome") {
    const grid = document.querySelector(".masonry");
    const filters = document.querySelector(".filters");
    const count = filters.querySelector(".count");
    grid.innerHTML = MONOCHROME.map((p, i) => frame(p, i, `data-cat="${p.category}"`)).join("");

    const cats = ["All", ...MONO_CATEGORIES];
    const n = (c) => (c === "All" ? MONOCHROME.length : MONOCHROME.filter((p) => p.category === c).length);
    filters.insertAdjacentHTML("afterbegin", cats.map((c) =>
      `<button type="button" data-cat="${c}" aria-pressed="${c === "All"}">${c}<sup>${n(c)}</sup></button>`).join(""));

    const setCount = (k) => (count.textContent = `${pad(k)} frames`);
    setCount(MONOCHROME.length);
    filters.addEventListener("click", (e) => {
      const btn = e.target.closest("button");
      if (!btn) return;
      const cat = btn.dataset.cat;
      filters.querySelectorAll("button").forEach((b) => b.setAttribute("aria-pressed", b === btn));
      grid.querySelectorAll(".frame").forEach((f) => f.classList.toggle("is-hidden", cat !== "All" && f.dataset.cat !== cat));
      setCount(n(cat));
    });
    lightbox(grid, MONOCHROME);
  }

  if (page === "colour") {
    document.querySelectorAll("[data-project]").forEach((el) => (el.textContent = PROJECT[el.dataset.project]));
    document.title = `${PROJECT.title} — ${SITE.name}`;
    const seq = document.querySelector(".sequence");
    const frames = COLOUR.map((p, i) => frame(p, i));
    // a pull-quote sits after the first spread
    frames.splice(3, 0, `<blockquote class="quote reveal">“${PROJECT.quote}”<span class="label">Working notes</span></blockquote>`);
    seq.innerHTML = frames.join("");
    document.querySelector(".journal ol").innerHTML = PROJECT.journal
      .map((j) => `<li><span class="label">${j.date}</span><span>${j.text}</span></li>`).join("");
    lightbox(seq, COLOUR);
  }

  if (page === "about") {
    document.querySelector(".portrait img").src = PORTRAIT.src;
  }

  if (page === "contact") {
    document.querySelectorAll("[data-site]").forEach((el) => {
      const key = el.dataset.site;
      el.textContent = el.textContent || SITE[key];
      if (key === "email") el.href = `mailto:${SITE.email}`;
      if (key === "instagram") { el.href = SITE.instagram; el.textContent = "@" + SITE.instagram.split("/").pop(); }
    });
    // Static hosting has no server, so the form opens the visitor's mail app pre-filled.
    const form = document.querySelector("form");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const d = Object.fromEntries(new FormData(form));
      const body = `${d.message}\n\n— ${d.name} (${d.email})`;
      location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(`[${d.subject}] from ${d.name}`)}&body=${encodeURIComponent(body)}`;
      form.querySelector(".form-note").textContent = "Opening your email app…";
    });
  }

  /* ---------- fade images in once loaded ---------- */
  document.querySelectorAll("img.loading").forEach((img) => {
    const done = () => img.classList.remove("loading");
    img.complete ? done() : (img.addEventListener("load", done), img.addEventListener("error", done));
  });

  /* ---------- reveal on scroll ---------- */
  const io = new IntersectionObserver((entries) => entries.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
  }), { rootMargin: "0px 0px -8% 0px" });
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

  /* ---------- lightbox ---------- */
  function lightbox(container, photos) {
    let lb = document.querySelector(".lightbox");
    if (!lb) {
      lb = document.createElement("div");
      lb.className = "lightbox";
      lb.setAttribute("role", "dialog");
      lb.setAttribute("aria-modal", "true");
      lb.setAttribute("aria-label", "Image viewer");
      lb.innerHTML = `
        <div class="lb-top"><span class="lb-count"></span><button class="lb-btn lb-close" aria-label="Close">${ICONS.close}</button></div>
        <div class="lb-stage">
          <button class="lb-btn lb-prev" aria-label="Previous">${ICONS.prev}</button>
          <img alt="">
          <button class="lb-btn lb-next" aria-label="Next">${ICONS.next}</button>
        </div>
        <div class="lb-bottom"><span class="lb-title"></span><span class="lb-place"></span></div>`;
      document.body.append(lb);
    }
    const img = lb.querySelector("img");
    let list = [], pos = 0, opener = null;

    const show = (k) => {
      pos = (k + list.length) % list.length;
      const p = photos[list[pos]];
      img.classList.add("fade");
      const next = new Image();
      next.onload = next.onerror = () => {
        img.src = p.src; img.alt = `${p.title}, ${p.place} ${p.year}`;
        img.classList.remove("fade");
      };
      next.src = p.src;
      lb.querySelector(".lb-count").textContent = `${pad(pos + 1)} / ${pad(list.length)}`;
      lb.querySelector(".lb-title").textContent = p.title;
      lb.querySelector(".lb-place").textContent = `${p.place}, ${p.year}`;
    };
    const open = (fig) => {
      // only cycle through what is currently visible (respects filters)
      list = [...container.querySelectorAll(".frame:not(.is-hidden)")].map((f) => +f.dataset.index);
      opener = fig;
      lb.classList.add("open");
      document.body.style.overflow = "hidden";
      show(list.indexOf(+fig.dataset.index));
      lb.querySelector(".lb-close").focus();
    };
    const close = () => {
      lb.classList.remove("open");
      document.body.style.overflow = "";
      opener && opener.focus();
    };

    container.addEventListener("click", (e) => { const f = e.target.closest(".frame"); f && open(f); });
    container.addEventListener("keydown", (e) => {
      const f = e.target.closest(".frame");
      if (f && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); open(f); }
    });
    lb.querySelector(".lb-close").onclick = close;
    lb.querySelector(".lb-prev").onclick = () => show(pos - 1);
    lb.querySelector(".lb-next").onclick = () => show(pos + 1);
    lb.querySelector(".lb-stage").onclick = (e) => e.target === e.currentTarget && close();
    document.addEventListener("keydown", (e) => {
      if (!lb.classList.contains("open")) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") show(pos - 1);
      if (e.key === "ArrowRight") show(pos + 1);
    });
    let x0 = null;
    lb.addEventListener("touchstart", (e) => (x0 = e.touches[0].clientX), { passive: true });
    lb.addEventListener("touchend", (e) => {
      if (x0 === null) return;
      const dx = e.changedTouches[0].clientX - x0;
      if (Math.abs(dx) > 50) show(pos + (dx < 0 ? 1 : -1));
      x0 = null;
    });
  }
})();
