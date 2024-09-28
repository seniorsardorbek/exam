import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema(
  {
    comment: {
      type: mongoose.SchemaTypes.String,
      required: true
    },
    userId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref : "User" ,
      required: true
    },
    productId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref : "Product" ,
      required: true
    },
    comment: {
      type: mongoose.SchemaTypes.String,
      required: true
    },
    
    
   
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

// CommentSchema.virtual("products" , { ref :"Product" , localField : "_id" ,foreignField : "CommentId" , justOne : false})

const Comment = mongoose.model('Comment', commentSchema);



export default Comment;
