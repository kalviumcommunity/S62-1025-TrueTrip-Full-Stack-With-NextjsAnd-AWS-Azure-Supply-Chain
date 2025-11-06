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

Environment Variable Management

Files Created:

.env.local → stores real credentials like DATABASE_URL, JWT_SECRET, and API_KEY (not pushed to GitHub).
.env.example → sample file with placeholder values for setup reference.
.gitignore → includes .env.local to protect secrets from being committed.

Variables Used

Server-side Variables:
DATABASE_URL, JWT_SECRET, API_KEY — accessible only in the backend and never exposed to the client.

Client-side Variables:
NEXT_PUBLIC_API_BASE_URL — safe to expose to the frontend and used for public API calls.

Safe Usage Example:

// Backend only
const dbUrl = process.env.DATABASE_URL;

// Frontend safe variable
const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

Why Environment Variables Matter: 

Keeps sensitive data secure and out of source control.
Maintains clean configuration for all environments (development, staging, production)
Prevents accidental exposure of API keys or database URLs.
Ensures easy onboarding using .env.example as a reference file.
Build-time vs Runtime

In Next.js, environment variables are loaded at build time.
This means if you modify .env.local, you must restart the development server to apply changes.
Client-side variables (those starting with NEXT_PUBLIC_) are bundled during the build and can be safely accessed in browser code.

Reflection

If a teammate accidentally pushed .env.local to GitHub, all sensitive credentials — like database URLs or API keys — would become public.
My setup prevents this by:
Adding .env.local to .gitignore (so it never gets committed).
Providing .env.example with safe placeholder values for teammates to replicate their setup securely.

!(Img/env.png)

Docker Setup Summary

This project uses Docker to containerize the Next.js frontend, PostgreSQL database, and Redis cache. The Dockerfile builds and runs the Next.js app — it installs dependencies, builds the project, and serves it on port 3000. The docker-compose.yml file manages multiple services together, linking them through a shared network and using volumes for persistent data.

During setup, I faced issues like missing package.json paths, Docker daemon not running, and version warnings in docker-compose.yml. These were fixed by correcting file paths, starting Docker Desktop, and removing deprecated fields.

After resolving these, all containers built successfully, and the app ran smoothly inside Docker. This setup ensures consistent builds, easier debugging, and a fully portable development environment.

!(Docker.png)

!(Docker1.png)

Authentication APIs (Signup / Login)

Overview

This project implements secure authentication APIs for a Next.js app. Users can sign up, log in, and access protected routes.

Why: 
Authentication ensures only valid users can access sensitive data. Security here is critical because exposing user credentials can compromise the entire app.

Authentication Flow

Signup:
Users provide name, email, and password.
Passwords are hashed before storing in the database.

Why: 
Hashing protects user passwords even if the database is leaked.

Login:
Users log in with email and password.
On success, a JWT token is issued, which encodes user identity and expiry.

Why: 
JWT allows the server to trust requests without storing session info.

Protected Routes:
Endpoints require a valid JWT token to access.

Why: 
This ensures sensitive routes are not accessible to unauthorized users.

Testing the APIs:
Signup: Verify new users are created successfully.
Login: Verify JWT is issued for correct credentials.
Protected Routes: Verify valid tokens allow access and invalid/missing tokens are rejected.

Why: 
Testing ensures the authentication system works as intended and prevents security gaps.

Environment Variables:
.env.local → stores real credentials like DATABASE_URL, JWT_SECRET (never pushed to GitHub).
.env.example → sample file with placeholder values for teammates to set up their environment.
.gitignore → ensures .env.local is not committed.

Server-side variables: 
Only accessible in the backend.

Client-side variables: 
Only variables starting with NEXT_PUBLIC_ are safe for frontend use.

Why:
Keeps secrets safe, prevents accidental exposure, and allows easy environment setup.

Security Considerations:
Tokens expire after 1 hour.
Tokens can be stored in cookies or localStorage depending on app needs.
Refresh strategies are necessary for long-lived sessions.

Why: 
Proper token management prevents unauthorized access and ensures smooth user experience.
!(login.png)
!(signup.png)
!(user.png)


changes made 