import {useDispatch} from 'react-redux';
import {authorize, logout} from '../slices/auth';
import {bindActionCreators} from 'redux';
import {useMemo} from 'react';

export default function useAuthActions() {
  const dispatch = useDispatch();
  // return {
  //   authorize: (user: User) => dispatch(authorize(user)),
  //   logout: () => dispatch(logout()),
  // };

  // 위의 코드와 동일하게 작동
  // dispatch를 위해 함수를 감싸는 작업이 자동으로 이루어짐
  // return bindActionCreators({authorize, logout}, dispatch);

  // 현재 hook에서 컴포넌트가 새로 렌더링 될 때다마 bindActionCreators가 호출 되어 각 함수들이 새로 선언됨
  // useEffect에서 이 액션 생서 함수들을 사용하게 되면 의도치 않은 버그가 발생할 수 있음
  return useMemo(
    () => bindActionCreators({authorize, logout}, dispatch),
    [dispatch],
  );
}
