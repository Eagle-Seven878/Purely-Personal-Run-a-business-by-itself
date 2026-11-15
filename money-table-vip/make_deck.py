import json
C="P"
P=[]
def add(**k): P.append(k)

# ---------- PART 1 WARM THE ROOM (Prepare logistics, Seeding)
add(type="story",id="cold-open",kicker="Warm the Room",label="Welcome",light=True,center=True,
 title="When the rules change,\ncan you ==change==?",
 lede="The Money Table · Philippine Cashflow Club",
 notes="[OUTLINE 1 · PREPARE LOGISTICS] Before going live: test audio and camera, open the chat, have your team ready to drop the link and welcome names. [Smile] Say nothing for three seconds, then read the line slowly. [PAUSE] This question is the heart of the Graduation Game, so it is also the heart of today. [2 min]")
add(type="statement",id="logistics",kicker="Warm the Room",label="Cameras on",over="First, together",
 title="Cameras on. Write where you are from in the chat.",
 notes="[OUTLINE 1 · LOGISTICS] Housekeeping in one breath: cameras on, say your city, mute when not speaking. Read three or four names aloud as they come in. Make them feel seen before you teach. [ROOM MOVE] Chat word: city name. [2 min]")
add(type="cards",id="rules",kicker="Warm the Room",label="Three rules",title="Three rules for today.",cardLabel="RULE",
 cards=[{"title":"Stay to the end","body":"The best part comes last."},{"title":"Play along in the chat","body":"When I ask, you type. It keeps us all in the game."},{"title":"An offer is coming","body":"At the end I will share the next step. You decide."}],
 notes="[OUTLINE 1 · SEEDING] Rule three is the seed: tell them honestly that an offer comes at the end. Honesty now removes resistance later. [Smile] Ask: 'Is that okay with everyone? Write OK.' [ROOM MOVE] Chat word: OK. [2 min]")
add(type="statement",id="promise",role="promise",kicker="Warm the Room",label="The promise",
 title="By the end, you will know your next step on the ==money ladder==.",
 notes="[OUTLINE 2 · SEEDING] One line promise. Plant the ladder idea: Guest, Regular, VIP, Gold. Say: 'Every one of you is standing on one of those steps today.' Do not sell yet. [1 min]")

# ---------- PART 2 EARN THE RIGHT (Problem / Solution, emotional story)
add(type="statement",id="problem",role="problem",kicker="Earn the Right · the problem",label="The problem",over="The problem",
 title="Most people play to win a round. Few learn to change.",
 notes="[OUTLINE 3 · PROBLEM] Tell it as a story: 'I have watched player after player do the same thing. Small deals, build capital, wait for the Big Deal, get out of the Rat Race. Then the Big Deals disappear.' [PAUSE] Ask: 'How many of you realise the rules of money are changing?' [ROOM MOVE] Chat word: ME. [3 min]")
add(type="swap",id="two-ways",kicker="Earn the Right · the solution",label="Two ways to play",
 title="You can wait for the Big Deal.\nOr you can ==learn to adapt==.",oldLabel="Waiting",newLabel="Adapting",
 old=["Same strategy every game","Hope the right card appears","Stuck when the rules change"],
 new=["Build capital with small deals","Pay down liabilities","Change your play when the rules change"],
 notes="[OUTLINE 3 · SOLUTION] This is the solution in one picture. It comes straight from how the Graduation Game is facilitated: the Big Deal cards are removed and the player must discover another way. Guide, do not give away the answer. [3 min]")
add(type="statement",id="low-point",kicker="Earn the Right · the story",label="The low point",over="Imagine this",
 title="The Big Deal cards are gone. ==Now what?==",sub="That moment is where players grow.",
 notes="[PAUSE] [Lower your voice. Look into the camera.] Tell the emotional story in your own words: a real player you facilitated, the moment the Big Deals were removed, what they felt, what they changed. Use a real first name only with permission. NEED: replace this beat with your true story. [3 min]")

