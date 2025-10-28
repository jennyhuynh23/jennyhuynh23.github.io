## Personal Website (React, no build step)

This is a lightweight personal website scaffold built with React and JSX compiled in the browser via Babel. No bundlers or build tools are required.

### Run

- Option 1: Double-click `index.html` to open it in your browser.
- Option 2: Serve locally (recommended):

```bash
# Python
python3 -m http.server 5173
# then open http://localhost:5173

# OR Node (needs npm installed)
npx serve -l 5173
```

### Customize

- Update your name, bio, links, and email inside `index.html` (look for the React components: `Hero`, `About`, `Contact`).
- Edit colors, spacing, and layout in `styles.css` (CSS variables at the top control theming).
- Projects are defined in the `Projects` component as an array; add your own entries.

### Notes

- This template uses React via CDN and `@babel/standalone` to transpile JSX in the browser. For production, consider moving to a build setup (Vite, Next.js) for performance and optimization.


