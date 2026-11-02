// Guía tipo: cómo suena la referencia de cada ejercicio
//  straight → nota fija · siren → glissando suave · pulse → pulsos al BPM del metrónomo
//  ramp → de pulso lento a vibrato · delayed → recto y luego vibrato · alternate → recto/vibrato
//  phrase → frase de 3 notas con vibrato al final
const exercises = [
  {
    title: "Respiración y liberación",
    short: "Soltar antes de cantar",
    level: "Base",
    seconds: 60,
    guide: "straight",
    guideText: "Nota fija suave para tararear con “mmm”.",
    description: "El vibrato necesita un cuerpo libre y un aire constante. Este ejercicio prepara ambas cosas.",
    steps: [
      "Inhala lento por la nariz durante 4 tiempos; siente que se expanden costillas y abdomen, no los hombros.",
      "Exhala en “sss” durante 8 tiempos, con el aire parejo, como una llanta que se desinfla despacio.",
      "Masajea la mandíbula y deja que caiga; mueve la cabeza en “sí” y “no” muy suave.",
      "Tararea la nota guía en “mmm” 3 veces, sintiendo cosquilleo en labios y nariz."
    ],
    success: "El “sss” suena parejo de principio a fin y el “mmm” no aprieta la garganta.",
    mistake: "Subir los hombros al inhalar o empujar el aire con golpes del abdomen."
  },
  {
    title: "Nota recta estable",
    short: "La plataforma del vibrato",
    level: "Base",
    seconds: 60,
    guide: "straight",
    guideText: "Nota fija. Cántala igual, sin vibrato.",
    description: "Antes de oscilar, la voz debe poder quedarse quieta, afinada y pareja. El vibrato se construye encima.",
    steps: [
      "Reproduce la guía y escúchala 2 segundos.",
      "Canta la misma nota en “a” durante 5 segundos, recta, a volumen medio-suave.",
      "Descansa 3 segundos y repite en “o” y en “u”.",
      "Usa el medidor: busca que la línea quede lo más plana posible."
    ],
    success: "En el medidor la línea se ve casi plana y la estabilidad pasa del 80 %.",
    mistake: "Empujar más aire al final de la nota: la afinación sube o la voz se quiebra."
  },
  {
    title: "Lip trill y sirenas",
    short: "Flexibilidad sin tensión",
    level: "Base",
    seconds: 60,
    guide: "siren",
    guideText: "Glissando suave de ida y vuelta (una quinta).",
    description: "La vibración de labios equilibra el aire y la laringe, y la deja lista para moverse con libertad.",
    steps: [
      "Haz vibrar los labios (“brrr”) sin voz. Si cuesta, empuja suave las mejillas con los dedos.",
      "Añade voz sobre la nota guía y sostén 3 segundos.",
      "Sigue la sirena de la guía: sube y baja suavemente con los labios vibrando.",
      "Repite 5 veces, cada vez un poco más relajado."
    ],
    success: "Los labios no se detienen y la subida/bajada se siente fácil, sin “escalones”.",
    mistake: "Apretar los labios o subir el volumen para que no se corte la vibración."
  },
  {
    title: "Pulsos lentos con metrónomo",
    short: "Enseñar el movimiento",
    level: "Intermedio",
    seconds: 60,
    guide: "pulse",
    guideText: "Pulsos de medio tono al ritmo del metrónomo.",
    description: "Le enseñamos al oído y a la laringe el movimiento del vibrato, primero muy lento y exagerado.",
    steps: [
      "Pon el metrónomo a 60 BPM y reproduce la guía.",
      "En “a”, canta la nota y súbela un poquito en cada clic, volviendo a la nota en el siguiente: arriba–abajo–arriba–abajo.",
      "Mantén el aire continuo: no cortes la voz entre pulsos.",
      "Cuando sea cómodo, sube a 72, 84 y 96 BPM."
    ],
    success: "Los pulsos son parejos, suaves y la voz nunca se corta.",
    mistake: "Hacer “ja-ja-ja” con golpes de abdomen o mover la mandíbula en cada pulso. Pon un dedo en el mentón: debe quedarse quieto."
  },
  {
    title: "De pulso a vibrato",
    short: "Acelerar y achicar",
    level: "Intermedio",
    seconds: 60,
    guide: "ramp",
    guideText: "La oscilación empieza lenta y ancha y se vuelve rápida y pequeña.",
    description: "El paso clave: los pulsos se aceleran y se hacen más pequeños hasta convertirse en una ondulación continua.",
    steps: [
      "Escucha la guía completa una vez.",
      "Empieza con pulsos lentos y amplios, como en el ejercicio anterior.",
      "Ve acelerando poco a poco y, a la vez, haciendo el movimiento más pequeño.",
      "En algún punto suelta el control: deja que la voz siga ondulando sola."
    ],
    success: "Llega un momento en que sientes que el vaivén “se mueve solo”. En el medidor: 4,5–7,5 Hz.",
    mistake: "Acelerar apretando la garganta. Si se vuelve un temblor rápido, para, suelta y vuelve más lento."
  },
  {
    title: "Recto → vibrato",
    short: "Dejarlo aparecer",
    level: "Intermedio",
    seconds: 60,
    guide: "delayed",
    guideText: "2 segundos recto y luego aparece el vibrato.",
    description: "En el canto real el vibrato suele florecer en la segunda mitad de la nota. Aquí practicas permitirlo, no forzarlo.",
    steps: [
      "Canta la nota recta durante 2 segundos.",
      "Sin cambiar nada más, suelta la garganta y deja que aparezca el vibrato 2–3 segundos.",
      "Termina la nota suave, sin empujar.",
      "Repite en “a”, “o”, “e” y en 3 notas diferentes cómodas."
    ],
    success: "La transición es suave y el vibrato aparece sin que cambie el volumen ni la vocal.",
    mistake: "Empujar aire extra para “provocar” el vibrato: suena como bamboleo."
  },
  {
    title: "Control: recto o vibrato",
    short: "Elegir a voluntad",
    level: "Avanzado",
    seconds: 75,
    guide: "alternate",
    guideText: "Alterna 2 s recto y 2 s con vibrato.",
    description: "Dominar el vibrato es poder ponerlo y quitarlo cuando quieras, como una herramienta expresiva.",
    steps: [
      "Sigue la guía: 2 segundos recto, 2 con vibrato, sin cortar la nota.",
      "Repite el ciclo 3 veces en una sola respiración si puedes.",
      "Prueba lo mismo en 3 notas diferentes.",
      "Prueba también a cantar suave y luego medio-fuerte."
    ],
    success: "Puedes cambiar entre recto y vibrato sin que se mueva la mandíbula ni cambie la afinación central.",
    mistake: "Que al “apagar” el vibrato la voz se apriete. El recto también debe ser libre."
  },
  {
    title: "Frase musical",
    short: "Aplicarlo en la música",
    level: "Avanzado",
    seconds: 90,
    guide: "phrase",
    guideText: "Do–Re–Mi (desde tu nota) con vibrato en la nota final.",
    description: "Ahora usamos el vibrato con intención: notas cortas rectas y vibrato en la nota larga del final.",
    steps: [
      "Escucha la guía: dos notas cortas rectas y una nota larga con vibrato.",
      "Cántala con “la-la-laaa” y luego con una palabra: “a-mo-reee”.",
      "Elige una canción que conozcas y marca las notas largas al final de frase.",
      "Cántala aplicando vibrato solo en esas notas. Grábate y escúchate."
    ],
    success: "La grabación suena natural y expresiva, no “agregada”. El vibrato acompaña la emoción.",
    mistake: "Poner vibrato en todas las notas por igual: la frase pierde forma."
  }
];

