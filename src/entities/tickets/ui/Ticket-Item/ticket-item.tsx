import { FC } from 'react';
import { serverTypes } from '../../types/types';
import { useAppSelector } from '../../lib/hooks';
import { TicketLabel } from '../Ticket-Label/ticket-label';

interface IAviaInfoItem {
    data: serverTypes;
}

const AviaInfoItem: FC<IAviaInfoItem> = ({ data }) => {
    const { dateTo } = useAppSelector((state) => state.tickets);
    return (
        <div className='avia-info__item'>
            <div className='avia-info__body'>
                <TicketLabel data={data} />
                {dateTo && <TicketLabel back data={data} />}
            </div>

            <div className='avia-info__price'>{data.price + 'р'}</div>
        </div>
    );
};
