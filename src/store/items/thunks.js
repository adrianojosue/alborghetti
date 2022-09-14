import { alborghettiApi } from "../../../api/alborghettiApi";
import { startLoadingItems, setItems } from "./itemsSlice";

export const getItems = ( page = 0 ) => {
    return async ( dispatch, getState ) => {
        dispatch( startLoadingItems() );

        const { data } = await alborghettiApi.get(`/pokemon?limit=10&offset=${ page * 10 }`);

        dispatch( setItems({
            items: data.results,
            page: page + 1,
        }) );

    }
}