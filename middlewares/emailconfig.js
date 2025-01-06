
const nodemailer = require('nodemailer');
const website_info = require('../Models/website_info');

const transporter = nodemailer.createTransport({
  host:'smtp.gmail.com',
  port:587,
  secure:false,
  auth: {
    user: 'shrestha.suraj.2013@gmail.com',
    pass: 'Shinig@mi1716'
  },
});

async function sendEmail(to, subject, text, html) {
  try {
    const mailOptions = {
      from: 'shrestha.suraj.2013@gmail.com',
      to: to,
      subject: subject,
      text: text,
      html: html
    };
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ', to);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Error sending email: ', error);
    return { success: false, error: error.message };
  }
}



const toEmail = 'shrestha.suraj.2013@gmail.com';
const emailSubject = 'Test Email';
const emailText = 'This is a test email sent from Node.js using Nodemailer.';
const emailHtml = ''
// const emailHtml = `<div class="row">
  
// <div class="col-xs-12">
//     <div class="container-fluid">
//       <table width="99%" border="0" align="center" cellpadding="0" cellspacing="0" style="font-family: 'Arial, Helvetica, sans-serif'; font-size: 12px; border: 1px solid black;">
//         <tbody>
//           <tr>
//             <td style="border-bottom: 1px solid black; height: 24px; font-size: 14px;" align="center"><strong>TAX INVOICE</strong></td>
//           </tr>
//           <tr>
//             <td width="50%" valign="top" style="border-bottom: 1px solid black; padding: 8px; line-height: 20px;">
//               <table width="100%" border="0" cellspacing="0" cellpadding="0">
//                 <tbody>
//                   <tr>
//                     <td width="49%"><strong>Company Name:</strong> ${website_info.data[0].website_name}<br />
//                       <strong>Address:</strong> Rz-453T-block Dharampura New Delhi - 110043<br />
//                       <strong>Phone no.:</strong> +91${website_info.data[0].mobile_no}<br />
//                       <strong>Email:</strong> ${website_info.data[0].email}<br />
//                       <strong>GSTIN:</strong> 393idkei39ei39993
//                     </td>
//                     <td width="51%" align="right"><img src="${img}" alt="Company Logo" style="width: 150px;" /></td>
//                   </tr>
//                 </tbody>
//               </table>
//             </td>
//           </tr>
//           <tr>
//             <td>
//               <table width="100%" border="0" cellspacing="0" cellpadding="0">
//                 <tbody>
//                   <tr>
//                     <td width="50%" height="24" style="border-bottom: 1px solid black; border-right: 1px solid black; padding: 8px; font-family: 'Arial, Helvetica, sans-serif'; font-size: 12px;">
//                       <strong>SHIPPING ADDRESS</strong>
//                     </td>
//                     <td width="50%" align="right" style="border-bottom: 1px solid black; padding: 8px; font-family: 'Arial, Helvetica, sans-serif'; font-size: 12px;">
//                       <strong>Invoice No.: ${orderdetail.data.orderid}</strong>
//                     </td>
//                   </tr>
//                   <tr>
//                     <td width="50%" valign="top" style="border-bottom: 1px solid black; border-right: 1px solid black; padding: 8px; line-height: 20px; font-family: 'Arial, Helvetica, sans-serif'; font-size: 12px;">
//                       <p>
//                         <strong>Name:</strong> ${orderdetail.data.shipping_first_name} ${orderdetail.data.shipping_last_name}<br />
//                         <strong>Address:</strong> ${orderdetail.data.shipping_address1}, ${orderdetail.data.shipping_address2}, ${orderdetail.data.shipping_city}, ${orderdetail.data.shipping_state}, ${orderdetail.data.shipping_country}-${orderdetail.data.shipping_pincode}<br />
//                         <strong>Phone no.:</strong> ${orderdetail.data.shipping_mobile}<br />
//                         <strong>Email:</strong> ${orderdetail.data.shipping_email}
//                       </p>
//                     </td>
//                     <td width="50%" align="right" valign="top" style="border-bottom: 1px solid black; padding: 8px; line-height: 20px; font-family: 'Arial, Helvetica, sans-serif'; font-size: 12px;">
//                       <p><strong>Date: ${orderdetail.data.order_date}</strong></p>
//                     </td>
//                   </tr>
//                 </tbody>
//               </table>
//             </td>
//           </tr>
//           <!-- Add your additional rows here, ensuring no JSX or dynamic JSX-like syntax -->
//         </tbody>
//       </table>
//     </div>
//   </div>
// </div>`;



// Call the sendEmail function

module.exports = sendEmail;