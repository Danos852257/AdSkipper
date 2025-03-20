//Copied the code that youtube uses to skip ads
//Originally planning on using this but it was not understandable
//So we used other methods

var skipAd = function(D) {
    D && D.preventDefault();
    var O, h;
    IHd(D, {
        contentCpn: (h = (O = this.api.getVideoData(1)) == null ? void 0 : O.clientPlaybackNonce) != null ? h : ""
    }) === 0 ? this.api.F1("onAbnormalityDetected") : (Rg.prototype.onClick.call(this, D),
    this.api.F1("onAdSkip"),
    this.api.onAdUxClicked(this.componentType, this.layoutId))
}

