/* NOVAREIGN — shared site behaviour */

/* Contact channels. Fill these in before launch; empty values are hidden on the Contact page. */
const NOVAREIGN_CONTACT = {
  email: "",      // e.g. hello@yourdomain.ph
  phone: "",      // e.g. +63 9XX XXX XXXX (Viber / WhatsApp)
  messenger: "",  // full https:// link to the NOVAREIGN Facebook page or Messenger
};

(function () {
  // Mobile navigation
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.textContent = open ? "Close" : "Menu";
    });
  }

  const peso = (n) =>
    "₱" + Math.round(n).toLocaleString("en-PH");

  // Breakeven calculator (Financial Clarity page)
  const calc = document.getElementById("calc");
  if (calc) {
    const val = (id) => {
      const v = parseFloat(String(document.getElementById(id).value).replace(/,/g, ""));
      return Number.isFinite(v) ? v : 0;
    };
    const set = (id, text) => { document.getElementById(id).textContent = text; };

    const run = () => {
      const price = val("c-price");
      const variable = val("c-variable");
      const fixed = val("c-fixed");
      const cash = val("c-cash");
      const units = val("c-units");
      const margin = price - variable;

      if (margin <= 0) {
        set("o-margin", peso(margin));
        set("o-beq", "—");
        set("o-bes", "—");
        set("o-net", "—");
        set("o-days", "—");
        set("o-runway", fixed > 0 ? (cash / fixed).toFixed(1) + " months" : "—");
        set("o-verdict", "Each sale loses money. Your price must be higher than the cost of one unit before any volume can save you. Fix this number first.");
        return;
      }

      const beq = Math.ceil(fixed / margin);
      const net = units * margin - fixed;
      set("o-margin", peso(margin));
      set("o-beq", beq.toLocaleString("en-PH") + " units");
      set("o-bes", peso(beq * price));
      set("o-net", (net < 0 ? "−" : "") + peso(Math.abs(net)));
      set("o-runway", fixed > 0 ? (cash / fixed).toFixed(1) + " months" : "—");

      let verdict;
      if (units <= 0) {
        set("o-days", "—");
        verdict = "Enter how many units you sell in a month to see how fast you clear breakeven.";
      } else {
        const days = (beq / units) * 30;
        set("o-days", days > 365 ? "over a year" : Math.ceil(days) + " days");
        if (days <= 15) {
          verdict = "You clear breakeven in the first half of the month. The number says you can scale faster and bigger, so plan the next volume step.";
        } else if (days <= 30) {
          verdict = "You clear breakeven inside the month, but not by much. Grow, but carefully. Let the speed of clearing breakeven set the speed of scaling.";
        } else {
          verdict = "You are not clearing breakeven in a month. Do not scale yet. Work on margin or fixed costs first, and watch your survival months.";
        }
      }
      set("o-verdict", verdict);
    };

    calc.addEventListener("input", run);
    const reset = document.getElementById("c-reset");
    if (reset) {
      reset.addEventListener("click", () => {
        const defaults = { "c-price": 1299, "c-variable": 520, "c-fixed": 180000, "c-cash": 600000, "c-units": 260 };
        Object.entries(defaults).forEach(([id, v]) => { document.getElementById(id).value = v; });
        run();
      });
    }
    run();
  }

  // Contact page: show only the channels that have been filled in
  const channels = document.getElementById("channels");
  if (channels) {
    const rows = [];
    if (NOVAREIGN_CONTACT.email) rows.push(["Email", NOVAREIGN_CONTACT.email, "mailto:" + NOVAREIGN_CONTACT.email]);
    if (NOVAREIGN_CONTACT.phone) rows.push(["Phone / Viber", NOVAREIGN_CONTACT.phone, null]);
    if (NOVAREIGN_CONTACT.messenger) rows.push(["Facebook", "Message NOVAREIGN on Facebook", NOVAREIGN_CONTACT.messenger]);
    if (rows.length) {
      channels.innerHTML = "";
      rows.forEach(([label, text, href]) => {
        const div = document.createElement("div");
        const dt = document.createElement("dt");
        dt.textContent = label;
        const dd = document.createElement("dd");
        if (href) {
          const a = document.createElement("a");
          a.href = href;
          a.textContent = text;
          if (href.startsWith("http")) { a.target = "_blank"; a.rel = "noopener"; }
          dd.appendChild(a);
        } else {
          dd.textContent = text;
        }
        div.append(dt, dd);
        channels.appendChild(div);
      });
    }
  }

  // Contact form: compose a message the visitor can copy and send through any channel
  const form = document.getElementById("contact-form");
  if (form) {
    // Preselect the topic when arriving from a product or program link (contact.html?topic=aura)
    try {
      const key = new URLSearchParams(window.location.search).get("topic");
      const opt = key && form.querySelector('#f-topic option[data-key="' + key.replace(/[^a-z]/g, "") + '"]');
      if (opt) opt.selected = true;
    } catch (err) { /* ignore */ }

    const result = document.getElementById("result");
    const out = document.getElementById("result-text");
    const status = document.getElementById("copy-status");

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!form.reportValidity()) return;
      const name = form.elements["f-name"].value.trim();
      const city = form.elements["f-city"].value.trim();
      const topic = form.elements["f-topic"].value;
      const message = form.elements["f-message"].value.trim();
      out.textContent =
        "Hello Coach Gilbert and the NOVAREIGN team,\n\n" +
        "My name is " + name + (city ? " from " + city : "") + ".\n" +
        "I am reaching out about: " + topic + ".\n\n" +
        message + "\n\nThank you.";
      result.hidden = false;
      status.textContent = "";
      result.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });

    document.getElementById("copy-btn").addEventListener("click", () => {
      const text = out.textContent;
      const selectIt = () => {
        const range = document.createRange();
        range.selectNodeContents(out);
        const sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
        status.textContent = "Message selected. Copy it with Ctrl+C or long-press.";
      };
      try {
        navigator.clipboard.writeText(text).then(
          () => { status.textContent = "Copied. Paste it into your message to us."; },
          selectIt
        );
      } catch (err) {
        selectIt();
      }
    });
  }
})();
