import {Router} from "express";

const router = Router();

import CarController from '../controllers/carControllers.js'

router.get("/index", CarController.index);
router.get("/marcas/maisModelos", CarController.maisModelos);
router.get("/marcas/menosModelos", CarController.menosModelos);
router.get("/marcas/listaMaisModelos/:number", CarController.listaMaisModelos);
router.get("/marcas/listaMenosModelos/:number", CarController.listaMenosModelos);
router.post("/marcas/listaModelos", CarController.findByBrand);
router.get("/marcas/sort", CarController.sorted);

export default router;
