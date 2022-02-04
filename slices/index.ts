import {combineReducers} from 'redux';
import auth from './auth';

const rootReducer = combineReducers({
  auth,
});

//rootReducer 함수의 반환값 타입을 Rootstate type alias로 지정
export type RootState = ReturnType<typeof rootReducer>;

// 추후 useSelector를 사용할 때 해당 참고하기 위해 내보내기
export default rootReducer;
