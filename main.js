window.__hmMainLoaded = true;
/* Hanieh Motamedi — portfolio script (no dependencies) */

/* ==========================================================
   CONTACT DETAILS — fill these in to show them on the page.
   email:     e.g. "name@example.com"
   instagram: full URL, e.g. "https://www.instagram.com/yourname"
   linkedin:  full URL, e.g. "https://www.linkedin.com/in/yourname"
   Leave a value as "" to hide it.
   ========================================================== */
var CONTACT = { email: "", instagram: "", linkedin: "" };

(function () {
  "use strict";

  var root = document.documentElement;
  root.classList.add("js");

  /* ---------- Dictionary (English is read from the HTML) ---------- */
  var FA = {
    "skip": "رفتن به محتوا",
    "brand": "حانیه معتمدی",
    "menu": "منو",
    "nav.home": "خانه",
    "nav.about": "درباره من",
    "nav.psychology": "روان‌شناسی",
    "nav.art": "هنر",
    "nav.gallery": "گالری",
    "nav.contact": "تماس",
    "hero.label": "نمونه‌کار",
    "hero.name": "حانیه معتمدی",
    "hero.title": "دانشجوی روان‌شناسی",
    "hero.bio": "دانشجوی روان‌شناسی، علاقه‌مند به رفتار انسان، پژوهش‌های روان‌شناختی، نقاشی و طراحی بصری.",
    "hero.about": "درباره من",
    "hero.gallery": "دیدن گالری",
    "hero.caption": "میان ذهن و بوم",
    "alt.profile": "حانیه با روسری یاسی، از پشت سر، در حال نقاشی پشت سه‌پایه",
    "alt.about": "میزی آرام کنار پنجره با کتاب‌ها و طرح‌ها",
    "about.label": "درباره من",
    "about.title": "شناخت انسان از دریچه‌ی علم و رنگ",
    "about.p1": "دانشجوی روان‌شناسی هستم و به پرسش‌های پشتِ رفتار انسان علاقه دارم: اینکه چرا این‌گونه فکر می‌کنیم، احساس می‌کنیم و رفتار می‌کنیم. از خواندن پژوهش‌های روان‌شناختی لذت می‌برم و دوست دارم ببینم چگونه روش‌های دقیق، کنجکاوی را به فهم تبدیل می‌کنند.",
    "about.p2": "نقاشی و طراحی بصری نیمه‌ی دیگر وجود من‌اند. کار با رنگ، ترکیب‌بندی و فرم به من کمک می‌کند دقیق‌تر ببینم و آنچه را در کلمات نمی‌گنجد بیان کنم.",
    "fact.field.k": "رشته",
    "fact.field.v": "روان‌شناسی",
    "fact.focus.k": "تمرکز",
    "fact.focus.v": "رفتار انسان و پژوهش",
    "fact.creative.k": "جنبه‌ی هنری",
    "fact.creative.v": "نقاشی و طراحی بصری",
    "psy.label": "روان‌شناسی",
    "psy.title": "آنچه می‌آموزم و درباره‌اش می‌اندیشم",
    "psy.c1.t": "رفتار انسان",
    "psy.c1.d": "احساسات، انگیزه‌ها و الگوهای پنهان در انتخاب‌های روزمره.",
    "psy.c2.t": "پژوهش روان‌شناختی",
    "psy.c2.d": "اینکه پژوهش‌ها چگونه طراحی، اندازه‌گیری و تفسیر می‌شوند.",
    "psy.c3.t": "مطالعه و یادگیری",
    "psy.c3.d": "کتاب‌ها و مقاله‌هایی که نگاهم به ذهن را گسترده‌تر می‌کنند.",
    "art.label": "هنر",
    "art.title": "جایی که رنگ با اندیشه دیدار می‌کند",
    "art.c1.t": "نقاشی",
    "art.c1.d": "لایه‌لایه رنگ و نور، تا احساسات شکلی دیدنی پیدا کنند.",
    "art.c2.t": "طراحی بصری",
    "art.c2.d": "تعادل، رنگ‌بندی و زیبایی آرام جزئیات.",
    "art.c3.t": "تصویرسازی",
    "art.c3.d": "جهان‌های کوچک خیالی با جوهر و گواش.",
    "gal.label": "گالری",
    "gal.title": "تکه‌هایی از الهام",
    "gal.filterLabel": "فیلتر گالری",
    "gal.all": "همه",
    "gal.art": "هنر",
    "gal.mind": "ذهن",
    "gal.spaces": "فضاها",
    "gal.i1": "باغ سحرگاهی، مطالعه‌ای انتزاعی",
    "gal.i2": "پالت نقاش",
    "gal.i3": "قفسه‌های اندیشه‌ی آرام",
    "gal.i4": "دری به سوی ذهن",
    "gal.i5": "کارگاهی سرشار از نور",
    "gal.i6": "میزی کنار پنجره",
    "contact.label": "تماس",
    "contact.title": "در ارتباط باشیم",
    "contact.line": "برای گفت‌وگو درباره‌ی روان‌شناسی، پژوهش و هنر آماده‌ام.",
    "contact.soon": "اطلاعات تماس به‌زودی اضافه می‌شود.",
    "contact.email": "ایمیل",
    "contact.instagram": "اینستاگرام",
    "contact.linkedin": "لینکدین",
    "footer.tag": "روان‌شناسی · پژوهش · هنر",
    "footer.top": "بازگشت به بالا",
    "lb.close": "بستن",
    "lb.prev": "تصویر قبلی",
    "lb.next": "تصویر بعدی",
    "title": "حانیه معتمدی · دانشجوی روان‌شناسی"
  };
  var EN = {
    "contact.email": "Email",
    "contact.instagram": "Instagram",
    "contact.linkedin": "LinkedIn",
    "title": document.title
  };

  /* Capture English from the markup */
  function each(sel, fn) { Array.prototype.forEach.call(document.querySelectorAll(sel), fn); }
  each("[data-i18n]", function (el) { var k = el.getAttribute("data-i18n"); if (!(k in EN)) EN[k] = el.textContent.trim(); });
  each("[data-i18n-alt]", function (el) { EN["alt:" + el.getAttribute("data-i18n-alt")] = el.getAttribute("alt"); });
  each("[data-i18n-aria]", function (el) { EN["aria:" + el.getAttribute("data-i18n-aria")] = el.getAttribute("aria-label"); });

  var lang = "en";
  function t(key) { return lang === "fa" ? (FA[key] || EN[key] || "") : (EN[key] || ""); }

  var langBtn = document.getElementById("langToggle");

  function setLang(next) {
    lang = next === "fa" ? "fa" : "en";
    root.setAttribute("lang", lang);
    root.setAttribute("dir", lang === "fa" ? "rtl" : "ltr");
    each("[data-i18n]", function (el) { el.textContent = t(el.getAttribute("data-i18n")); });
    each("[data-i18n-alt]", function (el) {
      var k = el.getAttribute("data-i18n-alt");
      el.setAttribute("alt", lang === "fa" ? (FA[k] || EN["alt:" + k]) : EN["alt:" + k]);
    });
    each("[data-i18n-aria]", function (el) {
      var k = el.getAttribute("data-i18n-aria");
      el.setAttribute("aria-label", lang === "fa" ? (FA[k] || EN["aria:" + k]) : EN["aria:" + k]);
    });
    document.title = t("title");
    if (langBtn) {
      if (lang === "fa") {
        langBtn.textContent = "English";
        langBtn.setAttribute("lang", "en"); langBtn.setAttribute("dir", "ltr");
        langBtn.setAttribute("aria-label", "Switch to English");
      } else {
        langBtn.textContent = "فارسی";
        langBtn.setAttribute("lang", "fa"); langBtn.setAttribute("dir", "rtl");
        langBtn.setAttribute("aria-label", "نمایش به فارسی");
      }
    }
    renderContact();
    if (lb && !lb.hidden) showCurrent();
  }

  function initialLang() {
    var hash = (location.hash || "").toLowerCase();
    var search = location.search || "";
    if (hash === "#fa" || /[?&]lang=fa\b/i.test(search)) return "fa";
    return "en";
  }

  if (langBtn) {
    langBtn.addEventListener("click", function () {
      setLang(lang === "fa" ? "en" : "fa");
      try {
        var url = location.pathname + (lang === "fa" ? "?lang=fa" : "") + (location.hash && location.hash.toLowerCase() !== "#fa" ? location.hash : "");
        history.replaceState(null, "", url);
      } catch (e) { /* sandboxed: ignore */ }
    });
  }

  /* ---------- Contact ---------- */
  function renderContact() {
    var box = document.getElementById("contactLinks");
    if (!box) return;
    var links = [];
    var email = (CONTACT.email || "").trim();
    var ig = (CONTACT.instagram || "").trim();
    var li = (CONTACT.linkedin || "").trim();
    if (email) links.push({ href: "mailto:" + email, label: t("contact.email") + " · " + email, ext: false });
    if (/^https:\/\//i.test(ig)) links.push({ href: ig, label: t("contact.instagram"), ext: true });
    if (/^https:\/\//i.test(li)) links.push({ href: li, label: t("contact.linkedin"), ext: true });

    box.innerHTML = "";
    if (!links.length) {
      var p = document.createElement("p");
      p.className = "contact__soon";
      p.setAttribute("data-i18n", "contact.soon");
      p.textContent = t("contact.soon");
      box.appendChild(p);
      return;
    }
    links.forEach(function (l, i) {
      var a = document.createElement("a");
      a.className = "btn " + (i === 0 ? "btn--primary" : "btn--ghost");
      a.href = l.href;
      a.textContent = l.label;
      a.setAttribute("dir", "auto");
      if (l.ext) { a.target = "_blank"; a.rel = "noopener"; }
      box.appendChild(a);
    });
  }

  /* ---------- Nav: scroll state, mobile menu, active link ---------- */
  var nav = document.getElementById("nav");
  var toggle = document.getElementById("navToggle");
  var navLinks = Array.prototype.slice.call(document.querySelectorAll(".nav__links a"));
  var sections = navLinks.map(function (a) { return document.getElementById(a.getAttribute("href").slice(1)); }).filter(Boolean);

  function setMenu(open) {
    if (!toggle) return;
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    nav.classList.toggle("is-open", open);
  }
  if (toggle) {
    toggle.addEventListener("click", function () { setMenu(toggle.getAttribute("aria-expanded") !== "true"); });
  }
  navLinks.forEach(function (a) { a.addEventListener("click", function () { setMenu(false); }); });
  document.addEventListener("click", function (e) {
    if (nav.classList.contains("is-open") && !nav.contains(e.target)) setMenu(false);
  });
  window.addEventListener("resize", function () { if (window.innerWidth >= 900) setMenu(false); });

  function onScroll() {
    var y = window.pageYOffset || document.documentElement.scrollTop;
    nav.classList.toggle("is-scrolled", y > 8);
    var mark = y + window.innerHeight * 0.35;
    var current = sections[0];
    sections.forEach(function (s) { if (s.offsetTop <= mark) current = s; });
    if (window.innerHeight + y >= document.documentElement.scrollHeight - 4) current = sections[sections.length - 1];
    navLinks.forEach(function (a) {
      var on = current && a.getAttribute("href") === "#" + current.id;
      a.classList.toggle("is-active", on);
      if (on) a.setAttribute("aria-current", "true"); else a.removeAttribute("aria-current");
    });
  }
  var ticking = false;
  window.addEventListener("scroll", function () {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(function () { ticking = false; onScroll(); });
  }, { passive: true });

  /* ---------- Reveal on scroll (content stays visible without support) ---------- */
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if ("IntersectionObserver" in window && !reduce) {
    var vh = window.innerHeight;
    each(".reveal", function (el) {
      var r = el.getBoundingClientRect();
      if (r.top < vh && r.bottom > 0) el.classList.add("is-visible");
    });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("is-visible"); io.unobserve(en.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    each(".reveal:not(.is-visible)", function (el) { io.observe(el); });
    root.classList.add("reveal-on");
    /* safety net: never leave anything hidden */
    setTimeout(function () { each(".reveal", function (el) { el.classList.add("is-visible"); }); }, 4000);
  }

  /* ---------- Gallery filter ---------- */
  var filters = Array.prototype.slice.call(document.querySelectorAll(".filter"));
  var items = Array.prototype.slice.call(document.querySelectorAll(".g-item"));
  var currentFilter = "all";
  filters.forEach(function (btn) {
    btn.addEventListener("click", function () {
      currentFilter = btn.getAttribute("data-filter");
      filters.forEach(function (b) { b.setAttribute("aria-pressed", b === btn ? "true" : "false"); });
      items.forEach(function (it) {
        var show = currentFilter === "all" || it.getAttribute("data-cat") === currentFilter;
        it.classList.toggle("is-hidden", !show);
      });
    });
  });
  function visibleItems() { return items.filter(function (it) { return !it.classList.contains("is-hidden"); }); }

  /* ---------- Lightbox ---------- */
  var lb = document.getElementById("lightbox");
  var lbFigure = document.getElementById("lbFigure");
  var lbImg = null; /* created on open, removed on close, so it never sits without a src */
  var lbCap = document.getElementById("lbCaption");
  var lbPrev = document.getElementById("lbPrev");
  var lbNext = document.getElementById("lbNext");
  var lbClose = lb ? lb.querySelector(".lb-close") : null;
  var list = [], idx = 0, opener = null;

  function showCurrent() {
    var it = list[idx];
    if (!it) return;
    var img = it.querySelector("img");
    var cap = it.querySelector(".g-cap");
    if (!lbImg) {
      lbImg = document.createElement("img");
      lbImg.className = "lightbox__img";
      lbImg.decoding = "async";
      lbFigure.insertBefore(lbImg, lbCap);
    }
    lbImg.src = img.getAttribute("src");
    lbImg.width = img.getAttribute("width");
    lbImg.height = img.getAttribute("height");
    lbImg.alt = img.getAttribute("alt") || "";
    lbCap.textContent = cap ? cap.textContent : "";
    var multi = list.length > 1;
    lbPrev.hidden = !multi; lbNext.hidden = !multi;
  }
  function openLb(item, trigger) {
    list = visibleItems();
    idx = Math.max(0, list.indexOf(item));
    opener = trigger || null;
    showCurrent();
    lb.hidden = false;
    document.body.classList.add("lb-open");
    lbClose.focus();
  }
  function closeLb() {
    lb.hidden = true;
    document.body.classList.remove("lb-open");
    if (lbImg && lbImg.parentNode) lbImg.parentNode.removeChild(lbImg);
    lbImg = null;
    if (opener && opener.focus) opener.focus();
  }
  function step(d) {
    if (list.length < 2) return;
    idx = (idx + d + list.length) % list.length;
    showCurrent();
  }

  if (lb) {
    items.forEach(function (it) {
      var b = it.querySelector(".g-btn");
      b.addEventListener("click", function () { openLb(it, b); });
    });
    each("#lightbox [data-close]", function (el) { el.addEventListener("click", closeLb); });
    lbPrev.addEventListener("click", function () { step(-1); });
    lbNext.addEventListener("click", function () { step(1); });

    lb.addEventListener("keydown", function (e) {
      if (e.key === "Tab") {
        var f = Array.prototype.filter.call(lb.querySelectorAll("button"), function (b) { return !b.hidden; });
        var first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    });

    var sx = 0, sy = 0, touching = false;
    lb.addEventListener("touchstart", function (e) {
      if (e.touches.length !== 1) return;
      touching = true; sx = e.touches[0].clientX; sy = e.touches[0].clientY;
    }, { passive: true });
    lb.addEventListener("touchend", function (e) {
      if (!touching) return;
      touching = false;
      var dx = e.changedTouches[0].clientX - sx, dy = e.changedTouches[0].clientY - sy;
      if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) {
        var rtl = root.getAttribute("dir") === "rtl";
        /* LTR: swipe left = next. RTL: swipe right = next. */
        step((dx < 0) !== rtl ? 1 : -1);
      }
    }, { passive: true });
  }

  document.addEventListener("keydown", function (e) {
    if (lb && !lb.hidden) {
      var rtl = root.getAttribute("dir") === "rtl";
      if (e.key === "Escape") { e.preventDefault(); closeLb(); }
      else if (e.key === "ArrowRight") { e.preventDefault(); step(rtl ? -1 : 1); }
      else if (e.key === "ArrowLeft") { e.preventDefault(); step(rtl ? 1 : -1); }
      return;
    }
    if (e.key === "Escape" && nav.classList.contains("is-open")) {
      setMenu(false);
      if (toggle) toggle.focus();
    }
  });

  /* ---------- Back to top ---------- */
  each(".totop", function (a) {
    a.addEventListener("click", function (e) {
      var home = document.getElementById("home");
      if (!home) return;
      e.preventDefault();
      home.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
      var brand = document.querySelector(".nav__brand");
      if (brand) brand.focus({ preventScroll: true });
    });
  });

  /* ---------- Init ---------- */
  setLang(initialLang());
  onScroll();
})();
