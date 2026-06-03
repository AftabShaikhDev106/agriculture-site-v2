import os
import re

svg_files = [
    'circle-what.svg',
    'circle-what-who.svg',
    'circle-how.svg',
    'circle-how-mob.svg'
]
base_dir = r"E:\coding\anwar bhai x aftab project\agriculture site\assets\Links\compressed-img\bg-images"

for fname in svg_files:
    fpath = os.path.join(base_dir, fname)
    with open(fpath, 'rb') as f:
        content = f.read()
        
    # Map SVG
    map_content = re.sub(b'\s*<ellipse[^>]+/>', b'', content)
    map_fname = fname.replace('circle-', 'map-')
    with open(os.path.join(base_dir, map_fname), 'wb') as f:
        f.write(map_content)
        
    # Solid SVG
    solid_content = re.sub(b'\s*<rect[^>]+fill="url\(#pattern[^>]+/>', b'', content)
    solid_content = re.sub(b'\s*<pattern.*?</pattern>', b'', solid_content, flags=re.DOTALL)
    solid_content = re.sub(b'\s*<image[^>]+/>', b'', solid_content)
    
    with open(fpath, 'wb') as f:
        f.write(solid_content)

print("Done")
