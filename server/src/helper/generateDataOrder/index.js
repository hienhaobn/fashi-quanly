
const userIds = Array(
  "5eb0df97b4aa0714c41396d3",
  "5eb0dfd9b4aa0714c41396d5",
  "5eb0e000b4aa0714c41396d7",
  "5eb0e027b4aa0714c41396d9",
  "5eb0e051b4aa0714c41396db",
  "5eb0e08ab4aa0714c41396dd",
  "5eb0e0cab4aa0714c41396df",
  "5eb0e113b4aa0714c41396e1",
  "5eb0e135b4aa0714c41396e3",
  "5eb0e1a0b4aa0714c41396e5",
  "5eb0e1c3b4aa0714c41396e7",
  "5eb0e1f8b4aa0714c41396e9",
  "5eb0e3f2655bbb595c7a0c2c",
  "5eb102b765e2c335bcf5985a"
);
const productIds = Array(
  "5eb0cc70865dbf27585eecfd",
  "5eb0ccc9865dbf27585eed00",
  "5eb0cd1f865dbf27585eed03",
  "5eb0cd6d865dbf27585eed06",
  "5eb0cdc7865dbf27585eed09",
  "5eb0ce06865dbf27585eed0c",
  "5eb0ce39865dbf27585eed0f",
  "5eb0ce8e865dbf27585eed12",
  "5eb0cec9865dbf27585eed15",
  "5eb0cf06865dbf27585eed18",
  "5eb0cf6b865dbf27585eed1b",
  "5eb0d008865dbf27585eed1e",
  "5eb0d05d865dbf27585eed21",
  "5eb0d0a3865dbf27585eed24",
  "5eb0d0e9865dbf27585eed27",
  "5eb0d130865dbf27585eed2a",
  "5eb0d168865dbf27585eed2d",
  "5eb0d1bb865dbf27585eed30",
  "5eb0d240865dbf27585eed33",
  "5eb03e1fbace7d3038a88b0e",
  "5eb03f07bace7d3038a88b11",
  "5eb03f4dbace7d3038a88b14",
  "5eb03facbace7d3038a88b17",
  "5eb04047bace7d3038a88b1a",
  "5eb040ecbace7d3038a88b1d",
  "5eb04150bace7d3038a88b20",
  "5eb0419ebace7d3038a88b23",
  "5eb041edbace7d3038a88b26",
  "5eb0423cbace7d3038a88b29",
  "5eb0430ebace7d3038a88b2c",
  "5eb04501bace7d3038a88b2f",
  "5eb04569bace7d3038a88b32",
  "5eb045acbace7d3038a88b35",
  "5eb045f3bace7d3038a88b38",
  "5eb046a1bace7d3038a88b3b",
  "5eb046edbace7d3038a88b3e",
  "5eb04731bace7d3038a88b41",
  "5eb04911bace7d3038a88b44",
  "5eb0384fe7466a4c88928340",
  "5eb039a1e7466a4c88928346",
  "5eb039f1e7466a4c8892834f",
  "5eb03aa0e7466a4c88928352",
  "5eb0373df05d53505c65111f",
  "5eb032079e2c593ebc89f097",
  "5eb033649e2c593ebc89f09a",
  "5ead928042da183140ddf750",
  "5ea7ca9a109203095890168d",
  "5ea7cad01092030958901692",
  "5ea7caf41092030958901697",
  "5ea7cb2d109203095890169c",
  "5ea7cb4b10920309589016a1",
  "5ea7cb6610920309589016a6",
  "5ea7cb9010920309589016ab",
  "5ea7cbf310920309589016b0",
  "5ea7cc9110920309589016b5",
  "5ea7cd1210920309589016ba",
  "5ea7cd5710920309589016bf",
  "5ea7cd7210920309589016c4",
  "5ea7cd9f10920309589016c9",
  "5ea7cdbe10920309589016ce",
  "5ea7cde710920309589016d3",
  "5ea7ce0110920309589016d8",
  "5ea7ce2410920309589016dd",
  "5ea7ce3b10920309589016e2",
  "5ea7ce6c10920309589016e7",
  "5ea7ce8410920309589016ec",
  "5ea7ce9f10920309589016f1",
  "5ea7cebd10920309589016f6",
  "5ea7ced910920309589016fb"
);
const sizes = Array("S", "M", "L", "XL");
const colors = Array("Trắng", "Đỏ", "Đen");
const firstName = Array("Nguyễn", "Trần", "Cao", "Trịnh", "Trương");
const lastName = Array(
  "Mỹ Duyên", 
  "Quang Đại", 
  "Hằng Ly", 
  "Thu Uyên",
  "Khánh Vân",
  "Hải An",
  "Thanh Thúy",
  "Thu Thủy",
  "Lan Anh",
  "Thu Xương",
  "Thu Phương",
  "Vân Anh",
  "Thị Thu",
  "Tuệ An",
  "Thị Hòa",
  "Tấn Đạt",
  "Hùng Cường",
  "Vân Lam",
  "Văn Hiếu",
  "Thúy Anh",
  "Hải Ân",
  "Thu Hoài",
  "Tuyết Nga",
  "Thanh Ngân",
  "Kim Ngân",
  "Khánh Hòa",
  "Thanh Hoài",
  "Thị Nga",
  "Thị Thu Ngân",
  "Khanh Linh",
  "Triệu Huyền Ân",
  "Cẩm Tú Anh",
  "Lã Huyền",
  "Ánh Dương",
  "Thanh Thủy",
  "Thiên Thu",
  "Hạ Anh",
  "Xuân Mỹ",
  "Hoàng Diệu",
  "Hoài Dung");
