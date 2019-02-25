(function ($) {
  $(function () {

    var setLink = {
      init: function () {
        this.setParameters();
        this.detectStorage();
        this.getLink();
        this.setLink();
      },
      setParameters: function () {
        this.$linkBtn = $('#gnavi-link');
        this.referrer = document.referrer;
        this.referrerrMatch = this.referrer.match(/^https?:\/{2,}(.*?)\/(.*?)(?=\/)/);
        this.parameter = this.$linkBtn.data('parameter');
        this.hash = this.$linkBtn.data('hash');
        this.GNAVI_DOMAIN = 'r.gnavi.co.jp';
        this.STORAGE_KEY = 'gnaviLink';
        this.ACTIVE_CLASS_NAME = 'gnavi-active';
        this.DISABLED_CLASS_NAME = 'disabled';
        this.link = undefined;
        this.storageAvailability = false;
      },
      detectStorage: function () {
        // sessionStorageが利用できる環境か判断
        if( ('sessionStorage' in window) && (window.sessionStorage !== null) ) {
          this.storageAvailability = true;
        } else {
          this.storageAvailability = false;
        }
      },
      getLink: function () {
        // referrerが空白、ぐるなびドメインか、storageが使えるかによって処理を分岐
        if (this.referrer && this.referrerrMatch[1] === this.GNAVI_DOMAIN) {
          // referrerがぐるなびドメインの場合
          this.link = 'https://r.gnavi.co.jp/plan/' + this.referrerrMatch[2] + '/plan-reserve/plan/plan_list/' + this.parameter + this.hash;

          // storageが使える場合
          if(this.storageAvailability) {
            // storageにデータを保存
            sessionStorage.setItem(this.STORAGE_KEY, this.link);
          }

          // referrerがぐるなびドメイン以外でもstorageが使える場合
        } else if(this.storageAvailability) {
          // storageにデータが保存されている場合、データをリンクとして取得
          this.link = sessionStorage.getItem(this.STORAGE_KEY) ? sessionStorage.getItem(this.STORAGE_KEY) : undefined;
        }
      },
      setLink: function () {
        // リンクにデータがある場合
        if(this.link) {
          // リンクをアクティブにして、データをセット
          this.$linkBtn.addClass(this.ACTIVE_CLASS_NAME).attr('href', this.link);
        } else {
          this.$linkBtn.addClass(this.DISABLED_CLASS_NAME);
        }
      }
    }

    setLink.init();
  });
})(jQuery);
