
//console.log(__dirname, __filename);

class User
{
    constructor(username, password)
    {
      this.username = username;
      this.password = password;

      //fetch page id prom database
      this.pageid = '628763hd893';
    }

    getPage()
    {
        console.log(`username: ${this.username} password: ${this.password} pageid: ${this.pageid}`);
    }

}

module.exports = User;