const address = Array(
  "Hạ Đình - TP. Hà Nội",
  "Nguyễn Trãi - TP. Hà Nội",
  "Trúc Khê - TP. Hà Nội",
  "Bà Triệu - TP. Hà Nội",
  "Vũ Tông Phan - TP. Hà Nội",
  "Duy Tân - TP. Hà Nội",
  "Lê Văn Thiêm - TP. Hà Nội",
  "Giang Văn Minh - TP. Hà Nội",
  "Nguyên Hồng - TP. Hà Nội",
  "Quán Thánh - TP. Hà Nội",
  "Nguyễn Du - TP. Hà Nội",
  "Lý Thường Kiệt - TP. Hà Nội",
  "Ngọc Khánh - TP. Hà Nội",
  "Đường Láng - TP. Hà Nội",
  "Lê Đức Thọ - TP. Hà Nội",
  "Khương Trung - TP. Hà Nội",
  "Khuất Duy Tiến - TP. Hà Nội",
  "Dương Quảng Hàm - TP. Hà Nội",
  "Ngõ Huyện - TP. Hà Nội",
  "Nguyễn Xiển - TP. Hà Nội",
  "Pháo Đài Láng - TP. Hà Nội",
  "Hàng Tre - TP. Hà Nội",
  "Lê Thánh Tông - TP. Hà Nội",
  "Trần Khát Chân - TP. Hà Nội",
  "Lê Trọng Tấn - TP. Hà Nội",
  "Lê Duẩn - TP. Hà Nội",
  "Kim Giang - TP. Hà Nội",
  "Trung Kính - TP. Hà Nội",
  "Tân Mai - TP. Hà Nội",
  "Bùi Xương Trạch - TP. Hà Nội",
  "Hồng Mai - TP. Hà Nội",
  "Đông Tác - TP. Hà Nội",
  "Tam Trinh - TP. Hà Nội",
  "Xuân Đỉnh - TP. Hà Nội",
  "Liễu Giai - TP. Hà Nội",
  "Giải Phóng - TP. Hà Nội",
  "Lê Văn Lương - TP. Hà Nội",
  "Thanh Nhàn - TP. Hà Nội",
  "Nguyễn Phong Sắc - TP. Hà Nội",
  "Ngõ 131 Thái Hà - TP. Hà Nội",
  "Nguyễn Hữu Huân - TP. Hà Nội",
  "Hai Bà Trưng - TP. Hà Nội",
  "Tố Hữu - TP. Hà Nội",
  "Huỳnh Thúc Kháng - TP. Hà Nội",
  "Yên Phụ - TP. Hà Nội",
  "Lạc Long Quân - TP. Hà Nội",
  "Vũ Phạm Hàm - TP. Hà Nội",
  "Dương Đình Nghệ - TP. Hà Nội",
  "Ngõ 55 Huỳnh Thúc Kháng - TP. Hà Nội",
  "Lương Đình Của - TP. Hà Nội");
