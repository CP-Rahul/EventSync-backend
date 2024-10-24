const  { PrismaClient } = require('@prisma/client'); 

const prisma = new PrismaClient()

async function create(data) {
    const response = await prisma.event.create({
        data: data
     });
    return response;
}

async function getAll(userId) {
    const response = await prisma.event.findMany({
        where: {
            userId: userId
        }
    });
    return response;
}

async function get(id) {
    const response = await prisma.event.findUnique({
        where: {
            id: id
        }
    });
    return response;
}

async function update(id, data) {
    const response = await prisma.event.update({
        where: {
            id: id,
        },
        data: data
    });
    return response;
}

async function destroy(id) {
    const response = await prisma.event.delete({
        where: {
            id: id,
        },
    });
    return response;
}

module.exports = {
    create,
    getAll,
    get,
    update,
    destroy
}