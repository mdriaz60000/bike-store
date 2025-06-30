// import Shurjopay from "shurjopay";
// import config from "../../config";

// const shurjopay = new Shurjopay();

// // Step 1: Configure
// shurjopay.config(
//   config.sp_endpoint as string,
//   config.sp_username as string,
//   config.sp_password as string,
//   config.sp_prefix as string,
//   config.sp_return_url as string
// );



// const makePayment = async (paymentPayload : any) =>{
// const paymentResult = await shurjopay.makePayment(paymentPayload)
// console.log(paymentResult)
// }
// // Step 2: Authenticate first to get token
// shurjopay.authentication((tokenDetails) => {
//   const checkoutParams = {
//     prefix: config.sp_prefix,
//     token: tokenDetails.token,
//     return_url: config.sp_return_url,
//     cancel_url: config.sp_return_url, // or a different URL for cancel
//     store_id: "store123", // This should come from token response if applicable
//     amount: 500,
//     order_id: "order_" + Date.now(),
//     currency: "BDT",
//     customer_name: "John Doe",
//     customer_address: "123 Street",
//     customer_email: "john@example.com",
//     customer_phone: "017XXXXXXXX",
//     customer_city: "Dhaka",
//   };


 
// });
