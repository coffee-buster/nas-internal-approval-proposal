const verifiedImages = {
  ds225: "https://www.synology.com/api/products/getPhoto?product=DS225%2B&type=img&sort=1",
  ds723: "https://www.synology.com/api/products/getPhoto?product=DS723%2B&type=img&sort=1",
  wdRed: "https://www.westerndigital.com/content/dam/store/en-us/assets/products/internal-storage/wd-red-plus-sata-3-5-hdd/gallery/wd-red-plus-sata-3-5-hdd-2tb.png.thumb.1280.1280.png",
  brother3780: "https://cdn-tp1.mozu.com/21830-33325/cms/33325/files/84e27b68-6939-4781-aea6-abc50f406503?max=500&_mzcb=_1778240709261",
  brother8900: "https://cdn-tp1.mozu.com/21830-33325/cms/33325/files/02047a8a-c4a1-4796-b4db-e003d3f82a3d?max=500&_mzcb=_1778240709261"
};

const retailerSearchUrls = {
  "Memory Express": query => `https://www.memoryexpress.com/Search/Products?Search=${encodeURIComponent(query)}`,
  "Staples": query => `https://www.staples.ca/search?query=${encodeURIComponent(query)}`,
  "Best Buy": query => `https://www.bestbuy.ca/en-ca/search?search=${encodeURIComponent(query)}`,
  "CDW Canada": query => `https://www.cdw.ca/search/?key=${encodeURIComponent(query)}`,
  "Western Digital Canada": query => `https://www.westerndigital.com/en-ca/search?q=${encodeURIComponent(query)}`
};

function searchUrl(retailer, query) {
  return retailerSearchUrls[retailer](query);
}

