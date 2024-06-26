import { Schema, model } from "mongoose";
import slugify from "slugify";

const subCategorySchema = new Schema({
    name: {
        type : String,
        required:[true,'subCategory Name is Required'],
        unique: true,
        trim: true,
        maxlength: [100,"Name should be less than 100 characters"],
    },
    slug: {
        type :String,
        lowercase: true,
    },
    category:{
        type: Schema.ObjectId,
        ref :"Category",
        required: true,
    },
},{
    timestamps: true
})
// slug name when create
subCategorySchema.pre('save', function(){
    this.slug = slugify(this.name)
})

// slug name when updating
subCategorySchema.pre('findOneAndUpdate', function() {
    if(this._update.name){
        this._update.slug = slugify(this._update.name);
    }
});

export default model('SubCategory', subCategorySchema)