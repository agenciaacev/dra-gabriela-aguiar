# Dra. Gabriela Aguiar — Landing Page

Landing page institucional da Dra. Gabriela Aguiar, médica com atuação em Medicina Integrativa, Saúde Mental, Emagrecimento e Saúde Metabólica.

## Stack

* Vite
* React 18
* TypeScript
* TailwindCSS
* AOS (animações on-scroll)
* lucide-react (ícones, opcional)

## Como rodar

```bash
npm install
npm run dev
```

Build de produção:

```bash
npm run build
npm run preview
```

## Estrutura de blocos

1. Hero (com background image orgânico e overlay verde)
2. Authority (números + bio + selos)
3. Identification (sintomas em formato de perguntas)
4. Mental Health (eixo 01, com background de imagem)
5. Weight (eixo 02, com 4 accordions e mini-FAQ)
6. Mind & Metabolism (eixo 03, com background de natureza)
7. Process (5 passos + FAQ completo)
8. Final CTA (com background de imagem natureza)
9. Footer

## Paleta

* Verde escuro: `#2F4A3F`
* Verde médio: `#9FB38A`
* Verde claro: `#C7D3BE`
* Off-white: `#F5F5F3`
* Cinza suave: `#EDEDEA`

## Tipografia

* Títulos: Playfair Display
* Corpo: Open Sans

## Imagens

Imagens de fundo são carregadas do Unsplash (CDN). Substitua por imagens próprias ou da clínica em produção.

## Substituições recomendadas em produção

* Foto da Dra. Gabriela em `Authority.tsx`
* Número do WhatsApp em `FinalCTA.tsx` e `Footer.tsx` (atualmente `5500000000000`)
* Imagens de background dos blocos Hero, Mental Health, Mind & Metabolism e Final CTA
