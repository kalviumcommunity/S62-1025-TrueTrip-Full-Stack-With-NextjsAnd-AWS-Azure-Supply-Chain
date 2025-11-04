Team S02 – TrueTrip

Problem Statement

Intercity bus ticket cancellations and refunds are often opaque, inconsistent, and slow.
Passengers lack visibility into refund status and processing timelines.

Our solution:

A web application built with Next.js (TypeScript) and AWS/Azure that ensures transparent refund tracking, real-time status updates, and trustworthy transaction records for both passengers and bus operators.

Project Folder Structure
src/
├── app/         
│   ├── page.tsx  
│   └── refund/  
├── components/   
├── lib/          
public/           
.env              
.next/         
   
Setup Instructions
Clone the Repository
git clone https://github.com/kalviumcommunity/S62-1025-TrueTrip-Full-Stack-With-NextjsAnd-AWS-Azure-Supply-Chain.git
cd truetrip
Install Dependencies
npm install
Run the App Locally
npm run dev
Then visit → http://localhost:3000

Reflection: Why This Structure?

We chose a modular src/-based structure aligned with Next.js 13+ best practices to ensure scalability and clarity.

The app/ directory follows the App Router system — making routing cleaner and easier to maintain.

components/ ensures reusable UI elements across pages, improving consistency and reducing redundancy.

lib/ contains configurations, helper functions, and API logic — promoting separation of concerns.

Using TypeScript, ESLint, and Turbopack enhances reliability, enforces coding standards, and accelerates builds.

This setup enables our team to add new features (like live refund tracking, AWS DB integration, or user authentication) in future sprints without disrupting the existing flow.

!(Img/Next js.png)


TypeScript, ESLint & Prettier Setup

TypeScript
- `tsconfig.json` has `strict: true`, `noImplicitAny`, `noUnusedLocals`, `noUnusedParameters` to catch bugs at compile time.

ESLint + Prettier
- `.eslintrc.json` extends `next/core-web-vitals`, `plugin:@typescript-eslint/recommended`, `plugin:prettier/recommended`.
- Rules: `no-console: warn`, `semi: ["error","always"]`, `quotes: ["error","double"]`.

Pre-commit Hooks
- Husky + lint-staged runs `eslint --fix` and `prettier --write` on staged files to ensure code quality before commit.

Why
- Strict TypeScript reduces runtime bugs by enforcing types during development.
- ESLint enforces consistent code style and catches common errors early.
- Pre-commit hooks prevent accidental bad code being committed to the repo.

!(Img/Lint.png)