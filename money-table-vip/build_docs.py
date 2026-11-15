import json,re,html,glob
from PIL import Image
d=json.load(open('money-table-vip.deck.json'))
md=open('money-table-vip-script.md').read()
head=md[:md.index('---')]
head=re.sub(r"- \[ \] GRADUATION PACE:.*\n","- [ ] GRADUATION PACE (confirmed by the Club): it depends on how soon each participant wants the basics, and games run daily. SRT is recommended within the first 10 games and before Graduation. Confirm the daily schedule is live before saying so.\n",head)
out=[head+"---",""]
n=0
def title(p): return p.get("title") or p.get("ask") or p.get("name") or p.get("label")
for p in d["panels"]:
    t=re.sub(r"==|\*\*","",str(title(p))).replace("\n"," ")
    if p["type"]=="stacklist":
        L=len(p["stepNotes"])
        for i,sn in enumerate(p["stepNotes"],1):
            n+=1; out+=[f"## Slide {n} · Everything you get ({i} of {L})","",sn,""]
        continue
    n+=1; out+=[f"## Slide {n} · {t}","",f"*On screen: {p['type']}*","",p["notes"],""]
out+=["---","","## Appendix · If someone asks about the Graduation Game","",
"**\"When do I graduate?\"**","SAY: \"It depends on you, on how soon you want the basics. Our games now run daily, so the more you play, the sooner you reach your Graduation Game. Your facilitator will show you exactly where you are on your journey.\"","«CONFIRM the daily schedule is live before saying so. Never promise a date.»","",
"**\"Do I have to play the SRT Games before Graduation?\"**","SAY: \"We recommend them within your first 10 games, and before graduation. Your facilitator will guide you.\"","«Do not explain what SRT is for. If pressed: \"You will discover why as you play.\"»","",
"**\"Why the extra steps before Graduation?\"**","SAY: \"Because Graduation is not another game. It is the moment the rules change. We want you ready for it, so you get the most from it.\"","«Do not explain RELM or SRT. If pressed: \"You will discover why as you play.\"»","",
"**\"What if I am not ready?\"**","SAY: \"Then you keep playing, at your own pace, and your facilitator tells you what to focus on. You graduate when you have the basics.\"","",]
open("money-table-vip-script.md","w").write("\n".join(out)); print(n)
fs=sorted(glob.glob('verify-shots/panel-*.png')); ims=[Image.open(f).convert('RGB') for f in fs]
ims[0].save('money-table-vip-deck.pdf',save_all=True,append_images=ims[1:],resolution=110); print(len(ims))
def inl(t):
    t=html.escape(t); t=re.sub(r'\*\*(.+?)\*\*',r'<b>\1</b>',t); t=re.sub(r'`(.+?)`',r'<code>\1</code>',t)
    t=re.sub(r'«(CONFIRM|PRIVATE|IMPORTANT|Do not)(.*?)»',r'<span class="note">\1\2</span>',t,flags=re.S)
    t=re.sub(r'\[([^\]]+)\]',r'<i class="cue">[\1]</i>',t); return t
body=[]
for ln in "\n".join(out).split('\n'):
    if ln.startswith('# '): body.append(f'<h1>{inl(ln[2:])}</h1>')
    elif ln.startswith('## Slide') or ln.startswith('## Appendix'): body.append(f'<h2>{inl(ln[3:])}</h2>')
    elif ln.startswith('## '): body.append(f'<h2 class="plain">{inl(ln[3:])}</h2>')
    elif ln.startswith('- [ ] '): body.append(f'<p class="chk">&#9744; {inl(ln[6:])}</p>')
    elif ln.strip()=='---': body.append('<hr>')
    elif ln.startswith('*On screen'): body.append(f'<p class="scr">{inl(ln.strip("*"))}</p>')
    elif ln.strip()=='': pass
    else: body.append(f'<p>{inl(ln)}</p>')
css=open('/tmp/script.html').read().split('<style>')[1].split('</style>')[0]
open('/tmp/script.html','w').write('<!doctype html><meta charset="utf-8"><link href="https://fonts.googleapis.com/css2?family=Oswald:wght@600;700&family=Josefin+Sans:wght@400;600;700&display=swap" rel="stylesheet"><style>'+css+'</style>'+'\n'.join(body))
