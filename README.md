# Vibrato en el Canto · Musicala

Web app estática (HTML, CSS y JavaScript puro) del material académico de canto de Musicala para entender, escuchar, practicar y medir el vibrato.

## Ruta de aprendizaje

1. **Entiende** – qué es el vibrato (velocidad, amplitud, regularidad, centro), señales sanas y qué *no* es vibrato (mandíbula, “ja-ja-ja”, trémolo, bamboleo).
2. **Escucha** – laboratorio de oído con sintetizador: ejemplos de nota recta, vibrato sano, trémolo, bamboleo y recto → vibrato, con controles de velocidad y amplitud y un veredicto en vivo.
3. **Prepara** – las tres bases (respiración, libertad corporal, nota recta estable) y un chequeo previo.
4. **Practica** – 8 ejercicios progresivos (Base → Intermedio → Avanzado), cada uno con pasos, “cómo sé que va bien”, error común, guía sonora para imitar, temporizador y metrónomo. El progreso se guarda en el navegador.
5. **Mide** – medidor con micrófono: nota, afinación, velocidad (Hz), amplitud (cents), estabilidad del centro y consejo, con zonas sanas marcadas.

Incluye además un plan de 4 semanas, una rutina diaria de 12 minutos y preguntas frecuentes.

## Identidad visual

Sigue el manual de imagen de Musicala: logo oficial (`logo.png`), tipografía Roboto y la paleta institucional — Azul Mozart `#0C41C4`, Azul Bach `#220A63`, Violeta Vivaldi `#5729FF`, Violeta Beethoven `#680DBF` y Magenta Brahms `#CE0071` — con el degradado azul → violeta → magenta del logo.

## Cómo abrir

Abre `index.html` en un navegador moderno. Para que el micrófono funcione, sírvelo desde un servidor local o https:

```bash
python -m http.server 8000
```

y entra a `http://localhost:8000`.

## Archivos

- `index.html`: estructura y contenido.
- `styles.css`: diseño con la identidad de Musicala, responsive.
- `app.js`: ejercicios, guías sonoras, laboratorio de oído, metrónomo, temporizador, progreso y medidor de vibrato.
- `logo.png`: logo de Musicala.
