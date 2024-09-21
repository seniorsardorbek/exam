import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    name: {
      type: mongoose.SchemaTypes.String,
      required: true
    },
    color: {
      type: mongoose.SchemaTypes.String,
      required: true
    },
    price: {
      type: mongoose.SchemaTypes.String,
      required: true
    },
    quantity: {
      type: mongoose.SchemaTypes.Number,
      required: true
    },

    categoryId :  {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Category',
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


const Product = mongoose.model('Product', productSchema);



export default Product;
