import news from './data.js'
import { useParams } from 'react-router-dom';

function Post() {

    const post_params = useParams()
    const article_index = Number(post_params.url.toString().slice(-1)) - 1
    return(
            <div>{news[article_index].tag}</div>
        
    )
}

export default Post