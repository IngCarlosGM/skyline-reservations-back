import { Router } from "express";
import { LocationUseCase } from "../../application/location.useCase";
import { LocationController } from "../controller/location.controller";

import { PostgresRepository } from "../repository/postgres.repository";

const route = Router();

const postgresRepository = new PostgresRepository();
const locationUseCase = new LocationUseCase(postgresRepository);
const locationController = new LocationController(locationUseCase);

route.get('/regions', locationController.findAllRegions)
route.get('/countries', locationController.findAllCountriesByRegion)
route.get('/cities', locationController.findAllCitiesByCountry)
route.get('/airports', locationController.findAllAirportsByCity)
route.get('/destinations', locationController.findAllDestinationsByOriginCity)

export default route;
