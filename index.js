const token = 'c3adde8613dd7e6657811dbcc1644f30212c8543'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
