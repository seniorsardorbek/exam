import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    first_name: {
      type: mongoose.SchemaTypes.String,
      required: true
    },
    last_name: {
      type: mongoose.SchemaTypes.String,
      required: true
    },
    
    role: {
      type: mongoose.SchemaTypes.String,
      enum: ['user', 'admin'],
      default: 'user'
    },
    username: {
      type: mongoose.SchemaTypes.String,
      required: true,
      unique: true
    },
    password: {
      type: mongoose.SchemaTypes.String,
      required: true
    }
  },
  {
    toJSON: {
      virtuals: true,
      transform: (doc, ret) => {
        ret._id = ret.id;
        delete ret._id;
      }
    },
    versionKey: false,
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  }
);
userSchema.virtual('fullname').get(function () {
  return `${this.first_name} ${this.last_name}`;
});

const User = mongoose.model('User', userSchema);

export default User;
