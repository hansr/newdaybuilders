# New Day Builders

Custom home builders marketing site. Jekyll + Vue, with a Marker Construction–style layout and visuals.

## Setup

```bash
cd /Users/hr/Dev/newdaybuilders
bundle install
bundle exec jekyll serve
```

Open [http://127.0.0.1:4000](http://127.0.0.1:4000).

## Structure

- **Home** (`/`) – Full-bleed hero with “NEW DAY” / “CUSTOM HOME BUILDERS”, nav, and Follow Us.
- **Projects** (`/projects/`) – Section hero + Vue-driven project grid (edit the inline data or add `_data/projects.yml`).
- **About** (`/about/`) – Short intro and value proposition.
- **Contact** (`/contact/`) – Vue contact form (wire to your backend or mailto).

## Customization

- **Nav / social** – `_config.yml`: `nav`, `social` (e.g. `instagram`, `facebook`).
- **Hero text** – `index.md` front matter: `hero.title`, `hero.tagline`.
- **Projects** – Edit the `projects` array in `projects.md` or add Jekyll data and point Vue at it.
- **Styles** – `_sass/` (variables, header, hero, footer, main). Primary colors and fonts in `_variables.scss`.

## Build

```bash
bundle exec jekyll build
```

Output is in `_site/`.
