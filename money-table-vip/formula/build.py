import html,os
P="../assets/photos/"
S=[]
def esc(t): return html.escape(t,quote=False)
def slide(kicker,body,photo=None,cls=""):
    bg=f'<div class="ph" style="background-image:url({P}{photo})"></div><div class="shade"></div>' if photo else ''
    S.append(f'<section class="s {cls}">{bg}<div class="top"><img src="club-logo.png"><span class="k">{esc(kicker)}</span><span></span></div><div class="c">{body}</div><div class="foot">Bayanihan &bull; Kapwa &bull; Katiwala</div></section>')
def big(t,sub=None,small=None):
    h=f'<h1>{t}</h1>'
    if sub: h+=f'<p class="sub">{sub}</p>'
    if small: h+=f'<p class="small">{small}</p>'
    return h
def cards(title,cs,lab=None):
    h=f'<h2>{title}</h2><div class="cards">'
    for t,b in cs: h+=f'<div class="card"><h3>{t}</h3><p>{b}</p></div>'
    return h+'</div>'
G=lambda t:f'<em>{t}</em>'
slide("Prepare logistics",big("Welcome to <em>The Money Table</em>","Settle in. Name tag on. Phones on silent. Say hello to someone new."),"room-wide.jpg")
slide("Seeding",big("By the end, you will know your next step on the <em>money ladder</em>.","Guest. Regular. VIP. Gold. An offer is coming at the end. You decide."))
slide("Problem / Solution (emotional story)",'<div class="two"><div><h4>The problem</h4><h2>Most people play to win a round. Few learn to change.</h2></div><div><h4>The solution</h4><h2>Learn to adapt. Build capital. Pay down liabilities. Change your play when the rules change.</h2></div></div>',"table-1.jpg")
slide("Ask permission",big("Would it be okay if I shared a small <em>offer</em> with you?","No pressure. It takes a few minutes. Raise your hand if it is okay."))
slide("Thank you",big("Thank you.","For playing along, and for being honest at the table."),"room-hand.jpg")
slide("Name of program or product",big("The Money Table <em>VIP Package</em>","Learn. Practise. Develop. Lead.","Your complete membership journey: start at VIP, grow into Gold, and qualify for Platinum with a real-life deal."))
slide("Who is it for / Objective",big("For players who finished their first games and want the <em>next step</em>.","Objective: move from playing to adapting."),"room-seated.jpg")
slide("What you will learn",cards("What you will learn",[("Read a deal","ROI, and how to tell a good deal from a bad deal."),("Build capital","DealFlow and market research."),("Adapt","How to change your play when the rules change.")]))
slide("Key benefits",cards("Key benefits",[("A path you can see","Start as VIP. Grow into Gold. Qualify for Platinum."),("Every game counts","Official games are verified and kept in your record."),("A community","Members and facilitators who play with you.")]))
slide("Testimonials or emotional stories",'<h2>The Big Deal cards are gone. <em>Now what?</em></h2><div class="line"><p><b>The rules change.</b> The player must adapt.</p><p><b>They discover it themselves.</b> Facilitators guide with questions.</p><p><b>They answer the question:</b> when the rules change, can you change?</p></div>',"table-2.jpg")
slide("Course location",big("Philippine <em>Cashflow Club</em>","Orientation by Zoom or face to face.","Games run daily."))
slide("Course date",big("Starts the day your payment is <em>verified</em>","That is your Official Joining Date.","Games run daily, so your pace is yours."))
def stack(kicker,tier,tag,rows,total_label,total,extra=None,running=None,note=None):
    h=f'<div class="stk"><div class="tier"><span>{tier}</span><em>{tag}</em></div><div class="rows">'
    for n,v in rows: h+=f'<div class="row"><span>{n}</span><b>{v}</b></div>'
    if extra: h+=f'<div class="row ex"><span>{extra[0]}</span><b>{extra[1]}</b></div>'
    h+='</div><div class="tot"><span>'+total_label+'</span><b>'+total+'</b></div>'
    if running: h+='<div class="run">'+running+'</div>'
    if note: h+='<p class="note">'+note+'</p>'
    return h+'</div>'
