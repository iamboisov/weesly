import Main from './Main.jsx';
import News from './News.jsx';
import About from "./About.jsx";
import KnowledgeBase from './KnowledgeBase.jsx';
import Marketing from './Marketing.jsx';
import Finance from './Finance.jsx';
import Management from './Management.jsx';
import Companies from './Companies.jsx';
import Article from './Article.jsx';
import Post from './Post.jsx';
import ErrorEl from './ErrorPage.jsx';
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";




const routeDefinitions = createRoutesFromElements(
  <Route>
    
    <Route path="/" element={<Main />} />
    <Route path="/news" element={<News />} />
    <Route path="news/:url" element={<Post />} errorElement={<ErrorEl />}/>
    <Route path="/knowledgebase" element={<KnowledgeBase />} />
    <Route path="/knowledgebase/marketing" element={<Marketing />} />
    <Route path="/knowledgebase/finance" element={<Finance />} />
    <Route path="/knowledgebase/management" element={<Management />} />
    <Route path="/knowledgebase/marketing/:url" element={<Article />} />
    <Route path="/companies" element={<Companies />} />
    <Route path="/about" element={<About />} />



    <Route path={`/news/:articleId`} element={<News />} />

  </Route>

);


const router = createBrowserRouter(routeDefinitions);

function App() {
  return <RouterProvider router={router}></RouterProvider>;

}

export default App;





