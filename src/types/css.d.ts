// Next.js only declares `*.module.css`, so global stylesheet imports need their own
// declaration once `noUncheckedSideEffectImports` is in effect. Global CSS has no
// exports, so the module body stays empty.
declare module '*.css' {}
