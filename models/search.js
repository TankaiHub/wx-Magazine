import {Request} from '../utils/request.js';

class SearchMold extends Request{
    getSearchArticleRecommend(word) {
        return this.getData({
            url:`/searchArticleRecommend/${word}`
        });
    }
    getSearchArticleList(word, start=0) {
        return this.getData({
            url:`/searchArticleList/${word}/${start}`
        });
    }
}
export {SearchMold}