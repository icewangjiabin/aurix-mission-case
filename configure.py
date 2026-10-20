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
phone_digits = re.sub(r"\D", "", cfg["phone"])
phone_href = f"+886{phone_digits[1:]}" if phone_digits.startswith("0") else f"+{phone_digits}"
contact_block = (
    f'<p>{cfg["legal_company_name"]}</p>'
    f'<p><a href="tel:{phone_href}">電話：{cfg["phone"]}</a></p>'
)
for path in list(root.rglob("*.html")) + [root / "robots.txt", root / "sitemap.xml", root / "api/inquiry.js", root / "assets/app.js"]:
    text = path.read_text(encoding="utf-8")
    for old, new in replacements.items():
        text = text.replace(old, new)
    text = text.replace(
        '<p class="notice">正式法人名稱與聯絡電話暫不公開。</p>',
        contact_block,
    )
    path.write_text(text, encoding="utf-8")
print("Site configuration applied.")
