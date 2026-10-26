# joelcsneto90.github.io

Página pessoal e currículo de Joel Neto, publicada em <https://joelcsneto90.github.io/>.

React + Vite + TypeScript, sem router. Conteúdo em `src/content/pt.ts` e `src/content/en.ts`
(mesmo tipo `Content`, o `tsc` garante que os dois batem); dados fixos em `src/content/profile.ts`.

```bash
npm install
npm run dev      # desenvolvimento
npm run build    # tsc + build em dist/
```

Deploy: push em `main` roda `.github/workflows/deploy.yml` e publica no GitHub Pages.
