import { useNavigate } from 'react-router-dom';

import { useAppDispatch } from '@/entities/tickets/lib/hooks';
import { FlightType, serverTypes } from '@/entities/tickets/types/types';
import { TicketItem } from '@/entities/tickets/ui';
import { S7CompanyIcon } from '@/shared/assets/icons/S7component';

const data: serverTypes = {
    company: 'S7 Airlines',
    companyImage: S7CompanyIcon,
    return: false,
    price: 8300,
    airportFrom: 'SVO',
    airportTo: 'ROV',
    flightTimeFrom: [
        { from: '2023-01-12T06:20:00.000Z', to: '2023-12-12T07:05:00.000Z' },
        { from: '2023-01-12T07:20:00.000Z', to: '2023-12-12T09:05:00.000Z' },
        { from: '2023-01-12T09:20:00.000Z', to: '2023-12-12T10:05:00.000Z' },
    ] as FlightType[],
};

const InfoPage: React.FC = () => {
    const dispatch = useAppDispatch();

    const navigate = useNavigate();

    return (
        <div className='avia-info'>
            <TicketItem data={data} />
        </div>
    );
};

export default InfoPage;
