export const hero = {
  name: "Carlos Alvarado",
  role: "IT Engineer · Cybersecurity Student",
  location: "San Antonio, TX",
  summary:
    "Blue-team focused with a passion for building resilient labs, tuning defenses, and writing automation that speeds up incident response.",
  resume: "/resume.pdf",
  linkedin: "https://www.linkedin.com/in/carlos-alvarado-370b39275/",
  github: "https://github.com/calvarado19",
  email: "20car06@gmail.com",
};

export const highlights = [
  {
    title: "Blue Team Labs",
    body: "Hands-on defensive exercises: endpoint hardening, packet capture analysis, and threat hunting writeups with clear narratives.",
  },
  {
    title: "Network Craft",
    body: "Designs MikroTik/UniFi networks with VLANs, inter-VLAN ACLs, DHCP options, and resilience testing for real-world uptime.",
  },
  {
    title: "Automation",
    body: "Python + Bash tooling that triages artifacts, normalizes logs, and ships concise CSV/Markdown reports for teammates.",
  },
];

export const skills = {
  Networking: ["MikroTik", "UniFi", "VLANs", "Firewall rules", "PoE switching"],
  "Blue Team": ["Nmap", "Wireshark", "Zeek", "Windows Event Logs", "Defender/ASR"],
  Automation: ["Python", "Bash", "Scripting for triage", "CSV reports"],
  Tools: ["Burp", "Metasploit", "Autopsy/FTK", "Jellyfin/TrueNAS (homelab)"],
};

export const projects = [
  {
    title: "Windows 11 Hardening Lab",
    tags: ["Blue Team", "Endpoint"],
    stack: "Windows, PowerShell",
    summary:
      "CIS-style baseline with ASR rules, audit policies, BitLocker, Defender tuning, and centralized logging for repeatable builds.",
    links: {
      notes: "#",
      repo: "#",
    },
  },
  {
    title: "Packet Capture & Threat Hunt",
    tags: ["Blue Team", "Forensics"],
    stack: "Wireshark, Zeek",
    summary:
      "Investigated suspicious DNS/HTTP traffic, extracted IOCs, and delivered a concise IR mini-report to summarize findings.",
    links: {
      notes: "#",
    },
  },
  {
    title: "Media Server",
    tags: ["Home Lab", "Systems", "Networking"],
    stack: "TrueNAS Scale, Dell Precision 5820, Windows Server, Hyper-V/VMs",
    summary:
      "Built a Dell Precision 5820 to host Jellyfin and network services; practiced Windows domain services, backup/restore, and segmentation.",
  },
  {
    title: "MikroTik/UniFi VLAN Segmentation",
    tags: ["Networking"],
    stack: "MikroTik (WinBox), UniFi",
    summary:
      "Separated staff/guest/IoT with inter-VLAN ACLs, DHCP options, and thorough validation to prove segmentation outcomes.",
  },
  {
    title: "Smart Home & Network Lab",
    tags: ["Homelab", "Automation", "Networking"],
    stack: "UniFi Dream Machine, UniFi Switches, Raspberry Pi (Home Assistant), Apple HomeKit",
    summary:
      "Segmented IoT with WPA3, least-privilege device access, and presence-based automations orchestrated through Home Assistant.",
  },
];

export const certs = [
  "CompTIA Security+ (SY0-701) — Completed",
  "CCSP — Long Term Goal",
];

export const socials = [
  { label: "LinkedIn", href: hero.linkedin },
  { label: "GitHub", href: hero.github },
  { label: "Email", href: `mailto:${hero.email}` },
];
