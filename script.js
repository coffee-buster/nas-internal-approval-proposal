const verifiedImages = {
  ds225: "https://www.synology.com/api/products/getPhoto?product=DS225%2B&type=img&sort=1",
  ds723: "https://www.synology.com/api/products/getPhoto?product=DS723%2B&type=img&sort=1",
  ironwolf: "https://content.etilize.com/Main/1072134171.jpg?size=1300",
  ironwolfPro: "https://content.etilize.com/Main/1072134171.jpg?size=1300",
  wdRed: "https://www.westerndigital.com/content/dam/store/en-us/assets/products/internal-storage/wd-red-plus-sata-3-5-hdd/gallery/wd-red-plus-sata-3-5-hdd-2tb.png.thumb.1280.1280.png",
  cyberpower1500: "https://ccimg1.canadacomputers.com/Products/800x800/4995/4996/252592/91145.jpg",
  apc1000: "https://ccimg1.canadacomputers.com/Products/800x800/585/134/120922/35540.jpg",
  tlsg108: "https://ccimg1.canadacomputers.com/Products/800x800/058/058860/97877.jpg",
  brother3780: "https://cdn-tp1.mozu.com/21830-33325/cms/33325/files/84e27b68-6939-4781-aea6-abc50f406503?max=500&_mzcb=_1778240709261",
  brother8900: "https://cdn-tp1.mozu.com/21830-33325/cms/33325/files/02047a8a-c4a1-4796-b4db-e003d3f82a3d?max=500&_mzcb=_1778240709261"
};

const retailerSearchUrls = {
  "Memory Express": query => `https://www.memoryexpress.com/Search/Products?Search=${encodeURIComponent(query)}`,
  "Staples": query => `https://www.staples.ca/search?query=${encodeURIComponent(query)}`,
  "Best Buy": query => `https://www.bestbuy.ca/en-ca/search?search=${encodeURIComponent(query)}`,
  "CDW Canada": query => `https://www.cdw.ca/search/?key=${encodeURIComponent(query)}`,
  "Western Digital Canada": query => `https://www.westerndigital.com/en-ca/search?q=${encodeURIComponent(query)}`,
  "Canada Computers": query => `https://www.canadacomputers.com/en/search?s=${encodeURIComponent(query)}`
};

function searchUrl(retailer, query) {
  return retailerSearchUrls[retailer](query);
}

const sharedRetailers = product => [
  ["Memory Express", "Search retailer", searchUrl("Memory Express", product), "Search"],
  ["Staples", "Search retailer", searchUrl("Staples", product), "Search"],
  ["Best Buy", "Search retailer", searchUrl("Best Buy", product), "Search"],
  ["CDW Canada", "Search retailer", searchUrl("CDW Canada", product), "Search"]
];

