import os
import re

files_to_update = {
    'app/mutuelles/page.tsx': ('Mutuelle Santé', []),
    'app/auto/page.tsx': ('Assurance Auto', []),
    'app/habitation/page.tsx': ('Assurance Habitation', []),
    'app/animaux/page.tsx': ('Assurance Animaux', []),
    'app/blog/mutuelle-sante/page.tsx': ('Mutuelle Santé', [('Blog', '/blog')]),
    'app/blog/assurance-auto/page.tsx': ('Assurance Auto', [('Blog', '/blog')]),
    'app/blog/assurance-habitation/page.tsx': ('Assurance Habitation', [('Blog', '/blog')]),
    'app/blog/assurance-animaux/page.tsx': ('Assurance Animaux', [('Blog', '/blog')])
}

def get_breadcrumb_html(current_page, parents):
    html = '<nav aria-label=\"Fil d\\'Ariane\" className=\"container mx-auto px-4 pt-24 pb-4 overflow-x-auto whitespace-nowrap\">\n'
    html += '  <ol className=\"inline-flex items-center gap-2 text-sm text-brand-text-medium bg-white px-4 py-2 rounded-full shadow-sm w-fit border border-slate-100\">\n'
    html += '    <li><Link href=\"/\" className=\"hover:text-brand-green transition-colors\">Accueil</Link></li>\n'
    
    for name, link in parents:
        html += '    <li className=\"text-slate-300\">/</li>\n'
        html += f'    <li><Link href=\"{link}\" className=\"hover:text-brand-green transition-colors\">{name}</Link></li>\n'
        
    html += '    <li className=\"text-slate-300\">/</li>\n'
    html += f'    <li className=\"text-brand-navy font-semibold bg-slate-100 px-3 py-1 rounded-full\">{current_page}</li>\n'
    html += '  </ol>\n'
    html += '</nav>'
    return html

for filepath, (current_page, parents) in files_to_update.items():
    if not os.path.exists(filepath):
        print(f"Skipping {filepath}, does not exist")
        continue
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
        
    # Replace the old breadcrumb with the new one
    # Regex to match the old breadcrumb block
    pattern = r'<nav aria-label=\"Fil d\\'Ariane\"[^>]*>.*?<\/ol>\s*<\/nav>'
    
    new_html = get_breadcrumb_html(current_page, parents)
    # in blog pages, the padding top might be different. Let's just adjust it.
    if 'blog' in filepath:
        new_html = new_html.replace('pt-24', 'pt-10') # blogs usually have different padding
        
    new_content = re.sub(pattern, new_html, content, flags=re.DOTALL)
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)
        
    print(f"Updated {filepath}")
