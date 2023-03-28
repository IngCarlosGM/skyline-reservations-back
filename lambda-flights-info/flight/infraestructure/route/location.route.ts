import { Router } from "express";
import { FlightUseCase } from "../../application/flight.useCase";
import { FlightController } from "../controller/flight.controller";
import { MockFlightRepository } from "../repository/mock.repository";

const route = Router();

const mockRepository = new MockFlightRepository();
const flightUseCase = new FlightUseCase(mockRepository);
const flightController = new FlightController(flightUseCase);

route.get('/flights', flightController.findAllFlightsByDepartureDateAndReturnDate)

export default route;
