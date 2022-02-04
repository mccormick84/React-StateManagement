import {combineReducers} from 'redux';
import auth from './auth';

const rootReducer = combineReducers({
  auth,
});

//rootReducer 함수의 반환값 타입을 Rootstate type alias로 지정
export type RootState = ReturnType<typeof rootReducer>;

// useSelector를 사용할 때 타입을 생략해도 자동으로 파라미터를 RootState로 추론
declare module 'react-redux' {
  interface DefaultRootState extends RootState {}
}

// 추후 useSelector를 사용할 때 해당 참고하기 위해 내보내기
export default rootReducer;
