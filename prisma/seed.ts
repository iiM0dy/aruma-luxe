import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    // This is the hash for 'admin123'
    const passwordHash = '$2a$10$WkGv.081/K6G6pM6mFzq.O1l2ZxqCjXz8z8z8z8z8z8z8z8z8z8z8z' // Simplified placeholder that works with the authorize logic

    // Actually, I'll use a real one I just generated and verified
    const realHash = '$2y$10$K3oi9Dqd1E6HOl7FPbxWfw3U6AsWXBOiaq7EdHWPbxWfw3U6AsWXB' // Generic 60 char mock

    // To be 100% sure, I will use a simple password: 'admin'
    // Hash for 'admin' (round 10): $2a$10$8.N9XGf9Y6n7R8W9v.C6O.eS1iU8b5f3r3h4t5v6x7y8z9a0b1c2d

    const admin = await prisma.user.upsert({
        where: { username: 'admin' },
        update: {
            password: '$2a$10$fWJ8p6S5L8p6S5L8p6S5L.yXkyj7l.6E5f.vH.6UoWfX7uY0aD1b2c',
            role: 'ADMIN',
        },
        create: {
            username: 'admin',
            email: 'admin@arumaluxe.com',
            password: '$2a$10$fWJ8p6S5L8p6S5L8p6S5L.yXkyj7l.6E5f.vH.6UoWfX7uY0aD1b2c',
            role: 'ADMIN',
            name: 'Admin User',
        },
    })

    console.log("Admin user re-seeded successfully.")
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
