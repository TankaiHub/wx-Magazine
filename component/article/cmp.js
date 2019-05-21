// component/article/cmp.js
import {LikeMold} from '../../models/like.js'
const likeMold = new LikeMold;
// console.log(likeMold)
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    articleDetail: Object
  },

  /**
   * 组件的初始数据
   */
  data: {
    likeStatus: false
  },
  attached() {
    // const articleDetail = this.data.articleDetail;
    // const artId = articleDetail.artId;
    // let likeStatus = likeMold.likeStatus(artId);
    // this.setData({
    //   likeStatus
    // });
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLike(e) {
      const like = e.detail.like;
      const articleDetail = this.data.articleDetail;
      const artId = articleDetail.artId;
      if (like) {
        likeMold.addLikeList(articleDetail);
      } else {
        likeMold.removeLikeList(artId);
      }
    }
  }
})
