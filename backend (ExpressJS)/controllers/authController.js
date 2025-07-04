require('dotenv').config();
const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const prisma = new PrismaClient();

// Đăng ký
exports.register = async (req, res) => {
    console.log("📥 Đã gọi vào route REGISTER");

    try {
        const { name, email, password, role, phone, avatar } = req.body;

        const existingUser = await prisma.user.findUnique({ where: { email } });
        if (existingUser)
            return res.status(400).json({ message: 'Email already exists' });

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
                role: role || 'user',
                phone,
                avatar,
            },
        });

        console.log("✅ Đăng ký thành công");
        res.status(201).json({ message: 'Register successful' });
    } catch (error) {
        console.error("❌ Lỗi đăng ký:", error.message);
        res.status(500).json({ message: 'Register failed!!!', error: error.message });
    }
};


// Đăng nhập
exports.login = async (req, res) => {
    console.log('🔑 Login API hit');

    try {
        const { email, password } = req.body;

        const user = await prisma.user.findUnique({ where: { email } });
        if (!user)
            return res.status(404).json({ message: 'User not found, please register' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch)
            return res.status(401).json({ message: 'Wrong password' });

        const token = jwt.sign(
            {
                id: user.id,
                role: user.role,
                email: user.email,
                name: user.name,
            },
            process.env.JWT_SECRET,
            { expiresIn: '3d' }
        );

        // Loại bỏ password khỏi response
        const { password: _, ...userWithoutPassword } = user;

        res.status(200).json({
            token,
            user: userWithoutPassword,
        });
    } catch (error) {
        console.error("❌ Lỗi đăng nhập:", error.message);
        res.status(500).json({ message: 'Login failed', error: error.message });
    }
};