# ---------- PART 3 TEACH ONE WIN
add(type="statement",id="win-1",kicker="Teach One Win",label="Value by comparison",over="One lesson",
 title="Value is measured by ==comparison==.",
 notes="[Teach one win] Taken from the club's own assessment: a player must tell a good deal from a bad deal. Ask the room: 'Which is better, a deal that pays 8 percent or one that loses money?' Obvious? Good. Now make it harder on the next slide. [2 min]")
add(type="statement",id="win-2",kicker="Teach One Win",label="Good deal or bad deal",over="Try it",
 title="A shopping mall at ==-24% ROI== is not a good Big Deal.",sub="Big does not mean good.",
 notes="[Teach one win] The club's own example: the Shopping Mall can look like a Big Deal, yet at minus 24 percent ROI it is not a good one. Ask: 'Would you buy it?' [ROOM MOVE] Chat word: YES or NO. Reveal: size is not the measure, return is. [3 min]")
add(type="statement",id="win-3",kicker="Teach One Win",label="Your turn",over="Your turn · 3 minutes",
 title="Write one deal you passed on. Was it really a bad deal?",
 notes="[Watch, then do] Give them three minutes of silence. Then ask two or three people to share. Pattern interrupt: stand up, stretch, then continue. [3 min]")
add(type="statement",id="win-result",kicker="Teach One Win",label="The result",
 title="You just practised the skill the ladder is built on.",
 notes="Close the win: they now see value by comparison. Say: 'That is one skill. The club teaches many, one game at a time.' [1 min]")

# ---------- PART 4 THE BRIDGE (Ask permission, Thank you)
add(type="statement",id="thanks-1",kicker="The Bridge",label="Thank you",
 title="Thank you for playing along.",
 notes="[OUTLINE 5 · THANK YOU] Thank them sincerely, by naming two or three people who took part. Gratitude earns the right to ask. [Smile] [1 min]")
add(**{"type":"question","id":"permission","kicker":"The Bridge · permission to sell","label":"Permission",
 "ask":"Would it be okay if I shared a small offer with you?","not":["No pressure.","It takes a few minutes."],"answer":"Write OK in the chat.",
 "notes":"[OUTLINE 4 · ASK PERMISSION] Ask warmly, then wait. Read out every OK. Anyone who does not answer is not ready, and that is fine. [ROOM MOVE] Chat word: OK. [2 min]"})
add(type="cards",id="story-proof",kicker="The Bridge · the experience",label="What players discover",dark=True,cardLabel="THE EXPERIENCE",
 title="What happens at the Graduation Game.",
 cards=[{"title":"The rules change","body":"The Big Deal cards are removed. The player must adapt."},{"title":"They discover it themselves","body":"Facilitators guide with questions. They never hand over the answer."},{"title":"They answer the question","body":"When the rules change, can you change?"}],
 notes="[OUTLINE 10 · TESTIMONIALS OR EMOTIONAL STORIES] This slide tells the emotional story from the club's own Graduation Game process, with no invented quotes. NEED: add one or two real member testimonials, word for word and with permission, as a testimonial slide here. [3 min]")

# ---------- THE OFFER
add(type="offer",id="offer",kicker="Pieces 1 and 2 · the name, where and when",label="The offer",
 name="The Money Table ==VIP== Package",tagline="Learn. Practice. Develop. Lead.",
 problem="How many of you want to know exactly what to do next, after your first games?",
 benefit="Your complete membership journey: start at VIP, grow into Gold, and qualify for Platinum with a real-life deal.",
 when=["Your start date is your Official Joining Date","It begins the day your payment is verified","Orientation by Zoom or face to face"],
 where="Philippine Cashflow Club, Alpha Chapter. Games, trainings and community.",format="Live games with certified facilitators. Every game verified and tracked.",
 notes="[OUTLINE 6, 11 and 12 · NAME, LOCATION, DATE] Ask the problem question first and read the chat. Then: 'That is why the club created The Money Table VIP.' Say the benefit slowly. NEED: replace the start line with the real VIP start date and venue or Zoom link when confirmed. [2 min]")