const emails = Array(
  'tinhtu0@gmail.com',
  'tinhtu1@gmail.com',
  'tinhtu2@gmail.com',
  'tinhtu3@gmail.com',
  'tinhtu4@gmail.com',
  'tinhtu5@gmail.com',
  'tinhtu6@gmail.com',
  'tinhtu7@gmail.com',
  'tinhtu8@gmail.com',
  'tinhtu9@gmail.com',
  'tinhtu10@gmail.com',
  'tinhtu11@gmail.com',
  'tinhtu12@gmail.com',
  'tinhtu13@gmail.com',
  'tinhtu14@gmail.com',
  'tinhtu15@gmail.com',
  'tinhtu0@gmail.com',
  'tinhtu1@gmail.com',
  'tinhtu2@gmail.com',
  'tinhtu3@gmail.com',
  'tinhtu4@gmail.com',
  'tinhtu5@gmail.com',
  'tinhtu6@gmail.com',
  'tinhtu7@gmail.com',
  'tinhtu8@gmail.com',
  'tinhtu9@gmail.com',
  'tinhtu10@gmail.com',
  'tinhtu11@gmail.com',
  'tinhtu12@gmail.com',
  'tinhtu13@gmail.com',
  'tinhtu14@gmail.com',
  'tinhtu15@gmail.com'  
);
const phones = Array(
  '0987561722',
  '0987932164',
  '0989322860',
  '0988355527',
  '0982969422',
  '0984630344',
  '0982776975',
  '0987039717',
  '0988078810',
  '0986904686',
  '0982560587',
  '0988004057',
  '0985282552',
  '0985646438',
  '0985778032',
  '0987290517',
  '0983178044',
  '0987384649',
  '0984307396',
  '0989123742',
  '0987909837',
  '0988547978',
  '0989074941',
  '0983254801',
  '0983923820',
  '0986779173',
  '0989380395',
  '0984104283',
  '0981883774',
  '0985717836',
  '0986535069',
  '0988720588',
  '0989725019',
  '0981232753',
  '0981471446',
  '0984393464',
  '0981578478',
  '0989049670',
  '0984275067',
  '0982256017',
  '0989849388',
  '0987199936',
  '0984348911',
  '0985789175',
  '0989914314',
  '0988048860',
  '0984495909'
);      
const dates = Array(
  "2020-04-20",
  "2020-04-21",
  "2020-04-22",
  "2020-04-23",
  "2020-04-24",
  "2020-04-25",
  "2020-04-26",
  "2020-04-27",
  "2020-04-28",
  "2020-04-29",
  "2020-04-30",
  "2020-05-01",
  "2020-05-02",
  "2020-05-03",
  "2020-05-04",
  "2020-05-05",

);     
                    // fake-email
// const item = items[Math.floor(Math.random() * items.length)];
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

// const random_name_from = firstName[Math.floor(Math.random() * firstName.length)] +" "+ lastName[Math.floor(Math.random() * lastName.length)];
// const random_name_to = firstName[Math.floor(Math.random() * firstName.length)] +" "+ lastName[Math.floor(Math.random() * lastName.length)];
// const total_money_random = getRandomInt(1300000, 4000000);
// const address_random_to = address[Math.floor(Math.random() * address.length)];
// const address_random_from = address[Math.floor(Math.random() * address.length)];
// const email_random = emails[Math.floor(Math.random() * emails.length)];
// const phone_random = phones[Math.floor(Math.random() * phones.length)];
// const productId_random = productIds[Math.floor(Math.random() * productIds.length)];
// const size_random = sizes[Math.floor(Math.random() * sizes.length)];
// const color_random = colors[Math.floor(Math.random() * colors.length)];

