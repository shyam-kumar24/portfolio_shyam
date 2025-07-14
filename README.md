# 🧑‍💻 Full-Stack Developer Portfolio

This is my fully functional personal portfolio website built using **Next.js 15 (App Router)**, **MongoDB Atlas**, **Tailwind CSS**, and deployed on **Vercel**. It includes both the public-facing portfolio and a protected admin dashboard to manage content dynamically.

🌐 **Live site** [portfolio-shyam-nu.vercel.app](https://portfolio-shyam-nu.vercel.app)

## 🔥 Features

- ✅ Responsive modern UI (Tailwind CSS)
- ✅ Full-stack architecture (Next.js + MongoDB)
- ✅ Admin dashboard to manage portfolio content
- ✅ API routes to interact with MongoDB
- ✅ SSR for improved performance and SEO
- ✅ Image optimization
- ✅ Deployed on Vercel

## 🧠 Tech Stack

| Frontend      | Backend/API       | Database  | Styling       | Deployment |
|---------------|-------------------|-----------|----------------|------------|
| Next.js 15 (App Router) | Next.js Route Handlers | MongoDB Atlas | Tailwind CSS | Vercel     |

---

## 📁 Project Structure

```txt
app/
└── page.js # Main Portfolio Page
└── api/ # API Routes
└── admin/ # Admin Dashboard (secured)

components/
└── client-view/ # Public sections
└── admin-view/ # Admin components

lib/
└── mongodb.js # MongoDB connection

.env # Environment variables

```

## 🚀 Getting Started Locally

1. **Clone the repo**
```bash
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name

3. Install dependencies
npm install

4. Create .env file
MONGODB_URI = your_mongodb_connection_string
NEXT_PUBLIC_SITE_URL = http://localhost:3000

5. Run the app
npx next dev

Visit: http://localhost:3000

``` 
## Admin Panel

Visit /admin

You can securely edit and update sections like Home, About, Experience, Education, and Projects

All changes are saved to MongoDB in real-time