const nasSections = [
  {
    title: "NAS",
    note: "DS224+ is excluded. DS225+ is the best fit for a simple 2-bay setup; DS723+ is the stronger upgrade option.",
    items: [
      {
        id: "ds225",
        group: "core",
        name: "Synology DS225+",
        price: 499.99,
        image: verifiedImages.ds225,
        badges: ["Recommended", "2-bay"],
        description: "Best fit for file sharing, Google Drive sync/backup, light apps, and a straightforward RAID1 office setup. It can run Docker/Container Manager workloads, but OpenCode-style automation should be treated as light/background usage, not heavy local AI inference.",
        decision: "Choose this when the priority is reliable shared storage with modest app headroom and the lowest confirmed NAS price.",
        specs: [
          ["Bays", "2 drive bays, suitable for RAID1 with two NAS-rated drives"],
          ["Memory", "2GB class system memory; adequate for file services and light packages"],
          ["Network", "Gigabit Ethernet class NAS; works with a simple unmanaged switch"],
          ["Apps", "Synology Drive, Hyper Backup, Snapshot Replication, SMB file sharing"],
          ["Docker / OpenCode", "Suitable for small containers or helper automation. For OpenCode in Docker, keep expectations modest and avoid CPU/RAM-heavy workloads."],
          ["Limit", "Not intended as a workstation replacement or GPU/AI server"]
        ],
        retailers: [
          ["Canada Computers", "$499.99", "https://www.canadacomputers.com/en/personal-home-nas/279247/synology-ds225-diskstation-2-bay-nas-diskless-ds225.html?keyword=synology%20ds225"],
          ...sharedRetailers("Synology DS225+")
        ]
      },
      {
        id: "ds723",
        group: "core",
        name: "Synology DS723+",
        price: 679.99,
        image: verifiedImages.ds723,
        badges: ["Upgrade option"],
        description: "Stronger 2-bay Synology option if the office expects heavier apps, more snapshots, more simultaneous users, or more container experiments. It costs more, but the extra platform headroom makes it the safer choice for Docker-based tooling.",
        decision: "Choose this if OpenCode in Docker, heavier Synology packages, or future expansion are likely enough to justify the extra cost.",
        specs: [
          ["Bays", "2 drive bays, with expansion-path support depending on Synology accessories"],
          ["Memory", "Expandable memory class, better for containers and multitasking"],
          ["Network", "Gigabit built in; upgrade path may be available depending on module choice"],
          ["Apps", "Same DSM app ecosystem as DS225+, with more performance headroom"],
          ["Docker / OpenCode", "Better candidate for OpenCode-in-Docker helper services, queues, and scheduled automations. Still not a high-performance AI compute box."],
          ["Limit", "Higher purchase price and still only two internal drive bays"]
        ],
        retailers: [
          ["Canada Computers", "$679.99", "https://www.canadacomputers.com/en/personal-home-nas/234662/synology-ds723-diskstation-2-bay-nas-diskless-ds723.html?keyword=synology%20ds723"],
          ...sharedRetailers("Synology DS723+")
        ]
      }
    ]
  },
  {
    title: "Hard drives: 2 x 4TB NAS drives",
    note: "Each option below includes two drives for RAID1. The main decision factor is replacement lifecycle: warranty, workload rating, and whether the drive is NAS-rated CMR.",
    items: [
      {
        id: "wdred4tb",
        group: "core",
        name: "WD Red Plus 4TB x 2",
        price: 459.98,
        image: verifiedImages.wdRed,
        badges: ["Recommended value"],
        description: "Best confirmed price among the 4TB NAS-rated options. WD Red Plus drives are CMR NAS drives, which is the right class for RAID1 and 24/7 office storage.",
        decision: "Choose this if the goal is dependable NAS storage with the lowest confirmed replacement cost.",
        specs: [
          ["Drive class", "NAS-rated CMR hard drive"],
          ["Replacement planning", "Plan for proactive replacement around the warranty/lifecycle window or immediately on SMART warnings"],
          ["RAID use", "Good fit for RAID1 in a 2-bay Synology"],
          ["Risk note", "RAID1 tolerates one drive failure, but it does not replace backup"]
        ],
        retailers: [
          ["Canada Computers", "$229.99 each", "https://www.canadacomputers.com/en/desktop-internal-hard-drives/285567/wd-red-plus-4tb-nas-internal-hard-drive-wd40efzz.html?keyword=wd%20red%20plus%204tb"],
          ["Western Digital Canada", "Price not exposed in automated page", "https://www.westerndigital.com/en-ca/products/internal-drives/wd-red-plus-sata-3-5-hdd"],
          ...sharedRetailers("WD Red Plus 4TB WD40EFZZ")
        ]
      },
      {
        id: "ironwolf4tb",
        group: "core",
        name: "Seagate IronWolf 4TB x 2",
        price: 519.98,
        image: verifiedImages.ironwolf,
        badges: ["Good if in stock"],
        description: "NAS-rated CMR option with a strong reputation for small NAS use. It was listed at Canada Computers but sold out during verification, so replacement availability should be checked before choosing it.",
        decision: "Choose this if stock returns and the price is close to WD Red Plus.",
        specs: [
          ["Drive class", "NAS-rated CMR hard drive"],
          ["Replacement planning", "Good small-NAS lifecycle, but availability affects how quickly a failed drive can be replaced"],
          ["RAID use", "Good fit for RAID1 in a 2-bay Synology"],
          ["Availability", "Canada Computers price was verified, but online/in-store status was sold out"]
        ],
        retailers: [
          ["Canada Computers", "$259.99 each, sold out", "https://www.canadacomputers.com/en/desktop-internal-hard-drives/234391/seagate-ironwolf-4tb-hard-drive-st4000vn006.html?keyword=seagate%20ironwolf%204tb%20st4000vn006"],
          ...sharedRetailers("Seagate IronWolf 4TB ST4000VN006")
        ]
      },
      {
        id: "ironwolfpro4tb",
        group: "core",
        name: "Seagate IronWolf Pro 4TB x 2",
        price: 621.98,
        image: verifiedImages.ironwolfPro,
        badges: ["Longer lifecycle class"],
        description: "Higher-end NAS drive line with a stronger warranty/workload class. It is more expensive, so it mainly makes sense if drive replacement risk and service continuity are valued over lowest upfront cost.",
        decision: "Choose this when longer warranty class and stronger replacement confidence matter more than purchase price.",
        specs: [
          ["Drive class", "Higher-end NAS-rated CMR drive"],
          ["Replacement planning", "Better fit when the office wants a longer service window before planned replacement"],
          ["RAID use", "Good fit for RAID1; overkill if budget is tight"],
          ["Cost note", "$162 more than WD Red Plus pair based on confirmed Canada Computers pricing"]
        ],
        retailers: [
          ["Canada Computers", "$310.99 each", "https://www.canadacomputers.com/en/desktop-internal-hard-drives/246553/seagate-ironwolf-pro-4-tb-hard-drive-st4000nt001.html?keyword=seagate%20ironwolf%204tb"],
          ...sharedRetailers("Seagate IronWolf Pro 4TB ST4000NT001")
        ]
      }
    ]
  },
  {
    title: "UPS",
    note: "Budget-focused options. Runtime depends on load and battery age; numbers below are practical estimates for NAS + small switch only, not desktop PCs or monitors.",
    explainer: [
      "How safe shutdown works: connect the UPS USB data cable to the Synology NAS. DSM detects the UPS and, after the configured delay, enters Safe Mode so disks and services stop cleanly before the battery is exhausted.",
      "How recovery works: when utility power returns, the UPS resumes AC output and recharges. The NAS can be configured in DSM to restart automatically after power is restored, assuming the UPS is supplying output and the NAS power-recovery setting is enabled."
    ],
    items: [
      {
        id: "cyberpower650",
        group: "core",
        name: "CyberPower 650VA Battery-Backup UPS",
        price: 99.99,
        placeholder: "CyberPower\n650VA UPS",
        badges: ["Lowest budget option"],
        description: "Lowest confirmed new UPS price found in the Canada Computers search results. Good for short outages and safe shutdown, but runtime headroom is limited.",
        decision: "Choose this only if the goal is graceful shutdown rather than long runtime.",
        specs: [
          ["Estimated NAS runtime", "Roughly 10-25 minutes for NAS + small switch, depending on battery condition and actual load"],
          ["Safe shutdown", "Confirm USB data support before purchase; not all low-end UPS units expose USB monitoring"],
          ["Best fit", "Budget protection against brief outages and unsafe disk shutdowns"],
          ["Price source", "Canada Computers search result, product URL not confirmed"]
        ],
        retailers: [
          ["Canada Computers", "$99.99 search result", searchUrl("Canada Computers", "CyberPower 650VA Battery Backup UPS"), "Search"],
          ...sharedRetailers("CyberPower 650VA UPS")
        ]
      },
      {
        id: "apc600",
        group: "core",
        name: "APC Back-UPS BE600M1 600VA",
        price: 119.99,
        placeholder: "APC\n600VA UPS",
        badges: ["Budget APC"],
        description: "Low-cost APC option found in Canada Computers search results. Suitable for safe shutdown if USB monitoring is supported and confirmed for the exact model.",
        decision: "Choose this if APC brand preference matters and runtime expectations are modest.",
        specs: [
          ["Estimated NAS runtime", "Roughly 10-25 minutes for NAS + small switch, depending on load"],
          ["Safe shutdown", "Confirm USB monitoring support with Synology DSM before buying"],
          ["Best fit", "Small NAS protection and orderly shutdown"],
          ["Price source", "Canada Computers search result, product URL not confirmed"]
        ],
        retailers: [
          ["Canada Computers", "$119.99 search result", searchUrl("Canada Computers", "APC BE600M1 600VA UPS"), "Search"],
          ...sharedRetailers("APC BE600M1 600VA UPS")
        ]
      },
      {
        id: "cyberpower1000budget",
        group: "core",
        name: "CyberPower 1000VA Battery Backup UPS",
        price: 149.99,
        placeholder: "CyberPower\n1000VA UPS",
        badges: ["Budget sweet spot"],
        description: "Better runtime headroom than 600-650VA units without jumping to the $250+ class. This is the most attractive budget tier if USB shutdown support checks out.",
        decision: "Choose this as the budget default if the exact model supports USB monitoring for DSM.",
        specs: [
          ["Estimated NAS runtime", "Roughly 20-45 minutes for NAS + small switch, depending on load"],
          ["Safe shutdown", "Needs USB monitoring support for DSM to trigger automatic Safe Mode"],
          ["Best fit", "Small office NAS with more outage buffer than entry-level UPS models"],
          ["Price source", "Canada Computers search result, product URL not confirmed"]
        ],
        retailers: [
          ["Canada Computers", "$149.99 search result", searchUrl("Canada Computers", "CyberPower 1000VA Battery Backup UPS"), "Search"],
          ...sharedRetailers("CyberPower 1000VA Battery Backup UPS")
        ]
      },
      {
        id: "cyberpower1500",
        group: "core",
        name: "CyberPower LX1500GU3-FC",
        price: 259.99,
        image: verifiedImages.cyberpower1500,
        badges: ["Most runtime headroom"],
        description: "Higher-capacity verified option. It costs more than the budget units but gives more time for brief outages, more battery aging margin, and a clearer direct retailer listing.",
        decision: "Choose this when the NAS, modem/router, and switch should stay online longer before shutdown.",
        specs: [
          ["Estimated NAS runtime", "Roughly 45-90 minutes for NAS + small switch; less if modem/router or other devices are added"],
          ["Safe shutdown", "Use USB monitoring with Synology DSM and set a shutdown delay"],
          ["Best fit", "Better runtime margin and less rush to shut down during short outages"],
          ["Price source", "Canada Computers direct product page"]
        ],
        retailers: [
          ["Canada Computers", "$259.99", "https://www.canadacomputers.com/en/home-office-ups/252592/cyberpower-1500va-ups-battery-backup-lx1500gu3-fc-lx1500gu3-fc.html?keyword=cyberpower%20lx1325gu"],
          ...sharedRetailers("CyberPower LX1500GU3-FC")
        ]
      },
      {
        id: "apc1000",
        group: "core",
        name: "APC BR1000MS",
        price: 265.99,
        image: verifiedImages.apc1000,
        badges: ["APC upgrade"],
        description: "Verified APC alternative with a direct Canada Computers listing. It is not the cheapest option, but it is a stronger choice when brand reputation and output quality matter.",
        decision: "Choose this if APC is preferred and the budget allows a higher-quality UPS tier.",
        specs: [
          ["Estimated NAS runtime", "Roughly 30-70 minutes for NAS + small switch, depending on load"],
          ["Safe shutdown", "Use USB monitoring with Synology DSM and set a shutdown delay"],
          ["Best fit", "Higher-confidence UPS choice, but not the budget pick"],
          ["Price source", "Canada Computers direct product page"]
        ],
        retailers: [
          ["Canada Computers", "$265.99", "https://www.canadacomputers.com/en/home-office-ups/120922/apc-pro-1000va-battery-backup-sinewave-ups-br1000ms-br1000ms.html?keyword=apc%20bx950u-ca"],
          ...sharedRetailers("APC BR1000MS")
        ]
      }
    ]
  },
  {
    title: "Network switch",
    note: "Minimal comparison: ports, gigabit speed, and whether more ports are needed.",
    items: [
      {
        id: "tlsg108",
        group: "core",
        name: "TP-Link TL-SG108",
        price: 27.99,
        image: verifiedImages.tlsg108,
        badges: ["Best value"],
        description: "8-port unmanaged gigabit switch. No setup, no PoE, and enough for a simple NAS + workstations + printer network if eight ports are enough.",
        decision: "Choose this unless the office is already close to eight wired devices.",
        specs: [
          ["Ports", "8 gigabit Ethernet ports"],
          ["Management", "Unmanaged, plug-and-play"],
          ["PoE", "No PoE; not needed for the current setup"],
          ["Fit", "Best low-cost match for the NAS setup"]
        ],
        retailers: [
          ["Canada Computers", "$27.99", "https://www.canadacomputers.com/en/unmanaged-switches/58860/tp-link-tl-sg108-soho-8-port-10-100-1000mbps-desktop-switch-tl-sg108.html?keyword=tp-link%20tl-sg1010d"],
          ["Memory Express", "Search retailer", searchUrl("Memory Express", "TP-Link TL-SG108"), "Search"],
          ["Staples", "Search retailer", searchUrl("Staples", "TP-Link TL-SG108"), "Search"]
        ]
      },
      {
        id: "tlsg1010d",
        group: "core",
        name: "TP-Link TL-SG1010D",
        price: null,
        placeholder: "TP-Link\n10-port switch",
        badges: ["More ports"],
        description: "10-port unmanaged gigabit switch. Better if the office is already near eight Ethernet connections.",
        decision: "Choose this only if the extra ports are needed; price still needs confirmation.",
        specs: [
          ["Ports", "10 gigabit Ethernet ports"],
          ["Management", "Unmanaged, plug-and-play"],
          ["PoE", "No PoE"],
          ["Fit", "More room for wired devices, but not required for the base setup"]
        ],
        retailers: [
          ["Canada Computers", "Search retailer", searchUrl("Canada Computers", "TP-Link TL-SG1010D"), "Search"],
          ["Memory Express", "Search retailer", searchUrl("Memory Express", "TP-Link TL-SG1010D"), "Search"],
          ["Staples", "Search retailer", searchUrl("Staples", "TP-Link TL-SG1010D"), "Search"]
        ]
      }
    ]
  }
];

