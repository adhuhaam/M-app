import APICaller from './api_callers';


/***
 * 
 * ORDERS 
 * 
 */
exports.getVendorOrders=async (callback,eCallback)=>{APICaller.authAPI('GET','vendor/orders',{},callback,eCallback)};
exports.getVendorOrder=async (id,callback,eCallback)=>{APICaller.authAPI('GET','vendor/orders/order/'+id,{},callback,eCallback)};
exports.getVendorEarnings=async (callback,eCallback)=>{APICaller.authAPI('GET','vendor/orders/earnings',{},callback,eCallback)};