add(type="statement",id="for-whom",kicker="Who it is for",label="Who it is for",over="Who it is for",
 title="For players who finished their first games and want the ==next step==.",sub="Objective: move from playing to adapting.",
 notes="[OUTLINE 7 · WHO IS IT FOR / OBJECTIVE] Name the person clearly: someone who has played, wants more structure, and wants a visible path. Say who it is not for: people who only want a one-time game. [1 min]")
add(type="statement",id="learn-1",role="learn",kicker="What you will learn",label="What you will learn",over="Learn 1",
 title="How to read a deal: ROI, and good versus bad.",
 notes="[OUTLINE 8 · WHAT YOU WILL LEARN] From the club's VIP to Graduation parameters: ROI, and value by comparison. [1 min]")
add(type="statement",id="learn-2",role="learn",kicker="What you will learn",label="What you will learn",over="Learn 2",
 title="How to build capital: DealFlow and market research.",
 notes="Capital building and market research, plus how the rich write and read a financial statement inside the game. [1 min]")
add(type="statement",id="learn-3",role="learn",kicker="What you will learn",label="What you will learn",over="Learn 3",
 title="How to adapt when the rules change.",
 notes="Paying liabilities, cooperation play, and the Graduation Game question. [1 min]")
add(type="cards",id="benefits",kicker="Key benefits",label="Key benefits",title="What you get from it.",cardLabel="BENEFIT",
 cards=[{"title":"A path you can see","body":"Start as VIP. Grow into Gold. Aspire to Platinum."},{"title":"Every game counts","body":"Official games are verified and kept in your record."},{"title":"A community that plays with you","body":"Members, facilitators and a VIP community."}],
 notes="[OUTLINE 9 · KEY BENEFITS] Three benefits, no more. Tie each to a line from the club's member dashboard: 'What is my next step?' is always answered. [2 min]")

# journey graphic (official)
add(type="slide",id="journey",kicker="Your membership journey",label="Your journey",image="assets/journey.jpg",caption="Start here. Grow. Lead.",notes="x")
# stack items: values from the Club's official Value Journey graphic (Club-assigned benefit values)
V="Club-assigned reference value from the official membership journey graphic."
seq=[
 ("10 Regular Games","Games and training before graduation.",15000,None,"VIP · Piece 3 · everything you get",V),
 ("3 SRT Games","Games and training before graduation.",15000,None,"VIP · Piece 3 · everything you get",V+" SRT is Sir Ron's Table. Do not explain it."),
 ("RELM","Training before graduation.",15000,None,"VIP · Piece 3 · everything you get",V+" Do not explain RELM."),
 ("The Graduation Game","The game where the rules change. Scheduled when your games and training are complete.",25000,None,"VIP · Piece 3 · everything you get",V),
 ("The VIP Game","Your game on the way to Gold.",25000,None,"VIP · Piece 3 · everything you get",V),
 ("VIP Training","Irresistible Offer, Facilitation, Teach to Be Rich, Masterpiece of a Deal.",210000,None,"VIP · Piece 3 · everything you get",V+" 15,000 + 50,000 + 50,000 + 95,000."),
 ("Unlimited Club Games","Value basis: 50 games at P1,500. Not a play limit.",75000,None,"Gold · Piece 3 · everything you get",V),
 ("Advanced Games","FOMO 1, FOMO 2 and No Pay Day, P10,000 each.",30000,None,"Gold · Piece 3 · everything you get",V),
 ("Gold Training","Public Speaking, Training and Coaching Development, Leadership.",175000,None,"Gold · Piece 3 · everything you get",V+" 50,000 + 75,000 + 50,000."),
 ("Platinum Training","Psychology of Winning and Irresistible Confidence.",170000,None,"Platinum · Piece 3 · the path ahead",V+" 85,000 + 85,000."),
 ("Opportunity Pathways","Speaking, facilitation, training, coaching, travel and partnerships.",None,"By invitation","Gold and Platinum · Piece 3 · the path ahead","By invitation. Depends on qualifications and availability. No monetary value assigned."),
]
n=len(seq)
for i,(nm,d,v,vt,k,note) in enumerate(seq,1):
    p=dict(type="item",id=f"item-{i}",kicker=k,label=nm,heading="Everything you get",n=i,of=n,name=nm,desc=d,currency=C,notes="[STACK] "+note)
    if v is not None: p["value"]=v
    else: p["valueText"]=vt
    add(**p)
