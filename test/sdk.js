!(function (root, fatctory) {
    root.wx = fatctory();
  })(this, function () {
    window.onload = function (error) {
      const redirect_url = getRedirectUrl();
      sessionStorage.setItem("redirect_url", redirect_url);
      // if (error) location.href = redirect_url;
      if (error) console.log(error);
    };
  
    function getRedirectUrl() {
      const match = location.href.split("?")[1];
      // redirect_url=http://localhost:8080/#/home
      return match.replace(/^redirect_url\=/, "");
    }
  
    function postMessage(data) {
      let s = sessionStorage.getItem('datas')
  
      if (!s) {
        (s = []).push(data)
      } else {
        s = JSON.parse(decodeURIComponent(s))
        s.push(data)
      }
      
      sessionStorage.setItem("datas", encodeURIComponent(JSON.stringify(s)));
    }
  
    function backToOrigin() {
      const datas = sessionStorage.getItem('datas')
      const redirect_url = sessionStorage.getItem('redirect_url');
      sessionStorage.clear();
      location.replace(redirect_url + '?data=' + datas);
    }
    return {
      postMessage,
      backToOrigin
    }
  
  });
  