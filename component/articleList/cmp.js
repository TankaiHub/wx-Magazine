// component/articleList/cmp.js
import { IndexModles } from '../../models/index.js';
import { SearchMold } from '../../models/search.js';
const indexModles = new IndexModles;
const searchMold = new SearchMold;
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    articleList: {
      type: Array,
      value: [],
      observer() {

      }
    },
    more: {
      type: String,
      value: '',
      observer: 'loadMore'
    },
    magazineId: {
      type: Number,
      value: 0,
      observer: 'hasMoreData'
    },
    word: String
  },

  /**
   * 组件的初始数据
   */
  data: {
    loading: false,
    noMoreData: false,
    type: ''
  },
  attached() {
    const curPages = getCurrentPages();
    const index = curPages.length - 1;
    let type = '';
    if (curPages[index].route === 'pages/search/search') {
      type = 'search'
    } else {
      type = 'index'
    }
    this.setData({
      type
    });
  },
  /**
   * 组件的方法列表
   */
  methods: {
    loadMore() {
      this.setData({
        noMoreData: false
      });
      //如果是true 结束
      if (this._isLock() || this.data.noMoreData) {
        return;
      }
      this._loadLock();
      this.getMore();

    },
    getMore() {
      let start = this.data.articleList.length;
      let getMore = null;
      if (this.data.type === 'search') {
        let word = this.data.word;
        getMore = searchMold.getSearchArticleList(word, start);
      } else {
        const magazineId = this.data.magazineId;
        getMore = indexModles.getIndexArticleList(magazineId, start)
      }
      getMore.then(res => {
        this._setMoreData(res);
        this._unLoadLock();
      });
    },
    //获取锁的状态
    _isLock() {
      return this.data.loading
    },
    //改变锁为true  关闭
    _loadLock() {
      this.setData({
        loading: true
      });
    },
    //改变锁的为false 打开 请求数据
    _unLoadLock() {
      this.setData({
        loading: false
      });
    },
    _setMoreData(list) {
      const combineList = this.data.articleList.concat(list);
      if (combineList.length === this.data.articleList.length) {
        this.setData({
          noMoreData: true
        });
        return
      }
      this.setData({
        articleList: combineList
      });
    },
    hasMoreData() {
      this.setData({
        noMoreData: false
      });
    }
  }
})
