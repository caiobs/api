import CatalogModel from "../models/Catalog.js";

const catalogController = {
    create: async (req, res) => {
        try {
            const catalog = {
                user: req.body.user,
                products: req.body.products,
            };

            const response = await CatalogModel.create(catalog);

            res.status(201).json({ response, msg: "Catalog created." });
        } catch (error) {
            console.log(error);
        }
    },
    getAll: async (req, res) => {
        try {
            const catalogs = await CatalogModel.find();
            res.json(catalogs);
        } catch (error) {
            console.log(error);
        }
    },
    get: async (req, res) => {
        try {
            const id = req.params.id;
            const catalog = await CatalogModel.findById(id);

            if (!catalog) {
                res.status(404).json({ msg: "Catalog not found." });
                return;
            }

            res.json(catalog);
        } catch (error) {
            console.log(error);
        }
    },
    delete: async (req, res) => {
        try {
            const id = req.params.id;
            const catalog = await CatalogModel.findById(id);

            if (!catalog) {
                res.status(404).json({ msg: "Catalog not found." });
                return;
            }

            const deletedCatalog = await CatalogModel.findByIdAndDelete(id);

            res.status(204).json({ deletedCatalog, msg: "Catalog deleted." });
        } catch (error) {
            console.log(error);
        }
    },
    update: async (req, res) => {
        try {
            const id = req.params.id;

            const catalog = {
                user: req.body.user,
                products: req.body.products,
            };

            const updatedCatalog = await CatalogModel.findByIdAndUpdate(id, catalog, { new: true });

            if (!updatedCatalog) {
                res.status(404).json({ msg: "Catalog not found." });
                return;
            }

            res.status(200).json({ catalog: updatedCatalog, msg: "Catalog updated." });
        } catch (error) {
            console.log(error);
        }
    }
};

export default catalogController;