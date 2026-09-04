// FOXE theme generator — ported from the FOXE redesign. Warm green-tinted
// surfaces, IBM Plex Mono-heavy. Supports light/dark and 4 accent options.
// Exposes window.foxeTheme(theme, accent) -> CSS-var object.

function foxeHexToRgba(hex, a) {
  const h = hex.replace("#", "");
  const n = parseInt(h.length === 3 ? h.split("").map((x) => x + x).join("") : h, 16);
  return "rgba(" + ((n >> 16) & 255) + "," + ((n >> 8) & 255) + "," + (n & 255) + "," + a + ")";
}

const FOXE_ACCENTS = {
  finpec: { light: { a: "#DC4E25", ink: "#8f3214" }, dark: { a: "#f0744d", ink: "#f6b69f" } },
  verde: { light: { a: "#2f7d4f", ink: "#1b6e41" }, dark: { a: "#5cc185", ink: "#bfe9cf" } },
  ambar: { light: { a: "#c0791f", ink: "#8f5512" }, dark: { a: "#e3a44f", ink: "#f2cf95" } },
  azul:  { light: { a: "#2860c6", ink: "#1b4c92" }, dark: { a: "#6ba6e8", ink: "#bcd9f2" } },
  terra: { light: { a: "#b35535", ink: "#8a3f27" }, dark: { a: "#e0875f", ink: "#f2c2ac" } },
};

function foxeTheme(theme, accent) {
  const isDark = theme === "dark";
  const ac = (FOXE_ACCENTS[accent] || FOXE_ACCENTS.azul)[isDark ? "dark" : "light"];
  const base = isDark
    ? {
        "--bg": "#14110d", "--card": "#1d1814", "--border": "#2e2820", "--border-soft": "#27221b", "--input": "#211c16",
        "--text": "#f1ede6", "--text-2": "#b4ad9f", "--muted": "#837d71", "--step-bg": "#1a1610", "--dot-mute": "#433c30", "--mute-tint": "#27221b",
        "--ok": "#52b97e", "--ok-ink": "#86d6a4", "--ok-tint": foxeHexToRgba("#52b97e", 0.16), "--ok-border": foxeHexToRgba("#52b97e", 0.32),
        "--warn": "#e0954a", "--warn-ink": "#eab676", "--warn-tint": foxeHexToRgba("#e0954a", 0.16),
        "--info-ink": "#7fb0e0", "--info-tint": foxeHexToRgba("#7fb0e0", 0.16),
        "--crit": "#e06a55", "--crit-ink": "#f0a293", "--crit-tint": foxeHexToRgba("#e06a55", 0.16), "--crit-border": foxeHexToRgba("#e06a55", 0.32),
      }
    : {
        "--bg": "#f4f2ee", "--card": "#ffffff", "--border": "#e7e3db", "--border-soft": "#efece5", "--input": "#faf9f6",
        "--text": "#1b1915", "--text-2": "#4a453d", "--muted": "#9a9388", "--step-bg": "#fbfaf7", "--dot-mute": "#cac3b7", "--mute-tint": "#efede7",
        "--ok": "#2f7d4f", "--ok-ink": "#1d6b41", "--ok-tint": "#e6f3ec", "--ok-border": "#cfe4d6",
        "--warn": "#d97a2b", "--warn-ink": "#9a5a12", "--warn-tint": "#fbeede",
        "--info-ink": "#2a5d8f", "--info-tint": "#e7eef8",
        "--crit": "#c0392b", "--crit-ink": "#a23b2a", "--crit-tint": "#fbe7e2", "--crit-border": "#f0d8d2",
      };
  base["--accent"] = ac.a;
  base["--accent-ink"] = ac.ink;
  base["--accent-tint"] = foxeHexToRgba(ac.a, isDark ? 0.17 : 0.12);
  base["--nav-active"] = foxeHexToRgba(ac.a, isDark ? 0.2 : 0.14);
  base["--accent-line"] = foxeHexToRgba(ac.a, isDark ? 0.32 : 0.3);
  return base;
}

window.foxeTheme = foxeTheme;
window.FOXE_ACCENTS = FOXE_ACCENTS;
