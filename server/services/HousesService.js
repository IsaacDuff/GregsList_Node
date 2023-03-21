import { BadRequest } from "@bcwdev/auth0provider/lib/Errors.js"
import { dbContext } from "../db/DbContext.js"


class HousesService {



    async getHouses(query) {
        const houses = await dbContext.Houses.find(query)
        return houses

    }

    async createHouse(houseData) {
        const newHouse = await dbContext.Houses.create(houseData)
        return newHouse
    }

    async getHouseById(houseId) {
        const house = await dbContext.Houses.findById(houseId)
        if (!house) {
            throw new BadRequest('No house with that ID')
        }
        return house
    }

    async editHouse(houseEdits, houseId) {
        const originalHouse = await this.getHouseById(houseId)

        originalHouse.bedrooms = houseEdits.bedrooms ? houseEdits.bedroom : originalHouse.bedrooms
        originalHouse.bathrooms = houseEdits.bathrooms ? houseEdits.bathrooms : originalHouse.bathrooms
        originalHouse.levels = houseEdits.levels ? houseEdits.levels : originalHouse.levels
        originalHouse.year = houseEdits.year ? houseEdits.year : originalHouse.year
        originalHouse.price = houseEdits.price ? houseEdits.price : originalHouse.price
        originalHouse.description = houseEdits.description ? houseEdits.description : originalHouse.description
        originalHouse.hasYard = houseEdits.hasYard != null ? houseEdits.hasYard : originalHouse.hasYard

        await originalHouse.save()
        return originalHouse
    }

    async deleteHouse(houseId) {
        await dbContext.Houses.findByIdAndDelete(houseId)

        if (!houseId) {
            throw new BadRequest('no house to delete at that Id')
        }
        return
    }


}
export const housesService = new HousesService()