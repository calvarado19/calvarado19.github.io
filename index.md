---
layout: default
title: Home
description: "Cybersecurity student & IT engineer — blue team labs, networking, and automation."
# ====== YOUR INFO ======
name: Carlos Alvarado
role: "IT Engineer · Cybersecurity Student"
location: "San Antonio, TX"
email: "20car06@gmail.com"         # change me
github: "https://github.com/calvarado19" # change me
linkedin: "https://www.linkedin.com/in/carlos-alvarado-370b39275/"
resume_url: "/resume.pdf"               # upload resume.pdf to repo root (or change path)

# ====== SKILLS/STACK (shows as bullet lists) ======
skills:
  Networking: ["MikroTik", "UniFi", "VLANs", "Firewall rules", "PoE switching"]
  Blue Team: ["Nmap", "Wireshark", "Zeek", "Windows Event Logs", "Defender/ASR"]
  Automation: ["Python", "Bash", "Scripting for triage", "CSV reports"]
  Tools: ["Burp", "Metasploit", "Autopsy/FTK", "Jellyfin/TrueNAS (homelab)"]

# ====== CERTS / STUDY ======
certs:
  - "CompTIA Security+ (SY0-701) — Completed"
  - "CCSP — Long Term Goal"


# ====== PROJECTS (edit/add as needed) ======
projects:
  - title: "Windows 11 Hardening Lab"
    tags: ["Blue Team", "Endpoint"]
    stack: "Windows, PowerShell"
    summary: "CIS-style baseline: ASR rules, audit policies, BitLocker, Defender tuning, and central logging."
    links:
      notes: "#"
      repo: "#"

  - title: "Packet Capture & Threat Hunt"
    tags: ["Blue Team", "Forensics"]
    stack: "Wireshark, Zeek"
    summary: "Investigated suspicious DNS/HTTP, extracted IOCs, and wrote a concise IR mini-report."
    links:
      notes: "#"

  - title: "Media Server"
    tags: ["Home Lab", "Systems", "Networking"]
    stack: "TrueNAS Scale, Dell Presicion 5820, Windows Server, Hyper-V/VM's"
    summary: "Built a Dell Presicion 5820 to host Jellyfin and network services; practiced Windows domain services, backup/restore, and segmentation; validated UPS behavior and BIOS AC Power Recovery for outage resilience."


  - title: "MikroTik/UniFi VLAN Segmentation"
    tags: ["Networking"]
    stack: "MikroTik (WinBox), UniFi"
    summary: "Separated staff/guest/IoT with inter-VLAN ACLs, DHCP options, and testing/validation."

  - title: "Smart Home & Network Lab"
    tags: ["Homelab", "Automation", "Networking"]
    stack: "UniFi Dream Machine, UniFi Switches, Raspberry Pi (Home Assistant), Apple HomeKit"
    summary: "Built and manage a UniFi-based home network with a Raspberry Pi running Home Assistant. From my phone (Apple HomeKit), I control light switches, TVs, AV receivers, speakers, cameras, and thermostat. Network is segmented (IoT VLAN), with WPA3 and least-privilege device access, plus presence-based automations and scheduled scenes."

# ====== OPTIONAL: highlight blog posts (Jekyll will show site.posts too) ======
show_recent_posts: true   # requires you to add files under _posts/
recent_posts_limit: 3
---


<nav class="quick-nav" aria-label="Section navigation">
  <a href="#projects">Projects</a>
  <a href="#skills">Skills</a>
  <a href="#certs">Certs</a>
  <a href="#posts">Notes</a>
  <a href="#contact">Contact</a>
</nav>




<header class="site-header">
  <p class="eyebrow">{{ page.role }}</p>
  <h1>{{ page.name }}</h1>
  <p class="lede">IT engineer in {{ page.location }} focused on defensive security labs, networking, and practical automation for incident triage.</p>
  <div class="hero-actions">
    <a class="btn" href="#projects">View Projects</a>
    <a class="btn ghost" href="#contact">Contact</a>
    <a class="btn ghost" href="{{ page.resume_url | relative_url }}" target="_blank" rel="noreferrer">Resume</a>
  </div>
</header>
 main

<nav class="quick-nav" aria-label="Section navigation">
  <a href="#projects">Projects</a>
  <a href="#skills">Skills</a>
  <a href="#certs">Certs</a>
  <a href="#posts">Notes</a>
  <a href="#contact">Contact</a>
</nav>

 main
## Skills & Stack {#skills}
<div class="info-grid">
{% for cat in page.skills %}
  <section class="panel">
    <h3>{{ cat[0] }}</h3>
    <p class="muted">{{ cat[1] | join: " · " }}</p>
  </section>
{% endfor %}
</div>

## Certifications & Study {#certs}
<div class="panel">
  <ul class="clean-list">
  {% for c in page.certs %}
    <li>{{ c }}</li>
  {% endfor %}
  </ul>
</div>

## Projects {#projects}
<div class="project-grid">
{% for p in page.projects %}
  <article class="card">
    <h3>{{ p.title }}</h3>
    {% if p.tags %}<p class="tags">
      {% for t in p.tags %}<span class="tag">{{ t }}</span>{% endfor %}
    </p>{% endif %}
    {% if p.stack %}<p class="muted"><strong>Stack:</strong> {{ p.stack }}</p>{% endif %}
    <p>{{ p.summary }}</p>
    <p class="links">
      {% if p.links and p.links.notes %}<a href="{{ p.links.notes }}" target="_blank" rel="noreferrer">Notes</a>{% endif %}
      {% if p.links and p.links.repo %}<span aria-hidden="true"> · </span><a href="{{ p.links.repo }}" target="_blank" rel="noreferrer">Repo</a>{% endif %}
    </p>
  </article>
{% endfor %}
</div>

