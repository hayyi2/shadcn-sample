# Shadcn Sample

Project to try and explore shadcn components.

## Getting Started

```
git clone https://github.com/hayyi2/shadcn-sample.git new-project
cd new-project
npm install
npm run dev
```

## Getting Done

- [x] layouts
  - [x] navbar
  - [x] sidenav
- [ ] elements
  - [x] forms
  - [x] tables
  - [x] widgets
  - [ ] components
- [ ] examples
  - [x] auth
  - [x] empty
  - [ ] dasboard

## Docs

### Forms
Install command
```bash
npm install react-hook-form
npm install zod
npm install @hookform/resolvers
npx shadcn-ui@latest add form
npx shadcn-ui@latest add input
```

### Table
Install command
```bash
npm install @tanstack/react-table
npx shadcn-ui@latest add table
npx shadcn-ui@latest add select
```

### Deploy `gh-pages`
- change `basenameProd` in `/vite.config.ts`
- create deploy key `GITHUB_TOKEN` in github `/settings/keys`
- commit and push changes code
- setup gihub pages to branch `gh-pages`

## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/hayyi2/shadcn-sample/blob/main/LICENSE) file for details.
