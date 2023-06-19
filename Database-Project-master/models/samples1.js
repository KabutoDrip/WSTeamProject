module.exports = (mongoose) => {
    const SD1 = mongoose.model(
      'sampledata1',
      mongoose.Schema(
        {
          ///
        },
        { timestamps: true }
      )
    );
  
    return SD1;
  };
  