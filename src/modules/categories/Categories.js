import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: mongoose.SchemaTypes.String,
      required: true
    },
    description: {
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

categorySchema.virtual("products" , { ref :"Product" , localField : "_id" ,foreignField : "categoryId" , justOne : false})

const Category = mongoose.model('Category', categorySchema);



export default Category;
