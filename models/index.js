const Sequelize = require("sequelize");
const db = new Sequelize("postgres://localhost:5432/wikistack", {
  logging: false
});

//When using models.db in init
// module.exports = {
//   db
// };

const Page = db.define("page", {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  slug: {
    type: Sequelize.STRING,
    allowNull: false
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  status: {
    type: Sequelize.ENUM("open", "closed")
  }
});

Page.beforeValidate(page => {
  // let sluggified = req.body.title;
  // let newSlug = "";
  // const sluggify = sluggified => {
  let regex = /\s+/g;
  let regex2 = /\W/g;
  // console.log(sluggified.replace(regex, "_"));
  console.log(page.slug);
  if (!page.slug) {
    console.log(page.slug);
    page.slug = page.title.replace(regex, "_").replace(regex2, "");
  }
  // sluggify();
  // };
});

const User = db.define("user", {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  }
});

module.exports = { Page, User, db };
