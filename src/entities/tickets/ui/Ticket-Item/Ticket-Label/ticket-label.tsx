import '../ticket-item.scss';

import { useState } from 'react';

import clsx from 'clsx';

import { useAppSelector } from '../../../lib/hooks';
import { FlightType, serverTypes } from '../../../types/types';
import { getTime } from '../../../lib/getTime';
import { getDay } from '../../../lib/getDay';
import { dateDifference } from '../../../lib/dateDifference';
import { Baggage } from '@/shared/assets/icons/Baggage';

interface ITicketLabelProps {
    data: serverTypes;
    back?: boolean;
}

export const TicketLabel: React.FC<ITicketLabelProps> = ({
    data,
    back = false,
}) => {
    const { from, to, dateFrom, dateTo } = useAppSelector(
        (state) => state.tickets
    );
    const [selectedTime, setSelectedTime] = useState(0);

    return (
        <div
            className={clsx('avia-info__label', {
                'avia-info__label--back': back,
            })}>
            <div className='avia-info__return'>
                {!data.return ? 'Невозвратный' : 'Возвратный'}
            </div>
            <div className='avia-info__company'>
                {data.companyImage}
                <span>{data.company}</span>
            </div>
            <div className='description'>
                <div className='description__body'>
                    <div className='description__main-info'>
                        <div className='description__from'>
                            <div className='description__time'>
                                {' '}
                                {getTime(
                                    data.flightTimeFrom[selectedTime].from
                                )}
                            </div>
                            <div className='description__city'>
                                {back ? to : from}
                            </div>
                            <div className='description__date'>
                                {getDay(back ? dateTo : dateFrom)}
                            </div>
                        </div>
                        <div className='description__row'>
                            <div className='description__airports'>
                                <div className='description__airport'>
                                    {back ? data.airportTo : data.airportFrom}
                                </div>
                                <div className='description__airport'>
                                    {back ? data.airportFrom : data.airportTo}
                                </div>
                            </div>
                            <div className='description__line' />
                            <div className='description__flight-time'>
                                В пути{' '}
                                {dateDifference(
                                    data.flightTimeFrom[selectedTime].from,
                                    data.flightTimeFrom[selectedTime].to
                                )}
                            </div>
                        </div>
                        <div className='description__to'>
                            <div className='description__time'>
                                {getTime(data.flightTimeFrom[selectedTime].to)}
                            </div>
                            <div className='description__city'>
                                {back ? from : to}
                            </div>
                            <div className='description__date'>
                                {getDay(back ? dateTo : dateFrom)}
                            </div>
                        </div>
                    </div>

                    <div className='avia-info__baggage'>
                        <Baggage />
                    </div>
                </div>
                {!dateTo && (
                    <div className='description__buttons'>
                        {data.flightTimeFrom.map(
                            (time: FlightType, i: number) => (
                                <button
                                    onClick={() => setSelectedTime(i)}
                                    className={clsx('description__button', {
                                        active: selectedTime === i,
                                    })}
                                    key={i}>
                                    {getTime(time?.from)} -{' '}
                                    <span>{getTime(time?.to)}</span>
                                </button>
                            )
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};
