// component/tag/cmp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tag:String,
    tagId:Number
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTab() {
      this._showError();
      // const tagId = this.properties.tagId;
      // wx.navigateTo({
      //   url:`/pages/type/type?tagId=${tagId}`
      // });
    },
    _showError() {
      wx.showToast({
        title:'当前版本为测试， 不能跳转哦····',
        icon:'none',
        duration:2000,
        mask:true
      })
    }
  }
})
