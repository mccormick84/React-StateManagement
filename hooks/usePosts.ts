import {useRecoilState} from 'recoil';
import {postsState} from '../atoms/posts';
import {useCallback, useEffect} from 'react';
import {getPosts} from '../api/getPosts';

export default function usePosts(
  {enabled}: {enabled: boolean} = {enabled: true},
) {
  const [{loading, data, error}, set] = useRecoilState(postsState);

  const fetchData = useCallback(async () => {
    // 요청 시작
    set({loading: true, data: null, error: null});
    try {
      const posts = await getPosts();
      // 요청 성공
      set({loading: false, data: posts, error: null});
    } catch (e) {
      // 요청 실패
      set({loading: false, data: null, error: e});
    }
  }, [set]);

  useEffect(() => {
    if (!enabled) {
      return;
    }
    fetchData();
  }, [enabled, fetchData]);

  //post의 상태와 재요청을 하는 refetch 함수를 함께 반환
  return {
    loading,
    data,
    error,
    refetch: fetchData,
  };
}
