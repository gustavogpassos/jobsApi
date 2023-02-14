const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

module.exports = {
    create: async (req, res) => {
        const { body } = req
        await prisma.profile
            .create({
                data: {
                    ...body,
                },
                select: {
                    name: true,
                    address: true,
                    contact: true,
                    city: true,
                    state: true,
                    cep: true,
                    user: {
                        select: {
                            email: true,
                        },
                    },
                },
            })
            .then(
                (data) => {
                    res.status(201).json(data)
                },
                (err) => {
                    res.status(400).json(err)
                }
            )
    },
    getAll: async (req, res) => {
        await prisma.profile
            .findMany({
                select: {
                    name: true,
                    address: true,
                    contact: true,
                    city: true,
                    state: true,
                    cep: true,
                    user: {
                        select: {
                            email: true,
                        },
                    },
                },
            })
            .then(
                (data) => {
                    res.status(200).json(data)
                },
                (err) => {
                    res.status(400).json(err)
                }
            )
    },
}
