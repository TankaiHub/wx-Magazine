class SubscribeMold{
    setTagList(value) {
        wx.setStorageSync('tagList', value);
    }
    getTagList() {
        return wx.getStorageSync('tagList') || [];
    }

    removeTagList(tagId) {
        const myTagList = this.getTagList();
        let myIndex = 0;
        myTagList.forEach( (ele, index) => {
            if(ele.tagId === tagId) {
                myIndex = index;
            }else {
                return
            }
        } ); 
        myTagList.splice(myIndex, 1);
        this.setTagList(myTagList);
    }
}

export {SubscribeMold}