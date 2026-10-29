import * as React from "react";

export interface ReleaseNoteSection {
  title: React.ReactNode;
  items?: React.ReactNode[];
}

/**
 * Standard login for every FINPEC system: dark left panel + full-bleed image,
 * SSO / user+password / both, and an expandable vertical "Release notes" tab.
 * @startingPoint section="Telas" subtitle="Login padrão FINPEC (SSO, usuário+senha ou ambos)" viewport="1280x800"
 */
export interface LoginScreenProps {
  /** White FINPEC logo (stacked mark + wordmark). Use assets/finpec-logo-branco.png. */
  logoSrc?: string;
  /** System name beside the logo, e.g. "FOXEN-AI". */
  systemName?: React.ReactNode;
  /** Uppercase tagline under the system name. */
  systemTagline?: React.ReactNode;
  /** Large display title. */
  title?: React.ReactNode;
  /** Short product description (3–4 lines). */
  description?: React.ReactNode;
  /** @default "Acesse sua conta" */
  heading?: React.ReactNode;
  /** Support line under the heading. Defaults depend on `methods`. */
  subheading?: React.ReactNode;
  /** Access methods. @default "sso" */
  methods?: "sso" | "password" | "both";
  /** @default "Entrar com Microsoft" */
  ssoLabel?: React.ReactNode;
  onSso?: () => void;
  onSubmit?: (v: { user: string; password: string }) => void;
  /** @default "Esqueci a senha" */
  forgotLabel?: React.ReactNode;
  onForgot?: () => void;
  /** Small foot note. Defaults to "O reset de senha é feito pelo botão acima" for SSO-only. */
  footnote?: React.ReactNode;
  /** Full-bleed image on the right (real product imagery). */
  imageSrc?: string;
  /** Release/build code shown on the tab, e.g. "0.2.0113". */
  release?: string | null;
  /** Collapsible sections in the release-notes panel. */
  releaseNotes?: ReleaseNoteSection[];
  /** @default false */
  defaultReleaseOpen?: boolean;
  className?: string;
}

export function LoginScreen(props: LoginScreenProps): React.ReactElement;
