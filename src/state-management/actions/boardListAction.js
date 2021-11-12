import { LIST_ADD , LIST_DELETE , LIST_Edit , DND_UPDATE_LIST} from "../actions/actionTypes";

export const boardListAdd = (item) => ({
    type:LIST_ADD,
    payload:item
})

export const boardListEdit = (index , value) => ({
    type:LIST_Edit,
    payload:{index:index , value:value}
})

export const boardListDelete = (index) => ({
    type:LIST_DELETE,
    payload:index
})

export const updateListDND = (newList) =>({
    type:DND_UPDATE_LIST,
    payload:newList
})