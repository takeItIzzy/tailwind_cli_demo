# Next.js + Tailwind CSS Example

A solution of [this discussion](https://github.com/rsuite/rsuite/discussions/1971).

Visit build product online: https://tailwind-cli-demo.vercel.app/

This example shows how to use [Tailwind CSS](https://tailwindcss.com/) [(v2.2)](https://blog.tailwindcss.com/tailwindcss-2-2) with Next.js when you have to override webpack css config built in Next.js. This behavior will [disable several css support](https://nextjs.org/docs/messages/built-in-css-disabled) and may invalidate tailwindcss.

Use [tailwind cli](https://tailwindcss.com/docs/installation#using-tailwind-cli) instead of the usual tailwind installation is a solution in this scenario.

Thanks to the [static file serving](https://nextjs.org/docs/basic-features/static-file-serving) feature about Next.js, we can integrate tailwind cli easy with Next.js as long as following these steps:

1. Run `npx tailwindcss -o public/tailwind.css --watch`, this command line will generate a css file in public folder at first time, and update this file each time you edit className in react components.
2. Link this css file at `_document.js`. You can copy my code [here](./pages/_document.js).
