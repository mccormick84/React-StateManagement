import {useMemo} from 'react';
import {authState, User} from '../atoms/auth';
import {useSetRecoilState} from 'recoil';

export default function useAuthActions() {
  const set = useSetRecoilState(authState);

  return useMemo(
    () => ({
      authorize: (user: User) => {
        set({user});
      },
      logout: () => {
        set({user: null});
      },
    }),
    [set],
  );
}
