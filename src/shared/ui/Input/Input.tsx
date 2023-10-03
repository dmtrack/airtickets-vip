import './input.scss';

import { useCallback, useState } from 'react';
import clsx from 'clsx';
import debounce from 'lodash.debounce';

import { useAppDispatch, useAppSelector } from '@/entities/tickets/lib/hooks';
import { setSearchValue } from '@/entities/tickets/lib/ticketSlice';
import { Calendar } from '@/shared/assets/icons/Calendar';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import cities from '../../lib/cities.json';

interface IInputProps {
    type?: string;
    classes?: string;
    name: string;
    label: string;
    placeholder: string;
    datePicker?: boolean;
    onChangeInput: (e: string) => void;
}

export const Input: React.FC<IInputProps> = (props) => {
    const {
        type = 'empty',
        datePicker = false,
        onChangeInput,
        name,
        label,
        placeholder,
        classes,
    } = props;

    const [startDate, setStartDate] = useState('');
    const [selectedDatepicker, setSelectedDatepicker] = useState(false);
    const [focus, setFocus] = useState(false);
    const [value, setValue] = useState('');
    const [openCities, setOpenCities] = useState(false);

    const dispatch = useAppDispatch();
    const { searchValue } = useAppSelector((state) => state.tickets);

    const onDatepickerInput = (e: string) => {
        setFocus(false);
        setSelectedDatepicker(true);
        onChangeInput(String(e));
        setStartDate(e);
    };

    const onInput = () => {
        if (value.length) {
            onChangeInput(value);
        }
        setTimeout(() => {
            setFocus(false);
            setOpenCities(false);
        }, 200);
    };

    const setInputValue = (e: React.FormEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value);
        if (
            e.currentTarget.value.length > 1 &&
            e.currentTarget.value.match(/\D/)
        ) {
            setOpenCities(true);
            updateSearchValue(e.currentTarget.value);
        }
    };

    const setCity = (city: string) => {
        setValue(city);
        onChangeInput(city);
        setTimeout(() => {
            setOpenCities(false);
            setFocus(false);
        }, 200);
    };

    const updateSearchValue = useCallback(
        debounce((str) => {
            dispatch(setSearchValue(str));
        }, 350),
        []
    );

    const renderCities = () => {
        let dropdown = cities?.filter((city) =>
            city.name?.toLowerCase().includes(searchValue?.toLowerCase())
        );
        return (
            dropdown?.length > 0 && (
                <ul className={clsx('input__list', { open: openCities })}>
                    {dropdown?.map((city, i) => (
                        <li onClick={() => setCity(city?.name)} key={i}>
                            {city.name}
                        </li>
                    ))}
                </ul>
            )
        );
    };

    return (
        <div
            className={clsx(
                'input__container',
                { 'input__container--selected': selectedDatepicker },
                { 'input__container--focused': focus }
            )}>
            {datePicker && <Calendar />}
            {datePicker && (
                <DatePicker
                    onFocus={() => setFocus(true)}
                    onBlur={() => setFocus(false)}
                    dateFormat='dd.MM.yyyy'
                    placeholderText='дд.мм.гг'
                    selected={startDate ? new Date(startDate) : null}
                    onChange={(e: any) => onDatepickerInput(e)}
                />
            )}
            {!datePicker && (
                <input
                    id={name}
                    value={value}
                    onChange={setInputValue}
                    autoComplete='off'
                    name={name}
                    onFocus={() => setFocus(true)}
                    onBlur={onInput}
                    placeholder={placeholder}
                    type={type}
                    className={`input ${classes}`}
                />
            )}
            <label className='input__label' htmlFor={name}>
                {label}
            </label>
            {!datePicker && renderCities()}
        </div>
    );
};