function genDataOrderItem(sizes, colors, productIds) {
  const order_item = {};
  order_item.product_id = genDataProductId(productIds),
  order_item.size = genDataSize(sizes),
  order_item.color = genDataColor(colors),
  order_item.quantity = getRandomInt(1,5)
  // console.log('-----------',order_item);
  return order_item;
};
function genDataOrder(userIds,firstName, lastName, address, emails, phones, dates) {
  const order_product = {};
  order_product.user_id = genDataUserId(userIds),
  order_product.name_from = genDataNameFrom(firstName, lastName),
  order_product.name_to = genDataNameTo(firstName, lastName),
  order_product.address_from = genDataAddressFrom(address),
  order_product.address_to = genDataAddressTo(address),
  order_product.email = genDataEmail(emails),
  order_product.phone = genDataPhone(phones),
  order_product.total_money = getRandomInt(1300000, 6000000),
  order_product.total_product = getRandomInt(1,10);
  order_product.created_at = genDate(dates);
  return order_product;
}
function genDataSize(sizes) {
  return sizes[Math.floor(Math.random() * sizes.length)];
}
function genDataColor(colors){
  return colors[Math.floor(Math.random() * colors.length)];
}
function genDataProductId(productIds) {
  return productIds[Math.floor(Math.random() * productIds.length)];
}
function genDataNameFrom(firstName, lastName) {
  return firstName[Math.floor(Math.random() * firstName.length)] +" "+ lastName[Math.floor(Math.random() * lastName.length)];
}
function genDataNameTo(firstName, lastName) {
  return firstName[Math.floor(Math.random() * firstName.length)] +" "+ lastName[Math.floor(Math.random() * lastName.length)];
}
function genDataAddressFrom(address) {
  return address[Math.floor(Math.random() * address.length)];
}
function genDataAddressTo(address) {
  return address[Math.floor(Math.random() * address.length)];
}
function genDataPhone(phones) {
  return phones[Math.floor(Math.random() * phones.length)]
}
function genDataEmail(emails) {
  return emails[Math.floor(Math.random() * emails.length)]
}
function genDataUserId(userIds){
  return userIds[Math.floor(Math.random() * userIds.length)]
}
function genDate(dates) {
  return dates[Math.floor(Math.random() * dates.length)]
}
module.exports = {
  'random_data': () => {
    let dataSave = {
      orderProduct: Object,
      orderItems: Object
    }
  
    // let orderProduct = null;
    // let orderItem = null;
  //  let order_product = {
  //   name_from: String,
  //   name_to: String,
  //   address_from: String,
  //   address_to: String,
  //   email: String,
  //   phone: String,
  //   total_money: Number,
  //   total_product: Number,
    
  // };
  // let order_item = {
  //   product_id: String,
  //   size: String,
  //   color: String,
  //   quantity: Number
  // }
      let dataOrder = genDataOrder(userIds,firstName, lastName, address, emails, phones, dates);
        // order_product.name_from = random_name_from,
        // order_product.name_to = random_name_to,
        // order_product.address_from = address_random_from,
        // order_product.address_to = address_random_to,
        // order_product.email = email_random,
        // order_product.phone = phone_random,
        // order_product.total_money = total_money_random,
        // order_product.total_product = getRandomInt(1,20);
      let dataGenItem = [];
        for(let i = 0; i < dataOrder.total_product; i++){
         
          let dataItem = genDataOrderItem(sizes, colors, productIds);
          // dataSave.orderProduct = order_product;
          // dataSave.orderItem = dataItem;
          console.log(dataItem);
          dataGenItem.push(dataItem);
          // console.log(dataItem) 
          
        }
        console.log(dataGenItem);
        dataSave.orderProduct = dataOrder;
        dataSave.orderItem = dataGenItem;
    return dataSave;
  }
}
// const random_data =  function () {
  
//   // let dataFake = [];
//   let dataSave = {
//     orderProduct: Object,
//     orderItem: Object
//   }

//   // let orderProduct = null;
//   // let orderItem = null;
//  let order_product = {
//   name_from: String,
//   name_to: String,
//   address_from: String,
//   address_to: String,
//   email: String,
//   phone: String,
//   total_money: Number,
//   total_product: Number
// };
// let order_item = {
//   product_id: String,
//   size: String,
//   color: String,
//   quantity: Number
// }
//       order_product.name_from = random_name_from,
//       order_product.name_to = random_name_to,
//       order_product.address_from = address_random_from,
//       order_product.address_to = address_random_to,
//       order_product.email = email_random,
//       order_product.phone = phone_random,
//       order_product.total_money = total_money_random,
//       order_product.total_product = getRandomInt(1,20);
//     let dataGenItem = [];
//       for(let i = 0; i <= order_product.total_product; i++){
       
//         let dataItem = genDataOrderItem( sizes, colors, productIds);
//         // dataSave.orderProduct = order_product;
//         // dataSave.orderItem = dataItem;
//         console.log(dataItem);
//         dataGenItem.push(dataItem);
//         // console.log(dataItem) 
        
//       }
//       console.log(dataGenItem);
//       dataSave.orderProduct = order_product;
//       dataSave.orderItem = dataGenItem;
//   return dataSave;
// }

// let data_fake = random_data();
// console.log(data_fake);
