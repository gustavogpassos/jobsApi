const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

exports.findAll = async (req, res) => {
    console.log(req)
    const companies = await prisma.company.findMany()

    res.status(200).json(companies)
}

exports.create = async (req, res) => {
    const { name, cnpj, email, address, description } = req.body

    const newCompany = await prisma.company.create({
        data: {
            name,
            email,
            address,
            description,
            cnpj,
        },
    })

    res.status(201).json(newCompany)
}

exports.findById = async (req, res) => {
    const { _id } = req.params

    const company = await prisma.company.findUnique({
        where: { id: _id },
    })

    res.status(200).json(company)
}

exports.search = async (req, res) => {
    const { search } = req.body

    const companies = await prisma.company.findMany({
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

    res.status(200).json(companies)
}
