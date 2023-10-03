import './search-form.scss';

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import {
    setDateFrom,
    setDateTo,
    setFrom,
    setTo,
} from '@/entities/tickets/lib/ticketSlice';
import { useAppDispatch } from '@/entities/tickets/lib/hooks';
import { Input } from '@/shared/ui';

export const SearchForm = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const [cityFrom, setCityFrom] = useState('');
    const [cityTo, setCityTo] = useState('');
    const [dateFrom, setStateDateFrom] = useState('');
    const [dateTo, setStateDateTo] = useState('');

    const fromInput = (e: string) => {
        setCityFrom(e);
    };
    const toInput = (e: string) => {
        setCityTo(e);
    };
    const fromDateInput = (e: string) => {
        setStateDateFrom(String(e));
    };
    const toDateInput = (e: string) => {
        setStateDateTo(String(e));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(setFrom(cityFrom));
        dispatch(setTo(cityTo));
        dispatch(setDateFrom(String(dateFrom)));
        dispatch(setDateTo(String(dateTo)));
        navigate('/avia/info');
    };

    return (
        <form
            noValidate
            autoComplete='off'
            onSubmit={handleSubmit}
            action=''
            className='form'>
            <div className='form__label'>
                <Input
                    onChangeInput={fromInput}
                    label='откуда'
                    placeholder='Город вылета'
                    name='from-city'
                />
                <Input
                    onChangeInput={toInput}
                    label='куда'
                    placeholder='Город прилёта'
                    name='from-city'
                />
                <Input
                    onChangeInput={fromDateInput}
                    datePicker
                    label='туда'
                    placeholder='дд.мм.гг'
                    name='from-city'
                />
                <Input
                    onChangeInput={toDateInput}
                    datePicker
                    label='обратно'
                    placeholder='дд.мм.гг'
                    name='from-city'
                />
            </div>
            <div className='form__action'>
                <button
                    type='submit'
                    disabled={
                        !cityFrom.length || !cityTo.length || !dateFrom.length
                    }
                    className='button'>
                    Найти билеты
                </button>
            </div>
        </form>
    );
};
