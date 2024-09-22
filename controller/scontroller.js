const main = {
  index:(req, res) => {
    res.render('index');
  },
  sharon: (req, res) => {
    res.render('sharon');
  },
  shawi: (req, res) => {
    res.render('shawi');
  },
  sha:(req, res) => {
    res.render('sha');
  },
  caballero:(req, res) => {
    res.render('caballero');
  },
}

module.exports = main;