const STORAGE_KEY = "musicala-vibrato-progress";
const noteNames = ["Do", "Do#", "Re", "Re#", "Mi", "Fa", "Fa#", "Sol", "Sol#", "La", "La#", "Si"];

const $ = (sel) => document.querySelector(sel);
const exerciseList = $("#exerciseList");
const exerciseTag = $("#exerciseTag");
const exerciseLevel = $("#exerciseLevel");
const exerciseTitle = $("#exerciseTitle");
const exerciseDescription = $("#exerciseDescription");
const exerciseSteps = $("#exerciseSteps");
const exerciseSuccess = $("#exerciseSuccess");
const exerciseMistake = $("#exerciseMistake");
const guideText = $("#guideText");
const guideBtn = $("#guideBtn");
const timerDisplay = $("#timerDisplay");
const startTimerBtn = $("#startTimerBtn");
const resetTimerBtn = $("#resetTimerBtn");
const noteSelect = $("#noteSelect");
const toneVolume = $("#toneVolume");
const metronomeBtn = $("#metronomeBtn");
const bpmInput = $("#bpmInput");
const doneBtn = $("#doneBtn");
const progressFill = $("#progressFill");
const progressText = $("#progressText");
const micBtn = $("#micBtn");
const noteNameEl = $("#noteName");
const freqDisplay = $("#freqDisplay");
const tunerNeedle = $("#tunerNeedle");
const tunerHint = $("#tunerHint");
const pitchCanvas = $("#pitchCanvas");
const stabilityStat = $("#stabilityStat");
const rateStat = $("#rateStat");
const depthStat = $("#depthStat");
const feedbackStat = $("#feedbackStat");
const rateMark = $("#rateMark");
const depthMark = $("#depthMark");

let currentExercise = 0;
let timerSeconds = exercises[0].seconds;
let timerInterval = null;
let audioCtx = null;
let activeVoice = null;
let metroInterval = null;
let micStream = null;
let analyser = null;
let rafId = null;
let pitchHistory = [];
let lastPitchTime = 0;
let completed = loadProgress();

function loadProgress() {
  try {
    return new Set(JSON.parse(localStorage.getItem(STORAGE_KEY)) || []);
  } catch {
    return new Set();
  }
}

