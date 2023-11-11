const User = require('../models/User');


exports.imageDecode= (image,imageName) => {
    const fs = require('fs');
    const base64String = image;
    const base64Data = base64String.replace(/^data:image\/\w+;base64,/, '');
    const imageBuffer = Buffer.from(base64Data, 'base64');
    // Save the buffer as an image file
    fs.writeFileSync('./images/'+imageName+'.jpg', imageBuffer);
}





module.exports.preEvents= async function preEvents(req,res){
    try {
        let data=req.body;
        
        let storedJson={
            Name:data.Name.trim(),
            Email:data.Email,
            PhoneNumber:data.PhoneNumber,
            RollNumber:data.RollNumber,
            Branch:data.Branch,
            Year:data.Year,
            Gender:data.Gender,
            FoodPref:data.FoodPref,
            Events:data.Events,
        }

        let newUser=await User.create(storedJson);
        
        // imageDecode(data.image, newUser.Name+"_"+newUser.RollNumber);
        res.json({
            status:true
        });
    } catch (error) {
        res.json({
            status:false,
            message:error.message
        })
    }
}
