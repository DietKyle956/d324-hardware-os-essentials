# Master Lesson Plan — Hardware and Operating Systems Essentials (D324)

This is the **roadmap** for the individual lesson plans. It maps every competency, sub-topic, and question cluster from the D324 objective assessment to a sequence of tightly-scoped lessons. Each planned lesson will be authored separately in `./lessons/` following the teach skill's lesson format. This document is not the lessons themselves — it is the plan that tells us what to build and in what order.

## How to read this roadmap

- **Module** = a competency (33% of the assessment)
- **Unit** = a sub-topic within a competency
- **`L####`** = one planned lesson (a single, self-contained HTML file in `./lessons/`)
- **⚠️** = the lesson covers a question the user **missed** on the pre-assessment (highest priority)
- **Q##** = the question number(s) in `d324_oa_topics_and_questions.md` that the lesson's material serves

Lessons are numbered in the recommended teaching order, which follows the assessment's own structure.

---

## Module 1 — Explains Design Decisions (33%)

### Unit 1.1: Hardware (Q6–16)

| ID | Lesson | Covers | Notes |
| --- | --- | --- | --- |
| ⚠️ L0001 | Storage anatomy: platters, tracks, sectors, read/write heads | Q6 | Missed: platters hold the data |
| L0002 | SSD vs HDD: trade-offs and when each wins | Q7 | Faster data transfer (got right — reinforce) |
| L0003 | Storage management: NVM scheduling and the file system interface | Q8, Q10 | |
| L0004 | Processor virtualization: hyper-threading (HTT) | Q11 | |
| ⚠️ L0005 | Memory hierarchy: ROM, L1/L2/L3 cache, virtual RAM (paging file) | Q12, Q13, Q14 | Missed: L1 is smallest-but-fastest |
| ⚠️ L0006 | RAM technologies: DRAM vs SRAM, synchronous vs asynchronous, DDR SDRAM | Q15, Q16 | Missed: asynchronous DRAM is clock-independent |
| L0007 | Thermal troubleshooting: overheating, vents, fans | Q9 | |

### Unit 1.2: Operating Systems (Q1–5)

| ID | Lesson | Covers | Notes |
| --- | --- | --- | --- |
| L0008 | Where the OS lives at runtime: RAM as the system-code workspace | Q1 | |
| L0009 | OS families: client vs server operating systems | Q2 | Red Hat Enterprise Linux (got right — reinforce) |
| ⚠️ L0010 | Kernel building blocks: process control management | Q3 | Missed: process control management, not memory mgmt |
| L0011 | OS interfaces: GUI vs CLI trade-offs | Q4 | |
| ⚠️ L0012 | System calls and the POSIX API | Q5 | Missed: `Read()` is the POSIX-style call |

### Unit 1.3: Virtual Environment (Q17–20)

| ID | Lesson | Covers | Notes |
| --- | --- | --- | --- |
| ⚠️ L0013 | Cloud characteristics: resource pooling, measured service, on-demand self-service, rapid elasticity, broad network access | Q17, Q20 | Missed: resource pooling. Also covers Q56 (elasticity) — see cross-ref in Unit 3.2 |
| L0014 | Virtualization tools: sandbox, test development, application virtualization, cross-platform virtualization | Q18, Q19 | |

---

## Module 2 — Develops Topologies (33%)

### Unit 2.1: Networking (Q32–40)

| ID | Lesson | Covers | Notes |
| --- | --- | --- | --- |
| ⚠️ L0015 | Topologies: bus, star, ring, mesh | Q32, Q35 | Missed: bus = cheap/easy but hard to reconfigure |
| L0016 | Network hardware by OSI layer: patch panels, hubs, switches (L2), routers | Q33 | |
| ⚠️ L0017 | Twisted-pair cabling: Category ratings and speeds | Q34 | Missed: Cat 3 = 10 Mbps |
| L0018 | Network scope: PAN, LAN, MAN, WAN | Q36 | |
| ⚠️ L0019 | Malware taxonomy: armored, boot-sector, companion, macro, multipartite, phage, polymorphic | Q37, Q38, Q39 | Missed: armored virus = hard to detect/analyze |
| L0020 | Attack vectors: social engineering and related threats | Q40 | |

### Unit 2.2: Non-functional Requirements (Q21–26)

| ID | Lesson | Covers | Notes |
| --- | --- | --- | --- |
| L0021 | Non-functional requirements: availability, reliability, usability, scalability | Q21 | |
| ⚠️ L0022 | Network auto-configuration: DHCP and APIPA | Q22 | Missed: APIPA kicks in when DHCP is unreachable |
| L0023 | Authentication and defense: Domain Controller, IDS vs IPS | Q23, Q24 | IDS = passive (got right — reinforce) |
| L0024 | Network services: load balancing and Communications-as-a-Service | Q25, Q26 | |

