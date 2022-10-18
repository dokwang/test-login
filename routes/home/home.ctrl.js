const hello = (req,res) => { //이크마스크립트 문법
    res.render("home/index");
};


const login = (req,res) => {
    res.render("home/login");
};

module.exports = {
    hello,
    login,
}