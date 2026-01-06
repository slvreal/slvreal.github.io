:root{
  --bg: #020606;
  --panel: rgba(0, 255, 120, 0.06);
  --panel2: rgba(0, 255, 120, 0.10);
  --border: rgba(0, 255, 120, 0.22);
  --text: rgba(160, 255, 200, 0.92);
  --muted: rgba(140, 255, 190, 0.72);
  --green: #00ff77;
  --green2: #00cc66;
  --shadow: 0 18px 70px rgba(0,0,0,.55);
  --radius: 16px;
  --glow: 0 0 12px rgba(0,255,120,.25);
  --glow-strong: 0 0 18px rgba(0,255,120,.40);
}

[data-glow="low"]{
  --glow: 0 0 6px rgba(0,255,120,.18);
  --glow-strong: 0 0 10px rgba(0,255,120,.22);
}

*{ box-sizing:border-box; }
html{ scroll-behavior:smooth; }
body{
  margin:0;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  background: var(--bg);
  color: var(--text);
  overflow-x:hidden;
}

.wrap{
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 18px;
}

a{ color:inherit; text-decoration:none; }
::selection{ background: rgba(0,255,120,.25); }

#matrix{
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: -3;
  background: #000;
}

/* CRT overlay: scanlines + subtle vignette */
.crt{
  position: fixed;
  inset: 0;
  z-index: -2;
  pointer-events: none;
  background:
    radial-gradient(1200px 700px at 50% 40%, rgba(0,255,120,.08), transparent 60%),
    radial-gradient(900px 500px at 20% 10%, rgba(0,180,90,.07), transparent 55%),
    radial-gradient(900px 500px at 80% 10%, rgba(0,180,90,.06), transparent 55%),
    linear-gradient(to bottom, rgba(255,255,255,.05) 1px, transparent 1px);
  background-size: auto, auto, auto, 100% 3px;
  mix-blend-mode: screen;
  opacity: .55;
}

.topbar{
  position: sticky;
  top: 0;
  z-index: 10;
  backdrop-filter: blur(10px);
  background: rgba(0,0,0,.35);
  border-bottom: 1px solid rgba(0,255,120,.16);
}

.topbar__inner{
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap: 12px;
  padding: 12px 0;
}

.brand{
  display:flex; align-items:center; gap:10px;
  white-space:nowrap;
}
.brand__dot{
  width: 10px; height: 10px; border-radius: 999px;
  background: var(--green);
  box-shadow: var(--glow-strong);
}
.brand__text{ font-weight: 900; letter-spacing: .04em; }
.brand__sep{ color: var(--muted); }
.brand__sub{ color: var(--muted); }

.nav{
  display:flex; gap: 14px;
  align-items:center;
}
.nav__link{
  color: var(--muted);
  padding: 8px 10px;
  border-radius: 999px;
  border: 1px solid transparent;
}
.nav__link:hover{
  color: var(--text);
  border-color: rgba(0,255,120,.22);
  box-shadow: var(--glow);
  background: rgba(0,255,120,.05);
}

.actions{ display:flex; gap: 10px; align-items:center; }

.btn{
  border: 1px solid rgba(0,255,120,.22);
  background: rgba(0,255,120,.05);
  color: var(--text);
  padding: 9px 12px;
  border-radius: 999px;
  cursor: pointer;
  box-shadow: var(--glow);
  font-weight: 800;
  letter-spacing: .04em;
}
.btn:hover{ background: rgba(0,255,120,.09); }
.btn--primary{
  background: linear-gradient(135deg, rgba(0,255,120,.22), rgba(0,255,120,.06));
  border-color: rgba(0,255,120,.32);
}

/* Terminal window */
.terminal{
  margin: 22px 0 18px;
  border-radius: var(--radius);
  border: 1px solid var(--border);
  box-shadow: var(--shadow);
  background: rgba(0,0,0,.45);
  overflow:hidden;
}

