import BaseController from "../utils/BaseController.js";
import { housesService } from "../services/HousesService.js";


export class HousesController extends BaseController {

    constructor() {
        super('api/houses')
        this.router
            .get('', this.getHouses)
            .get('/:houseId', this.getHouseById)
            .post('', this.createHouse)
            .put('/:houseId', this.editCar)
            .delete('/:houseId', this.deleteHouse)

    }




    async getHouses(req, res, next) {
        try {
            const query = req.query
            const houses = await housesService.getHouses(query)
            res.send(houses)
        } catch (error) {
            next(error)
        }
    }

    async createHouse(req, res, next) {
        try {
            const houseData = req.body
            const newHouse = await housesService.createHouse(houseData)
            res.send(newHouse)
        } catch (error) {
            next(error)
        }
    }

    async getHouseById(req, res, next) {
        try {
            const houseId = req.params.houseId
            const house = await housesService.getHouseById(houseId)
            res.send(house)
        } catch (error) {
            next(error)
        }
    }


    async editCar(req, res, next) {
        try {
            const houseEdits = req.body
            const houseId = req.params.houseId
            const editedCar = await housesService.editHouse(houseEdits, houseId)
            res.send(editedCar)
        } catch (error) {
            next(error)
        }
    }


    async deleteHouse(req, res, next) {
        try {
            const houseId = req.params.houseId
            await housesService.deleteHouse(houseId)
            res.send(`Car at ${houseId} was deleted`)
        } catch (error) {
            next(error)
        }
    }

}