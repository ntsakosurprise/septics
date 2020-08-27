import { locationChange } from '../components/ReduxFirstNavigator/actions';

export default (history, store)=>{

  store.dispatch(locationChange({
    pathname: history.location.pathname,
    search: history.location.search,
    hash: history.location.hash,
  }));

  history.listen((location) => {
    console.log('THE HISTORY OBJECT LISTENER')
    console.log(location)
    store.dispatch(locationChange({
      pathname: location.pathname,
      search: location.search,
      hash: location.hash,
    }));
  });

}
