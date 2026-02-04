# Aruma Luxe (أروما لوكس)

Aruma Luxe is a premium e-commerce platform dedicated to luxury perfumes and fragrances. Built with a modern tech stack, it provides a seamless shopping experience for customers and a robust management interface for administrators.

## Tech Stack

### Frameworks & Libraries
- **Frontend**: [Next.js 16](https://nextjs.org/) (App Router), [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/) (Lucide/Lu icons)

### Backend & Database
- **ORM**: [Prisma](https://www.prisma.io/)
- **Database**: PostgreSQL (Neon.tech)
- **Authentication**: [NextAuth.js v5](https://nextjs.authjs.dev/) (Beta)

### Tools & Development
- **Language**: TypeScript
- **State Management**: React Hooks (useState, useEffect)
- **Deployment**: Optimized for Vercel

## Project Structure

```text
aruma-luxe/
├── app/
│   ├── (site)/         # Public facing pages (Homepage, Store, etc.)
│   ├── admin/          # Admin Dashboard and management pages
│   ├── api/            # Server-side API routes
│   ├── components/      # Reusable UI components
│   └── globals.css     # Global styles and Tailwind configuration
├── prisma/
│   ├── schema.prisma   # Database schema definition
│   └── seed.ts         # Database seeding script
├── public/             # Static assets (images, logos)
├── lib/                # Shared utilities and configurations
└── package.json        # Project metadata and dependencies
```

## Features

### Storefront
- **Dynamic Catalog**: Browse perfumes by categories with real-time filtering.
- **Aromatic Notes**: Detailed product views showcasing Top, Heart, and Base notes.
- **Premium Design**: High-end aesthetics with RTL support, glassmorphism effects, and smooth animations.
- **Responsive Layout**: Fully optimized for mobile, tablet, and desktop viewing.
- **Performance**: Integrated skeleton loaders and optimized image handling.

### Admin Panel
- **Dashboard**: Real-time statistics on products, categories, and inventory.
- **Product Management**: Complete CRUD (Create, Read, Update, Delete) functionality for fragrances.
- **Category Management**: Organize the store collection through custom fragrance categories.
- **Integrated Search**: Quick search functionality across the entire inventory.
- **Secure Access**: Protected admin routes powered by NextAuth.

## Installation & Setup

### Requirements
- Node.js 18.x or higher
- npm or yarn
- A PostgreSQL database (e.g., Neon.tech)

### Environment Variables
Create a `.env` file in the root directory and add the following variables:

```env
DATABASE_URL="your_postgresql_connection_string"
DIRECT_URL="your_postgresql_direct_connection_string"
AUTH_SECRET="your_nextauth_secret"
```
> ⚠️ Do not commit `.env` files to version control.

### Installation Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/aruma-luxe.git
   cd aruma-luxe
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up the database**:
   ```bash
   npx prisma generate
   npx prisma db push
   ```

4. **Seed the database (Optional)**:
   ```bash
   npm run seed
   ```

5. **Run the development server**:
   ```bash
   npm run dev
   ```

## Build & Deployment

### Build Commands
- **Build**: `npm run build`
- **Lint**: `npm run lint`
- **Start**: `npm run start`

### Deployment Info
The project is architected for **Vercel**. Ensure environment variables are configured in the Vercel dashboard and the Prisma client is generated during the build step.

## Future Improvements / TODO
- [ ] Implementation of a full shopping cart and checkout system.
- [ ] User review and rating system for products.
- [ ] Email notifications for order confirmations.
- [ ] Integration of a payment gateway (e.g., Stripe).
- [ ] Advanced analytics and sales reporting in the admin panel.