stack=[]
for nm,d,v,vt,k,note in seq:
    stack.append({"name":nm,"value":v} if v is not None else {"name":nm,"valueText":vt})
total=sum(v for _,_,v,_,_,_ in seq if v is not None)
add(type="stacklist",id="stack-list",build=True,kicker="Piece 3 · everything you get",label="Everything you get",title="Everything you get",items=stack,totalLabel="Total journey value",currency=C,stepNotes=["x"]*len(stack))
add(type="slide",id="value-journey",kicker="Your membership value journey",label="Value journey",image="assets/value-journey.jpg",caption="Club-assigned reference values, not prices.",notes="x")
add(type="statement",id="values-note",kicker="Please note",label="Please note",over="Please note",
 title="Club-assigned reference values, not prices.",sub="Gold and Platinum are progression levels you grow into.",notes="x")
add(type="cards",id="ladder",kicker="Tuition and price",label="The price",title="Three numbers to remember.",cardLabel="THE PRICE",
 cards=[{"title":"Total journey value","body":f"{C}755,000 across VIP, Gold and Platinum."},{"title":"Planned 2027 price","body":f"{C}75,000."},{"title":"2026 enrollment","body":f"{C}60,000. Lock it in this year."}],
 notes="x")
add(type="struck",id="struck",kicker="Pieces 4, 5 and 6 · the anchor, the reason, the drop",label="The total",amount=total,currency=C,notes="x")
add(type="statement",id="future-bonuses",kicker="Introduce future bonuses",label="What comes next",over="What comes next",
 title="Gold: deals in the game. ==Platinum==: a real-life deal.",sub="Any VIP can qualify.",
 notes="x")
add(type="statement",id="reason",role="reason",kicker="Pieces 4, 5 and 6 · the anchor, the reason, the drop",label="Why today",
 title="From 2027, the planned price is P75,000.",sub="Enroll in 2026 and keep the 2026 rate.",
 notes="x")
add(type="price",id="price",kicker="Pieces 4, 5 and 6 · the anchor, the reason, the drop",label="The price",anchor=total,price=60000,currency=C,
    reframe="Planned 2027 price: P75,000. Save P15,000.",todayLabel="VIP enrollment, 2026",was=True,notes="x")
add(type="limiter",id="limiter",kicker="Piece 7 · the limiter",label="The limit",title="The 2026 rate ends with the year.",kind="deadline",
    deadline="Planned 2027 price: P75,000",line="Join in 2026 and you lock in P60,000. You save P15,000.",notes="x")
add(type="statement",id="bonuses",kicker="Bonuses",label="Bonuses",over="Where the journey leads",
 title="Gold after the VIP Game. ==Platinum== with a real-life deal.",sub="Opportunities by invitation, beginning at Gold.",
 notes="x")
add(type="cards",id="payment",kicker="Payment options",label="Payment options",title="Two simple ways to join.",cardLabel="PAY",
 cards=[{"title":"Pay in full","body":"P60,000 once. Your 2026 rate is locked the moment it is verified."},
        {"title":"Reserve your seat","body":"A P20,000 down payment locks the 2026 rate. The balance follows in two equal payments."},
        {"title":"GCash, Maya, bank or cash","body":"Pay only to the official Club account your facilitator confirms."}],
 notes="x")
add(type="route",id="payment-steps",kicker="How it works",label="How it works",bgword="PAYMENT",title="Four steps. Then you are in.",
 steps=[{"title":"Choose","body":"Pay in full, or reserve"},{"title":"Pay","body":"Official Club account only"},{"title":"Send proof","body":"Screenshot or receipt"},{"title":"Get verified","body":"Receipt, Member ID, welcome"}],
 lede="Your Official Joining Date is the day your payment is verified.",notes="x")
