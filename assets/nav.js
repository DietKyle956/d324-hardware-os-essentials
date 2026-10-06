/* ==========================================================================
   Site navigation - shared by every page.
   Injects the top-left menu button, the sidebar (Lessons, Cheat Cards,
   Resources), and the previous/next buttons on lessons. Path depth is read
   from this script's own src, so the same build works on GitHub Pages and
   from a local folder, fully offline.
   ========================================================================== */

(function () {
  "use strict";

  var COURSE_HOMES = {
    "Hardware": "hardware/index.html",
    "Operating Systems": "operating-systems/index.html",
    "Virtual Environment": "virtual-environment/index.html",
    "Networking": "networking/index.html",
    "Non-functional Requirements": "non-functional-requirements/index.html",
    "IDEs and Text Editors": "ides-text-editors/index.html",
    "Customization": "customization/index.html",
    "Cloud Computing": "cloud-computing/index.html"
  };

  var SEQUENCE = [
    { course: "Hardware", num: 1, title: "Hard Drive Anatomy: Where Data Actually Lives", href: "hardware/lessons/0001-hard-drive-anatomy.html", kind: "lesson" },
    { course: "Hardware", num: 2, title: "SSD vs HDD: The Trade-Offs", href: "hardware/lessons/0002-ssd-vs-hdd.html", kind: "lesson" },
    { course: "Hardware", num: 3, title: "Storage Management: NVM Scheduling & the File System Interface", href: "hardware/lessons/0003-storage-management.html", kind: "lesson" },
    { course: "Hardware", num: 4, title: "Hyper-Threading (HTT): One Core, Two Processors", href: "hardware/lessons/0004-hyper-threading.html", kind: "lesson" },
    { course: "Hardware", num: 5, title: "The Memory Hierarchy: ROM, Cache, RAM, Virtual RAM", href: "hardware/lessons/0005-memory-hierarchy.html", kind: "lesson" },
    { course: "Hardware", num: 6, title: "RAM Technologies: DRAM, SRAM, and Clock Signals", href: "hardware/lessons/0006-ram-technologies.html", kind: "lesson" },
    { course: "Hardware", num: 7, title: "Thermal Troubleshooting: Overheating & Shutdowns", href: "hardware/lessons/0007-thermal-troubleshooting.html", kind: "lesson" },
    { course: "Operating Systems", num: 1, title: "Where the OS Lives at Runtime", href: "operating-systems/lessons/0001-os-runtime.html", kind: "lesson" },
    { course: "Operating Systems", num: 2, title: "OS Families: Client vs Server", href: "operating-systems/lessons/0002-os-families.html", kind: "lesson" },
    { course: "Operating Systems", num: 3, title: "Kernel Building Blocks: Process Control Management", href: "operating-systems/lessons/0003-process-control-management.html", kind: "lesson" },
    { course: "Operating Systems", num: 4, title: "OS Interfaces: GUI vs CLI", href: "operating-systems/lessons/0004-os-interfaces.html", kind: "lesson" },
    { course: "Operating Systems", num: 5, title: "System Calls and the POSIX API", href: "operating-systems/lessons/0005-system-calls-posix.html", kind: "lesson" },
    { course: "Virtual Environment", num: 1, title: "Cloud Characteristics", href: "virtual-environment/lessons/0001-cloud-characteristics.html", kind: "lesson" },
    { course: "Virtual Environment", num: 2, title: "Virtualization Tools", href: "virtual-environment/lessons/0002-virtualization-tools.html", kind: "lesson" },
    { course: "Networking", num: 1, title: "Network Topologies", href: "networking/lessons/0001-topologies.html", kind: "lesson" },
    { course: "Networking", num: 2, title: "Network Hardware by OSI Layer", href: "networking/lessons/0002-network-hardware-osi.html", kind: "lesson" },
    { course: "Networking", num: 3, title: "Twisted-Pair Cabling: Category Ratings", href: "networking/lessons/0003-twisted-pair-cabling.html", kind: "lesson" },
    { course: "Networking", num: 4, title: "Network Scope: PAN, LAN, MAN, WAN", href: "networking/lessons/0004-network-scope.html", kind: "lesson" },
    { course: "Networking", num: 5, title: "Virus Taxonomy", href: "networking/lessons/0005-malware-taxonomy.html", kind: "lesson" },
    { course: "Networking", num: 6, title: "Social Engineering and Related Threats", href: "networking/lessons/0006-social-engineering.html", kind: "lesson" },
    { course: "Non-functional Requirements", num: 1, title: "Non-functional Requirements", href: "non-functional-requirements/lessons/0001-non-functional-requirements.html", kind: "lesson" },
    { course: "Non-functional Requirements", num: 2, title: "Network Auto-configuration: DHCP and APIPA", href: "non-functional-requirements/lessons/0002-dhcp-apipa.html", kind: "lesson" },
    { course: "Non-functional Requirements", num: 3, title: "Authentication and Defense", href: "non-functional-requirements/lessons/0003-authentication-defense.html", kind: "lesson" },
    { course: "Non-functional Requirements", num: 4, title: "Network Services: Load Balancing and CaaS", href: "non-functional-requirements/lessons/0004-network-services.html", kind: "lesson" },
    { course: "IDEs and Text Editors", num: 1, title: "IDEs vs Text Editors", href: "ides-text-editors/lessons/0001-ides-text-editors.html", kind: "lesson" },
    { course: "IDEs and Text Editors", num: 2, title: "Language Models: Compiled vs Interpreted", href: "ides-text-editors/lessons/0002-language-models.html", kind: "lesson" },
    { course: "IDEs and Text Editors", num: 3, title: "Paradigms and Tools: OOP and PowerShell", href: "ides-text-editors/lessons/0003-paradigms-tools.html", kind: "lesson" },
    { course: "Customization", num: 1, title: "Storage Configuration: NAS", href: "customization/lessons/0001-storage-configuration.html", kind: "lesson" },
    { course: "Customization", num: 2, title: "Capacity Planning: RAM Arithmetic", href: "customization/lessons/0002-capacity-planning.html", kind: "lesson" },
    { course: "Customization", num: 3, title: "Network Roles: Client, Server, Peer", href: "customization/lessons/0003-network-roles.html", kind: "lesson" },
    { course: "Customization", num: 4, title: "Web-stack Roles: Front-end vs Back-end", href: "customization/lessons/0004-web-stack-roles.html", kind: "lesson" },
    { course: "Customization", num: 5, title: "Tech Stacks and Web Servers", href: "customization/lessons/0005-tech-stacks.html", kind: "lesson" },
    { course: "Cloud Computing", num: 1, title: "Hypervisors: Type 1 vs Type 2", href: "cloud-computing/lessons/0001-hypervisors.html", kind: "lesson" },
    { course: "Cloud Computing", num: 2, title: "Containers: Process Isolation and the Shared Host OS", href: "cloud-computing/lessons/0002-containers.html", kind: "lesson" },
    { course: "Cloud Computing", num: 3, title: "Isolated Test Environments: VM vs Container", href: "cloud-computing/lessons/0003-isolated-test-environments.html", kind: "lesson" },
    { course: "Cloud Computing", num: 4, title: "Cloud Service Models: SaaS, IaaS, PaaS, HaaS", href: "cloud-computing/lessons/0004-cloud-service-models.html", kind: "lesson" }
  ];

  var CARDS = {
    "Hardware": [
      { title: "Hard Drive Anatomy: Where Data Actually Lives", href: "hardware/reference/hard-drive-anatomy.html" },
      { title: "SSD vs HDD: The Trade-Offs", href: "hardware/reference/ssd-vs-hdd.html" },
      { title: "Storage Management: NVM Scheduling & the File System Interface", href: "hardware/reference/storage-management.html" },
      { title: "Hyper-Threading (HTT): One Core, Two Processors", href: "hardware/reference/hyper-threading.html" },
      { title: "The Memory Hierarchy: ROM, Cache, RAM, Virtual RAM", href: "hardware/reference/memory-hierarchy.html" },
      { title: "RAM Technologies: DRAM, SRAM, and Clock Signals", href: "hardware/reference/ram-technologies.html" },
      { title: "Thermal Troubleshooting: Overheating & Shutdowns", href: "hardware/reference/thermal-troubleshooting.html" },
    ],
    "Operating Systems": [
      { title: "Where the OS Lives at Runtime", href: "operating-systems/reference/os-runtime.html" },
      { title: "OS Families: Client vs Server", href: "operating-systems/reference/os-families.html" },
      { title: "Kernel Building Blocks: Process Control Management", href: "operating-systems/reference/process-control-management.html" },
      { title: "OS Interfaces: GUI vs CLI", href: "operating-systems/reference/os-interfaces.html" },
      { title: "System Calls and the POSIX API", href: "operating-systems/reference/system-calls-posix.html" },
    ],
    "Virtual Environment": [
      { title: "Cloud Characteristics", href: "virtual-environment/reference/cloud-characteristics.html" },
      { title: "Virtualization Tools", href: "virtual-environment/reference/virtualization-tools.html" },
    ],
    "Networking": [
      { title: "Network Topologies", href: "networking/reference/topologies.html" },
      { title: "Network Hardware by OSI Layer", href: "networking/reference/network-hardware-osi.html" },
      { title: "Twisted-Pair Cabling: Category Ratings", href: "networking/reference/twisted-pair-cabling.html" },
      { title: "Network Scope: PAN, LAN, MAN, WAN", href: "networking/reference/network-scope.html" },
      { title: "Virus Taxonomy", href: "networking/reference/malware-taxonomy.html" },
      { title: "Social Engineering and Related Threats", href: "networking/reference/social-engineering.html" },
    ],
    "Non-functional Requirements": [
      { title: "Non-functional Requirements", href: "non-functional-requirements/reference/non-functional-requirements.html" },
      { title: "Network Auto-configuration: DHCP and APIPA", href: "non-functional-requirements/reference/dhcp-apipa.html" },
      { title: "Authentication and Defense", href: "non-functional-requirements/reference/authentication-defense.html" },
      { title: "Network Services: Load Balancing and CaaS", href: "non-functional-requirements/reference/network-services.html" },
    ],
    "IDEs and Text Editors": [
      { title: "IDEs vs Text Editors", href: "ides-text-editors/reference/ides-text-editors.html" },
      { title: "Language Models: Compiled vs Interpreted", href: "ides-text-editors/reference/language-models.html" },
      { title: "Paradigms and Tools: OOP and PowerShell", href: "ides-text-editors/reference/paradigms-tools.html" },
    ],
    "Customization": [
      { title: "Storage Configuration: NAS", href: "customization/reference/storage-configuration.html" },
      { title: "Capacity Planning: RAM Arithmetic", href: "customization/reference/capacity-planning.html" },
      { title: "Network Roles: Client, Server, Peer", href: "customization/reference/network-roles.html" },
      { title: "Web-stack Roles: Front-end vs Back-end", href: "customization/reference/web-stack-roles.html" },
      { title: "Tech Stacks and Web Servers", href: "customization/reference/tech-stacks.html" },
    ],
    "Cloud Computing": [
      { title: "Hypervisors: Type 1 vs Type 2", href: "cloud-computing/reference/hypervisors.html" },
      { title: "Containers: Process Isolation and the Shared Host OS", href: "cloud-computing/reference/containers.html" },
      { title: "Isolated Test Environments: VM vs Container", href: "cloud-computing/reference/isolated-test-environments.html" },
      { title: "Cloud Service Models: SaaS, IaaS, PaaS, HaaS", href: "cloud-computing/reference/cloud-service-models.html" },
    ],
  };

  var depth = document.currentScript.getAttribute("src").split("/")
    .filter(function (seg) { return seg === ".."; }).length;
  var PREFIX = new Array(depth + 1).join("../");

  var here = location.href.replace(/[?#].*$/, "");
  var current = -1;

  SEQUENCE.forEach(function (item, i) {
    var abs = new URL(PREFIX + item.href, location.href).href.replace(/[?#].*$/, "");
    if (abs === here) current = i;
  });

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function link(href, className, text) {
    var a = el("a", className || null, text);
    a.href = PREFIX + href;
    return a;
  }

  function isHere(href) {
    return new URL(PREFIX + href, location.href).href.replace(/[?#].*$/, "") === here;
  }

  function markCurrent(a, href) {
    if (isHere(href)) {
      a.className = (a.className ? a.className + " " : "") + "current";
      a.setAttribute("aria-current", "page");
    }
  }

  function buildSidebar() {
    var toggle = el("button", "nav-toggle");
    toggle.type = "button";
    toggle.setAttribute("aria-label", "Open menu");
    toggle.setAttribute("aria-expanded", "false");
    toggle.innerHTML = "<span></span><span></span><span></span>";

    var backdrop = el("div", "nav-backdrop");

    var sidebar = el("aside", "sidebar");
    sidebar.setAttribute("aria-label", "Site menu");

    var head = el("div", "sidebar-head");
    head.appendChild(link("index.html", "sidebar-title", "D324 Study Guides"));
    var close = el("button", "sidebar-close");
    close.type = "button";
    close.setAttribute("aria-label", "Close menu");
    close.textContent = "\u00d7";
    head.appendChild(close);

    var nav = el("nav", "sidebar-nav");

    // Lessons
    var lessons = el("details", "sidebar-group");
    lessons.appendChild(el("summary", null, "Lessons"));
    var lessonsList = el("ul", "sidebar-items");
    Object.keys(COURSE_HOMES).forEach(function (course) {
      var items = SEQUENCE.filter(function (it) { return it.course === course && it.kind === "lesson"; });
      if (!items.length) return;
      var row = el("li", "sidebar-course");
      row.appendChild(link(COURSE_HOMES[course], null, course));
      lessonsList.appendChild(row);
      items.forEach(function (it) {
        var li = el("li", null);
        var a = link(it.href, null, it.num + " - " + it.title);
        markCurrent(a, it.href);
        li.appendChild(a);
        lessonsList.appendChild(li);
      });
    });
    lessons.appendChild(lessonsList);
    nav.appendChild(lessons);

    // Cheat cards
    var cards = el("details", "sidebar-group");
    cards.appendChild(el("summary", null, "Cheat Cards"));
    var cardsList = el("ul", "sidebar-items");
    Object.keys(CARDS).forEach(function (course) {
      var row = el("li", "sidebar-course");
      row.appendChild(link(COURSE_HOMES[course], null, course));
      cardsList.appendChild(row);
      CARDS[course].forEach(function (c) {
        var li = el("li", null);
        var a = link(c.href, null, c.title);
        markCurrent(a, c.href);
        li.appendChild(a);
        cardsList.appendChild(li);
      });
    });
    cards.appendChild(cardsList);
    nav.appendChild(cards);

    var resources = link("resources.html", "sidebar-link", "Resources");
    markCurrent(resources, "resources.html");
    nav.appendChild(resources);

    sidebar.appendChild(head);
    sidebar.appendChild(nav);

    if (current !== -1) lessons.open = true;

    function setOpen(open) {
      document.body.classList.toggle("nav-open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      if (open) close.focus(); else toggle.focus();
    }
    toggle.addEventListener("click", function () { setOpen(true); });
    close.addEventListener("click", function () { setOpen(false); });
    backdrop.addEventListener("click", function () { setOpen(false); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") setOpen(false); });

    document.body.appendChild(toggle);
    document.body.appendChild(backdrop);
    document.body.appendChild(sidebar);
  }

  function makeNavButton(item, label, side) {
    var a = link(item.href, "lesson-nav-btn " + side);
    var text = el("span", "lesson-nav-text");
    text.appendChild(el("span", "lesson-nav-label", label));
    text.appendChild(el("span", "lesson-nav-title", item.title));
    var arrow = el("span", "lesson-nav-arrow", side === "prev" ? "\u2190" : "\u2192");
    if (side === "prev") { a.appendChild(arrow); a.appendChild(text); }
    else { a.appendChild(text); a.appendChild(arrow); }
    return a;
  }

  function buildLessonNav() {
    if (current === -1) return;
    var article = document.querySelector("article.lesson");
    if (!article) return;
    var nav = el("nav", "lesson-nav");
    nav.setAttribute("aria-label", "Lesson navigation");
    var item = SEQUENCE[current];
    if (current > 0) {
      var prev = SEQUENCE[current - 1];
      var pl = prev.kind === "test" ? "Previous practice test" : "Previous lesson";
      if (prev.course !== item.course) pl += " - " + prev.course;
      nav.appendChild(makeNavButton(prev, pl, "prev"));
    }
    if (current < SEQUENCE.length - 1) {
      var next = SEQUENCE[current + 1];
      var nl = next.kind === "test" ? "Next practice test" : "Next lesson";
      if (next.course !== item.course) nl += " - " + next.course;
      nav.appendChild(makeNavButton(next, nl, "next"));
    }
    article.appendChild(nav);
  }

  if (document.body) { buildSidebar(); buildLessonNav(); }
  else { document.addEventListener("DOMContentLoaded", function () { buildSidebar(); buildLessonNav(); }); }
})();
