import {atom} from 'recoil';

export interface User {
  id: number;
  username: string;
  displayName: string;
}

interface AuthState {
  user: User | null;
}

// 타입스크립트 환경에서 리코일을 사용할 때는 atom의 Generic으로 관리한 상태의 타입을 넣어줌
// 이 atom을 다른 Hook에서 불러와서 사용할 것이므로 export
export const authState = atom<AuthState>({
  key: 'authState',
  default: {
    user: null,
  },
});
