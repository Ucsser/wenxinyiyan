function getAccess() {
  console.log("sdfafasdf");
  const AK = "5ydhpgYJcNGGKavb5ypoJDGY";
  const SK = "dl96pGhTHimfbXmIpgW0ptVWmGUTtDoP";
  let options = {
    method: "POST",
    url:
      "https://aip.baidubce.com/oauth/2.0/token?grant_type=client_credentials&client_id=" +
      AK +
      "&client_secret=" +
      SK,
  };
  return new Promise((resolve, reject) => {
    

    return
    console.log(options, " options");
    var myHeaders = new Headers();
    myHeaders.append("User-Agent", "Apifox/1.0.0 (https://apifox.com)");
    myHeaders.append("Accept", "*/*");
    myHeaders.append("Host", "cn.apihz.cn");
    myHeaders.append("Connection", "keep-alive");
    fetch(
      `https://cn.apihz.cn/api/zici/cyjl.php?id=88888888&key=88888888&word=%E5%A4%A9`
    )
      .then((response) => {
        console.log(response, " reson", response.text());
        return response.json();
      })
      .then((res) => {
        console.log(res, " res res");
        resolve(JSON.parse(res.body).access_token);
      });
  });
}