.terminal__bar{
  display:flex;
  align-items:center;
  gap: 8px;
  padding: 12px 14px;
  background: rgba(0,255,120,.06);
  border-bottom: 1px solid rgba(0,255,120,.18);
}
.dot{ width: 10px; height: 10px; border-radius: 999px; opacity:.85; }
.dot--red{ background:#ff5f57; }
.dot--yellow{ background:#febc2e; }
.dot--green{ background:#28c840; }
.terminal__title{
  margin-left: 10px;
  color: var(--muted);
  font-weight: 900;
}

.terminal__body{ padding: 16px 16px 18px; }

.line{ margin: 0 0 10px; }
.prompt{ color: rgba(0,255,120,.95); text-shadow: var(--glow); }
.colon, .path, .dollar{ color: rgba(0,255,120,.85); }
.cmd{ color: var(--text); }
.output{ color: rgba(170,255,210,.90); }
.glow{ text-shadow: var(--glow); }

.gradient{
  background: linear-gradient(90deg, var(--green), rgba(160,255,200,.9));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
.cursor{
  display:inline-block;
  margin-left: 2px;
  animation: blink 1s steps(2) infinite;
}
@keyframes blink{ 50%{ opacity:0; } }

/* Panels */
.grid{
  display:grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-top: 14px;
}

.panel{
  border: 1px solid rgba(0,255,120,.18);
  background: var(--panel);
  border-radius: 14px;
  padding: 12px;
}
.panel__title{
  color: var(--muted);
  font-weight: 900;
  letter-spacing: .06em;
  margin-bottom: 10px;
  font-size: 12px;
}

.kv .k{
  display:inline-block;
  width: 90px;
  color: rgba(0,255,120,.82);
}
.kv .v{ color: rgba(170,255,210,.92); }
.ok{ color: var(--green); text-shadow: var(--glow); }

.links{
  display:grid;
  gap: 8px;
}
.links a{
  border: 1px solid rgba(0,255,120,.18);
  border-radius: 10px;
  padding: 10px 10px;
  background: rgba(0,255,120,.05);
  color: var(--muted);
}
.links a:hover{
  color: var(--text);
  background: rgba(0,255,120,.09);
  box-shadow: var(--glow);
}

/* Log */
.logbox{
  margin-top: 12px;
  border: 1px solid rgba(0,255,120,.18);
  background: var(--panel);
  border-radius: 14px;
  padding: 12px;
}
.log{
  margin: 0;
  white-space: pre-wrap;
  color: rgba(170,255,210,.86);
  text-shadow: var(--glow);
  min-height: 72px;
}

/* Sections */
.block{ margin: 34px 0; }
.h2{
  margin: 0 0 12px;
  font-size: 18px;
  letter-spacing: .10em;
  color: rgba(0,255,120,.92);
  text-shadow: var(--glow-strong);
}
.card{
  border: 1px solid rgba(0,255,120,.18);
  background: rgba(0,0,0,.40);
  border-radius: var(--radius);
  padding: 14px;
  box-shadow: 0 10px 40px rgba(0,0,0,.35);
}

.list{
  margin: 12px 0 0;
  padding-left: 0;
  list-style: none;
  color: var(--muted);
}
.list li{ margin: 8px 0; }
.tag{
  display:inline-block;
  width: 22px;
  color: var(--green);
}

.columns{
  display:grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

.muted{ color: var(--muted); }
.tiny{ font-size: 12px; }

.meter{ margin: 12px 0; }
.meter__row{
  display:flex; justify-content:space-between;
  color: var(--muted);
  font-weight: 800;
  letter-spacing: .04em;
  font-size: 12px;
}
.bar{
  height: 10px;
  border-radius: 999px;
  border: 1px solid rgba(0,255,120,.18);
  background: rgba(0,255,120,.05);
  overflow:hidden;
  margin-top: 8px;
}
.bar span{
  display:block;
  height: 100%;
  width: var(--w);
  background: linear-gradient(90deg, rgba(0,255,120,.85), rgba(0,255,120,.25));
  box-shadow: var(--glow);
}

.chips{ display:flex; flex-wrap:wrap; gap: 10px; margin-top: 12px; }
.chip{
  border: 1px solid rgba(0,255,120,.18);
  background: rgba(0,255,120,.06);
  color: var(--muted);
  padding: 7px 10px;
  border-radius: 999px;
  font-weight: 800;
  letter-spacing: .05em;
  font-size: 12px;
}

/* Project cards */
.cards{
  display:grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
}
.h3{
  margin: 0 0 10px;
  color: rgba(0,255,120,.9);
  letter-spacing: .08em;
  text-shadow: var(--glow);
  font-size: 14px;
}
.row{ display:flex; gap: 10px; margin-top: 12px; flex-wrap:wrap; }
.linkbtn{
  border: 1px solid rgba(0,255,120,.18);
  background: rgba(0,255,120,.05);
  color: var(--muted);
  padding: 9px 12px;
  border-radius: 12px;
  font-weight: 900;
  letter-spacing: .06em;
}
.linkbtn:hover{ color: var(--text); background: rgba(0,255,120,.10); box-shadow: var(--glow); }

/* Contact */
.copyline{
  display:flex;
  gap: 10px;
  align-items:center;
}
code{
  flex:1;
  display:block;
  padding: 10px 12px;
  border: 1px solid rgba(0,255,120,.18);
  background: rgba(0,255,120,.05);
  border-radius: 12px;
  color: rgba(170,255,210,.92);
}

.field{ display:grid; gap: 6px; margin-top: 12px; }
input, textarea{
  width: 100%;
  border: 1px solid rgba(0,255,120,.18);
  background: rgba(0,0,0,.45);
  color: rgba(180,255,220,.92);
  border-radius: 12px;
  padding: 10px 12px;
  font: inherit;
  outline: none;
}
input:focus, textarea:focus{
  border-color: rgba(0,255,120,.35);
  box-shadow: 0 0 0 4px rgba(0,255,120,.10);
}
.err{
  min-height: 14px;
  font-size: 12px;
  color: #ff6b6b;
}

/* Footer */
.footer{
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding: 26px 0 40px;
  color: var(--muted);
  border-top: 1px solid rgba(0,255,120,.14);
  margin-top: 22px;
}

/* Reveal */
.reveal{
  opacity: 0;
  transform: translateY(10px);
  transition: opacity .6s ease, transform .6s ease;
}
.reveal.is-visible{
  opacity: 1;
  transform: translateY(0);
}

/* Toast */
.toast{
  position: fixed;
  left: 50%;
  bottom: 18px;
  transform: translateX(-50%);
  padding: 10px 12px;
  border: 1px solid rgba(0,255,120,.20);
  background: rgba(0,0,0,.55);
  border-radius: 999px;
  color: rgba(180,255,220,.92);
  box-shadow: var(--shadow);
}

/* Responsive */
@media (max-width: 980px){
  .cards{ grid-template-columns: 1fr; }
}
@media (max-width: 900px){
  .grid{ grid-template-columns: 1fr; }
  .columns{ grid-template-columns: 1fr; }
  .nav{ display:none; }
}

/* Cool erase mode: flicker + scanning wipe */
.log{
  position: relative;
  display: block;
}

.log.is-erasing{
  animation: logFlicker .18s steps(2) infinite;
}

.log.is-erasing::after{
  content:"";
  position:absolute;
  inset:-6px -10px;
  pointer-events:none;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(0,255,120,.14) 45%,
    rgba(0,255,120,.30) 50%,
    rgba(0,255,120,.14) 55%,
    transparent 100%
  );
  transform: translateX(120%);
  animation: logWipe .45s linear infinite;
  mix-blend-mode: screen;
  filter: blur(.2px);
  opacity: .9;
}

@keyframes logWipe{
  to { transform: translateX(-120%); }
}

@keyframes logFlicker{
  50% { opacity: .72; }
}
