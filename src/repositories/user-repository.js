const  { PrismaClient } = require('@prisma/client'); 

const prisma = new PrismaClient()

async function create(data) {
    const response = await prisma.user.create({
        data: data
     });
    return response;
}

async function getUser(email) {
    const response = await prisma.user.findFirst({
        where: {
            email: email
        }
    });
    return response;
}

module.exports = {
    create,
    getUser
}