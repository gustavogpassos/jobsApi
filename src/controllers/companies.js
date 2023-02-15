const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

module.exports = {
    create: async (req, res) => {
        const { body } = req
        await prisma.company
            .create({
                data: {
                    ...body,
                },
                select: {
                    id: true,
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
        const { body } = req
        await prisma.company
            .update({
                data: {
                    ...body,
                },
                where: {
                    id: id,
                },
                select: {
                    id: true,
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
    delete: async (req, res) => {
        const { id } = req.params
        await prisma.company
            .delete({
                where: {
                    id: id,
                },
            })
            .then(
                (data) => {
                    res.status(203).json(data)
                },
                (err) => {
                    res.status(400).json(err)
                }
            )
    },
    getAll: async (req, res) => {
        await prisma.company
            .findMany({
                select: {
                    id: true,
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
    getById: async (req, res) => {
        const { _id } = req.params
        await prisma.company
            .findUnique({
                where: { id: _id },
                select: {
                    id: true,
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
                            name: {
                                contains: search,
                                mode: 'insensitive',
                            },
                        },
                        {
                            description: {
                                contains: search,
                                mode: 'insensitive',
                            },
                        },
                    ],
                },
                select: {
                    id: true,
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
}
