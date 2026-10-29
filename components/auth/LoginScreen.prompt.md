Standard login screen for every FINPEC system — use it as the entry screen of any app (dark brand panel + full-bleed image + release-notes tab).

```jsx
<LoginScreen
  logoSrc="assets/finpec-logo-branco.png"
  systemName="FOXEN-AI" systemTagline="Flying Oxen - Artificial Intelligence"
  title="Deep & Machine Learning Neural Engine - Cattle Counter"
  description="Plataforma de aprendizado de máquina…"
  methods="both" onSso={sso} onSubmit={({ user, password }) => login(user, password)}
  imageSrc="assets/login-foxe-aerial.png" release="0.2.0113" />
```

- `methods`: `"sso"` (botão Microsoft + nota de reset), `"password"` (Usuário + Senha + "Esqueci a senha"), `"both"` (SSO, divisor "ou", formulário).
- Release tab: vertical, white with blue border, pinned to the image's left edge; click expands "Release notes — Build X" with `<details>` sections.
- Left panel is always dark (#0F0F0E) regardless of the light/dark theme.
