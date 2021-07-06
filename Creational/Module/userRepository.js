const Repo = () => {
  let db = {};

  const get = (id) => {
    console.log(`Getting user: ${id}`);
    return {
      name: id
    }
  };

  return {
    get
  }
};

module.exports = Repo();