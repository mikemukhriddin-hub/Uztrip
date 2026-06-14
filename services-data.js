const SERVICES_DATA = {
  1: {
    id: 1,
    title: "Registan Square Tour",
    titleUz: "Registon maydoni sayohati",
    category: "tours",
    categoryUz: "Turlar va Ekskursiyalar",
    videoSrc: "video/samarkand.mp4",
    imageSrc: "https://uzbek-trip.vercel.app/images/locations/registan.webp",
    features: [
      "Uchta muhtasham madrasa bo'ylab ekskursiya",
      "Professional tarixchi gid hamrohligi",
      "Eski shahar bo'ylab piyoda sayr",
      "Samarqand me'morchiligi tarixi va sirlari"
    ],
    longDescription: "Uchta muhtasham madrasadan (Ulug'bek, Sherdor va Tillakori) iborat qadimiy Samarqandning yuragi Registon maydoni bo'ylab professional sayohat. Gid hamrohligida har bir madrasaning tarixi, kashfiyotlari va bu me'moriy durdonaning yashirin sirlari bilan yaqindan tanishasiz.",
    providers: [
      { name: "Alisher Gid (Samarqand)", avatar: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=150&h=150&q=80", rating: 4.9, completedOrders: 450, experience: "12 yil" }
    ],
    pricing: [
      { name: "Guruhli ekskursiya", price: "70,000 UZS", features: ["Guruh tarkibida sayr", "Gid xizmati", "Kirish chiptalari kiritilmagan"] },
      { name: "Shaxsiy gid", price: "250,000 UZS", features: ["Faqat siz uchun shaxsiy gid", "Tillakori madrasasida choyxo'rlik", "Kirish chiptasi kiritilgan"] }
    ],
    faqs: [
      { question: "Tur necha soat davom etadi?", answer: "Ekskursiya taxminan 2 soat davom etadi." },
      { question: "Kirish chiptasi narxi qancha?", answer: "Xorijiy sayyohlar uchun chipta narxi taxminan $4.50 (55,000 UZS) atrofida." }
    ],
    reviews: [
      { author: "Zafar Omonov", rating: 5, date: "2026-05-20", comment: "Registon maydoni kechki chiroqlar yoqilganda judayam sehrli ko'rinadi. Gid Alisherga rahmat!" }
    ]
  },
  2: {
    id: 2,
    title: "Gur-e-Amir Mausoleum Tour",
    titleUz: "Go'ri Amir maqbarasi sayohati",
    category: "tours",
    categoryUz: "Turlar va Ekskursiyalar",
    videoSrc: "video/samarkand.mp4",
    imageSrc: "https://uzbek-trip.vercel.app/images/locations/gureamir.webp",
    features: [
      "Buyuk sarkarda Amir Temur maqbarasi ziyorati",
      "Temuriylar tarixi bo'ylab chuqur suhbat",
      "Noyob feruza gumbaz me'morchiligi tahlili",
      "Maqbara ichki tilla bezaklarini tomosha qilish"
    ],
    longDescription: "Buyuk sarkarda va hukmdor Amir Temur (Tamerlan) ning so'nggi qo'nim topgan joyi, me'moriy durdona hisoblanuvchi Go'ri Amir maqbarasi bo'ylab ekskursiya. Bu yerda siz buyuk imperiya asoschisi va uning avlodlari, jumladan Mirzo Ulug'bek hayoti haqidagi hayratlanarli faktlarni bilib olasiz.",
    providers: [
      { name: "Lola Gid (Samarqand)", avatar: "https://images.unsplash.com/photo-1594824813573-246434de83fb?auto=format&fit=crop&w=150&h=150&q=80", rating: 4.8, completedOrders: 320, experience: "8 yil" }
    ],
    pricing: [
      { name: "Standart Shaxsiy", price: "180,000 UZS", features: ["Shaxsiy gid hamrohligi", "1.5 soatlik ekskursiya", "Kirish chiptalari kiritilgan"] }
    ],
    faqs: [
      { question: "Fotografiya uchun ruxsat bormi?", answer: "Ha, maqbara ichida fotosuratga olish bepul, ammo chiroqsiz (flash) suratga olish tavsiya etiladi." }
    ],
    reviews: [
      { author: "Sardor Ahmedov", rating: 5, date: "2026-06-01", comment: "Ichkaridagi tillarang bezaklar va naqshlar kishini lol qoldiradi. Albatta borish kerak bo'lgan joy." }
    ]
  },
  3: {
    id: 3,
    title: "Shah-i-Zinda Tour",
    titleUz: "Shohi Zinda majmuasi sayohati",
    category: "tours",
    categoryUz: "Turlar va Ekskursiyalar",
    videoSrc: "video/samarkand.mp4",
    imageSrc: "https://uzbek-trip.vercel.app/images/locations/shahizinda.webp",
    features: [
      "Moviy va firuza rangli maqbaralar xiyoboni",
      "Qusam ibn Abbos maqbarasi ziyorati",
      "O'rta asrlar koshin va kafel san'ati tanishuvi",
      "Eng chiroyli fotosuratlar uchun lokatsiya"
    ],
    longDescription: "Moviy va feruza gumbazli maqbaralardan iborat hayratlanarli Shohi Zinda ziyoratgohi va me'moriy majmuasi bo'ylab ekskursiya. Ushbu qadimiy yo'lak bo'ylab yurib, o'rta asrlarning eng nafis va takrorlanmas koshin bezaklarini ko'rasiz hamda uning muqaddas tarixi bilan tanishasiz.",
    providers: [
      { name: "Bahodir Tarixchi", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80", rating: 4.9, completedOrders: 280, experience: "15 yil" }
    ],
    pricing: [
      { name: "Piyoda ekskursiya", price: "90,000 UZS", features: ["Guruhli sayr", "Professional gid", "Tarixiy ma'lumotlar"] },
      { name: "Premium Shaxsiy", price: "220,000 UZS", features: ["Shaxsiy gid bilan 1.5 soatlik ekskursiya", "Kirish chiptasi kiritilgan", "Maxsus suratga tushish joylari tavsiyasi"] }
    ],
    faqs: [
      { question: "Ziyoratgohda kiyinish qoidalari bormi?", answer: "Ha, yopiq kiyimda bo'lish va ayollar uchun ro'mol o'rash tavsiya etiladi." }
    ],
    reviews: [
      { author: "Madina Bekova", rating: 5, date: "2026-05-28", comment: "Moviy koshinlar shunchalik chiroyli tiklanganki, o'zingizni ertaklar olamida his qilasiz." }
    ]
  },
  4: {
    id: 4,
    title: "Bibi-Khanym Mosque Tour",
    titleUz: "Bibi Xonim masjidi sayohati",
    category: "tours",
    categoryUz: "Turlar va Ekskursiyalar",
    videoSrc: "video/samarkand.mp4",
    imageSrc: "https://uzbek-trip.vercel.app/images/locations/bibikhanym.webp",
    features: [
      "Amir Temurning ulkan masjidi bo'ylab tur",
      "Afsonaviy tosh lavh (Qur'on tagligi) tarixi",
      "XV asr me'morchiligi va muhandislik sirlari",
      "Siyob bozori bilan yonma-yon joylashuv"
    ],
    longDescription: "Amir Temurning sevimli rafiqasi sharafiga qurilgan, o'z davrida Sharqning eng yirik va mahobatli masjidlaridan biri bo'lgan Bibi Xonim masjidi bo'ylab ekskursiya. Ulkan peshtoqlar, marmar o'ymakorliklari va masjid hovlisidagi ulkan tosh Qur'on tagligi tarixi sizni hayratda qoldirishi aniq.",
    providers: [
      { name: "Alisher Gid (Samarqand)", avatar: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=150&h=150&q=80", rating: 4.9, completedOrders: 450, experience: "12 yil" }
    ],
    pricing: [
      { name: "Ekskursiya va chipta", price: "120,000 UZS", features: ["1 soatlik ekskursiya", "Kirish chiptasi kiritilgan", "Siyob bozori bo'ylab qisqa sayohat"] }
    ],
    faqs: [
      { question: "Masjid hozirda faolmi?", answer: "Yo'q, masjid hozirda tarixiy muzey-yodgorlik sifatida faoliyat yuritadi." }
    ],
    reviews: [
      { author: "John Doe", rating: 5, date: "2026-05-24", comment: "Great mosque with a fantastic history. The giant stone Koran stand in the courtyard is massive!" }
    ]
  },
  5: {
    id: 5,
    title: "Ulughbeg Observatory Tour",
    titleUz: "Ulug'bek rasadxonasi sayohati",
    category: "tours",
    categoryUz: "Turlar va Ekskursiyalar",
    videoSrc: "video/samarkand.mp4",
    imageSrc: "https://uzbek-trip.vercel.app/images/locations/ulughbeg.webp",
    features: [
      "Qadimiy sekstant (osmon o'lchov asbobi) qoldig'i",
      "Mirzo Ulug'bek muzeyi bo'ylab ekskursiya",
      "Astronomiya tarixi va o'rta asrlar fani",
      "Yulduzlar jadvali (Ziji Ko'ragoniy) haqida ma'lumot"
    ],
    longDescription: "1420-yilda buyuk astronom va hukmdor Mirzo Ulug'bek tomonidan qurilgan ushbu rasadxona islom dunyosining eng buyuk fan maskanlaridan biri bo'lgan. Ushbu tur davomida siz tepalikdagi ulkan sekstant qurilmasini ko'rasiz va Ulug'bekning 1018 ta yulduz koordinatasini qanday qilib aniq hisoblaganiga guvoh bo'lasiz.",
    providers: [
      { name: "Bahodir Tarixchi", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80", rating: 4.9, completedOrders: 280, experience: "15 yil" }
    ],
    pricing: [
      { name: "Tarixiy tur", price: "100,000 UZS", features: ["Kirish chiptasi kiritilgan", "1 soatlik gid maslahati va ekskursiya", "Muzey eksponatlari tushuntirilishi"] }
    ],
    faqs: [
      { question: "Rasadxona shahar markazidan uzoqdami?", answer: "Ha, u shahar chetrog'idagi Cho'ponota tepaligida joylashgan bo'lib, taksida 10-15 daqiqa vaqt ketadi." }
    ],
    reviews: [
      { author: "Hasan Alimov", rating: 5, date: "2026-05-30", comment: "O'rta asrlarda shunday aniq astronomik hisob-kitoblar qilinganiga ishonish qiyin. Juda qiziqarli muzey." }
    ]
  },
  6: {
    id: 6,
    title: "Urgut Mountain Bazaar & Hills",
    titleUz: "Urgut tog' bozori va adirlari sarguzashti",
    category: "activities",
    categoryUz: "Faoliyatlar va Sarguzashtlar",
    videoSrc: "video/zaamin.mp4",
    imageSrc: "https://lurgyauxaiqcnbotpiie.supabase.co/storage/v1/object/public/location-images/locations/1781359615231_w1x5i1xbauf.jpg",
    features: [
      "Urgut bozorida an'anaviy so'zanalar va kiyimlar xaridi",
      "Tog' adirlari bo'ylab yengil trekking sayohati",
      "Mahalliy tog' odamlari hayoti va urf-odatlari",
      "Tog' manzarali milliy choyxonada tushlik"
    ],
    longDescription: "Samarqand yaqinidagi eng katta an'anaviy bozorlardan biri - Urgut bozoriga sayohat va tog' adirlari bo'ylab sarguzasht. Bozorda qadimiy kashtachilik mahsulotlari (so'zanalar), milliy zargarlik buyumlarini ko'rasiz, so'ngra toza tog' havosida adirlar bo'ylab sayr qilib tog' manzaralaridan bahramand bo'lasiz.",
    providers: [
      { name: "Rustam Haydovchi", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80", rating: 4.8, completedOrders: 310, experience: "9 yil" }
    ],
    pricing: [
      { name: "Komfort Shaxsiy", price: "550,000 UZS", features: ["Toshkent yoki Samarqanddan shaxsiy mashina (borish-qaytish)", "Urgut bozori va adirlari bo'yicha hamrohlik", "Milliy restoranda tushlik"] }
    ],
    faqs: [
      { question: "Urgut bozori haftaning qaysi kunlari ishlaydi?", answer: "Eng qizg'in savdo kunlari shanba va yakshanba kunlaridir." }
    ],
    reviews: [
      { author: "Sarah L.", rating: 5, date: "2026-05-01", comment: "Urgut market is amazing for authentic suzanis. The mountain air nearby was so fresh and clean." }
    ]
  },
  7: {
    id: 7,
    title: "Omonqoton Pass & Pines",
    titleUz: "Omonqo'ton dovoni va qarag'aylari turi",
    category: "activities",
    categoryUz: "Faoliyatlar va Sarguzashtlar",
    videoSrc: "video/zaamin.mp4",
    imageSrc: "https://lurgyauxaiqcnbotpiie.supabase.co/storage/v1/object/public/location-images/locations/1781359721535_wk956c5sf5.jpg",
    features: [
      "Qadimiy g'orlar va toza buloqlarga sayohat",
      "Muhtasham qarag'ayzorlar bo'ylab o'rmon trekkingi",
      "Dovondan ajoyib tog' panoramasi fotosuratlari",
      "Tog' sharoitida piknik qilish imkoniyati"
    ],
    longDescription: "Tabiat ishqibozlari uchun haqiqiy o'rmon va tog' trekkingi! Omonqo'ton dovoni o'zining qadimiy g'orlari, toza tog' buloqlari va muhtasham qarag'ayzorlari bilan mashhur. Ushbu faoliyat davomida siz tog' yo'llari bo'ylab piyoda sayr qilasiz va salqin o'rmon havosidan bahramand bo'lasiz.",
    providers: [
      { name: "Rustam Tog' Yo'l-boshchisi", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&h=150&q=80", rating: 4.8, completedOrders: 320, experience: "5 yil" }
    ],
    pricing: [
      { name: "Trekking paketi", price: "400,000 UZS", features: ["Samarqand shahrida kutib olish va eltib qo'yish", "Professional tog' instruktori", "Tog'da yengil piknik (mevalar, choy, sendvich)"] }
    ],
    faqs: [
      { question: "Tur qiyinlik darajasi qanday?", answer: "Yengil va o'rta darajada. Sog'lom va yurishga tayyor har qanday kishi qatnasha oladi." }
    ],
    reviews: [
      { author: "Nodira Axmedova", rating: 5, date: "2026-05-10", comment: "Go'zal manzaralar, yashillik va qarag'ay hidlari. Haqiqiy hordiq maskani!" }
    ]
  },
  8: {
    id: 8,
    title: "Konigil Paper Mill",
    titleUz: "Konigil qog'oz fabrikasi va hunarmandchilik darsi",
    category: "food",
    categoryUz: "Taomlar va Master-klasslar",
    videoSrc: "video/paper.mp4",
    imageSrc: "https://lurgyauxaiqcnbotpiie.supabase.co/storage/v1/object/public/location-images/locations/1781436461119_hgu2pge294e.webp",
    features: [
      "Qadimiy ipak qog'oz ishlab chiqarish ustaxonasi",
      "Suv tegirmoni va eko-qishloq ekskursiyasi",
      "Qog'oz tayyorlash jarayonida shaxsan ishtirok etish",
      "Xattotlik darsi va esdalik sovg'alari"
    ],
    longDescription: "Samarqand tut qog'ozini tayyorlashning qadimiy VIII asr an'analarini saqlab qolgan 'Meros' ustaxonasiga tashrif. Tinch va salqin eko-qishloqda suv tegirmoni yordamida tut po'stlog'ini maydalash, presslash va silliqlash jarayonlarini o'rganasiz hamda o'z qo'lingiz bilan ipak qog'oz yasaysiz.",
    providers: [
      { name: "Usta Muzaffar (Xattot)", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80", rating: 4.9, completedOrders: 310, experience: "18 yil" }
    ],
    pricing: [
      { name: "Ekskursiya va dars", price: "180,000 UZS", features: ["Kirish chiptasi", "Konigil qishlog'i bo'ylab ekskursiya", "Qog'oz yasash master-klassi", "Xattotlik darsi (ismini yozib berish)"] }
    ],
    faqs: [
      { question: "Qog'oz fabrikasi Samarqand markazidami?", answer: "Yo'q, u shahar chetidagi Siyob daryosi bo'yidagi Konigil hududida joylashgan. Avtomobilda 15 daqiqalik masofa." }
    ],
    reviews: [
      { author: "Shahzoda R.", rating: 5, date: "2026-05-12", comment: "Suv ovozi ostida ajoyib hunarni o'rgandik. Bolalar uchun ham juda tarbiyaviy ahamiyatga ega." }
    ]
  },
  9: {
    id: 9,
    title: "Eternal City Tour",
    titleUz: "Boqiy Shahar madaniy majmuasi ekskursiyasi",
    category: "tours",
    categoryUz: "Turlar va Ekskursiyalar",
    videoSrc: "video/samarkand.mp4",
    imageSrc: "https://lurgyauxaiqcnbotpiie.supabase.co/storage/v1/object/public/location-images/locations/1781435967000_wi3h9u7y8ne.jpg",
    features: [
      "Qadimiy Sharq shahri qiyofasi bo'ylab sayr",
      "Soplon, ipak va yog'och o'ymakorligi ustaxonalari",
      "O'zbek milliy me'morchiligi va hovlilari dizayni",
      "An'anaviy liboslar va kafe-restoranlar ko'rgazmasi"
    ],
    longDescription: "Samarqand Silk Road xalqaro turistik markazi tarkibidagi ajoyib etnografik majmua - 'Boqiy Shahar' bo'ylab ekskursiya. Bu yerda qadimiy O'zbekiston shaharlari muhiti, hunarmandlari, milliy gilam do'konlari, zargarlik buyumlari va tarixiy arxitektura elementlari uyg'unlashgan.",
    providers: [
      { name: "Lola Gid (Samarqand)", avatar: "https://images.unsplash.com/photo-1594824813573-246434de83fb?auto=format&fit=crop&w=150&h=150&q=80", rating: 4.8, completedOrders: 320, experience: "8 yil" }
    ],
    pricing: [
      { name: "Kechki ekskursiya", price: "150,000 UZS", features: ["Boqiy shahar bo'ylab 3 soatlik piyoda tur", "Hunarmandlar bilan uchrashuv", "Chipta xarajatlari kiritilgan"] }
    ],
    faqs: [
      { question: "Qaysi vaqtda borish yaxshiroq?", answer: "Kechki payt chiroqlar va chiroyli favvoralar yoqilganda borish eng yaxshi manzara beradi." }
    ],
    reviews: [
      { author: "Hasan Alimov", rating: 5, date: "2026-05-30", comment: "Boqiy shahar haqiqiy tarixiy ertakning o'zginasi. Milliy hunarmandlarga va ustaxonalariga gap yo'q." }
    ]
  },
  10: {
    id: 10,
    title: "Tashkent Magic City Entertainment",
    titleUz: "Toshkent Magic City dam olish turi",
    category: "activities",
    categoryUz: "Faoliyatlar va Sarguzashtlar",
    videoSrc: "video/itsupport.mp4",
    imageSrc: "https://lurgyauxaiqcnbotpiie.supabase.co/storage/v1/object/public/location-images/locations/1781437859197_3shyadkd0hs.jpg",
    features: [
      "Yevropa uslubidagi 'shahar ichidagi shahar' majmuasi",
      "Musiqiy va chiroyli favvoralar shousi",
      "Bolalar uchun attraksionlar va kinoteatr",
      "Premium kafe va do'konlar sayri"
    ],
    longDescription: "Toshkent shahrida joylashgan ulkan zamonaviy oilaviy ko'ngilochar bog' - Magic City bo'ylab ajoyib hordiq. Bu yerda siz ertaknamo qal'alar, chiroyli favvora shousi va premium ko'ngilochar xizmatlardan bahramand bo'lasiz.",
    providers: [
      { name: "Jahongir (Toshkent Haydovchisi)", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80", rating: 4.8, completedOrders: 540, experience: "6 yil" }
    ],
    pricing: [
      { name: "Magic City Tur", price: "250,000 UZS", features: ["Toshkent shahar markazidan transfer", "Magic City bo'ylab gid hamrohligi", "Akvariumga (Oceanarium) kirish chiptasi kiritilgan"] }
    ],
    faqs: [
      { question: "Bog'ga kirish pullikmi?", answer: "Magic City hududiga kirish mutlaqo bepul, lekin ichkaridagi attraksionlar, muzeylar va akvarium chiptalari pullik." }
    ],
    reviews: [
      { author: "Malika Rasulova", rating: 5, date: "2026-05-18", comment: "Kechki favvora shousi va chiroqlar ajoyib. Bolalar akvariumni ko'rib judayam quvonishdi." }
    ]
  },
  11: {
    id: 11,
    title: "National Plov Center Masterclass",
    titleUz: "Milliy palov markazi master-klassi va tushlik",
    category: "food",
    categoryUz: "Taomlar va Master-klasslar",
    videoSrc: "video/cooking.mp4",
    imageSrc: "https://lurgyauxaiqcnbotpiie.supabase.co/storage/v1/object/public/location-images/locations/1781436367591_dgjlmejj25h.jpg",
    features: [
      "Gigant qozonlarda Samarqand palovi pishishini tomosha qilish",
      "Palov tayyorlash ziravorlari va go'sht tanlash sirlari",
      "Usta oshpazdan palov damlash bo'yicha master-klass",
      "Samarqand palovi, salat va issiq non bilan tushlik"
    ],
    longDescription: "Samarqandning eng mashhur oshpazlari boshchiligida ulkan qozonlarda tayyorlanadigan haqiqiy zig'ir yog'li Samarqand palovini pishirish darsi va mazali milliy tushlik. Palovning sirli ziravorlari va qatlamli pishirish usuli bilan yaqindan tanishasiz.",
    providers: [
      { name: "Usta Oshpaz Baxtiyor aka", avatar: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=150&h=150&q=80", rating: 5, completedOrders: 890, experience: "25 yil" }
    ],
    pricing: [
      { name: "Palov va Tushlik", price: "120,000 UZS", features: ["1 soatlik oshxona turi va oshpaz suhbati", "Samarqand maxsus palovi porsiyasi", "Achchiq-chuchuk salati, suzma, non va choy"] }
    ],
    faqs: [
      { question: "Palov qachon tayyor bo'ladi?", answer: "Odatda eng mazali issiq palov 11:30 dan 14:00 gacha tayyor bo'ladi. Oldindan bron qilish tavsiya etiladi." }
    ],
    reviews: [
      { author: "Zafar Omonov", rating: 5, date: "2026-05-20", comment: "Men yegan eng mazali va o'ziga xos palov! Samarqandga kelgan odam albatta tatib ko'rishi shart." }
    ]
  },
  12: {
    id: 12,
    title: "Samarkand Bread Bakery Workshop",
    titleUz: "Samarqand nonvoyxonasi master-klassi",
    category: "food",
    categoryUz: "Taomlar va Master-klasslar",
    videoSrc: "video/cooking.mp4",
    imageSrc: "https://lurgyauxaiqcnbotpiie.supabase.co/storage/v1/object/public/location-images/locations/1781436260277_q4bf3g1ach.webp",
    features: [
      "Mashhur, og'ir va yaltiroq Samarqand noni sirlari",
      "Tandirni qizdirish va xamirni tayyorlash uslublari",
      "O'z qo'lingiz bilan tandirga non yopish amaliyoti",
      "Issiq nonni qaymoq va choy bilan tatib ko'rish"
    ],
    longDescription: "Haftalab qotmaydigan, afsonaviy Samarqand obi nonini an'anaviy tandirda pishirish sirlari. Ushbu amaliy master-klass davomida siz nonvoyxonaga kirib, non yuziga naqsh urishni va uni tandir devorlariga xavfsiz yopishtirishni usta nonvoy yordamida o'rganasiz.",
    providers: [
      { name: "Usta Oshpaz Baxtiyor aka", avatar: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=150&h=150&q=80", rating: 5, completedOrders: 890, experience: "25 yil" }
    ],
    pricing: [
      { name: "Nonvoy darsi", price: "90,000 UZS", features: ["Tandir va xamir darsi (45 daqiqa)", "2 ta yangi pishgan Samarqand nonini sovg'aga olish", "Qaymoq va issiq choy to'plami"] }
    ],
    faqs: [
      { question: "Nonlarni uyga olib ketsak bo'ladimi?", answer: "Albatta, Samarqand nonlari 1-2 haftagacha ajoyib qiyofasini va ta'mini yo'qotmaydi." }
    ],
    reviews: [
      { author: "Anna S.", rating: 5, date: "2026-05-25", comment: "Hot bread with fresh cream was out of this world! Making it myself made it taste even better." }
    ]
  },
  13: {
    id: 13,
    title: "Karimbek Restaurant Night",
    titleUz: "Karimbek restorani milliy kechasi",
    category: "food",
    categoryUz: "Taomlar va Master-klasslar",
    videoSrc: "video/cooking.mp4",
    imageSrc: "https://lurgyauxaiqcnbotpiie.supabase.co/storage/v1/object/public/location-images/locations/1781436047197_cn0us4kl04a.webp",
    features: [
      "Samarqandning mashhur va shinam 'Karimbek' restorani",
      "An'anaviy kaboblar, manti va sho'rvalar tushligi",
      "Jonli milliy va sharqona musiqa dasturi",
      "Tarixiy sharqona ichki dizayn va mehmondorchilik"
    ],
    longDescription: "Samarqand shahrining eng ko'zga ko'ringan va milliy mehmondorchilik ruhini aks ettiruvchi 'Karimbek' restoranida unutilmas kechki ovqat. Jonli musiqa, o'zbek milliy raqslari va eng mazali sharqona taomlar sizga haqiqiy dam olish kayfiyatini beradi.",
    providers: [
      { name: "Usta Oshpaz Baxtiyor aka", avatar: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=150&h=150&q=80", rating: 5, completedOrders: 890, experience: "25 yil" }
    ],
    pricing: [
      { name: "Kechki stollar bandligi", price: "150,000 UZS", features: ["Restoranda oldindan stol band qilish (VIP)", "Milliy taomlar to'plami (Kabob assorti, salatlar)", "Musiqiy shou-dastur uchun kirish"] }
    ],
    faqs: [
      { question: "Dastur necha soat davom etadi?", answer: "Kechki shou dasturi odatda 19:30 da boshlanib, 22:00 gacha davom etadi." }
    ],
    reviews: [
      { author: "Elyor Karimov", rating: 5, date: "2026-05-18", comment: "Musiqa, muhit va kaboblar juda mazali. Samarqandning eng yaxshi restorani." }
    ]
  },
  14: {
    id: 14,
    title: "Tashkent-Samarkand Afrosiyob VIP Transfer",
    titleUz: "Toshkent - Samarqand Afrosiyob VIP Transfer",
    category: "transport",
    categoryUz: "Transport va Transferlar",
    videoSrc: "video/train.mp4",
    imageSrc: "https://images.unsplash.com/photo-1541417904950-b855846fe074?auto=format&fit=crop&w=800&h=600&q=80",
    features: [
      "Toshkentdan Samarqandgacha 'Afrosiyob' tezyurar poyezdiga chipta",
      "VIP yoki Biznes klass qulay va keng o'rindiqlari",
      "Temir yo'l vokzali va mehmonxonagacha mashinada transfer",
      "Poyezd ichida bepul choy, kofe va yengil tamaddi"
    ],
    longDescription: "O'zbekistonning ikki yirik shahri orasida eng qulay va tezkor sayohat. 'Afrosiyob' tezyurar poyezdi chiptalari juda tez tugashini hisobga olib, biz sizga oldindan chipta sotib olishni kafolatlaymiz hamda Toshkentdagi uyingizdan vokzalga va Samarqandda vokzaldan mehmonxonagacha qulay Chevrolet Gentra/Captiva transportini taqdim etamiz.",
    providers: [
      { name: "Jahongir (Toshkent Haydovchisi)", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80", rating: 4.8, completedOrders: 540, experience: "6 yil" },
      { name: "Dilshod (Samarqand Haydovchisi)", avatar: "https://images.unsplash.com/photo-1628157582853-a796fa650a6a?auto=format&fit=crop&w=150&h=150&q=80", rating: 4.9, completedOrders: 420, experience: "8 yil" }
    ],
    pricing: [
      { name: "Biznes Klass Paket", price: "500,000 UZS", features: ["Afrosiyob poyezdi Biznes Klass chiptasi", "Toshkent va Samarqand vokzal transferlari (Gentra)", "Yengil tamaddi kiritilgan"] },
      { name: "VIP Klass Paket", price: "950,000 UZS", features: ["Afrosiyob poyezdi VIP Klass chiptasi (kengroq joy, monitorlar)", "Vokzal transferlari premium mashinada (Captiva/Kia)", "Poyezdda maxsus shirinlik va choy to'plami", "24/7 telefon yordami"] }
    ],
    faqs: [
      { question: "Poyezd necha soat yuradi?", answer: "Toshkentdan Samarqandgacha 'Afrosiyob' tezyurar poyezdi 2 soat-u 15 daqiqada yetib boradi." }
    ],
    reviews: [
      { author: "Michael B.", rating: 4.9, date: "2026-05-09", comment: "Excellent service. The train ride was smooth, and the drivers on both ends were very professional." }
    ]
  },
  15: {
    id: 15,
    title: "Tashkent Airport Transfer",
    titleUz: "Toshkent Aeroport-Mehmonxona Transferi",
    category: "transport",
    categoryUz: "Transport va Transferlar",
    videoSrc: "video/car.mp4",
    imageSrc: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=800&h=600&q=80",
    features: [
      "Islom Karimov nomidagi Toshkent xalqaro aeroportidan kutib olish",
      "Sizning ismingiz yozilgan maxsus tablichka bilan kutib olish",
      "Yuklarni joylashtirishga yordam va shinam salon",
      "Parvoz kechiksa ham kutish (bepul)"
    ],
    longDescription: "Toshkentga kelganingizda taksi izlab vaqt yo'qotmang va ortiqcha to'lov qilmang. Bizning professional va xushmuomala haydovchilarimiz sizni parvozingiz qo'ngan vaqtda aeroport chiqish eshigida ismingiz yozilgan lavha bilan kutib olishadi va to'g'ridan-to'g'ri mehmonxonangizga xavfsiz yetkazishadi.",
    providers: [
      { name: "Bobur Haydovchi", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&h=150&q=80", rating: 4.9, completedOrders: 920, experience: "7 yil" }
    ],
    pricing: [
      { name: "Standart Sedan", price: "90,000 UZS", features: ["Chevrolet Cobalt/Lacetti avtomobili", "3 tagacha o'rta o'lchamdagi yuk", "Kutish muddati: 1 soat (parvoz qo'ngandan keyin)"] },
      { name: "Komfort Gentra/Tracker", price: "150,000 UZS", features: ["Chevrolet Gentra yoki Chevrolet Tracker avtomobili", "Konditsioner, yumshoq o'rindiqlar", "Yuklarni joylashga yordam"] }
    ],
    faqs: [
      { question: "Parvozim kechiksa nima bo'ladi?", answer: "Biz sizning reysingizni onlayn kuzatib boramiz. Parvoz kechiksa ham, haydovchimiz poyezd yoki samolyot qo'ngan vaqtda aeroportda bo'ladi va hech qanday qo'shimcha to'lov olinmaydi." }
    ],
    reviews: [
      { author: "Anna S.", rating: 5, date: "2026-05-25", comment: "The driver was waiting for us with a sign despite a 2-hour flight delay. Clean car, safe driving. Perfect!" }
    ]
  }
};
