require('dotenv').config();
require('./config/database');

const Category = require('./models/category');
const Product = require('./models/product');

(async function() {

  await Category.deleteMany({});
  const categories = await Category.create([
    {name: 'Apple', sortOrder:10},
    {name: 'Samsung', sortOrder: 20},
    {name: 'Google', sortOrder:30},
    {name: 'LG', sortOrder: 40},
    {name: 'Motorola', sortOrder: 50},
    {name: 'OnePlus', sortOrder: 60},
    {name: 'Huawei', sortOrder: 70},
    // {name: 'Huawei', sortOrder: 80},
    // {name: 'Sides', sortOrder: 90},
  ]);

  await Product.deleteMany({});
  const products = await Product.create([
    {name: 'iphone15', img: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRkfgqYo3W2oOTsTpPBlRZ6Sca8pS0sm9CmfBvlK0G8fO19TEM-', category: categories[0], price: 829.00},
    {name: 'iphone14', img: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6487/6487259_sd.jpg;maxHeight=640;maxWidth=550',  category: categories[0], price: 729.99},
    {name: 'iphone13', img: 'https://ss7.vzw.com/is/image/VerizonWireless/apple-iphone-13-blu-09142021?wid=930&hei=930&fmt=webp', category: categories[0], price: 629.99},
    {name: 'iphone12', img: 'https://www.phonedaddy.com/cdn/shop/products/12-purple.jpg?v=1656108075&width=500', category: categories[0], price: 312.68},
    
    {name: 'Galaxy Z Fold5', img: 'https://images.samsung.com/is/image/samsung/assets/us/2307/business/mobile/phones/q5/CO16_Discover_Card_2_Columns_Q5_Fullscreenoutside_DT.png?$684_N_PNG$', category: categories[1], price: 1799.99},
    {name: 'Galaxy Z Flip5', img: 'https://images.samsung.com/us/smartphones/galaxy-z-flip5/images/galaxy-z-flip5-highlights-kv-a.jpg?imbypass=true', category: categories[1], price: 999.99},
    {name: 'Galaxy S23 FE', img: 'https://image-us.samsung.com/SamsungUS/home/mobile/phones/tang/1_SDSAC-6568-US_OnlineExclusive_SM-S711_S23FE_Front2_Tangerine-1600x1200.jpg?$product-details-jpg$', category: categories[1], price: 689.99},
    {name: 'Galaxy s22', img: 'https://image-us.samsung.com/us/smartphones/galaxy-s22/images/gallery/R0-Green/FLRC-214-R0-Green-01-PDP-GALLERY-1600x1200.jpg?$product-details-jpg$', category: categories[1], price: 619.00},
    {name: 'Galaxy XCover6 Pro', img: 'https://image-us.samsung.com/SamsungUS/samsungbusiness/smartphones/galaxy-xcover/Configurator_SM-G736-XCover6Pro-BackFront-D.jpg', category: categories[1], price: 599.99},
    {name: 'Galaxy Z Flip4', img: 'https://image-us.samsung.com/SamsungUS/samsung/us/business/computers/all-deals/galaxy_a54_config_zflip4_b2b_kv_765x465.png', category: categories[1], price: 1059.99},
    
    {name: 'Pixel 7 Pro', img: 'https://lh3.googleusercontent.com/RWLzX3cvA-wb64WCwYc3wY3HvZtnD4qc8_rgHf5oDBaUxGt2DfKtxryV5K7788y_n3x9Rku4UrsfeRV2iuqtZBWfsoYMpqbiXBQ=rw-e365-nu-w525', category: categories[2], price: 899.00},
    {name: 'Pixel 7', img: 'https://lh3.googleusercontent.com/ZhOneVanVnFNt6kRonqDykl39dPoeUF2hQn0ydUtBjQtIc45XzgkFjagtfFJhxrUyn8CgXEIgfqFChDC_unMwn2O9I4OeL2JK9o=rw-e365-nu-w525', category: categories[2], price: 599.00},
    {name: 'Pixel 6a', img: 'https://lh3.googleusercontent.com/jYR2H7x-Lj1xx1rbbwRsEDaxPVO18WDho2A95kYNCDWVwZW1rIeAhqAMmWat9RafGlj6AmZNtEgd8-0jKV8B52R3fxtBAUjwKc8=rw-e365-nu-w525', category: categories[2], price: 349.00},
    {name: 'Pixel Fold', img:'https://lh3.googleusercontent.com/rubFNzpp5SPJHIm5rSLEQMB8QfU7k-XUxX5zMmVOdNG_ldO-UXmdE4UX1AacYW7gxYGyxTlmn6hnNlptIyqNS_jmq8bO34yHmA=rw-e365-w3000', category: categories[2], price: 1799.00},
    {name: 'Pixel 8 Pro', img: 'https://lh3.googleusercontent.com/HLsFbmHFSkuUvd_WQ4YBKfVNkBiTpVZLNJ0FwrdtNNqe10pkXkLrC1PYDrRLPTBquEWdHfzZ8yXBn-U8Z1sc3DcNv_1jm5tsZGof=rw-e365-w3000', category: categories[2], price: 799.00},
    {name: 'Pixel 8', img: 'https://lh3.googleusercontent.com/GCgLMaQYBwiV9cPNaHbiKJR9yk6PsuT2djEtOoKS3Xds6W-Jixul2qumlfYkOXL_vtc-Vrk1NPc3kzZUM7TDBETNlVYiGtspLpk=rw-e365-w3000', category: categories[2], price: 599.00},
    {name: 'Pixel 7a', img: 'https://lh3.googleusercontent.com/UzUWyvc_VJP5smyQFVPACXE63P8ag1uc6wEW40nSQTTlx3Es2ZU36yhyqLIjvzsCaOEq6gTjOD0ko6iab7mj5n4rumwvYR4Zwg=rw-e365-w3000', category: categories[2], price: 399.99},
    
    
    {name: 'LG G7+', img: 'https://www.lg.com/levant_en/images/mobile-phones/md05994779/gallery/medium01_1.jpg', category: categories[3], price: 259.99},
    {name: 'LG Q7+', img: 'https://www.lg.com/levant_en/images/mobile-phones/MD05997279/MD05997280/gallery/medium02_v.jpg', category: categories[3], price: 179.99},
    {name: 'LG V30', img: 'https://www.lg.com/levant_en/images/mobile-phones/md05929996/gallery/V30_23022018_M10.jpg', category: categories[3], price: 189.99},
    {name: 'LG G6', img: 'https://www.lg.com/levant_en/images/mobile-phones/md05804741/gallery/G6-medium02.jpg', category: categories[3], price: 154.00},
    {name: 'LG Q6', img: 'https://i.ebayimg.com/images/g/fQgAAOSwx01lABTE/s-l960.jpg', category: categories[3], price: 176.99},
    
    
    {name: 'motorola razr+', img: 'https://motorolaus.vtexassets.com/arquivos/ids/163225/razr-40-ultra-ecom-render-12-viva-magenta-.png?v=638222013687330000', category: categories[4], price: 699.99},
    {name: 'motorola edge+', img: 'https://motorolaus.vtexassets.com/arquivos/ids/163011-500-auto?v=638186240600330000&width=500&height=auto&aspect=true', category: categories[4], price: 599.99},
    {name: 'motorola razr', img: 'https://motorolaus.vtexassets.com/arquivos/ids/163774/razr-ecom-render-11-grape-.png?v=638325824341800000', category: categories[4], price: 499.99},
    {name: 'motorola edge', img: 'https://motorolaus.vtexassets.com/arquivos/ids/163726-500-auto?v=638325036924600000&width=500&height=auto&aspect=true', category: categories[4], price: 349.99},
    {name: 'motorola edge 30 fusion', img: 'https://motorolaus.vtexassets.com/arquivos/ids/162690-500-auto?v=638055343707370000&width=500&height=auto&aspect=true', category: categories[4], price: 349.99},
    {name: 'moto g stylus 5G', img: 'https://motorolaus.vtexassets.com/arquivos/ids/163152-500-auto?v=638277864729500000&width=500&height=auto&aspect=true', category: categories[4], price: 249.99},
    {name: 'moto g power 5G', img: 'https://motorolaus.vtexassets.com/arquivos/ids/162904-500-auto?v=638163704133800000&width=500&height=auto&aspect=true', category: categories[4], price: 199.99},

    {name: 'OnePlus Open', img: 'https://image01.oneplus.net/ebp/202310/09/1-m00-47-77-ckvlh2ujwe2atshtaale9r-nxtm963.png?x-amz-process=image/format', category: categories[5], price: 1499.99},
    {name: 'OnePlus Nord N30', img: 'https://image01.oneplus.net/ebp/202306/02/1-m00-45-8d-ckvtlmr6ww6ataogaai4bn6-vsk935.png?x-amz-process=image/format', category: categories[5], price: 269.99},
    {name: 'OnePlus 11', img: 'https://image01.oneplus.net/ebp/202304/11/1-m00-43-ec-ckvtlmq0_d2afrwnaanmzr5p60g201.png?x-amz-process=image/format', category: categories[5], price: 599.99},
    {name: 'OnePlus Nord N200', img: 'https://m.media-amazon.com/images/I/71DCZOdq92S.jpg', category: categories[5], price: 164.98},

    {name: 'Huawei P60', img: 'https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/plp/phones-20230509/p-series/p60.png', category: categories[6], price: 969.99},
    {name: 'Huawei P50', img: 'https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/plp/phones-20230509/p-series/p50.png', category: categories[6], price: 598.00},
    {name: 'Huawei P50 Pro', img: 'https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/plp/phones-20230509/p-series/p50-pro.png', category: categories[6], price: 598.00},
    {name: 'Huawei Mate 50 Pro', img: 'https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/plp/phones-20230509/mate-series/mate50-pro.png', category: categories[6], price: 804.99},
    {name: 'Huawei nova 11', img: 'https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/plp/phones-20230509/nova-series/nova-11.png', category: categories[6], price: 326.88},
    {name: 'Huawei nova Y91', img: 'https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/plp/phones-20230509/nova-series/nova-y91.png', category: categories[6], price: 320.27},
    {name: 'iphone SE', img: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRsOSW_o3rdDScd1Sm9ReGNVqNMK56nG9-j7dI9J-4F5C7p7XcFutkru3bqF1EEgB1S-4ER1YZisWiAllCMKM8nJHF_B64Y', category: categories[0], price: 479.00},
  ]);

  console.log(products)

  process.exit();

})();