slide("Tuition / Price: VIP",stack("","VIP","Learn &amp; Practise &middot; your starting point",[("10 Regular Games","P15,000"),("3 SRT Games","P15,000"),("RELM","P15,000"),("Graduation Game","P25,000"),("VIP Game","P25,000"),("Irresistible Offer","P15,000"),("Facilitation Training","P50,000"),("Teach to Be Rich","P50,000"),("Masterpiece of a Deal","P95,000")],"VIP benefit value","P305,000"),cls="stack")
slide("Tuition / Price: Gold",stack("","GOLD","Develop &amp; Expand &middot; beyond VIP",[("Unlimited Club Games","P75,000"),("FOMO 1","P10,000"),("FOMO 2","P10,000"),("No Pay Day","P10,000"),("Public Speaking Training","P50,000"),("Training &amp; Coaching Development","P75,000"),("Leadership Training","P50,000")],"Gold additional value","P280,000",extra=("Opportunity pathways, by invitation","No value assigned"),running="VIP + Gold &nbsp; <b>P585,000</b>",note="Unlimited-play value basis: 50 games at P1,500. It is not a play limit."),cls="stack gold")
slide("Tuition / Price: Platinum",stack("","PLATINUM","Lead &amp; Collaborate &middot; the highest level",[("Psychology of Winning","P85,000"),("Irresistible Confidence","P85,000")],"Platinum training value","P170,000",extra=("Advanced leadership and business partnerships, by invitation","No value assigned"),running="VIP + Gold + Platinum &nbsp; <b>P755,000</b>",note="Any VIP can qualify, with a real-life deal. Opportunities depend on qualifications and availability."),cls="stack plat")
slide("Tuition / Price: combined total",'<h2>Put it all together</h2><div class="comb"><div><span>VIP</span><b>P305,000</b></div><i>+</i><div><span>Gold</span><b>P280,000</b></div><i>+</i><div><span>Platinum</span><b>P170,000</b></div></div><div class="eq"><span>Total journey reference value</span><b>P755,000</b></div><p class="small">Club-assigned reference values, not prices. Gold and Platinum are separate progression levels.</p>',cls="price")
S.append('<section class="s full"><div class="top"><img src="club-logo.png"><span class="k">Tuition / Price: the whole journey</span><span></span></div><img class="g" src="../assets/value-journey.jpg"><div class="foot">Club-assigned reference values, not prices.</div></section>')
slide("Tuition / Price: comparison",'<h2>Value against price</h2><div class="cmp"><div class="mut"><span>Total journey reference value</span><b>P755,000</b><p>VIP, Gold and Platinum</p></div><div><span>Regular price</span><b>P75,000</b><p>Planned 2027 price</p></div><div class="hi"><span>2026 enrollment</span><b>P60,000</b><p>VIP. Save P15,000.</p></div></div><p class="small">VIP alone carries P305,000 of Club reference value, about five times the 2026 enrollment.</p>',cls="price")
slide("Introduce future bonuses",big("Start as VIP. Grow into <em>Gold</em> after the VIP Game.","Platinum is the highest level, for those who prove it with a real-life deal."))
slide("Reason for deal",big("From 2027, the planned price is <em>P75,000</em>.","Enroll in 2026 and keep the 2026 rate."))
slide("Limitation",big("The 2026 rate <em>ends with the year</em>.","After that, the planned price is P75,000."))
slide("Special offer",'<p class="lab">VIP enrollment &middot; 2026 rate</p><div class="strike">P755,000 reference value</div><div class="bigp">P60,000</div><p class="sub">Planned 2027 price: P75,000. Save P15,000.</p><p class="small">Club-assigned reference values, not prices. Gold and Platinum are separate progression levels.</p>',cls="offer")
slide("Bonuses",cards("Beyond VIP",[("Gold","P280,000 reference value. Unlimited Club Games, Advanced Games, Gold Training."),("Platinum training","P170,000 reference value. Psychology of Winning, Irresistible Confidence."),("Opportunity pathways","By invitation. Speaking, facilitation, training, coaching, travel, partnerships.")]))
slide("Payment options",cards("Two simple ways to join",[("Pay in full","P60,000 once. Your 2026 rate is locked when it is verified."),("Reserve your seat","P20,000 down payment locks the 2026 rate. Balance in two equal payments."),("Pay safely","GCash, Maya, bank or cash. Official Club account only.")]))
slide("Guarantee",big("Receipt. Member ID. <em>Signed agreement.</em>","Your seat is documented. Your path is on record."))
slide("Close",big("Bayanihan. Kapwa. Katiwala.","Your place is <em>ready</em>."),"group-2.jpg")
slide("Call to action",'<h2>Here is exactly what to do now</h2><div class="steps"><div><b>1</b><p>Message your facilitator or the Club page</p></div><div><b>2</b><p>Pay in full, or reserve your seat</p></div><div><b>3</b><p>Say <em>VIP</em> and join the family</p></div></div>')
slide("Thank you",big("When the rules change, <em>you can change</em>.","Thank you."),"table-1.jpg")
css='''@page{size:1280px 720px;margin:0}*{box-sizing:border-box}body{margin:0;font-family:"Josefin Sans",sans-serif;color:#f6f1e3}
.s{width:1280px;height:720px;position:relative;overflow:hidden;background:radial-gradient(ellipse at 50% 30%,#14275c 0%,#0a1233 70%);page-break-after:always;display:flex;flex-direction:column}
.ph{position:absolute;inset:0;background-size:cover;background-position:center}.shade{position:absolute;inset:0;background:linear-gradient(180deg,rgba(6,12,36,.72),rgba(6,12,36,.86))}
.top{position:relative;display:grid;grid-template-columns:1fr auto 1fr;align-items:center;padding:26px 44px}.top img{height:54px;background:#fff;border-radius:8px;padding:3px 6px}
.k{font-family:Oswald,sans-serif;letter-spacing:.22em;text-transform:uppercase;color:#dfb032;font-size:17px;border:1.5px solid #dfb032;border-radius:999px;padding:6px 18px}
.c{position:relative;flex:1;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;padding:0 90px}
h1{font-family:Oswald,sans-serif;font-weight:700;font-size:70px;line-height:1.08;margin:0;color:#fff}h1 em,h2 em{font-style:normal;color:#dfb032}
h2{font-family:Oswald,sans-serif;font-weight:700;font-size:48px;line-height:1.12;margin:0 0 26px;color:#fff}
.sub{font-size:32px;margin:22px 0 0;color:#f6f1e3;max-width:1000px}.small{font-size:22px;margin:16px 0 0;color:#cdbf8f;max-width:1000px}
.foot{position:relative;text-align:center;color:#dfb032;letter-spacing:.2em;font-size:15px;text-transform:uppercase;padding:0 0 22px}
.cards{display:flex;gap:26px;width:100%}.card{flex:1;background:linear-gradient(180deg,#f9f3e0,#efe3bd);color:#14214a;border-radius:20px;padding:30px 24px;border:3px solid #dfb032;box-shadow:0 10px 30px rgba(0,0,0,.35)}
.card h3{font-family:Oswald,sans-serif;font-size:32px;margin:0 0 10px;color:#6a137c}.card p{font-size:24px;line-height:1.35;margin:0}.price .card p{font-family:Oswald,sans-serif;font-size:50px;color:#14214a;font-weight:700}.t{font-family:"Josefin Sans";font-size:19px;font-weight:600;color:#47506d}
.two{display:flex;gap:40px;width:100%;text-align:left}.two>div{flex:1;border-left:4px solid #dfb032;padding-left:26px}.two h4{font-family:Oswald,sans-serif;color:#dfb032;letter-spacing:.2em;text-transform:uppercase;font-size:20px;margin:0 0 10px}.two h2{font-size:38px;margin:0}
.line{text-align:left;max-width:980px}.line p{font-size:30px;margin:10px 0}.line b{color:#dfb032}
.lab{font-family:Oswald,sans-serif;letter-spacing:.2em;color:#dfb032;text-transform:uppercase;font-size:26px;margin:0}.strike{font-family:Oswald,sans-serif;font-size:42px;color:#aab3d6;text-decoration:line-through;text-decoration-color:#dfb032;text-decoration-thickness:4px;margin:10px 0 0}
.bigp{font-family:Oswald,sans-serif;font-weight:700;font-size:190px;line-height:1;color:#dfb032;text-shadow:0 6px 0 rgba(0,0,0,.35)}
.steps{display:flex;gap:30px;width:100%}.steps div{flex:1;background:rgba(255,255,255,.08);border:2px solid #dfb032;border-radius:20px;padding:28px}.steps b{display:block;font-family:Oswald,sans-serif;font-size:64px;color:#dfb032}.steps p{font-size:28px;margin:6px 0 0}.steps em{font-style:normal;color:#dfb032;font-weight:700}
.stk{width:100%;max-width:1040px}.tier{display:flex;align-items:baseline;gap:18px;justify-content:center;margin-bottom:10px}.tier span{font-family:Oswald,sans-serif;font-size:60px;font-weight:700;color:#dfb032}.tier em{font-style:normal;font-size:22px;color:#f6f1e3;letter-spacing:.06em;text-transform:uppercase}
.rows{background:linear-gradient(180deg,#f9f3e0,#efe3bd);border:3px solid #dfb032;border-radius:16px;padding:8px 24px;color:#14214a}.row{display:flex;justify-content:space-between;align-items:center;font-size:23px;padding:5px 0;border-bottom:1px solid rgba(20,33,74,.15)}.row:last-child{border:0}.row b{font-family:Oswald,sans-serif;font-size:25px;background:#dfb032;border-radius:8px;padding:0 12px;min-width:130px;text-align:right}.row.ex{font-style:italic;color:#47506d}.row.ex b{background:transparent;font-size:19px;font-family:"Josefin Sans"}
.tot{display:flex;justify-content:space-between;align-items:center;margin-top:12px;background:#0a1233;border:3px solid #dfb032;border-radius:14px;padding:6px 24px}.tot span{font-family:Oswald,sans-serif;letter-spacing:.1em;text-transform:uppercase;font-size:26px;color:#f6f1e3}.tot b{font-family:Oswald,sans-serif;font-size:50px;color:#dfb032}
.run{margin-top:10px;font-family:Oswald,sans-serif;font-size:30px;color:#f6f1e3}.run b{color:#dfb032;font-size:38px}.note{font-size:17px;color:#cdbf8f;margin:6px 0 0}
.comb{display:flex;align-items:center;gap:22px;justify-content:center}.comb div{background:linear-gradient(180deg,#f9f3e0,#efe3bd);border:3px solid #dfb032;border-radius:18px;padding:20px 32px;color:#14214a}.comb span{display:block;font-family:Oswald,sans-serif;font-size:30px;color:#6a137c}.comb b{font-family:Oswald,sans-serif;font-size:52px}.comb i{font-family:Oswald,sans-serif;font-style:normal;font-size:56px;color:#dfb032}
.eq{margin-top:26px;display:flex;gap:26px;align-items:baseline;justify-content:center}.eq span{font-family:Oswald,sans-serif;font-size:30px;letter-spacing:.1em;text-transform:uppercase}.eq b{font-family:Oswald,sans-serif;font-size:96px;color:#dfb032}
.cmp{display:flex;gap:26px;width:100%}.cmp div{flex:1;background:rgba(255,255,255,.07);border:2px solid #7d89b8;border-radius:20px;padding:26px}.cmp span{font-family:Oswald,sans-serif;letter-spacing:.1em;text-transform:uppercase;font-size:22px;color:#cdbf8f}.cmp b{display:block;font-family:Oswald,sans-serif;font-size:72px;color:#fff;margin:6px 0}.cmp p{font-size:22px;margin:0}.cmp .mut b{color:#aab3d6;text-decoration:line-through;text-decoration-color:#dfb032;text-decoration-thickness:4px}.cmp .hi{background:linear-gradient(180deg,#f9f3e0,#efe3bd);border:4px solid #dfb032;color:#14214a;transform:scale(1.06)}.cmp .hi span{color:#6a137c}.cmp .hi b{color:#14214a;font-size:84px}
.stack .c{padding:0 70px;justify-content:flex-start}.stack .top{padding:12px 44px}.stack .top img{height:42px}.stack .foot{display:none}.stack .tier{margin:2px 0 8px}.stack .tier span{font-size:54px}.stack .tier em{font-size:19px}.stack .row{font-size:23px;padding:4px 0}.stack .row b{font-size:24px;padding:0 12px}.stack .rows{padding:4px 22px}.stack .tot{margin-top:8px;padding:2px 22px}.stack .tot span{font-size:25px}.stack .tot b{font-size:46px}.stack .run{margin-top:8px;font-size:30px}.stack .run b{font-size:36px}.stack .note{font-size:18px;margin:6px 0 0}.gold .tier span{color:#f0c85a}.plat .tier span{color:#e8ecf7}
.full{background:#06102c}.full .g{position:relative;flex:1;min-height:0;width:100%;object-fit:contain;padding:0 40px}'''
open('formula-deck.html','w').write(f'<!doctype html><meta charset="utf-8"><link href="https://fonts.googleapis.com/css2?family=Oswald:wght@600;700&family=Josefin+Sans:wght@400;600;700&display=swap" rel="stylesheet"><style>{css}</style>'+''.join(S))
print(len(S))
