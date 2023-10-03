export type serverTypes = {
    company: string;
    companyImage: string;
    return: boolean;
    price: number;
    airportFrom: string;
    airportTo: string;
    flightTimeFrom: FlightType[];
    flightTimeBack?: FlightType[];
};

export type FlightType = {
    from: string;
    to: string;
};
