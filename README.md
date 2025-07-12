
# Saociolo

>A modern, full-stack social platform built with Next.js, TypeScript, Prisma, and Clerk.


## 🚀 Features

- ✨ Modern UI with [shadcn/ui](https://ui.shadcn.com/), [Radix UI](https://www.radix-ui.com/), and [Lucide icons](https://lucide.dev/)
- 🔒 Authentication & user management via [Clerk](https://clerk.com/)
- 🗃️ Database with [Prisma ORM](https://www.prisma.io/) & PostgreSQL
- 📝 Create posts, comment, like, follow users, and receive real-time notifications
- 🌗 Light/dark mode toggle
- 📦 File uploads with [UploadThing](https://uploadthing.com/)
- 🧩 Modular, reusable components
- 💡 TypeScript, Tailwind CSS, and best practices throughout

---

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS, shadcn/ui
- **Database:** PostgreSQL (via Prisma ORM)
- **Auth:** Clerk
- **UI:** Radix UI, Lucide icons
- **File Uploads:** UploadThing

---

## 📦 Getting Started

1. **Clone the repo:**
   ```bash
   git clone https://github.com/your-username/saociolo.git
   cd saociolo
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables:**
   - Copy `.env.example` to `.env` and fill in your database and Clerk credentials.

4. **Generate Prisma client:**
   ```bash
   npx prisma generate
   ```

5. **Run database migrations:**
   ```bash
   npx prisma migrate dev
   ```

6. **Start the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

7. **Open your browser:**
   Visit [https://saociolo.vercel.app/](https://saociolo.vercel.app/)

---

## 📁 Project Structure

- `src/app/` — App routes, pages, and layouts
- `src/components/` — UI components (Navbar, Postcard, WhoToFollow, etc.)
- `src/actions/` — Server actions for posts, users, notifications, etc.
- `src/lib/` — Prisma client, utilities
- `prisma/` — Prisma schema

---

## 🧑‍💻 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## 📜 License

This project is licensed under the MIT License.

---

<p align="center">
  <b>Made with ❤️ by Diyansh</b>
</p>
