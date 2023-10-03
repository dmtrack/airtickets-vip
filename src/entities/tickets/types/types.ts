import { FunctionComponent, SVGProps } from 'react';

export type serverTypes = {
    company: string;
    companyImage: FunctionComponent<SVGProps<SVGSVGElement>>;
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
