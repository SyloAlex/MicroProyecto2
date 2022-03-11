import { setViewAction } from '../redux/actions/actionCreators'

const updateView = ({ prop, view }) => {
    prop(setViewAction(view))
}

export { updateView };