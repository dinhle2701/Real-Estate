const bcrypt = require('bcryptjs'); // hoặc 'bcrypt' đều được
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const initAdminAccount = async () => {
  try {
    const existingAdmin = await prisma.user.findUnique({
      where: { email: 'admin@gmail.com' },
    });

    if (!existingAdmin) {
      const hashedPassword = await bcrypt.hash('Admin@123', 10);

      await prisma.user.create({
        data: {
          name: 'Admin',            // Nếu bạn dùng "name" thay vì "username" trong schema
          email: 'admin@gmail.com',
          password: hashedPassword,
          role: 'admin',
          isActive: true,           // nếu bạn có field này trong schema.prisma
        },
      });

      console.log('✅ Admin mặc định đã được tạo');
    } else {
      console.log('ℹ️ Admin đã tồn tại');
    }
  } catch (error) {
    console.error('❌ Lỗi khi tạo tài khoản admin mặc định:', error.message);
  }
};

module.exports = initAdminAccount;
