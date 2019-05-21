// component/nineImg/cmp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    imgArr:Array
  },

  /**
   * 组件的初始数据
   */
  data: {
    // imgArr:[
    //         "http://i1.whymtj.com/uploads/tu/201904/12/c36dbc1f56_22.jpg",
    //         "http://i1.whymtj.com/uploads/tu/201904/4/b4f5645b24_%E7%9C%8B%E5%9B%BE%E7%8E%8B.jpg",
    //         "http://i1.whymtj.com/uploads/tu/201903/113/6663e74075_33.jpg",
    //         "http://i1.whymtj.com/uploads/tu/201903/103/56bdb5e9e2333.jpg",
    //         "http://i1.whymtj.com/uploads/tu/201902/32/357d488c36_1.jpg",
    //         "http://i1.whymtj.com/uploads/tu/201902/10491/zc61v6az.jpg",
    //         "http://i1.whymtj.com/uploads/tu/201902/10410/6v6z6basq.jpg",
    //         "http://i1.whymtj.com/uploads/tu/201902/10325/za8wq5gb.jpg",
    //         "http://i1.whymtj.com/uploads/tu/201801/9999/35c55fb749.jpg",
    //         "http://i1.whymtj.com/uploads/tu/201904/12/c36dbc1f56_22.jpg",
    //         "http://i1.whymtj.com/uploads/tu/201904/4/b4f5645b24_%E7%9C%8B%E5%9B%BE%E7%8E%8B.jpg",
    //         "http://i1.whymtj.com/uploads/tu/201903/113/6663e74075_33.jpg",
    //         "http://i1.whymtj.com/uploads/tu/201903/103/56bdb5e9e2333.jpg",
    //         "http://i1.whymtj.com/uploads/tu/201902/32/357d488c36_1.jpg",
    //         "http://i1.whymtj.com/uploads/tu/201902/10491/zc61v6az.jpg",
    //         "http://i1.whymtj.com/uploads/tu/201902/10410/6v6z6basq.jpg",
    //         "http://i1.whymtj.com/uploads/tu/201902/10325/za8wq5gb.jpg",
    //         "http://i1.whymtj.com/uploads/tu/201801/9999/35c55fb749.jpg"
    // ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTab(e) {
      const index = e.currentTarget.dataset.index;
      const array = this.data.imgArr;
      wx.previewImage({
        urls:array,
        current: array[index]
      });
    }
  }
})