function saveProgress() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...completed]));
  } catch { /* sin almacenamiento: el progreso dura solo esta visita */ }
}

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60).toString().padStart(2, "0");
  const secs = Math.floor(seconds % 60).toString().padStart(2, "0");
  return `${mins}:${secs}`;
}

function midiToFreq(midi) {
  return 440 * Math.pow(2, (midi - 69) / 12);
}

function fillNoteSelect(select, selectedMidi) {
  // Sol2 a La4: cubre voces graves y agudas en registro cómodo
  let html = "";
  for (let midi = 43; midi <= 69; midi++) {
    const name = noteNames[midi % 12];
    if (name.includes("#")) continue;
    html += `<option value="${midi}" ${midi === selectedMidi ? "selected" : ""}>${name}${Math.floor(midi / 12) - 1}</option>`;
  }
  select.innerHTML = html;
}

// ---------- Ejercicios ----------
function renderExercises() {
  exerciseList.innerHTML = exercises.map((ex, index) => `
    <button class="exercise-button ${index === currentExercise ? "active" : ""} ${completed.has(index) ? "completed" : ""}" data-index="${index}">
      <span class="num">${completed.has(index) ? "✓" : index + 1}</span>
      <span><strong>${ex.title}</strong><small>${ex.short}</small></span>
      <span class="time">${formatTime(ex.seconds)}</span>
    </button>
  `).join("");
  progressFill.style.width = `${(completed.size / exercises.length) * 100}%`;
  progressText.textContent = completed.size === exercises.length
    ? "¡Completaste los 8 ejercicios! Repite la ruta para afianzar."
    : `${completed.size} de ${exercises.length} ejercicios completados`;
}

function setExercise(index) {
  currentExercise = index;
  const ex = exercises[index];
  exerciseTag.textContent = `Ejercicio ${index + 1} de ${exercises.length}`;
  exerciseLevel.textContent = ex.level;
  exerciseTitle.textContent = ex.title;
  exerciseDescription.textContent = ex.description;
  exerciseSteps.innerHTML = ex.steps.map(step => `<li>${step}</li>`).join("");
  exerciseSuccess.textContent = ex.success;
  exerciseMistake.textContent = ex.mistake;
  guideText.textContent = ex.guideText;
  stopVoice();
  resetTimer();
  updateDoneBtn();
  renderExercises();
}

function updateDoneBtn() {
  const isDone = completed.has(currentExercise);
  doneBtn.classList.toggle("is-done", isDone);
  doneBtn.textContent = isDone ? "✓ Hecho (desmarcar)" : "✓ Marcar como hecho";
}

function toggleDone() {
  if (completed.has(currentExercise)) completed.delete(currentExercise);
  else completed.add(currentExercise);
  saveProgress();
  updateDoneBtn();
  renderExercises();
}

function toggleTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
    startTimerBtn.textContent = "Continuar";
    return;
  }
  if (timerSeconds <= 0) timerSeconds = exercises[currentExercise].seconds;
  startTimerBtn.textContent = "Pausar";
  timerInterval = setInterval(() => {
    timerSeconds -= 1;
    timerDisplay.textContent = formatTime(timerSeconds);
    if (timerSeconds <= 0) {
      clearInterval(timerInterval);
      timerInterval = null;
      startTimerBtn.textContent = "Repetir";
      playSoftDing();
    }
  }, 1000);
}

function resetTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
  timerSeconds = exercises[currentExercise].seconds;
  timerDisplay.textContent = formatTime(timerSeconds);
  startTimerBtn.textContent = "Iniciar";
}

// ---------- Audio ----------
function getAudioContext() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioCtx.state === "suspended") audioCtx.resume();
  return audioCtx;
}

// Una "voz" es un oscilador con un LFO conectado a su detune (en cents)
function createVoice(freq, volume) {
  const ctx = getAudioContext();
  const osc = ctx.createOscillator();
  const lfo = ctx.createOscillator();
  const lfoGain = ctx.createGain();
  const out = ctx.createGain();
  const filter = ctx.createBiquadFilter();

  osc.type = "triangle";
  filter.type = "lowpass";
  filter.frequency.value = 1800;
  osc.frequency.value = freq;
  lfo.frequency.value = 0.001;
  lfoGain.gain.value = 0;
  lfo.connect(lfoGain).connect(osc.detune);
  osc.connect(filter).connect(out).connect(ctx.destination);

  const t = ctx.currentTime;
  out.gain.setValueAtTime(0.0001, t);
  out.gain.exponentialRampToValueAtTime(Math.max(0.001, volume), t + 0.08);
  osc.start(t);
  lfo.start(t);

  return { osc, lfo, lfoGain, out, button: null, endTimer: null, onStop: null };
}

function stopVoice() {
  if (!activeVoice) return;
  const ctx = getAudioContext();
  const v = activeVoice;
  activeVoice = null;
  clearTimeout(v.endTimer);
  const t = ctx.currentTime;
  v.out.gain.cancelScheduledValues(t);
  v.out.gain.setValueAtTime(Math.max(0.0001, v.out.gain.value), t);
  v.out.gain.exponentialRampToValueAtTime(0.0001, t + 0.08);
  v.osc.stop(t + 0.1);
  v.lfo.stop(t + 0.1);
  if (v.onStop) v.onStop();
}

