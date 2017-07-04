var User = mongoose.model('User', {
  email: {
    type: String,
    minlength: 1,
    require: true,
    trim: true
  }
});
