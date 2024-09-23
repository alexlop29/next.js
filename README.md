## Routing

### File Conventions
> Next.js provides a set of special files to create UI with specific behavior in nested routes:
> layout	Shared UI for a segment and its children
> page	Unique UI of a route and make routes publicly accessible
> loading	Loading UI for a segment and its children
> not-found	Not found UI for a segment and its children
> error	Error UI for a segment and its children
> global-error	Global Error UI
> route	Server-side API endpoint
> template	Specialized re-rendered Layout UI
> default	Fallback UI for Parallel Routes

### Creating Routes
> Next.js uses a file-system based router where folders are used to define routes.
```
src/app/dashboard/page.tsx
```


> A special page.js file is used to make route segments publicly accessible.

> Good to know:
> The .js, .jsx, or .tsx file extensions can be used for Pages.
> A page is always the leaf of the route subtree.
> A page.js file is required to make a route segment publicly accessible.
> Pages are Server Components by default, but can be set to a Client Component.
> Pages can fetch data. View the Data Fetching section for more information.

### Layouts
> A layout is UI that is shared between multiple routes. On navigation, layouts preserve state, remain interactive, and do not re-render. Layouts can also be nested.

> The root layout is defined at the top level of the app directory and applies to all routes. This layout is required and must contain html and body tags, allowing you to modify the initial HTML returned from the server.

```
src/app/dashboard/layout.tsx
```

### Linking and Navigating
> <Link> is a built-in component that extends the HTML <a> tag to provide prefetching and client-side navigation between routes. It is the primary and recommended way to navigate between routes in Next.js.
```
src/app/analytics/page.tsx
src/app/dashboard/page.tsx
```

> The useRouter hook allows you to programmatically change routes from Client Components.
/*
The useRouter hook imported from next/router is not supported in the app directory
but can continue to be used in the pages directory.
*/

> For Server Components, use the redirect function instead.

> Next.js allows you to use the native window.history.pushState and window.history.replaceState methods to update the browser's history stack without reloading the page.

### Error Handling
> Uncaught exceptions are unexpected errors that indicate bugs or issues that should not occur during the normal flow of your application. These should be handled by throwing errors, which will then be caught by error boundaries.
> Common: Handle uncaught errors below the root layout with error.js.
> Optional: Handle granular uncaught errors with nested error.js files (e.g. app/dashboard/error.js)
> Uncommon: Handle uncaught errors in the root layout with global-error.js.
```
src/app/dashboard/page.tsx
```

### Loading UI and Streaming
> The special file loading.js helps you create meaningful Loading UI with React Suspense. With this convention, you can show an instant loading state from the server while the content of a route segment loads. The new content is automatically swapped in once rendering is complete.
```
src/app/analytics/loading.tsx
```