{% if page.show_recent_posts and site.posts and site.posts != empty %}
## Recent Notes {#posts}
<div class="panel">
  <ul class="clean-list">
    {% for post in site.posts limit: page.recent_posts_limit %}
      <li>
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        <span class="muted"> — {{ post.date | date: "%b %-d, %Y" }}</span><br/>
        {% if post.excerpt %}<span class="muted">{{ post.excerpt | strip_html | truncate: 160 }}</span>{% endif %}
      </li>
    {% endfor %}
  </ul>
</div>
{% endif %}

## Contact {#contact}
<div class="panel contact">
  <p><strong>Email:</strong> <a href="mailto:{{ page.email }}">{{ page.email }}</a></p>
  <p><strong>LinkedIn:</strong> <a href="{{ page.linkedin }}" target="_blank" rel="noreferrer">{{ page.linkedin }}</a></p>
  <p><strong>GitHub:</strong> <a href="{{ page.github }}" target="_blank" rel="noreferrer">{{ page.github }}</a></p>
</div>
<p class="muted stamp">Last updated {{ site.time | date: "%B %-d, %Y" }}.</p>

<style>
  :root {
    --bg: #f6f8fb;
    --surface: #ffffff;
    --text: #0f172a;
    --muted: #475569;
    --brand: #2563eb;
    --border: #dbe2ea;
    --radius: 14px;
    --shadow: 0 8px 22px rgba(15, 23, 42, .07);
  }

  body { background: linear-gradient(180deg, #eef4ff 0%, var(--bg) 20%, var(--bg) 100%); color: var(--text); }

 main
  h2, h3 { color: var(--text); letter-spacing: -.02em; }
  h2 { margin-top: 2rem; }

  .eyebrow { margin: 0; color: var(--brand); font-weight: 700; font-size: .9rem; text-transform: uppercase; letter-spacing: .08em; }
 codex/improve-portfolio-website-design-0ibyei

  .intro h2 { margin: 0 0 .3rem; font-size: clamp(1.8rem, 4vw, 2.4rem); }

  h1, h2, h3 { color: var(--text); letter-spacing: -.02em; }
  h2 { margin-top: 2rem; }

  .site-header {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: calc(var(--radius) + 4px);
    padding: 1.25rem;
    box-shadow: var(--shadow);
    margin-bottom: 1rem;
  }
  .eyebrow { margin: 0; color: var(--brand); font-weight: 700; font-size: .9rem; text-transform: uppercase; letter-spacing: .08em; }
  .site-header h1 { margin: .3rem 0; font-size: clamp(1.8rem, 4vw, 2.4rem); }
 main
 main
  .lede { color: var(--muted); max-width: 65ch; }

  .hero-actions { display: flex; flex-wrap: wrap; gap: .55rem; margin-top: .8rem; }
  .btn {
    display: inline-block;
    padding: .62rem .95rem;
    border: 1px solid transparent;
    border-radius: 10px;
    background: var(--brand);
    color: #fff;
    font-weight: 650;
    text-decoration: none;
    transition: transform .15s ease, filter .2s ease;
  }
  .btn:hover { filter: brightness(1.07); transform: translateY(-1px); }
  .btn.ghost { background: #fff; color: var(--brand); border-color: #bfd1fb; }

  .quick-nav {
    display: flex;
    flex-wrap: wrap;
    gap: .5rem;
    padding: .5rem;
    margin-bottom: 1.1rem;
    background: rgba(255,255,255,.7);
    border: 1px solid var(--border);
    border-radius: 10px;
    backdrop-filter: blur(4px);
  }
  .quick-nav a {
    text-decoration: none;
    color: #1e3a8a;
    font-weight: 600;
    padding: .35rem .55rem;
    border-radius: 8px;
  }
  .quick-nav a:hover { background: #eaf1ff; }

  .info-grid, .project-grid { display: grid; gap: .85rem; }
  .info-grid { grid-template-columns: repeat(auto-fit, minmax(210px, 1fr)); }
  .project-grid { grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); }

  .panel, .card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: .95rem;
    box-shadow: var(--shadow);
  }

  .card h3 { margin: 0 0 .35rem; }
  .muted { color: var(--muted); }
  .clean-list { margin: 0; padding-left: 1rem; }
  .clean-list li { margin: .35rem 0; }

  .tags { margin: .3rem 0 .55rem; }
  .tag {
    display: inline-block;
    border: 1px solid #cbdaff;
    background: #f0f5ff;
    color: #274690;
    border-radius: 999px;
    padding: 2px 8px;
    margin: 0 .35rem .35rem 0;
    font-size: .78rem;
    font-weight: 600;
  }

  .links a { font-weight: 600; }
  .contact p { margin: .35rem 0; }
  .stamp { margin-top: .65rem; }

  a:focus-visible, .btn:focus-visible {
    outline: 3px solid #93c5fd;
    outline-offset: 2px;
    border-radius: 8px;
  }

  @media (max-width: 640px) {
 

    .site-header { padding: 1rem; }
 main
 main
    .quick-nav { position: sticky; top: .35rem; z-index: 5; }
  }

  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after { animation: none !important; transition: none !important; }
  }
</style>
