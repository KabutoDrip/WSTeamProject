module.exports = (mongoose) => {
    const Snack = mongoose.model(
      'snack',
      mongoose.Schema(
        {
          ///
        },
        { timestamps: true }
      )
    );
  
    return Snack;
  };
  