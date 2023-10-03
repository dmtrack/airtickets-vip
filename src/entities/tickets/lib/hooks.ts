import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import type {
    RootState,
    AppDispatch,
} from '../../../app/providers/redux/index';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