### Unit 2.3: IDEs and Text Editors (Q27–31)

| ID | Lesson | Covers | Notes |
| --- | --- | --- | --- |
| L0025 | IDEs vs text editors: choosing the right tool | Q27, Q29 | VS Code (IDE), Atom (customizable editor) |
| L0026 | Language models: compiled vs interpreted/scripting | Q28 | |
| L0027 | Paradigms and tools: OOP languages (C++) and PowerShell cmdlets | Q30, Q31 | |

---

## Module 3 — Explains Configuration and Deployment (33%)

### Unit 3.1: Customization (Q41–54)

| ID | Lesson | Covers | Notes |
| --- | --- | --- | --- |
| L0028 | Storage configuration: NAS sizing, rotational speed, energy | Q41, Q42 | Lower rotational speed = less energy |
| L0029 | Capacity planning: RAM arithmetic | Q43, Q44 | |
| L0030 | Network roles: client, server, peer | Q45, Q46, Q47 | |
| L0031 | Web-stack roles: front-end vs back-end and databases (MySQL, MongoDB, CouchDB) | Q48, Q49, Q50 | |
| ⚠️ L0032 | Tech stacks and web servers: flexibility/efficiency, Apache, frameworks (Angular) | Q51, Q52, Q53, Q54 | Missed: Apache = simple web server |

### Unit 3.2: Cloud Computing (Q55–60)

| ID | Lesson | Covers | Notes |
| --- | --- | --- | --- |
| ⚠️ L0033 | Hypervisors: type 1 vs type 2 | Q55 | Missed: type 2 runs on the host OS |
| ⚠️ L0034 | Containers: process isolation and the shared host OS | Q57, Q58 | Missed both: process isolation + shared host OS |
| ⚠️ L0035 | Isolated test environments: VM vs container | Q59 | Missed: configure a VM for isolated testing |
| L0036 | Cloud service models: SaaS, IaaS, PaaS, HaaS | Q60 | Cross-ref: Q56 (elasticity) covered in L0013 |

---

## Priority queue — missed questions

These 15 questions were answered incorrectly on the pre-assessment. They are the highest-value targets. Ordered by lesson:

| Missed Q | Section | Concept to fix | Lesson |
| --- | --- | --- | --- |
| 6 | Hardware | Platters store the data | L0001 |
| 13 | Hardware | L1 cache is smallest + fastest | L0005 |
| 15 | Hardware | Asynchronous DRAM is clock-independent | L0006 |
| 3 | Operating Systems | Process control management | L0010 |
| 5 | Operating Systems | `Read()` is the POSIX system call | L0012 |
| 17 | Virtual Environment | Resource pooling | L0013 |
| 32 | Networking | Bus topology | L0015 |
| 34 | Networking | Cat 3 = 10 Mbps | L0017 |
| 37 | Networking | Armored virus | L0019 |
| 22 | Non-functional Req. | APIPA | L0022 |
| 52 | Customization | Apache web server | L0032 |
| 55 | Cloud Computing | Type 2 hypervisor → host OS | L0033 |
| 57 | Cloud Computing | Containers use process isolation | L0034 |
| 58 | Cloud Computing | Containers share the host OS | L0034 |
| 59 | Cloud Computing | VM for isolated testing | L0035 |

## Recommended path

1. **Start with the priority queue** (the 15 missed questions above) — the user is already "Competent" overall, so gap-closing has the highest return per hour.
2. Then complete remaining lessons in each unit to consolidate, following the module order.
3. As lessons are authored, compress each into a `./reference/` cheat sheet and grow `GLOSSARY.md` with terms the user has demonstrated.

## Lesson numbering convention

- Individual lessons live in `./lessons/` as `NNNN-<dash-case-name>.html`, numbered sequentially from `0001`.
- The `L####` IDs in this roadmap are the *planned* sequence; the actual file numbers are assigned when each lesson is written.
- A `LEARNING-RECORD` is written after each lesson only when the user demonstrates genuine understanding (per the teach skill), not merely for coverage.

## Next steps

1. Confirm `MISSION.md` (drafted from context).
2. Populate `RESOURCES.md` with verified WGU + external sources before authoring lessons.
3. Author lesson `0001` (L0001 — storage anatomy) to establish the shared stylesheet and component library in `./assets/`.
