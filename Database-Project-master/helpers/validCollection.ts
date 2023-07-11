const validCollection = (collectionName) => {
  valid = {
    "candy&Pastries": "",
    meats: "",
    "nuts&dried_Fruits": "",
    snack: "",
  };

  return {
    valid: Object.keys(valid).includes(collectionName),
    collections: Object.keys(valid),
  };
};

module.exports = validCollection;