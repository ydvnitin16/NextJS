This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


# Notes

## Installation

- npx create-next-app@latest
- cd my-app
- npm run dev

## Project Structure

### Top Level folder
- app  (for the app router) -> It is the router endpoint for the app (recomennded) 
 eg:-  files structure : app/blog --> http://localhost:3000/blog access the same page that is inside the blog means app/blog/page.js
- pages 
- src - optional 
- public - static assets

### Routing files 

- Page is used to expose a route means domain/blog gives not page found if we not have page.js in the blog folder 
- Layout is used to share the components or UI like header, nav, and loading for until the page loads and error for error handling page 

| file | extension | work |
| :--- | :---:| ---: |
layout |	.js .jsx .tsx |	Layout
page |	.js .jsx .tsx |	Page
loading |	.js .jsx .tsx |	Loading UI
not-found |	.js .jsx .tsx |	Not found UI
error |	.js .jsx .tsx |	Error UI
global-error |	.js .jsx .tsx |	Global error UI
route |	.js .ts |	API endpoint
template |	.js .jsx .tsx |	Re-rendered layout
default |	.js .jsx .tsx |	Parallel route fallback page


### Dynamic Route

Parameterize segments with square brackets. Use [segment] for a single param, [...segment] for catch‑all, and [[...segment]] for optional catch‑all. Access values via the params prop.

| Path | URL pattern |
| :---| ---: |
| app/blog/[slug]/page.tsx	  |  /blog/my-first-post |
| app/shop/[...slug]/page.tsx	  |  /shop/clothing, /shop/clothing/shirts |
| app/docs/[[...slug]]/page.tsx |	/docs, /docs/layouts-and-pages, /docs/| api-reference/use-router |

This slug will be the folder with the params name and this will be only for the params in the endpoint and can be accessed by the decendent pagee.js with the prop.params. eg:- app/blog/[id]/page.js, now page.js will access it by {params} in the props.


### Colocation

In the app directory, nested folders define route structure. Each folder represents a route segment that is mapped to a corresponding segment in a URL path.

However, even though route structure is defined through folders, a route is not publicly accessible until a page.js or route.js file is added to a route segment.

And, even when a route is made publicly accessible, only the content returned by page.js or route.js is sent to the client.

### Private folders

Folder followed by underscore is set to private and this is not publicly available, even it has route.js or page.js it is not included in route. eg. app/_privateFolder/page.js

### Route groups

We can group the route without effecting or adding them in the url path like app/(admin)/dashboard/page.js, this admin is not included in the endpoint it helps to group the code for admin, marketing etc. eg. http://localhost:3000/dashboard

![alt text](route-group-organisation.avif)

 ### Layouts

 we can create layouts for each folder route like we have a layout.js for the main route endpoint,

 - app/admin/layout.js now the main app/layout.js is not used for the admin layout admin endpoint has its own layout similarly we can create app/marketing/layout.js

 - if we make the admin to the group route (admin) then the (admin)/layout.js then this layout is used for the decendents folder routes e.g (admin)/dashboard.js
![alt text](route-group-multiple-layouts.avif)


![alt text](route-group-opt-in-layouts.avif)

### Creating multiple root layouts

To create multiple root layouts, remove the top-level layout.js file, and add a layout.js file inside each route group. This is useful for partitioning an application into sections that have a completely different UI or experience. The <html> and <body> tags need to be added to each root layout.

![alt text](route-group-multiple-root-layouts.avif)