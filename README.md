This is a [Next.js](https://nextjs.org/) project built todo list using prisma client db.

## Getting started

### 1. Download example and install dependencies

Install npm dependencies:

```
npm install
```
### 2. Create and seed the database
run the following command to create your SQLite database file.

```
npx prisma init --datasource-provider sqlite

npx prisma migrate dev --name init
```
<!-- When `npx prisma migrate dev` is executed against a newly created database, seeding is also triggered. The seed file in [`prisma/seed.ts`](./prisma/seed.ts) will be executed and your database will be populated with the sample data. -->

### 3. Start the app

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.
