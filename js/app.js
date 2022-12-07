class Auto {

    constructor(brend, model, yerOfManufacture, vin) {
        this.brend = brend;
        this.model = model;
        this.yerOfManufacture = yerOfManufacture;
        this.vin = vin;
    }

    specification() {
        return `${this.brend} ${this.model} ${this.yerOfManufacture}`;
    }

    chekVin() {
        return this.vin.length === 16;
    }

}

let skoda = new Auto("Skoda", "Kodiaq", 2021, "1234567891234567");
let volkswagen = new Auto("Volkswagen", "Tuareg", 2018, "5234567123456789");

class Auto_Fuel extends Auto {

    constructor(brend, model, yerOfManufacture, vin, engineVolume, consumptionInLiters) {
        super(brend, model, yerOfManufacture, vin);
        this.brend = brend;
        this.model = model;
        this.yerOfManufacture = yerOfManufacture;
        this.vin = vin;
        this.engineVolume = engineVolume;
        this.consumptionInLiters = consumptionInLiters;
    }

    showFuelConsumption() {
        return `${this.engineVolume} L. ${this.consumptionInLiters} L. per 100 km`;
    }

}

let nissan = new Auto_Fuel("Nissan", "Rouge", 2017, "7234567123456787", "2.5", 13);

class Auto_Electric extends Auto {

    constructor(brend, model, yerOfManufacture, vin, batteryConfig) {
        super(brend, model, yerOfManufacture, vin);
        this.brend = brend;
        this.model = model;
        this.yerOfManufacture = yerOfManufacture;
        this.vin = vin;
        this.batteryConfig = batteryConfig;
    }

    showBatteryConfig() {
        return `${this.batteryConfig} kW/h`;
    }

}

let tesla = new Auto_Electric("Tesla", "Model X", 2020, "5554567123456787", 100);