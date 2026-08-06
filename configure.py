from pathlib import Path
import json
import re

root = Path(__file__).parent
cfg = json.loads((root / "site-config.json").read_text(encoding="utf-8"))
robots = (root / "robots.txt").read_text(encoding="utf-8")
domain_match = re.search(r"Sitemap: https://([^/]+)/sitemap\.xml", robots)
current_domain = domain_match.group(1) if domain_match else "YOUR-DOMAIN.TLD"
index = (root / "index.html").read_text(encoding="utf-8")
email_match = re.search(r'mailto:([^"?]+)', index)
current_email = email_match.group(1) if email_match else "ice@taioan.pro"
replacements = {
    "YOUR-DOMAIN.TLD": cfg["domain"],
    current_domain: cfg["domain"],
    "ice@taioan.pro": cfg["contact_email"],
    "aurix.cases@gmail.com": cfg["contact_email"],
    current_email: cfg["contact_email"],
    "台南｜服務全台企業專案": cfg["location"],
}
for path in list(root.rglob("*.html")) + [root / "robots.txt", root / "sitemap.xml", root / "api/inquiry.js", root / "assets/app.js"]:
    text = path.read_text(encoding="utf-8")
    for old, new in replacements.items():
        text = text.replace(old, new)
    path.write_text(text, encoding="utf-8")
print("Site configuration applied.")
