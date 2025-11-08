```
src/
│
├── app/                          # Next.js App Router (pages, layouts, etc.)
│   ├── layout.js
│   ├── globals.css
│   │
│   ├── issues/                   # Feature: Issues
│   │   ├── page.js               # Route page
│   │   ├── loading.js            # Route loading UI
│   │   ├── IssueListRender.jsx   # Local component
│   │   ├── StatusBadge.jsx       # Local component
│   │   ├── UpdateStatus.jsx      # Local component (client)
│   │   ├── actions.js            # (optional) Issue-specific server actions
│   │   └── services.js           # Issue-specific service functions (DB logic)
│   │
│   ├── dashboard/
│   │   ├── page.js
│   │   ├── ChartSection.jsx
│   │   └── actions.js
│   │
│   └── api/                      # (if needed) Next.js API routes
│       └── ...
│
├── components/                   # Shared components (used across app)
│   ├── ui/                       # shadcn/ui primitives (never touch server logic)
│   │   ├── button.jsx
│   │   ├── select.jsx
│   │   └── ...
│   │
│   ├── layout/                   # App-wide layout components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── ThemeProvider.jsx
│   │
│   └── common/                   # Shared reusable pieces (badges, modals, etc.)
│       ├── StatusBadge.jsx
│       └── Loader.jsx
│
├── lib/
│   ├── prisma.js                 # Prisma client singleton
│   ├── utils/
│   │   ├── debounce.js
│   │   ├── formatDate.js
│   │   ├── calcProgress.js
│   │   └── index.js              # optional: export all utils
│   ├── constants.js              # static values or enums
│   ├── validation.js             # zod or validation helpers
│   └── config.js                 # env or app-level configs
│
├── actions/                      # Global server actions (used across features)
│   ├── authActions.js
│   ├── userActions.js
│   └── ...
│
├── services/                     # Global DB interaction logic
│   ├── userService.js
│   ├── authService.js
│   └── ...
│
└── styles/
    └── globals.css