const sections = [
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
        description: "Compact 2-bay Synology NAS for shared files, Google Drive sync/backup, and light future automation.",
        retailers: [
          ["Canada Computers", "$499.99", "https://www.canadacomputers.com/en/personal-home-nas/279247/synology-ds225-diskstation-2-bay-nas-diskless-ds225.html?keyword=synology%20ds225"],
          ["Memory Express", "Search retailer", searchUrl("Memory Express", "Synology DS225+"), "Search"],
          ["Staples", "Search retailer", searchUrl("Staples", "Synology DS225+"), "Search"],
          ["Best Buy", "Search retailer", searchUrl("Best Buy", "Synology DS225+"), "Search"],
          ["CDW Canada", "Search retailer", searchUrl("CDW Canada", "Synology DS225+"), "Search"]
        ]
      },
      {
        id: "ds723",
        group: "core",
        name: "Synology DS723+",
        price: 679.99,
        image: verifiedImages.ds723,
        badges: ["Upgrade option"],
        description: "More capable Synology 2-bay model. Better if heavier apps or future expansion are expected.",
        retailers: [
          ["Canada Computers", "$679.99", "https://www.canadacomputers.com/en/personal-home-nas/234662/synology-ds723-diskstation-2-bay-nas-diskless-ds723.html?keyword=synology%20ds723"],
          ["Memory Express", "Search retailer", searchUrl("Memory Express", "Synology DS723+"), "Search"],
          ["Staples", "Search retailer", searchUrl("Staples", "Synology DS723+"), "Search"],
          ["Best Buy", "Search retailer", searchUrl("Best Buy", "Synology DS723+"), "Search"],
          ["CDW Canada", "Search retailer", searchUrl("CDW Canada", "Synology DS723+"), "Search"]
        ]
      }
    ]
  },
  {
    title: "Hard drives: 2 x 4TB NAS drives",
    note: "Each option below includes two drives for RAID1. IronWolf non-Pro is listed separately because it may be attractive if stock returns.",
    items: [
      {
        id: "ironwolf4tb",
        group: "core",
        name: "Seagate IronWolf 4TB x 2",
        price: 519.98,
        placeholder: "Seagate IronWolf\n4TB NAS HDD",
        badges: ["Good value if in stock"],
        description: "NAS-rated CMR drive. Canada Computers listed it at $259.99 each, but it was sold out online and in-store during verification.",
        retailers: [
          ["Canada Computers", "$259.99 each, sold out", "https://www.canadacomputers.com/en/desktop-internal-hard-drives/234391/seagate-ironwolf-4tb-hard-drive-st4000vn006.html?keyword=seagate%20ironwolf%204tb%20st4000vn006"],
          ["Memory Express", "Search retailer", searchUrl("Memory Express", "Seagate IronWolf 4TB ST4000VN006"), "Search"],
          ["Staples", "Search retailer", searchUrl("Staples", "Seagate IronWolf 4TB ST4000VN006"), "Search"],
          ["Best Buy", "Search retailer", searchUrl("Best Buy", "Seagate IronWolf 4TB ST4000VN006"), "Search"],
          ["CDW Canada", "Search retailer", searchUrl("CDW Canada", "Seagate IronWolf 4TB ST4000VN006"), "Search"]
        ]
      },
      {
        id: "ironwolfpro4tb",
        group: "core",
        name: "Seagate IronWolf Pro 4TB x 2",
        price: 621.98,
        placeholder: "Seagate IronWolf Pro\n4TB NAS HDD",
        badges: ["Higher reliability", "Higher cost"],
        description: "Higher-end NAS drive line. Better warranty class, but the price difference is significant.",
        retailers: [
          ["Canada Computers", "$310.99 each", "https://www.canadacomputers.com/en/desktop-internal-hard-drives/246553/seagate-ironwolf-pro-4-tb-hard-drive-st4000nt001.html?keyword=seagate%20ironwolf%204tb"],
          ["Memory Express", "Search retailer", searchUrl("Memory Express", "Seagate IronWolf Pro 4TB ST4000NT001"), "Search"],
          ["Staples", "Search retailer", searchUrl("Staples", "Seagate IronWolf Pro 4TB ST4000NT001"), "Search"],
          ["Best Buy", "Search retailer", searchUrl("Best Buy", "Seagate IronWolf Pro 4TB ST4000NT001"), "Search"],
          ["CDW Canada", "Search retailer", searchUrl("CDW Canada", "Seagate IronWolf Pro 4TB ST4000NT001"), "Search"]
        ]
      },
      {
        id: "wdred4tb",
        group: "core",
        name: "WD Red Plus 4TB x 2",
        price: 459.98,
        image: verifiedImages.wdRed,
        badges: ["Lowest confirmed price"],
        description: "NAS-rated CMR drive. Best confirmed price in the current research.",
        retailers: [
          ["Canada Computers", "$229.99 each", "https://www.canadacomputers.com/en/desktop-internal-hard-drives/285567/wd-red-plus-4tb-nas-internal-hard-drive-wd40efzz.html?keyword=wd%20red%20plus%204tb"],
          ["Western Digital Canada", "Price not exposed in automated page", "https://www.westerndigital.com/en-ca/products/internal-drives/wd-red-plus-sata-3-5-hdd"],
          ["Memory Express", "Search retailer", searchUrl("Memory Express", "WD Red Plus 4TB WD40EFZZ"), "Search"],
          ["Staples", "Search retailer", searchUrl("Staples", "WD Red Plus 4TB WD40EFZZ"), "Search"],
          ["Best Buy", "Search retailer", searchUrl("Best Buy", "WD Red Plus 4TB WD40EFZZ"), "Search"]
        ]
      }
    ]
  },
  {
    title: "UPS",
    note: "Confirm USB shutdown support with Synology DSM before buying. The UPS should power the NAS, modem/router, and switch.",
    items: [
      {
        id: "cyberpower1500",
        group: "core",
        name: "CyberPower LX1500GU3-FC",
        price: 259.99,
        placeholder: "CyberPower\n1500VA UPS",
        badges: ["Recommended available option"],
        description: "Closest verified alternative to the originally discussed LX1325GU. Higher VA rating gives extra runtime headroom.",
        retailers: [
          ["Canada Computers", "$259.99", "https://www.canadacomputers.com/en/home-office-ups/252592/cyberpower-1500va-ups-battery-backup-lx1500gu3-fc-lx1500gu3-fc.html?keyword=cyberpower%20lx1325gu"],
          ["Staples", "Search retailer", searchUrl("Staples", "CyberPower LX1500GU3-FC"), "Search"],
          ["Best Buy", "Search retailer", searchUrl("Best Buy", "CyberPower LX1500GU3-FC"), "Search"]
        ]
      },
      {
        id: "apc1000",
        group: "core",
        name: "APC BR1000MS",
        price: 265.99,
        placeholder: "APC\n1000VA UPS",
        badges: ["APC alternative"],
        description: "Reliable APC alternative found during verification. BX950U-CA should still be checked manually if preferred.",
        retailers: [
          ["Canada Computers", "$265.99", "https://www.canadacomputers.com/en/home-office-ups/120922/apc-pro-1000va-battery-backup-sinewave-ups-br1000ms-br1000ms.html?keyword=apc%20bx950u-ca"],
          ["Staples", "Search retailer", searchUrl("Staples", "APC BR1000MS"), "Search"],
          ["Best Buy", "Search retailer", searchUrl("Best Buy", "APC BR1000MS"), "Search"]
        ]
      }
    ]
  },
  {
    title: "Network switch",
    note: "PoE is not required, so a simple unmanaged gigabit switch is enough.",
    items: [
      {
        id: "tlsg108",
        group: "core",
        name: "TP-Link TL-SG108",
        price: 27.99,
        placeholder: "TP-Link\n8-port switch",
        badges: ["Best value"],
        description: "8-port unmanaged gigabit switch. Good if eight wired ports are enough.",
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
        description: "10-port unmanaged gigabit switch. Better if close to 10 Ethernet connections are needed now. Price was not confirmed online.",
        retailers: [
          ["Canada Computers", "Search retailer", "https://www.canadacomputers.com/en/search?s=tp-link%20tl-sg1010d", "Search"],
          ["Memory Express", "Search retailer", searchUrl("Memory Express", "TP-Link TL-SG1010D"), "Search"],
          ["Staples", "Search retailer", searchUrl("Staples", "TP-Link TL-SG1010D"), "Search"]
        ]
      }
    ]
  },
  {
    title: "Colour laser printer",
    note: "Printer is separate from the NAS/network budget.",
    items: [
      {
        id: "mfc3780",
        group: "printer",
        name: "Brother MFC-L3780CDW",
        price: 679.99,
        image: verifiedImages.brother3780,
        badges: ["Preferred printer"],
        description: "Colour all-in-one with network printing, duplex printing, duplex scanning, and moderate office performance.",
        retailers: [
          ["Brother Canada", "$679.99 sale + $7.25 eco fee", "https://www.brother.ca/en/p/MFCL3780CDW"],
          ["Staples", "Search retailer", searchUrl("Staples", "Brother MFC-L3780CDW"), "Search"],
          ["Best Buy", "Search retailer", searchUrl("Best Buy", "Brother MFC-L3780CDW"), "Search"],
          ["CDW Canada", "Search retailer", searchUrl("CDW Canada", "Brother MFC-L3780CDW"), "Search"]
        ]
      },
      {
        id: "mfc8900",
        group: "printer",
        name: "Brother MFC-L8900CDW",
        price: 699.99,
        image: verifiedImages.brother8900,
        badges: ["Higher-volume option"],
        description: "Stronger office model with larger ADF, higher duty cycle, and high-yield toner ecosystem.",
        retailers: [
          ["Brother Canada", "$699.99 sale + $7.25 eco fee", "https://www.brother.ca/en/p/MFCL8900CDW"],
          ["Staples", "Search retailer", searchUrl("Staples", "Brother MFC-L8900CDW"), "Search"],
          ["Best Buy", "Search retailer", searchUrl("Best Buy", "Brother MFC-L8900CDW"), "Search"],
          ["CDW Canada", "Search retailer", searchUrl("CDW Canada", "Brother MFC-L8900CDW"), "Search"]
        ]
      }
    ]
  },
  {
    title: "Printer supplies: Brother MFC-L3780CDW OEM",
    note: "Optional supply items for estimating initial toner or maintenance budget.",
    items: [
      { id: "tn2294pk", group: "printer", name: "TN2294PK standard toner 4-pack", price: 369.99, placeholder: "Brother OEM\nTN229 4-pack", badges: ["OEM"], description: "Black, cyan, magenta and yellow standard-yield toner pack.", retailers: [["Brother Canada", "$369.99", "https://www.brother.ca/en/p/TN2294PK"]] },
      { id: "tn229xxlbk", group: "printer", name: "TN229XXLBK super high-yield black", price: 154.99, placeholder: "Brother OEM\nBlack toner", badges: ["OEM"], description: "Super high-yield black toner for lower black page cost.", retailers: [["Brother Canada", "$154.99", "https://www.brother.ca/en/p/TN229XXLBK"]] },
      { id: "dr229cl", group: "printer", name: "DR229CL drum unit", price: 219.99, placeholder: "Brother OEM\nDrum unit", badges: ["OEM"], description: "Replacement drum unit for the MFC-L3780CDW supply ecosystem.", retailers: [["Brother Canada", "$219.99", "https://www.brother.ca/en/p/DR229CL"]] }
    ]
  },
  {
    title: "Printer supplies: Brother MFC-L8900CDW OEM",
    note: "Optional supply items for estimating initial toner or maintenance budget.",
    items: [
      { id: "tn436bk", group: "printer", name: "TN436BK super high-yield black", price: 142.99, placeholder: "Brother OEM\nBlack toner", badges: ["OEM"], description: "Super high-yield black toner. Eco fee not included in selectable total.", retailers: [["Brother Canada", "$142.99 + $0.55 eco fee", "https://www.brother.ca/en/p/TN436BK"]] },
      { id: "tn436colors", group: "printer", name: "TN436C/M/Y super high-yield colours", price: 824.97, placeholder: "Brother OEM\nColour toners", badges: ["OEM", "3 colours"], description: "Cyan, magenta and yellow super high-yield toners at $274.99 each.", retailers: [["Brother Canada", "$274.99 each + $0.55 eco fee each", "https://www.brother.ca/en/p/TN436C"]] },
      { id: "dr431cl", group: "printer", name: "DR431CL drum unit", price: 211.99, placeholder: "Brother OEM\nDrum unit", badges: ["OEM"], description: "Replacement drum unit. Eco fee not included in selectable total.", retailers: [["Brother Canada", "$211.99 + $0.55 eco fee", "https://www.brother.ca/en/p/DR431CL"]] },
      { id: "wt320cl", group: "printer", name: "WT320CL waste toner box", price: 44.49, placeholder: "Brother OEM\nWaste toner", badges: ["OEM"], description: "Replacement waste toner box. Eco fee not included in selectable total.", retailers: [["Brother Canada", "$44.49 + $0.55 eco fee", "https://www.brother.ca/en/p/WT320CL"]] }
    ]
  }
];

const selected = new Set(["ds225", "wdred4tb", "cyberpower1500", "tlsg108"]);

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
              <div class="price-line">
                <span class="price">${item.price === null ? "Price not confirmed" : money(item.price)}</span>
                <span class="small">pre-tax${item.price === null ? "" : ", selectable total"}</span>
              </div>
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

  document.getElementById("coreTotal").textContent = money(totals.core);
  document.getElementById("printerTotal").textContent = money(totals.printer);
  document.getElementById("grandTotal").textContent = money(totals.core + totals.printer);
}

render();
