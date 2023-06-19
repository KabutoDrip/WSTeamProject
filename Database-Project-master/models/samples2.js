module.exports = (mongoose) => {
    const SD2 = mongoose.model(
      'sampledata1',
      mongoose.Schema(
        {
          ///
        },
        { timestamps: true }
      )
    );
  
    return SD2;
  };
  