const printerSections = [
  {
    title: "Colour laser printer",
    note: "Supplies are included in each printer's cost factors instead of being separate selectable products.",
    items: [
      {
        id: "mfc3780",
        group: "printer",
        name: "Brother MFC-L3780CDW",
        price: 679.99,
        image: verifiedImages.brother3780,
        badges: ["Preferred printer"],
        description: "Balanced colour all-in-one for a small office: network printing, duplex printing, duplex scanning, and a lower hardware price than many higher-volume office models.",
        decision: "Choose this if the office wants a modern colour laser MFP and print volume is moderate.",
        specs: [
          ["Functions", "Print, copy, scan, fax"],
          ["Office fit", "Good for moderate monthly volume and shared office use"],
          ["Scanning", "Duplex scanning support is a key productivity advantage"],
          ["Supply cost factor", "Uses TN229 toner family and DR229CL drum. Initial toner/drum budgeting matters if colour volume is high."],
          ["Known supply prices", "TN2294PK standard toner 4-pack: $369.99; TN229XXLBK black: $154.99; DR229CL drum: $219.99"],
          ["Decision risk", "Lower hardware price, but confirm toner yield and colour usage before choosing it for heavy printing"]
        ],
        retailers: [
          ["Brother Canada", "$679.99 sale + $7.25 eco fee", "https://www.brother.ca/en/p/MFCL3780CDW"],
          ...sharedRetailers("Brother MFC-L3780CDW")
        ]
      },
      {
        id: "mfc8900",
        group: "printer",
        name: "Brother MFC-L8900CDW",
        price: 699.99,
        image: verifiedImages.brother8900,
        badges: ["Higher-volume option"],
        description: "Stronger office model with higher-volume positioning, larger office workflow capacity, and a high-yield toner ecosystem. The hardware price is close to the MFC-L3780CDW sale price, but supplies can be more expensive upfront.",
        decision: "Choose this if print/scan volume is expected to be higher or the office wants a more robust MFP platform.",
        specs: [
          ["Functions", "Print, copy, scan, fax"],
          ["Office fit", "Better fit for heavier office use than the MFC-L3780CDW"],
          ["Scanning", "Stronger office workflow model with larger ADF class"],
          ["Supply cost factor", "Uses TN436 toner family, DR431CL drum, and WT320CL waste toner box. Colour toner replacement can be a major cost."],
          ["Known supply prices", "TN436BK: $142.99 + eco fee; TN436 C/M/Y: $274.99 each + eco fee; DR431CL: $211.99 + eco fee; WT320CL: $44.49 + eco fee"],
          ["Decision risk", "Better for volume, but full colour toner replacement is expensive"]
        ],
        retailers: [
          ["Brother Canada", "$699.99 sale + $7.25 eco fee", "https://www.brother.ca/en/p/MFCL8900CDW"],
          ...sharedRetailers("Brother MFC-L8900CDW")
        ]
      }
    ]
  }
];

