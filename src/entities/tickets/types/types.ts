import { FunctionComponent, ReactElement, SVGProps } from 'react';

export type serverTypes = {
    company: string;
    companyImage: ReactElement;
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