function setVibrato(voice, time, rate, depth) {
  voice.lfo.frequency.setValueAtTime(Math.max(0.001, rate), time);
  voice.lfoGain.gain.setValueAtTime(depth, time);
}

function playGuide() {
  if (activeVoice && activeVoice.button === guideBtn) {
    stopVoice();
    return;
  }
  stopVoice();
  const ex = exercises[currentExercise];
  const midi = Number(noteSelect.value);
  const freq = midiToFreq(midi);
  const volume = Number(toneVolume.value);
  const voice = createVoice(freq, volume);
  const t0 = getAudioContext().currentTime;
  let duration = 8;

  switch (ex.guide) {
    case "siren": {
      duration = 12;
      const top = midiToFreq(midi + 7);
      for (let i = 0; i < 3; i++) {
        const s = t0 + i * 4;
        voice.osc.frequency.setValueAtTime(freq, s);
        voice.osc.frequency.exponentialRampToValueAtTime(top, s + 2);
        voice.osc.frequency.exponentialRampToValueAtTime(freq, s + 4);
      }
      break;
    }
    case "pulse": {
      // Un pulso (arriba o abajo) por clic: el ciclo completo dura dos tiempos
      const bpm = clampBpm();
      duration = 16;
      setVibrato(voice, t0, bpm / 120, 50);
      voice.osc.detune.setValueAtTime(50, t0);
      voice.lfo.type = "square";
      break;
    }
    case "ramp": {
      duration = 14;
      voice.lfo.frequency.setValueAtTime(1.5, t0);
      voice.lfo.frequency.linearRampToValueAtTime(5.8, t0 + 10);
      voice.lfoGain.gain.setValueAtTime(100, t0);
      voice.lfoGain.gain.linearRampToValueAtTime(40, t0 + 10);
      break;
    }
    case "delayed": {
      duration = 15;
      for (let i = 0; i < 3; i++) {
        const s = t0 + i * 5;
        setVibrato(voice, s, 0.001, 0);
        voice.lfo.frequency.setValueAtTime(5.6, s + 2);
        voice.lfoGain.gain.setValueAtTime(0, s + 2);
        voice.lfoGain.gain.linearRampToValueAtTime(40, s + 2.6);
        voice.out.gain.setValueAtTime(volume, s + 4.6);
        voice.out.gain.linearRampToValueAtTime(0.0001, s + 4.95);
        voice.out.gain.linearRampToValueAtTime(volume, s + 5.05);
      }
      break;
    }
    case "alternate": {
      duration = 12;
      for (let i = 0; i < 3; i++) {
        const s = t0 + i * 4;
        setVibrato(voice, s, 0.001, 0);
        voice.lfo.frequency.setValueAtTime(5.6, s + 2);
        voice.lfoGain.gain.linearRampToValueAtTime(40, s + 2.3);
        voice.lfoGain.gain.setValueAtTime(40, s + 3.8);
        voice.lfoGain.gain.linearRampToValueAtTime(0, s + 4);
      }
      break;
    }
    case "phrase": {
      duration = 12;
      for (let i = 0; i < 3; i++) {
        const s = t0 + i * 4;
        voice.osc.frequency.setValueAtTime(freq, s);
        voice.osc.frequency.setValueAtTime(midiToFreq(midi + 2), s + 0.5);
        voice.osc.frequency.setValueAtTime(midiToFreq(midi + 4), s + 1);
        setVibrato(voice, s, 0.001, 0);
        voice.lfo.frequency.setValueAtTime(5.6, s + 1.6);
        voice.lfoGain.gain.linearRampToValueAtTime(40, s + 2.1);
        voice.lfoGain.gain.setValueAtTime(40, s + 3.4);
        voice.out.gain.setValueAtTime(volume, s + 3.4);
        voice.out.gain.linearRampToValueAtTime(0.0001, s + 3.9);
        voice.out.gain.linearRampToValueAtTime(volume, s + 4);
      }
      break;
    }
    default:
      duration = 8;
  }

  voice.button = guideBtn;
  voice.onStop = () => { guideBtn.textContent = "▶ Guía"; };
  voice.endTimer = setTimeout(stopVoice, duration * 1000);
  activeVoice = voice;
  guideBtn.textContent = "■ Detener";
}

function playClick(accent = false) {
  const ctx = getAudioContext();
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.frequency.value = accent ? 1200 : 850;
  gain.gain.setValueAtTime(0.0001, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.18, ctx.currentTime + 0.005);
  gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.055);
  osc.connect(gain).connect(ctx.destination);
  osc.start();
  osc.stop(ctx.currentTime + 0.065);
}

