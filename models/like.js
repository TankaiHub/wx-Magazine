class LikeMold {
    getLikeList() {
        return wx.getStorageSync('likeList') || [];
    }

    setLikeList(value) {
        wx.setStorageSync('likeList', value);
    }

    addLikeList(articleDetail) {
        const likeList = this.getLikeList();
        likeList.unshift(articleDetail);
        this.setLikeList(likeList);
    }
    removeLikeList(artId) {
        const likeList = this.getLikeList();
        let myIndex = 0;
        likeList.forEach((ele, index) => {
            if (ele.artId = artId) {
                myIndex = index;
                return;
            }
        });
        likeList.splice(myIndex, 1);
        this.setLikeList(likeList);
    }
    likeStatus(artId) {
        const likeList = this.getLikeList();
        let likeStatus = false;
        likeList.forEach((ele, index) => {
            if (ele.artId = artId) {
                likeStatus = true;
            }
        });
        return likeStatus;
    }
}

export { LikeMold };