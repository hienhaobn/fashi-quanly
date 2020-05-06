const products = [
    {
        id: 1,
        product_name: "Women is Loose maxi dress",
        image_product: "product-1",
        description: "His unique dress is breathable and soft. We specially wash each dress after Hand-sewing, does not shrink anymore. So it has a relaxed texture and a beautiful drape.",
        product_type_id: 1,
        brand_id: 1,
        total_product: 10,
        active_sale: true,
        created_at: "2019/05/05",
        updated_at: "2019/05/05",
    },
    {
        id: 2,
        product_name: "Summer dress",
        image_product: "product-2",
        description: "The Carrie dress is my classic, always in fashion dress. Fits the body amazingly it has elastic on the shoulder part and elastic waistband to fit your size perfectly.abundance of fabric makes a beautiful flow as you walk.",
        product_type_id: 2,
        brand_id: 2,
        total_product: 22,
        active_sale: true,
        created_at: "2019/05/05",
        updated_at: "2019/05/05",
    },
    {
        id: 3,
        product_name: "Classic dress",
        image_product: "product-3",
        description: "When You dress LeMuse You feel beautiful and cozy. LeMuse hides all imperfections and makes You perfect.",
        product_type_id: 2,
        brand_id: 1,
        total_product: 12,
        active_sale: true,
        created_at: "2019/05/05",
        updated_at: "2019/05/05",
    },
    {
        id: 4,
        product_name: "Smart Casual Dress",
        image_product: "product-4",
        description: "My classic wrap dress finally with full length sleeves. This will keep you warm this winter while looking your best. On picture 3 you can see this dress with elbow length sleeves.",
        product_type_id: 3,
        brand_id: 2,
        total_product: 90,
        active_sale: false,
        created_at: "2019/05/05",
        updated_at: "2019/05/05",
    },
    {
        id: 5,
        product_name: "Burgundy long dress",
        image_product: "product-5",
        description: "Prom dress, Burgundy long dress, floor length infininty dress, long party dress, marsala dress, versatile dress, prom dresses, maxi dresses.",
        product_type_id: 4,
        brand_id: 4,
        total_product: 120,
        active_sale: false,
        created_at: "2019/05/05",
        updated_at: "2019/05/05",
    },
    {
        id: 6,
        product_name: "Boho wedding dress",
        image_product: "product-6",
        description: "Luxurious long dress for romantic walks and festivities.Skirt to the bottom strongly flared. Three quarter sleeve. Round neckline and a deep, complementing the image of sexuality.",
        product_type_id: 3,
        brand_id: 4,
        total_product: 50,
        active_sale: true,
        created_at: "2019/05/05",
        updated_at: "2019/05/05",
    },
    {
        id: 7,
        product_name: "Hight Low Wedding Skirt",
        image_product: "product-7",
        description: "High waisted pleaded Mikado wedding skirt with cascading high-low hem and size pockets.",
        product_type_id: 2,
        brand_id: 3,
        total_product: 15,
        active_sale: false,
        created_at: "2019/05/05",
        updated_at: "2019/05/05",
    },
    {
        id: 8,
        product_name: "Green infinity dress",
        image_product: "product-8",
        description: "The Gala Essential Long dress is a convertible and versatile dress, perfect for bridesmaids, wedding guests and parties! You can wear the dress in countless different ways, making it the ideal dress for every girl and for any occasion.",
        product_type_id: 2,
        brand_id: 2,
        total_product: 30,
        active_sale: false,
        created_at: "2019/05/05",
        updated_at: "2019/05/05",
    },
    {
        id: 9,
        product_name: "Cinder Rose linen jumpsuit",
        image_product: "product-9",
        description: "Simple but endlessly romantic and feminine Cinder Rose linen jumpsuit design that features also soft sleeves. Very comfortable and soft to wear but elegant and flattering at the same time.",
        product_type_id: 2,
        brand_id: 3,
        total_product: 60,
        active_sale: false,
        created_at: "2019/05/05",
        updated_at: "2019/05/05",
    },
    {
        id: 10,
        product_name: "Brown Linen Pantsuit",
        image_product: "product-10",
        description: "Brown Linen Pantsuit, Brown Suit, Loose Overalls, Jumpsuit With Belt, linen Jumpsuit Women, Linen Overalls, Linen Romper, Linen Clothing, Wide Leg Jumpsuit, linen playsuit, linen suit",
        product_type_id: 2,
        brand_id: 3,
        total_product: 220,
        active_sale: false,
        created_at: "2019/05/05",
        updated_at: "2019/05/05",
    },
    {
        id: 11,
        product_name: "Cream Maxi Dress",
        image_product: "product-11",
        description: "The Carrie dress is my classic, always in fashion dress. Fits the body amazingly it has elastic on the shoulder part and elastic waistband to fit your size perfectly.abundance of fabric makes a beautiful flow as you walk.",
        product_type_id: 2,
        brand_id: 1,
        total_product: 110,
        active_sale: false,
        created_at: "2019/05/05",
        updated_at: "2019/05/05",
    },
    {
        id: 12,
        product_name: "Linen dress",
        image_product: "product-12",
        description: "Extravagant flattering loose dress , so elegant and comfy ...Perfect solution for your everyday outfit:) ...not only...This would be turn around garment wherever you go!",
        product_type_id: 2,
        brand_id: 3,
        total_product: 16,
        active_sale: false,
        created_at: "2019/05/05",
        updated_at: "2019/05/05",
    },
    {
        id: 13,
        product_name: "Boho wedding dress",
        image_product: "product-13",
        description: "Lace wedding dress long sleeve wedding dress bridal gown lace bridal dress lace bridal gown lace wedding gown lace dress wedding.",
        product_type_id: 1,
        brand_id: 1,
        total_product: 40,
        active_sale: false,
        created_at: "2019/05/05",
        updated_at: "2019/05/05",
    },
    {
        id: 14,
        product_name: "Olive green bridesmaid dress",
        image_product: "product-14",
        description: "The Gala Essential Long dress is a convertible and versatile dress, perfect for bridesmaids, wedding guests and parties! You can wear the dress in countless different ways, making it the ideal dress for every girl and for any occasion.",
        product_type_id: 1,
        brand_id: 2,
        total_product: 150,
        active_sale: false,
        created_at: "2019/05/05",
        updated_at: "2019/05/05",
    },
    {
        id: 15,
        product_name: "Linen dress in orange",
        image_product: "product-15",
        description: "Maxi linen dress in orange and black. Handmade raw edge ruffles around the chest part maxi style, elegant as day dress or cocktail dress.",
        product_type_id: 2,
        brand_id: 3,
        total_product: 67,
        active_sale: false,
        created_at: "2019/05/05",
        updated_at: "2019/05/05",
    },
    {
        id: 16,
        product_name: "Wool dress",
        image_product: "product-16",
        description: "The womens dress is made of wool blend and polyester. The wool dress has a gray polyester lining. The winter dress has no pockets. The gray wool dress is closed by side zipper.",
        product_type_id: 3,
        brand_id: 3,
        total_product: 180,
        active_sale: false,
        created_at: "2019/05/05",
        updated_at: "2019/05/05",
    },
    {
        id: 17,
        product_name: "Oversize Women is maxi Dress",
        image_product: "product-17",
        description: "This unique dress is breathable and soft. We specially wash each dress after Hand-sewing, does not shrink anymore. So it has a relaxed texture and a beautiful drape.",
        product_type_id: 2,
        brand_id: 3,
        total_product: 14,
        active_sale: false,
        created_at: "2019/05/05",
        updated_at: "2019/05/05",
    },
    {
        id: 18,
        product_name: "Anysize three-quarter sleeved version",
        image_product: "product-18",
        description: "Anysize three-quarter sleeved version with sides pockets soft linen&cotton loose dress Spring Summer maxi dress plus size dress F140A.",
        product_type_id: 2,
        brand_id: 3,
        total_product: 87,
        active_sale: false,
        created_at: "2019/05/05",
        updated_at: "2019/05/05",
    },
    {
        id: 19,
        product_name: "Linen dress",
        image_product: "product-19",
        description: "Smart casual Aesthetics. this flattering dress can be worn in many occassion. Smart enough for business occassion, and also comfortable enough for casual events.",
        product_type_id: 2,
        brand_id: 3,
        total_product: 90,
        active_sale: false,
        created_at: "2019/05/05",
        updated_at: "2019/05/05",
    },
    {
        id: 20,
        product_name: "Green infinity dress",
        image_product: "product-20",
        description: "Find your personal favorite wrap style, or try them all, wearing it again and again, each time as a new dress! The dress has a half circle skirt and is made in a soft and lustrous, semi-matte satin jersey and is available in a wide variety of colors.",
        product_type_id: 2,
        brand_id: 3,
        total_product: 250,
        active_sale: false,
        created_at: "2019/05/05",
        updated_at: "2019/05/05",
    },
    {
        id: 21,
        product_name: "Camel velvet dress with silk shirt",
        image_product: "product-21",
        description: "Velvet wrap dress with a V-neck. Specially for this dress, we made a silk elongated camisole on adjustable straps. All our clothes are made to order, so please allow 3 - 5 working days for production.",
        product_type_id: 2,
        brand_id: 3,
        total_product: 30,
        active_sale: false,
        created_at: "2019/05/05",
        updated_at: "2019/05/05",
    },
    {
        id: 22,
        product_name: "Maxi dress Jersey dress Turquoise dress",
        image_product: "product-22",
        description: "Luxurious long dress for romantic walks and festivities. Skirt to the bottom strongly flared. Three quarter sleeve. Round neckline and a deep, complementing the image of sexuality.",
        product_type_id: 2,
        brand_id: 3,
        total_product: 10,
        active_sale: false,
        created_at: "2019/05/05",
        updated_at: "2019/05/05",
    },
    {
        id: 23,
        product_name: "Hight Low Wedding Skirt",
        image_product: "product-23",
        description: "High waisted pleaded Mikado wedding skirt with cascading high-low hem and size pockets.",
        product_type_id: 2,
        brand_id: 3,
        total_product: 50,
        active_sale: false,
        created_at: "2019/05/05",
        updated_at: "2019/05/05",
    },
    {
        id: 24,
        product_name: "Boho Wedding Dress",
        image_product: "product-24",
        description: "Boho Wedding Dress, Silk Wedding Dress, Casual Wedding Dress. When You dress LeMuse You feel beautiful and cozy. LeMuse hides all imperfections and makes You perfect.",
        product_type_id: 2,
        brand_id: 3,
        total_product: 300,
        active_sale: false,
        created_at: "2019/05/05",
        updated_at: "2019/05/05",
    },
]

export default products;