function playSoftDing() {
  const ctx = getAudioContext();
  [523.25, 659.25, 783.99].forEach((freq, i) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sine";
    osc.frequency.value = freq;
    const t = ctx.currentTime + i * 0.06;
    gain.gain.setValueAtTime(0.0001, t);
    gain.gain.exponentialRampToValueAtTime(0.12, t + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.45);
    osc.connect(gain).connect(ctx.destination);
    osc.start(t);
    osc.stop(t + 0.5);
  });
}

function clampBpm() {
  const bpm = Math.min(180, Math.max(40, Number(bpmInput.value) || 72));
  bpmInput.value = bpm;
  return bpm;
}

function toggleMetronome() {
  if (metroInterval) {
    clearInterval(metroInterval);
    metroInterval = null;
    metronomeBtn.textContent = "Iniciar";
    return;
  }
  const bpm = clampBpm();
  let beat = 0;
  playClick(true);
  metroInterval = setInterval(() => {
    beat += 1;
    playClick(beat % 4 === 0);
  }, 60000 / bpm);
  metronomeBtn.textContent = "Detener";
}

// ---------- Laboratorio de oído ----------
const synthCanvas = $("#synthCanvas");
const rateRange = $("#rateRange");
const depthRange = $("#depthRange");
const rateOut = $("#rateOut");
const depthOut = $("#depthOut");
const synthNote = $("#synthNote");
const synthPlayBtn = $("#synthPlayBtn");
const synthVerdict = $("#synthVerdict");
let synthDelayed = false;

function classify(rate, depth) {
  if (rate < 0.5 || depth < 8) return { text: "Nota recta: sin vibrato.", cls: "" };
  if (rate > 7.5 && depth < 40) return { text: "Trémolo: demasiado rápido. Suele nacer de la tensión.", cls: "bad" };
  if (rate > 7.5) return { text: "Muy rápido y amplio: suena nervioso.", cls: "bad" };
  if (rate < 4.5 && depth > 70) return { text: "Bamboleo: lento y ancho, la nota pierde su centro.", cls: "bad" };
  if (rate < 4.5) return { text: "Lento: suena más a pulso que a vibrato.", cls: "bad" };
  if (depth > 100) return { text: "Velocidad bien, pero demasiado ancho.", cls: "bad" };
  if (depth < 20) return { text: "Velocidad bien, muy sutil (común en pop o coro).", cls: "good" };
  return { text: "Vibrato sano: velocidad y amplitud naturales.", cls: "good" };
}

function updateSynthUI() {
  const rate = Number(rateRange.value);
  const depth = Number(depthRange.value);
  rateOut.textContent = `${rate.toFixed(1)} Hz`;
  depthOut.textContent = `${depth} cents`;
  const verdict = classify(rate, depth);
  synthVerdict.textContent = (synthDelayed ? "Recto → " : "") + verdict.text;
  synthVerdict.className = `verdict ${verdict.cls}`;
  if (activeVoice && activeVoice.button === synthPlayBtn && !synthDelayed) {
    const t = getAudioContext().currentTime;
    setVibrato(activeVoice, t, rate, depth);
  }
  drawSynth(rate, depth);
}

function drawSynth(rate, depth) {
  const ctx = synthCanvas.getContext("2d");
  const w = synthCanvas.width;
  const h = synthCanvas.height;
  const mid = h / 2;
  ctx.clearRect(0, 0, w, h);

  // Zona sana ±20–100 cents
  const scale = (h / 2 - 16) / 150;
  ctx.fillStyle = "rgba(15,143,108,0.08)";
  ctx.fillRect(0, mid - 100 * scale, w, 80 * scale);
  ctx.fillRect(0, mid + 20 * scale, w, 80 * scale);

  ctx.strokeStyle = "#C9D2F5";
  ctx.setLineDash([6, 6]);
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(0, mid);
  ctx.lineTo(w, mid);
  ctx.stroke();
  ctx.setLineDash([]);

  // 2 segundos de onda
  const grad = ctx.createLinearGradient(0, 0, w, 0);
  grad.addColorStop(0, "#0C41C4");
  grad.addColorStop(0.5, "#5729FF");
  grad.addColorStop(1, "#CE0071");
  ctx.strokeStyle = grad;
  ctx.lineWidth = 5;
  ctx.lineCap = "round";
  ctx.beginPath();
  for (let x = 0; x <= w; x += 2) {
    const t = (x / w) * 2;
    let d = depth;
    if (synthDelayed) d = t < 0.8 ? 0 : depth * Math.min(1, (t - 0.8) / 0.4);
    const y = mid - Math.sin(2 * Math.PI * rate * t) * d * scale;
    if (x === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.stroke();

  ctx.fillStyle = "#7B7B8A";
  ctx.font = "16px Roboto, sans-serif";
  ctx.fillText("2 segundos", w - 100, h - 10);
  ctx.fillText("zona sana", 10, mid - 100 * scale + 18);
}

function toggleSynth() {
  if (activeVoice && activeVoice.button === synthPlayBtn) {
    stopVoice();
    return;
  }
  stopVoice();
  const voice = createVoice(midiToFreq(Number(synthNote.value)), Number(toneVolume.value));
  const t0 = getAudioContext().currentTime;
  const rate = Number(rateRange.value);
  const depth = Number(depthRange.value);
  if (synthDelayed) {
    for (let i = 0; i < 3; i++) {
      const s = t0 + i * 4;
      setVibrato(voice, s, rate, 0);
      voice.lfoGain.gain.setValueAtTime(0, s + 1.6);
      voice.lfoGain.gain.linearRampToValueAtTime(depth, s + 2.4);
      voice.lfoGain.gain.setValueAtTime(depth, s + 3.95);
    }
    voice.endTimer = setTimeout(stopVoice, 12000);
  } else {
    setVibrato(voice, t0, rate, depth);
    voice.endTimer = setTimeout(stopVoice, 20000);
  }
  voice.button = synthPlayBtn;
  voice.onStop = () => { synthPlayBtn.textContent = "▶ Escuchar"; };
  activeVoice = voice;
  synthPlayBtn.textContent = "■ Detener";
}

document.querySelectorAll(".preset").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".preset").forEach(b => b.classList.toggle("active", b === btn));
    rateRange.value = btn.dataset.rate;
    depthRange.value = btn.dataset.depth;
    synthDelayed = btn.dataset.delayed === "1";
    updateSynthUI();
    stopVoice();
    toggleSynth();
  });
});
[rateRange, depthRange].forEach(input => input.addEventListener("input", () => {
  if (synthDelayed) {
    synthDelayed = false;
    document.querySelectorAll(".preset").forEach(b => b.classList.remove("active"));
  }
  updateSynthUI();
}));
synthNote.addEventListener("change", () => {
  if (activeVoice && activeVoice.button === synthPlayBtn) {
    activeVoice.osc.frequency.setValueAtTime(midiToFreq(Number(synthNote.value)), getAudioContext().currentTime);
  }
});

