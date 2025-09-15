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

  - title: "Home Lab – TrueNAS Scale & Virtualization"
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

<!-- Simple in-page nav -->
<p>
  <a class="btn" href="#projects">Projects</a>
  <a class="btn ghost" href="#skills">Skills</a>
  <a class="btn ghost" href="#certs">Certs</a>
  <a class="btn ghost" href="#posts">Notes</a>
  <a class="btn ghost" href="#contact">Contact</a>
</p>

<div class="hero">
  <h1>Summary</h1>
  <p>Hi, I’m <strong>Carlos Alvarado</strong> — an IT engineer in {{ page.location }} pursuing a BBS in Cybersecurity. I build defensive labs, automate triage with Python, and document clear incident notes.</p>
  <p>
    <a class="btn" href="#projects">Explore Projects</a>
    <a class="btn ghost" href="{{ page.linkedin }}" target="_blank" rel="noreferrer">LinkedIn</a>
    <a class="btn ghost" href="{{ page.github }}" target="_blank" rel="noreferrer">GitHub</a>
    <a class="btn ghost" href="{{ page.resume_url | relative_url }}" target="_blank" rel="noreferrer">Resume (PDF)</a>
  </p>
</div>

## 🔧 Skills & Stack {#skills}
<ul>
{% for cat in page.skills %}
  <li><strong>{{ cat[0] }}:</strong> {{ cat[1] | join: ", " }}</li>
{% endfor %}
</ul>

## 🛡️ Certifications & Study {#certs}
<ul>
{% for c in page.certs %}
  <li>{{ c }}</li>
{% endfor %}
</ul>

## 🚀 Projects {#projects}
<div class="grid">
{% for p in page.projects %}
  <div class="card">
    <h3>{{ p.title }}</h3>
    {% if p.tags %}<p class="tags">
      {% for t in p.tags %}<span class="tag">{{ t }}</span>{% endfor %}
    </p>{% endif %}
    {% if p.stack %}<p class="muted"><strong>Stack:</strong> {{ p.stack }}</p>{% endif %}
    <p>{{ p.summary }}</p>
    <p class="links">
      {% if p.links and p.links.notes %}<a href="{{ p.links.notes }}" target="_blank" rel="noreferrer">Notes</a>{% endif %}
      {% if p.links and p.links.repo %} · <a href="{{ p.links.repo }}" target="_blank" rel="noreferrer">Repo</a>{% endif %}
    </p>
  </div>
{% endfor %}
</div>

{% if page.show_recent_posts and site.posts and site.posts != empty %}
## 📝 Recent Notes {#posts}
<ul>
  {% for post in site.posts limit: page.recent_posts_limit %}
    <li>
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      <span class="muted"> — {{ post.date | date: "%b %-d, %Y" }}</span><br/>
      {% if post.excerpt %}<span class="muted">{{ post.excerpt | strip_html | truncate: 160 }}</span>{% endif %}
    </li>
  {% endfor %}
</ul>
<p class="muted">Add posts under <code>_posts/</code> like <code>_posts/2025-08-26-hello-world.md</code>.</p>
{% endif %}

## ✉️ Contact {#contact}
<p>
  <strong>Email:</strong> <a href="mailto:{{ page.email }}">{{ page.email }}</a><br/>
  <strong>LinkedIn:</strong> <a href="{{ page.linkedin }}" target="_blank" rel="noreferrer">{{ page.linkedin }}</a><br/>
  <strong>GitHub:</strong> <a href="{{ page.github }}" target="_blank" rel="noreferrer">{{ page.github }}</a>
</p>
<p class="muted">Last updated {{ site.time | date: "%B %-d, %Y" }}.</p>

<!-- Tiny styles to make cards look nicer with the Minimal theme -->
<style>
  .btn{display:inline-block;padding:.55rem .8rem;border:1px solid #d0d7de;border-radius:8px;background:#0969da;color:#fff;font-weight:600;margin-right:.35rem}
  .btn.ghost{background:#fff;color:#0969da}
  .hero{padding:.25rem 0 1rem;border-bottom:1px solid #eaecef;margin-bottom:1rem}
  .muted{color:#6a737d}
  .grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:12px}
  .card{border:1px solid #eaecef;border-radius:12px;padding:12px;background:#fff}
  .card h3{margin:.2rem 0 .35rem}
  .tag{display:inline-block;border:1px dashed #d0d7de;border-radius:999px;padding:2px 8px;margin-right:6px;font-size:.8rem;color:#57606a}
  .links a{font-weight:600}
</style>
