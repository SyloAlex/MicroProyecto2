import { setViewAction } from '../redux/actions/actionCreators'

const updateView = ({ prop, view }) => {
    prop(setViewAction(view))
}
const nextPage = (page, setPage) => {
    if (page < 1000) {
        setPage(page + 1)
    }
}
const prevPage = (page, setPage) => {
    if (page > 1) {
        setPage(page - 1)
    }
}

export { updateView, nextPage, prevPage };