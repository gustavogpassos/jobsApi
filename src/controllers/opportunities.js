const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

module.exports = {
    create: async (req, res) => {
        const { title, description, companyId, endAt } = req.body

        const endDate = new Date(endAt)

        await prisma.opportunities
            .create({
                data: {
                    title,
                    description,
                    companyId,
                    endAt: endDate,
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
    findAll: async (req, res) => {
        await prisma.opportunities.findMany({}).then(
            (data) => {
                res.status(200).json(data)
            },
            (err) => {
                res.status(400).json(err)
            }
        )
    },
    findById: async (req, res) => {
        const { id } = req.params
        await prisma.opportunities
            .findUnique({
                where: {
                    id: id,
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
    update: async (req, res) => {
        const { id } = req.params
        const { title, description, endAt } = req.body

        const newData = {}
        if (title) newData.title = title
        if (description) newData.description = description
        if (endAt) newData.endAt = endAt

        await prisma.opportunities
            .update({
                data: {
                    title: title,
                },
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
}
