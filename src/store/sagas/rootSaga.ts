import { all, call, spawn, delay } from 'redux-saga/effects';
import userSaga from './sagas';

const makeRestartable = (saga: any) => {
  return function* () {
    yield spawn(function* () {
      while (true) {
        try {
          yield call(saga);
          console.error(
            'unexpected root saga termination. The root sagas are supposed to be sagas that live during the whole app lifetime!',
            saga,
          );
        } catch (e) {
          console.error('Saga error, the saga will be restarted', e);
        }
        yield delay(1000); // Avoid infinite failures blocking app
      }
    });
  };
};

const allSagas = [...userSaga].map(makeRestartable);

export default function* root() {
  yield all(allSagas.map(saga => call(saga)));
}
