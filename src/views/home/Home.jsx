import MainPost from './components/MainPost';
import HomePosts from './components/HomePosts';
import AgendaHome from './components/AgendaHome';
import HomeEmpleados from './components/HomeEmpleados';
import useSimpleFetch from '../../customHooks/useSimpleFetch';
import PostService from '../../../services/PostService';
import { Button } from 'react-bootstrap';

export default function Home() {
  const {
    data,
    loading,
    error,
    setIssue: setIssuePost,
  } = useSimpleFetch({
    service: PostService.getAgenda,
    limit: 3,
  });
  const {
    data: datos,
    loading: load,
    error: err,
    setIssue,
  } = useSimpleFetch({
    service: PostService.getAll,
    limit: 3,
  });
  const {
    data: posts,
    loading: skeleton,
    error: erro,
    setIssue: setRevista,
  } = useSimpleFetch({
    service: PostService.getAll,
    limit: 4,
  });

  const handChangeIssue = (issue) => {
    window.scrollTo(0, 0);
    setIssue(issue);
    setRevista(issue);
    setIssuePost(issue);
  };

  return (
    <>
      {<MainPost data={posts} loading={skeleton} />}
      {<hr className="m-0" />}
      <HomePosts data={datos} loading={load} />
      <hr className="m-0" />
      <HomeEmpleados />
      <hr className="m-0" />
      <AgendaHome data={data} />

      <div className="container items-center d-flex text-center justify-content-center my-4" style={{flexDirection:'column'}}>
        <div className="h2 text-center">Numeros de revista</div>
        <div className="butons d-flex justify-content-center gap-3">
        <Button onClick={()=> handChangeIssue(7)} variant='primary'>1</Button>
      <Button onClick={()=> handChangeIssue(8)} variant='primary'>2</Button>
      <Button onClick={()=> handChangeIssue(9)} variant='primary'>3</Button>
        </div>
      </div>
    </>
  );
}
