import { useEffect} from 'react';
import { loadingActions} from '../redux/slices/isLoadingSlice';
import { useDispatch } from 'react-redux';
import {Bars} from 'react-loading-icons';

const Loading = () => {
    const dispatch = useDispatch();

    useEffect(()=> {
        setTimeout(()=> {
            dispatch(loadingActions.stopLoading())
        },5000)
    }, [])

    return (
            <h3>
                <Bars />
            </h3>
    )
}
export default Loading;