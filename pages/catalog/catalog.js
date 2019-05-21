// pages/catalog/catalog.js
import {SubscribeMold} from '../../models/subscribe.js'
import {tagInfoList} from "../../utils/tagList.js";
const subscribeMold = new SubscribeMold();


Page({

  /**
   * 页面的初始数据
   */
  data: {
    tagInfoList: tagInfoList,
    MyTagList : [],
    searchWord:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData();
  },
  
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
   
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.setData({
      searchWord:''
    });
  },

  getData() {
    const MyTagList = subscribeMold.getTagList();
    this.setData({
      MyTagList
    });
  },
  onSubscribeTap() {
    this.getData();
    console.log(1)
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})