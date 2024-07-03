const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.addNewProperty = async (req, res) => {
    const { property_name, locality, owner_name } = req.body;
    let localityRecord = await prisma.locality.findFirst({ where: { name: locality } });
    if (!localityRecord) {
        localityRecord = await prisma.locality.create({ data: { name: locality } });
    }
    const property = await prisma.property.create({
        data: {
            property_name,
            localityId: localityRecord.id,
            owner_name
        }
    });
    res.json({ message: 'Property added', property_id: property.id });
};

exports.fetchAllProperties = async (req, res) => {
    const { locality_name } = req.body;
    const locality = await prisma.locality.findFirst({ where: { name: locality_name } });
    if (!locality) return res.json([]);
    const properties = await prisma.property.findMany({ where: { localityId: locality.id } });
    res.json(properties);
};

exports.updatePropertyDetails = async (req, res) => {
    const { property_id, locality_id, owner_name } = req.body;
    const updatedProperty = await prisma.property.update({
        where: { id: property_id },
        data: { localityId: locality_id, owner_name }
    });
    res.json({ message: 'Property updated', property: updatedProperty });
};

exports.deletePropertyRecord = async (req, res) => {
    const { property_id } = req.body;
    await prisma.property.delete({ where: { id: property_id } });
    res.json({ message: 'Property deleted' });
};