// ---------- Chequeo previo ----------
const preChecks = document.querySelectorAll("#preCheck input");
const preCheckMsg = $("#preCheckMsg");
preChecks.forEach(box => box.addEventListener("change", () => {
  const ready = [...preChecks].every(b => b.checked);
  preCheckMsg.textContent = ready ? "¡Listo! Tu voz está preparada para practicar." : "Marca los cuatro y empieza.";
  preCheckMsg.classList.toggle("ready", ready);
}));

// ---------- Medidor ----------
function frequencyToNote(freq) {
  const midi = Math.round(69 + 12 * Math.log2(freq / 440));
  const name = noteNames[(midi + 1200) % 12];
  const octave = Math.floor(midi / 12) - 1;
  const exactFreq = midiToFreq(midi);
  const cents = 1200 * Math.log2(freq / exactFreq);
  return { name: `${name}${octave}`, midi, cents, exactFreq };
}

function autoCorrelate(buffer, sampleRate) {
  const size = buffer.length;
  let rms = 0;
  for (let i = 0; i < size; i++) rms += buffer[i] * buffer[i];
  rms = Math.sqrt(rms / size);
  if (rms < 0.012) return -1;

  let r1 = 0;
  let r2 = size - 1;
  const threshold = 0.2;
  for (let i = 0; i < size / 2; i++) {
    if (Math.abs(buffer[i]) < threshold) { r1 = i; break; }
  }
  for (let i = 1; i < size / 2; i++) {
    if (Math.abs(buffer[size - i]) < threshold) { r2 = size - i; break; }
  }

  buffer = buffer.slice(r1, r2);
  const newSize = buffer.length;
  const correlations = new Array(newSize).fill(0);

  for (let lag = 0; lag < newSize; lag++) {
    for (let i = 0; i < newSize - lag; i++) {
      correlations[lag] += buffer[i] * buffer[i + lag];
    }
  }

  let d = 0;
  while (correlations[d] > correlations[d + 1]) d++;

  let maxVal = -1;
  let maxPos = -1;
  for (let i = d; i < newSize; i++) {
    if (correlations[i] > maxVal) {
      maxVal = correlations[i];
      maxPos = i;
    }
  }

  if (maxPos <= 0) return -1;

  const x1 = correlations[maxPos - 1] || 0;
  const x2 = correlations[maxPos] || 0;
  const x3 = correlations[maxPos + 1] || 0;
  const a = (x1 + x3 - 2 * x2) / 2;
  const b = (x3 - x1) / 2;
  if (a) maxPos = maxPos - b / (2 * a);

  const frequency = sampleRate / maxPos;
  if (frequency < 70 || frequency > 1100) return -1;
  return frequency;
}

async function toggleMic() {
  if (micStream) {
    stopMic();
    return;
  }

  try {
    const ctx = getAudioContext();
    micStream = await navigator.mediaDevices.getUserMedia({
      audio: {
        echoCancellation: false,
        noiseSuppression: false,
        autoGainControl: false
      }
    });
    const source = ctx.createMediaStreamSource(micStream);
    analyser = ctx.createAnalyser();
    analyser.fftSize = 4096;
    source.connect(analyser);
    pitchHistory = [];
    micBtn.textContent = "■ Detener micrófono";
    tunerHint.textContent = "Sostén una nota en “a” u “o”. Usa audífonos si suena la guía.";
    feedbackStat.textContent = "Escuchando…";
    updatePitchLoop();
  } catch (error) {
    feedbackStat.textContent = "No se pudo acceder al micrófono. Revisa los permisos del navegador (y abre la página desde un servidor o https).";
    console.error(error);
  }
}