const page = document.body.dataset.page || "nas";
const sections = page === "printer" ? printerSections : nasSections;
const selected = new Set(page === "printer" ? ["mfc3780"] : ["ds225", "wdred4tb", "cyberpower1000budget", "tlsg108"]);

function money(value) {
  return value.toLocaleString("en-CA", { style: "currency", currency: "CAD" });
}

function imageMarkup(item) {
  if (item.image) {
    return `<img src="${item.image}" alt="${item.name}" loading="lazy" onerror="this.replaceWith(fallbackImage('${item.placeholder || item.name}'))">`;
  }
  return `<div class="placeholder">${(item.placeholder || item.name).replace(/\n/g, "<br>")}</div>`;
}

function fallbackImage(label) {
  const div = document.createElement("div");
  div.className = "placeholder";
  div.innerHTML = String(label).replace(/\n/g, "<br>");
  return div;
}

function retailerRows(item) {
  return item.retailers.map(([name, price, url, linkLabel]) => {
    const link = url ? `<a href="${url}" target="_blank" rel="noopener">${linkLabel || "Open"}</a>` : `<span class="unverified">Not available</span>`;
    return `<tr><td>${name}</td><td>${price}</td><td>${link}</td></tr>`;
  }).join("");
}

function specRows(item) {
  return item.specs.map(([label, value]) => `<tr><th>${label}</th><td>${value}</td></tr>`).join("");
}