add(type="statement",id="guarantee",kicker="Guarantee",label="Your seat is documented",over="Guarantee",
 title="Receipt. Member ID. Signed agreement. Your path is on record.",
 notes="x")
add(type="statement",id="close",kicker="The Close",label="The close",
 title="Bayanihan. Kapwa. Katiwala. ==Your place is ready==.",
 notes="x")
add(type="cta",id="cta",kicker="Piece 8 · the call to action",label="Join now",title="Here is exactly what to do now.",
 steps=["Message your facilitator or the club page","Pay in full or reserve your seat","Write VIP in the chat"],chatWord="VIP",link="Facilitator or club page",price=60000,currency=C,help="Payment issue? Write TEAM in the chat.",
 notes="x")
add(type="buyerswall",id="wall",kicker="Welcome",label="Welcome to VIP",title="Welcome to VIP.",lede="Type each first name as it lands.",
 notes="Type the first name of each person who writes VIP and press Enter. Names appear on the wall. [3 min]")
add(type="statement",id="thanks-end",kicker="Thank you",label="Thank you",
 title="Thank you. When the rules change, ==you can change==.",
 notes="[OUTLINE 24 · THANK YOU] Mirror the opening line, warmer. Thank everyone: those who joined and those who did not. Remind them what happens next. [1 min]")


# ---- real event photos ----
import re as _re
PH="assets/photos/"
by={p["id"]:p for p in P}
c=by["cold-open"]; c.pop("light",None); c["image"]=PH+"table-1.jpg"; c["focus"]="50% 40%"; c["breath"]=1.5
by["promise"]["image"]=PH+"room-screen.jpg"; by["promise"]["focus"]="45% 50%"
lp=by["low-point"]; lp["image"]=PH+"table-2.jpg"; lp["fit"]="cover"; lp["focus"]="60% 40%"; lp["breath"]=2
by["thanks-1"]["image"]=PH+"room-hand.jpg"; by["thanks-1"]["focus"]="30% 50%"
by["for-whom"]["image"]=PH+"room-seated.jpg"; by["for-whom"]["focus"]="50% 60%"
rs=by["reason"]; rs["image"]=PH+"speaker-2.jpg"; rs["fit"]="cover"; rs["focus"]="30% 50%"
by["close"]["image"]=PH+"group-2.jpg"; by["close"]["fit"]="cover"; by["close"]["focus"]="50% 55%"
te=by["thanks-end"]; te["image"]=PH+"table-1.jpg"; te["fit"]="cover"; te["focus"]="50% 40%"
for _id in ("low-point","reason","close","thanks-end"):
    by[_id]["title"]=_re.sub(r"==","",by[_id]["title"])
def after(pid,panel):
    i=[x["id"] for x in P].index(pid); P.insert(i+1,panel)
after("promise",dict(type="slide",id="group-photo",kicker="Warm the Room",label="Smile",image=PH+"group.jpg",caption="Smile.",notes="x"))
after("story-proof",dict(type="slide",id="table-photo",kicker="The Bridge · the experience",label="At the table",image=PH+"table-3.jpg",caption="Real players. Real tables.",notes="x"))
from script import S, STACK
for p in P:
    if p["id"] in S: p["notes"]=S[p["id"]]
    if p["type"]=="stacklist": p["stepNotes"]=STACK
deck={"mode":"blueprint","title":"The Money Table VIP","titleLines":["The Money","Table VIP"],
 "badge":"Philippine Cashflow Club · DRAFT, confirm flagged numbers before presenting",
 "promise":"The next step on the money ladder. When the rules change, can you change?",
 "theme":"simple","length":90,"heroImage":"assets/photos/group.jpg","heroFocus":"50% 50%","panels":P}
json.dump(deck,open("money-table-vip.deck.json","w"),ensure_ascii=False,indent=1)
print(len(P),"panels, stack total",total)
