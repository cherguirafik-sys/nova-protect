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

def get_breadcrumb_html(current_page, parents, is_blog):
    padding = 'pt-10' if is_blog else 'pt-24'
    html = f'''<nav aria-label="Fil d'Ariane" className="container mx-auto px-4 {padding} pb-4 overflow-x-auto whitespace-nowrap scrollbar-hide">
  <ol className="inline-flex items-center gap-2 text-sm text-brand-text-medium bg-white px-4 py-2 rounded-full shadow-sm w-fit border border-slate-100">
    <li><Link href="/" className="hover:text-brand-green transition-colors">Accueil</Link></li>'''
    
    for name, link in parents:
        html += f'''
    <li className="text-slate-300">/</li>
    <li><Link href="{link}" className="hover:text-brand-green transition-colors">{name}</Link></li>'''
        
    html += f'''
    <li className="text-slate-300">/</li>
    <li className="text-brand-navy font-semibold bg-slate-100 px-3 py-1 rounded-full">{current_page}</li>
  </ol>
</nav>'''
    return html

for filepath, (current_page, parents) in files_to_update.items():
    if not os.path.exists(filepath):
        print(f"Skipping {filepath}, does not exist")
        continue
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
        
    is_blog = 'blog' in filepath
    # Regex to match the old breadcrumb block
    # We want to match <nav aria-label="Fil d'Ariane"...> ... </nav>
    # Note that in blog pages it might just be class="mb-8" instead of container mx-auto px-4 ...
    
    # Let's use a simpler regex that matches from <nav aria-label="Fil d'Ariane" to </nav>
    pattern = r'<nav aria-label="Fil d\'Ariane"[^>]*>.*?<\/ol>\s*<\/nav>'
    
    # If it's a blog page, the old breadcrumb didn't have container mx-auto. We should use mb-8 for blogs to keep spacing?
    if is_blog:
        padding = 'mb-8'
        new_html = f'''<nav aria-label="Fil d'Ariane" className="mb-8 overflow-x-auto whitespace-nowrap scrollbar-hide">
  <ol className="inline-flex items-center gap-2 text-sm text-brand-text-medium bg-white px-4 py-2 rounded-full shadow-sm w-fit border border-slate-100">
    <li><Link href="/" className="hover:text-brand-green transition-colors">Accueil</Link></li>'''
        for name, link in parents:
            new_html += f'''
    <li className="text-slate-300">/</li>
    <li><Link href="{link}" className="hover:text-brand-green transition-colors">{name}</Link></li>'''
        new_html += f'''
    <li className="text-slate-300">/</li>
    <li className="text-brand-navy font-semibold bg-slate-100 px-3 py-1 rounded-full">{current_page}</li>
  </ol>
</nav>'''
    else:
        new_html = get_breadcrumb_html(current_page, parents, is_blog)

    new_content = re.sub(pattern, new_html, content, flags=re.DOTALL)
    
    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated {filepath}")
    else:
        print(f"No match found or already updated in {filepath}")
