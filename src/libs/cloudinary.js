const cloudinary = require('cloudinary').v2;





cloudinary.config({
    cloud_name: "dyedjxddl",
    api_key:"995597677559528",
    api_secret:"cykz9_jfze2tkPHN9CRrESv5qH4" 
})
const uploadImage = async filePath => {
return await  cloudinary.uploader.upload (filePath, {
    folder: 'concerts',

  })
}

const deleteImage = async public_id => {
    return await cloudinary.uploader.destroy(public_id)
    }

module.exports = { uploadImage, deleteImage }
