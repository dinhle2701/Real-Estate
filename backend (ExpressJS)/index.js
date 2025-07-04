require('dotenv').config();
const app = require('./app');
const { PrismaClient } = require('@prisma/client');
const initAdminAccount = require('./utils/initAdmin'); // bạn giữ lại nếu có

const prisma = new PrismaClient();
const PORT = process.env.PORT || 6666;

async function startServer() {
    try {
        // Kiểm tra kết nối PostgreSQL qua Prisma
        await prisma.$connect();
        console.log('✅ Prisma connected to PostgreSQL.');

        // Tạo tài khoản admin nếu cần
        await initAdminAccount(prisma); // truyền prisma nếu cần

        // Khởi động server
        app.listen(PORT, () => {
            console.log(`🚀 Server running on http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error('❌ PostgreSQL connection failed:', error.message);
    }
}

startServer();
