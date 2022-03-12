import { setUserAction, setViewAction } from '../redux/actions/actionCreators';

const updateView = ({ prop, view }) => {
  prop(setViewAction(view));
};
const logOut = ({ prop }) => {
  prop(setViewAction('login'));
  prop(setUserAction({ email: null }));
};
const nextPage = (page, setPage) => {
  if (page < 1000) {
    setPage(page + 1);
  }
};
const prevPage = (page, setPage) => {
  if (page > 1) {
    setPage(page - 1);
  }
};

export { updateView, nextPage, prevPage, logOut };
