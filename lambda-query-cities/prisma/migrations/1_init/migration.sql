-- CreateTable
CREATE TABLE "airports" (
    "airport_id" VARCHAR NOT NULL,
    "description" VARCHAR NOT NULL,
    "id_city_id" VARCHAR NOT NULL,

    CONSTRAINT "airports_pk" PRIMARY KEY ("airport_id")
);

-- CreateTable
CREATE TABLE "cities" (
    "city_id" VARCHAR NOT NULL,
    "description" VARCHAR NOT NULL,
    "id_country_id" VARCHAR NOT NULL,

    CONSTRAINT "cities_pk" PRIMARY KEY ("city_id")
);

-- CreateTable
CREATE TABLE "countries" (
    "country_id" VARCHAR NOT NULL,
    "description" VARCHAR NOT NULL,
    "id_region_id" VARCHAR NOT NULL,

    CONSTRAINT "countries_pk" PRIMARY KEY ("country_id")
);

-- CreateTable
CREATE TABLE "regions" (
    "region_id" VARCHAR NOT NULL,
    "description" VARCHAR NOT NULL,

    CONSTRAINT "regions_pk" PRIMARY KEY ("region_id")
);

-- CreateTable
CREATE TABLE "flights_route" (
    "distance" DECIMAL(7,2) NOT NULL,
    "duration_time" DECIMAL(4,2) NOT NULL,
    "id_city_origin_id" VARCHAR NOT NULL,
    "id_city_destination_id" VARCHAR NOT NULL,

    CONSTRAINT "flights_route_pk" PRIMARY KEY ("id_city_origin_id","id_city_destination_id")
);

-- AddForeignKey
ALTER TABLE "airports" ADD CONSTRAINT "airports_fk" FOREIGN KEY ("id_city_id") REFERENCES "cities"("city_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "cities" ADD CONSTRAINT "cities_fk" FOREIGN KEY ("id_country_id") REFERENCES "countries"("country_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "countries" ADD CONSTRAINT "countries_fk" FOREIGN KEY ("id_region_id") REFERENCES "regions"("region_id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "flights_route" ADD CONSTRAINT "flights_route_fk" FOREIGN KEY ("id_city_origin_id") REFERENCES "cities"("city_id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "flights_route" ADD CONSTRAINT "flights_route_fk_1" FOREIGN KEY ("id_city_destination_id") REFERENCES "cities"("city_id") ON DELETE CASCADE ON UPDATE NO ACTION;