function stopMic() {
  if (rafId) cancelAnimationFrame(rafId);
  rafId = null;
  if (micStream) {
    micStream.getTracks().forEach(track => track.stop());
    micStream = null;
  }
  analyser = null;
  micBtn.textContent = "🎤 Activar micrófono";
  noteNameEl.textContent = "--";
  freqDisplay.textContent = "-- Hz";
  stabilityStat.textContent = "--";
  rateStat.textContent = "-- Hz";
  depthStat.textContent = "-- cents";
  rateMark.style.display = "none";
  depthMark.style.display = "none";
  feedbackStat.textContent = "Micrófono apagado.";
  tunerHint.textContent = "Canta una nota sostenida y relajada.";
  drawPitchHistory();
}

function updatePitchLoop() {
  const ctx = getAudioContext();
  const buffer = new Float32Array(analyser.fftSize);
  analyser.getFloatTimeDomainData(buffer);
  const freq = autoCorrelate(buffer, ctx.sampleRate);
  const now = performance.now();

  if (freq !== -1 && now - lastPitchTime > 30) {
    const note = frequencyToNote(freq);
    noteNameEl.textContent = note.name;
    freqDisplay.textContent = `${freq.toFixed(1)} Hz`;
    const clampedCents = Math.max(-50, Math.min(50, note.cents));
    tunerNeedle.style.left = `${50 + clampedCents}%`;
    tunerHint.textContent = Math.abs(note.cents) < 10 ? "Afinación centrada." : note.cents > 0 ? "Un poquito alto." : "Un poquito bajo.";

    // Si saltas de nota, el análisis empieza de nuevo para no mezclar dos notas
    const last = pitchHistory[pitchHistory.length - 1];
    if (last && Math.abs(1200 * Math.log2(freq / last.freq)) > 250) pitchHistory = [];

    pitchHistory.push({ time: now, freq });
    pitchHistory = pitchHistory.filter(point => now - point.time < 4000);
    lastPitchTime = now;
    updateVibratoStats();
    drawPitchHistory();
  } else if (freq === -1 && pitchHistory.length && now - lastPitchTime > 600) {
    pitchHistory = [];
    drawPitchHistory();
  }

  rafId = requestAnimationFrame(updatePitchLoop);
}

function median(values) {
  if (!values.length) return 0;
  const sorted = [...values].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
}

function placeMark(mark, value, max) {
  mark.style.display = "block";
  mark.style.left = `${Math.max(0, Math.min(100, (value / max) * 100))}%`;
}

function updateVibratoStats() {
  if (pitchHistory.length < 25) {
    stabilityStat.textContent = "Midiendo…";
    feedbackStat.textContent = "Sostén la nota un poco más.";
    return;
  }

  const midiValues = pitchHistory.map(p => 69 + 12 * Math.log2(p.freq / 440));
  // Suavizado ligero para que el ruido no cuente como cruces
  const smooth = midiValues.map((_, i) => {
    const slice = midiValues.slice(Math.max(0, i - 1), i + 2);
    return slice.reduce((a, b) => a + b, 0) / slice.length;
  });
  const center = median(smooth);
  const centsFromCenter = smooth.map(m => (m - center) * 100);
  const absValues = centsFromCenter.map(Math.abs);
  // Amplitud ≈ pico de la onda; para una senoide, la media del valor absoluto es 2/π del pico
  const meanAbs = absValues.reduce((a, b) => a + b, 0) / absValues.length;
  const depth = meanAbs * Math.PI / 2;

  let crossings = 0;
  let sign = 0;
  for (const c of centsFromCenter) {
    if (Math.abs(c) < 4) continue;
    const s = Math.sign(c);
    if (sign && s !== sign) crossings++;
    sign = s;
  }
  const duration = (pitchHistory[pitchHistory.length - 1].time - pitchHistory[0].time) / 1000;
  const rate = duration > 0 ? crossings / (2 * duration) : 0;

  // Estabilidad: qué tanto se desplaza el centro entre la primera y la segunda mitad
  const half = Math.floor(smooth.length / 2);
  const drift = Math.abs(median(smooth.slice(0, half)) - median(smooth.slice(half))) * 100;
  const stability = Math.max(0, 100 - drift * 2);

  stabilityStat.textContent = `${Math.round(stability)} %`;
  const hasVibrato = rate > 0.8 && depth >= 12;
  rateStat.textContent = hasVibrato ? `${rate.toFixed(1)} Hz` : "-- Hz";
  depthStat.textContent = `±${Math.round(depth)} cents`;
  if (hasVibrato) placeMark(rateMark, rate, 10); else rateMark.style.display = "none";
  placeMark(depthMark, depth, 150);

  if (stability < 60) {
    feedbackStat.textContent = "El centro de la nota se está moviendo. Mantén el aire constante y no empujes al final.";
  } else if (depth < 12) {
    feedbackStat.textContent = "Nota recta y estable. ¡Buena base! Cuando quieras, deja que aparezca una oscilación suave.";
  } else if (depth > 110) {
    feedbackStat.textContent = "Muy ancho. Canta más suave y reduce la presión de aire: puede sonar a bamboleo.";
  } else if (rate > 7.5) {
    feedbackStat.textContent = "Muy rápido (tipo trémolo). Revisa tensión en garganta, lengua o mandíbula y baja el volumen.";
  } else if (rate >= 4.5 && depth >= 20) {
    feedbackStat.textContent = "¡Eso es vibrato! Velocidad y amplitud en zona sana. Fíjate en cómo se siente para repetirlo.";
  } else if (rate > 0.8 && rate < 4.5) {
    feedbackStat.textContent = "Todavía lento: suena a pulsos. Piensa en hacerlos más pequeños y dejarlos acelerar solos.";
  } else {
    feedbackStat.textContent = "Sigue sosteniendo la nota con aire estable y volumen cómodo.";
  }
}

