const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

module.exports = {
    findAll: async (req, res) => {
        await prisma.company
            .findMany({
                select: {
                    name: true,
                    description: true,
                    email: true,
                    address: true,
                    cnpj: true,
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
    create: async (req, res) => {
        const { name, cnpj, email, address, description } = req.body

        await prisma.company
            .create({
                data: {
                    name,
                    email,
                    address,
                    description,
                    cnpj,
                },
                select: {
                    name: true,
                    description: true,
                    email: true,
                    address: true,
                    cnpj: true,
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
    findById: async (req, res) => {
        const { _id } = req.params
        await prisma.company
            .findUnique({
                where: { id: _id },
                select: {
                    name: true,
                    description: true,
                    email: true,
                    address: true,
                    cnpj: true,
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
    search: async (req, res) => {
        const { search } = req.body
        await prisma.company
            .findMany({
                where: {
                    OR: [
                        {
                            name: { contains: search },
                        },
                        {
                            description: { contains: search },
                        },
                    ],
                },
                select: {
                    name: true,
                    description: true,
                    email: true,
                    address: true,
                    cnpj: true,
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
    update: async (req, res) => {
        const { id } = req.params
        const body = req.body
        await prisma.company
            .update({
                data: {
                    ...body,
                },
                where: {
                    id: id,
                },
                select: {
                    name: true,
                    description: true,
                    address: true,
                    cnpj: true,
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
