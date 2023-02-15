const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

module.exports = {
    create: async (req, res) => {
        var { body } = req
        body.endAt = new Date(body.endAt)
        await prisma.opportunities
            .create({
                data: {
                    ...body,
                },
                select: {
                    id: true,
                    title: true,
                    description: true,
                    createdAt: true,
                    endAt: true,
                    company: {
                        select: {
                            name: true,
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
    update: async (req, res) => {
        const { id } = req.params
        var { body } = req
        body.endAt = new Date(body.endAt)

        await prisma.opportunities
            .update({
                data: {
                    ...body,
                },
                where: {
                    id: id,
                },
                select: {
                    id: true,
                    title: true,
                    description: true,
                    createdAt: true,
                    endAt: true,
                    company: {
                        select: {
                            name: true,
                        },
                    },
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
        await prisma.opportunities
            .findMany({
                select: {
                    id: true,
                    title: true,
                    description: true,
                    createdAt: true,
                    endAt: true,
                    company: {
                        select: {
                            name: true,
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
    getById: async (req, res) => {
        const { id } = req.params
        await prisma.opportunities
            .findUnique({
                where: {
                    id: id,
                },
                select: {
                    id: true,
                    title: true,
                    description: true,
                    createdAt: true,
                    endAt: true,
                    company: {
                        select: {
                            name: true,
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
    getByCompany: async (req, res) => {
        const { id } = req.params
        await prisma.opportunities
            .findMany({
                where: {
                    companyId: id,
                },
                select: {
                    id: true,
                    title: true,
                    description: true,
                    createdAt: true,
                    endAt: true,
                    company: {
                        select: {
                            name: true,
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
    search: async (req, res) => {
        const { search } = req.body
        await prisma.opportunities
            .findMany({
                where: {
                    OR: [
                        {
                            title: {
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
                    title: true,
                    description: true,
                    createdAt: true,
                    endAt: true,
                    company: {
                        select: {
                            name: true,
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
