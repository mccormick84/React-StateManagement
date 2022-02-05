import {useDispatch, useSelector} from 'react-redux';
import {useCallback, useEffect} from 'react';
import {fetchPosts} from '../slices/posts';

// 컴포넌트가 나타날 때 API를 요청
// enabled 값을 false로 하면 컴포넌트가 나타날 때 API 요청이 이루어지지 않음
export default function usePosts({enabled = true}: {enabled: boolean}) {
  const posts = useSelector(state => state.posts.posts);
  const dispatch = useDispatch();
  const fetchData = useCallback(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  useEffect(() => {
    if (!enabled) {
      return;
    }
    fetchData();
  }, [enabled, fetchData]);

  //post의 상태와 재요청을 하는 refetch 함수를 함께 반환
  return {
    ...posts,
    refetch: fetchData,
  };
}
