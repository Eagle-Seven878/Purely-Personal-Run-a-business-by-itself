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
slide("Tuition / Price",cards("Three numbers to remember",[("Comparison price","P755,000<br><span class='t'>Total journey reference value: VIP, Gold and Platinum</span>"),("Regular price","P75,000<br><span class='t'>Planned 2027 price</span>"),("2026 member price","P60,000<br><span class='t'>VIP enrollment. Lock it in this year.</span>")]),cls="price")
S.append('<section class="s full"><div class="top"><img src="club-logo.png"><span class="k">Tuition / Price: the journey</span><span></span></div><img class="g" src="../assets/value-journey.jpg"><div class="foot">Club-assigned reference values, not prices.</div></section>')
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
.full{background:#06102c}.full .g{position:relative;flex:1;min-height:0;width:100%;object-fit:contain;padding:0 40px}'''
open('formula-deck.html','w').write(f'<!doctype html><meta charset="utf-8"><link href="https://fonts.googleapis.com/css2?family=Oswald:wght@600;700&family=Josefin+Sans:wght@400;600;700&display=swap" rel="stylesheet"><style>{css}</style>'+''.join(S))
print(len(S))
