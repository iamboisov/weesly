import Main from './Main.jsx';
import News from './News.jsx';
import Questions from "./Questions";
import KnowledgeBase from './KnowledgeBase.jsx';
import Companies from './Companies.jsx';
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
    <Route path="/questions" element={<Questions />} />
    <Route path="/knowledgebase" element={<KnowledgeBase />} />
    <Route path="/companies" element={<Companies />} />
  </Route>
);


const router = createBrowserRouter(routeDefinitions);

function App() {
  return <RouterProvider router={router}></RouterProvider>;

}

export default App;