function drawPitchHistory() {
  const ctx = pitchCanvas.getContext("2d");
  const width = pitchCanvas.width;
  const height = pitchCanvas.height;
  const mid = height / 2;
  const scale = height / 330;
  ctx.clearRect(0, 0, width, height);

  ctx.fillStyle = "rgba(15,143,108,0.08)";
  ctx.fillRect(0, mid - 100 * scale, width, 80 * scale);
  ctx.fillRect(0, mid + 20 * scale, width, 80 * scale);

  ctx.strokeStyle = "#C9D2F5";
  ctx.lineWidth = 2;
  ctx.setLineDash([6, 6]);
  ctx.beginPath();
  ctx.moveTo(0, mid);
  ctx.lineTo(width, mid);
  ctx.stroke();
  ctx.setLineDash([]);

  ctx.fillStyle = "#7B7B8A";
  ctx.font = "18px Roboto, sans-serif";
  ctx.fillText("+100 cents", 10, mid - 100 * scale - 6);
  ctx.fillText("−100 cents", 10, mid + 100 * scale + 20);

  if (pitchHistory.length < 2) {
    ctx.fillStyle = "#4F4F5C";
    ctx.font = "26px Roboto, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("Aquí aparecerá la onda de tu voz.", width / 2, mid - 12);
    ctx.textAlign = "left";
    return;
  }

  const now = pitchHistory[pitchHistory.length - 1].time;
  const midiValues = pitchHistory.map(p => 69 + 12 * Math.log2(p.freq / 440));
  const center = median(midiValues);

  const grad = ctx.createLinearGradient(0, 0, width, 0);
  grad.addColorStop(0, "#0C41C4");
  grad.addColorStop(0.5, "#5729FF");
  grad.addColorStop(1, "#CE0071");
  ctx.strokeStyle = grad;
  ctx.lineWidth = 4;
  ctx.lineJoin = "round";
  ctx.lineCap = "round";
  ctx.beginPath();

  pitchHistory.forEach((point, index) => {
    const x = width - ((now - point.time) / 4000) * width;
    const cents = (midiValues[index] - center) * 100;
    const y = mid - Math.max(-150, Math.min(150, cents)) * scale;
    if (index === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.stroke();
}

// ---------- Inicio ----------
fillNoteSelect(noteSelect, 60);
fillNoteSelect(synthNote, 60);
setExercise(0);
updateSynthUI();
drawPitchHistory();

startTimerBtn.addEventListener("click", toggleTimer);
resetTimerBtn.addEventListener("click", resetTimer);
guideBtn.addEventListener("click", playGuide);
synthPlayBtn.addEventListener("click", toggleSynth);
doneBtn.addEventListener("click", toggleDone);
$("#prevExBtn").addEventListener("click", () => setExercise((currentExercise - 1 + exercises.length) % exercises.length));
$("#nextExBtn").addEventListener("click", () => setExercise((currentExercise + 1) % exercises.length));
exerciseList.addEventListener("click", (event) => {
  const btn = event.target.closest(".exercise-button");
  if (btn) setExercise(Number(btn.dataset.index));
});
toneVolume.addEventListener("input", () => {
  if (activeVoice) activeVoice.out.gain.setValueAtTime(Number(toneVolume.value), getAudioContext().currentTime);
});
noteSelect.addEventListener("change", () => {
  if (activeVoice && activeVoice.button === guideBtn) {
    stopVoice();
    playGuide();
  }
});
metronomeBtn.addEventListener("click", toggleMetronome);
micBtn.addEventListener("click", toggleMic);
window.addEventListener("beforeunload", () => {
  stopVoice();
  stopMic();
  if (metroInterval) clearInterval(metroInterval);
});