function sectionExplainer(section) {
  if (!section.explainer) return "";
  return `<div class="explainer">${section.explainer.map(line => `<p>${line}</p>`).join("")}</div>`;
}

function render() {
  const root = document.getElementById("sections");
  root.innerHTML = sections.map(section => `
    <section class="category">
      <div class="category-header">
        <div>
          <h2>${section.title}</h2>
          <p class="small">${section.note}</p>
        </div>
      </div>
      ${sectionExplainer(section)}
      <div class="cards">
        ${section.items.map(item => `
          <article class="option-card ${selected.has(item.id) ? "selected" : ""}">
            <div class="image-box">${imageMarkup(item)}</div>
            <div>
              <label class="choose">
                <input type="checkbox" data-id="${item.id}" ${selected.has(item.id) ? "checked" : ""} ${item.price === null ? "disabled" : ""}>
                Select
              </label>
              ${item.badges.map((badge, index) => `<span class="badge ${index === 0 ? "ok" : ""}">${badge}</span>`).join("")}
              <h3>${item.name}</h3>
              <p>${item.description}</p>
              <p class="decision"><strong>Decision:</strong> ${item.decision}</p>
              <div class="price-line">
                <span class="price">${item.price === null ? "Price not confirmed" : money(item.price)}</span>
                <span class="small">pre-tax${item.price === null ? "" : ", selectable total"}</span>
              </div>
              <table class="specs">
                <tbody>${specRows(item)}</tbody>
              </table>
              <table class="retailers">
                <thead><tr><th>Retailer</th><th>Price status</th><th>URL</th></tr></thead>
                <tbody>${retailerRows(item)}</tbody>
              </table>
            </div>
          </article>
        `).join("")}
      </div>
    </section>
  `).join("");

  document.querySelectorAll("input[type='checkbox'][data-id]").forEach(input => {
    input.addEventListener("change", event => {
      const id = event.target.dataset.id;
      if (event.target.checked) selected.add(id);
      else selected.delete(id);
      updateTotals();
      event.target.closest(".option-card").classList.toggle("selected", event.target.checked);
    });
  });

  updateTotals();
}

function updateTotals() {
  const allItems = sections.flatMap(section => section.items);
  const totals = allItems.reduce((sum, item) => {
    if (!selected.has(item.id) || typeof item.price !== "number") return sum;
    sum[item.group] += item.price;
    return sum;
  }, { core: 0, printer: 0 });

  const coreTotal = document.getElementById("coreTotal");
  const printerTotal = document.getElementById("printerTotal");
  if (coreTotal) coreTotal.textContent = money(totals.core);
  if (printerTotal) printerTotal.textContent = money(totals.printer);
  document.getElementById("grandTotal").textContent = money(totals.core + totals.printer);
}

render();
