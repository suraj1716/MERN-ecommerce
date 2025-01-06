
const contact = require("../../Models/contactus");

const contactus = async (req, res) => {
   
try{

  const { firstname, lastname, email, mobile, Message } = req.body
  const sanddata = new contact({
      firstname : firstname,
      lastname : lastname,
      mobile : mobile,
      email : email,
      Message : Message
    })

    const rel = await sanddata.save()
    res.send({status:"sucessful",data:rel})

}catch(err){
    console.log(`  here is errror ${err}`);
    res.send({status:"faild"})

}






}

module.exports = contactus