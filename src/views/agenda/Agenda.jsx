import PostService from '../../../services/PostService';
import Paginator from '../../components/common/Paginator';
import useSimpleFetch from '../../customHooks/useSimpleFetch';
import LatestPostsSkeleton from '../../skeletons/latestPosts/LatestPostsSkeleton';
import AgendaPost from './components/AgendaPost';

export default function Agenda() {
  const { data, loading, error, cantidad, offset, setOffset } = useSimpleFetch({
    service: PostService.getAgenda,
    limit: 3,
  });
  return (
    <>
      <h1 className="text-center my-4">Agenda</h1>
      <div className="container">
        <div className="row">
          {loading ? (
            <LatestPostsSkeleton />
          ) : (
            data?.map((post) => {
              return <AgendaPost key={post.post_id} post={post} />;
            })
          )}
          <div className="my-4">
            <Paginator
              cantidad={cantidad}
              limit={3}
              offset={offset}
              setOffset={setOffset}
            />
          </div>
        </div>
      </div>
    </>
  );
}
