import re,html,sys,subprocess
def inl(t):
    t=html.escape(t,quote=False)
    t=re.sub(r'\*\*(.+?)\*\*',r'<b>\1</b>',t)
    t=re.sub(r'\*(.+?)\*',r'<i>\1</i>',t)
    t=re.sub(r'`(.+?)`',r'<code>\1</code>',t)
    t=re.sub(r'«(.*?)»',r'<span class="note">\1</span>',t,flags=re.S)
    t=re.sub(r'\[([^\]]+)\]',r'<i class="cue">[\1]</i>',t)
    return t
def conv(md):
    out=[];lst=None
    def close():
        nonlocal lst
        if lst: out.append(f'</{lst}>'); lst=None
    for ln in md.split('\n'):
        if ln.startswith('# '): close(); out.append(f'<h1>{inl(ln[2:])}</h1>')
        elif ln.startswith('## '): close(); out.append(f'<h2>{inl(ln[3:])}</h2>')
        elif ln.strip()=='---': close(); out.append('<hr>')
        elif ln.startswith('> '): close(); out.append(f'<blockquote>{inl(ln[2:])}</blockquote>')
        elif re.match(r'- \[ \] ',ln):
            if lst!='ul': close(); out.append('<ul class="chk">'); lst='ul'
            out.append(f'<li>&#9744; {inl(ln[6:])}</li>')
        elif ln.startswith('- '):
            if lst!='ul': close(); out.append('<ul>'); lst='ul'
            out.append(f'<li>{inl(ln[2:])}</li>')
        elif re.match(r'\d+\. ',ln):
            if lst!='ol': close(); out.append('<ol>'); lst='ol'
            out.append(f'<li>{inl(re.sub(r"^\d+\. ","",ln))}</li>')
        elif ln.strip()=='': close()
        else: close(); out.append(f'<p>{inl(ln)}</p>')
    close(); return '\n'.join(out)
css='''body{font-family:"Josefin Sans",Georgia,serif;color:#17171b;font-size:12.5px;line-height:1.55;margin:0}
h1{font-family:Oswald,Impact,sans-serif;color:#6a137c;font-size:26px;margin:0 0 6px}
h2{font-family:Oswald,Impact,sans-serif;font-size:16px;margin:18px 0 4px;padding-top:8px;border-top:2px solid #dfb032;page-break-after:avoid}
p{margin:4px 0}ul,ol{margin:4px 0 4px 18px;padding:0}li{margin:2px 0}.chk{list-style:none;margin-left:6px}
blockquote{margin:8px 0;padding:6px 10px;background:#f5eef8;border-left:3px solid #6a137c}
.cue{color:#6a137c}.note{background:#fff6d6;border-left:3px solid #dfb032;padding:1px 6px;display:inline-block}
code{background:#f1ecf4;padding:0 3px}hr{border:0;border-top:1px solid #ddd;margin:14px 0}'''
src,dst=sys.argv[1],sys.argv[2]
page='<!doctype html><meta charset="utf-8"><link href="https://fonts.googleapis.com/css2?family=Oswald:wght@600;700&family=Josefin+Sans:wght@400;600;700&display=swap" rel="stylesheet"><style>'+css+'</style>'+conv(open(src).read())
open('/tmp/x.html','w').write(page)
js=f'''const {{chromium}}=require('/home/user/Purely-Personal-Run-a-business-by-itself/money-table-vip/node_modules/playwright-core');
(async()=>{{const b=await chromium.launch({{executablePath:'/opt/pw-browsers/chromium'}}).catch(()=>chromium.launch());
const p=await b.newPage();await p.goto('file:///tmp/x.html');await p.waitForTimeout(1500);
await p.pdf({{path:'{dst}',format:'A4',margin:{{top:'16mm',bottom:'16mm',left:'16mm',right:'16mm'}},printBackground:true}});await b.close();}})();'''
open('/tmp/x.js','w').write(js); subprocess.run(['node','/tmp/x.js'],check=True)
