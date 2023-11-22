import React from 'react';
import Left from './Left';
import LeftTutor from './LeftTutor';
import Right from './Right';
import RightTutor from './RightTutor';
import { BrowserRouter, Route, Routes} from 'react-router-dom';


function Main(props) {
    const data = [
        {
            provinsi:'Aceh',
            makanan:
            [
                {
                    nama_makanan:'Sie Reuboh',
                    keterangan:'Sie reubôh adalah salah satu masakan yang berasal dari Aceh yang tergolong berbeda dari sebagian besar masakan lain. Sie reubôh dibuat dari rebusan daging sapi atau kerbau yang hanya dibumbui dengan bawang merah, bawang putih, cabai rawit, cabai merah dan merica, berbeda dari makanan khas dari Aceh lain yang berbumbu kuat dan mengandung banyak rempah-rempah. Semua bumbu tersebut dihaluskan lalu dimasukkan ke dalam rebusan daging. Daging rebus atau dalam bahasa Aceh disebut sie reuboh, bukan sekadar daging   yang direbus. Ini kuliner khas Kabupaten Aceh Besar yang diwariskan turun-temurun dan menjadi santapan wajib saat tiba Ramadhan',
                    foto:['Sie-Reuboh.jpg','Sie-Reuboh2.jpg',]
                },
                {
                    nama_makanan:'Mie Aceh',
                    keterangan:'Mi aceh adalah masakan mi pedas khas Aceh di Indonesia. Mi kuning tebal dengan irisan daging sapi, daging kambing atau makanan laut (udang dan cumi) disajikan dalam sup sejenis kari yang gurih dan pedas. Mi aceh biasanya ditaburi dengan bawang goreng dan disajikan bersama emping, potongan bawang merah, mentimun, dan jeruk nipis. Mi aceh biasanya disajikan dalam tiga bentuk yaitu mi kuah, mi goreng basah, dan mi goreng kering. Mi aceh menunjukkan sejarah budaya masyarakat Aceh dengan yang mendapat banyak pengaruh budaya asing yang membentuk wilayah Aceh',
                    foto:['mie aceh.jpg','mie aceh2.jpg']
                },
                {
                    nama_makanan:'Kuah Pliek U',
                    keterangan:'Kuah pliek u adalah salah satu masakan seperti gulai berasal dari Aceh. Masakan ini memiliki bahan dasar ampas dari sisa minyak kelapa tua yang telah melalui proses pemerasan minyaknya. Pada umumnya, masakan ini dilengkapkan dengan daun dan buah melinjo, kacang panjang, kacang tanah, daun pepaya, daun singkong, rebung kecombrang,; kadang kala disajikan dengan chu (sejenis siput yang hidup di sungai). Dalam praktiknya, masyarakat Aceh juga menambahkan sayuran lain untuk masakan ini seperti kacang panjang, pepaya muda dan nangka muda. Selain itu untuk menguatkan rasa, asam sunti (belimbing wuluh yang dikeringkan setelah dikukus bersama garam) ditambahkan pula sebagai bumbu khasnya',
                    foto:['kuah pliek.jpg','kuah pliek2.jpg']
                }
            ]
        },
        {
            provinsi:'Bali',
            makanan:
            [
                {
                    nama_makanan:'Babi Guling',
                    keterangan:'Babi Guling adalah hidangan babi panggang utama di Bali. Babi utuh disuntik dengan rempah-rempah dan kemudian dipanggang hingga kulitnya renyah dan dagingnya lembut. Hidangan ini disajikan dengan nasi putih, sate babi, sayuran tumis, dan sambal.',
                    foto:['Babi Guling.jpg','Babi Guling-1.jpg']
                },
                {
                    nama_makanan:'Ayam Betutu',
                    keterangan:'Ayam Betutu adalah hidangan ayam yang dimasak dengan rempah-rempah khas Bali. Ayam utuh dimasak dalam bumbu rempah-rempah seperti serai, daun jeruk, dan kemiri yang dibungkus dalam daun pisang, kemudian dipanggang atau direbus dalam waktu yang lama',
                    foto:['ayam betutu.jpg','Ayam Betutu-1.jpeg']
                },
                {
                    nama_makanan:'Sate Lilit',
                    keterangan:'Sate Lilit adalah sate khas Bali yang terbuat dari daging cincang (biasanya ikan, daging babi, atau ayam) yang dibumbui dengan rempah-rempah seperti serai, kemiri, dan bawang merah. Daging yang sudah dibumbui kemudian dibalut pada tusuk sate dari batang serai atau bambu.',
                    foto:['Sate lilit.jpeg','Sate Lilit-1.webp']
                }
            ]
        },
        {
            provinsi:'Banten',
            makanan:
            [
                {
                    nama_makanan:'Sate Bandeng',
                    keterangan:'Sate Bandeng adalah hidangan yang terbuat dari daging ikan bandeng yang dipotong kecil-kecil, ditusuk pada tusuk sate, kemudian dibakar atau dipanggang. Sate Bandeng biasanya disajikan dengan bumbu kacang dan irisan lontong. Hidangan ini memiliki rasa gurih dan lezat.',
                    foto:['Sate Bandeng.jpg','Sate Bandeng-1.jpg']
                },
                {
                    nama_makanan:'Peuyeum',
                    keterangan:'Peuyeum adalah makanan tradisional yang terbuat dari fermentasi tape singkong. Tape singkong tersebut memiliki tekstur kenyal dan rasa manis. Peuyeum sering dijadikan sebagai makanan ringan atau digunakan sebagai bahan dalam pembuatan makanan lain seperti kue.',
                    foto:['Peuyeum.jpg','Peuyeum-1.jpg']
                },
                {
                    nama_makanan:'Empal Gentong',
                    keterangan:'Empal Gentong adalah hidangan daging sapi yang dimasak dengan bumbu rempah seperti cabai, kunyit, jahe, dan bawang putih. Daging sapi yang dimasak tersebut memiliki tekstur empuk dan bumbu yang meresap. Empal Gentong biasanya disajikan dengan nasi putih dan kerupuk.',
                    foto:['Empal gentong.jpg','Empal Gentong-1.jpg']
                }
            ]
        },
        {
            provinsi:'Bengkulu',
            makanan:
            [
                {
                    nama_makanan:'Pempek Belido',
                    keterangan:'Pempek Belido adalah makanan khas Bengkulu yang mirip dengan pempek Palembang. Pempek Belido terbuat dari adonan ikan yang digiling halus dan dicampur dengan tepung sagu. Hidangan ini memiliki tekstur yang kenyal dan rasanya gurih. Pempek Belido disajikan dengan kuah cuka yang khas Bengkulu, yang memiliki rasa asam dan pedas yang menyegarkan.',
                    foto:['Pempek Belido.jpg','Pempek Belido-1.jpg']
                },
                {
                    nama_makanan:'Mie Celor',
                    keterangan:'Mie Celor adalah hidangan mie khas Bengkulu yang terdiri dari mie kuning yang dimasak dengan kuah santan yang kental. Mie Celor biasanya disajikan dengan irisan telur rebus, irisan daging udang, tauge, dan ditaburi dengan bawang goreng. Kuah santan pada Mie Celor memiliki rasa gurih dan lezat.',
                    foto:['mie celor.jpg','Mie celor-1.jpeg']
                },
                {
                    nama_makanan:'Kerupuk Kemplang',
                    keterangan:'Kerupuk Kemplang adalah makanan ringan yang populer di daerah Bengkulu, Indonesia. Kerupuk ini terbuat dari bahan dasar tepung tapioka yang dicetak dan dipanggang hingga mengembang. Proses pembuatannya melibatkan beberapa tahap, mulai dari membuat adonan tepung tapioka dengan air dan garam, mencetak adonan menjadi bentuk kerupuk dengan menggunakan cetakan khas, dan kemudian mengeringkannya dengan cara dipanggang.',
                    foto:['Kerupuk Kemplang.jpeg','Kerupuk Kemplang-1.png']
                }
            ]
        },
        {
            provinsi:'Bangka Belitung',
            makanan:
            [
                {
                    nama_makanan:'Mie Belitung',
                    keterangan:'Mie Belitung adalah hidangan mie khas Pulau Belitung. Mie ini terbuat dari tepung terigu dan kuning telur yang digulung tipis dan panjang. Mie Belitung biasanya disajikan dengan kuah bening yang kaya rempah dan bumbu, serta dilengkapi dengan irisan daging ayam, udang, atau babi, serta ditambahkan telur rebus dan daun bawang sebagai pelengkap.',
                    foto:['Mie Belitung.jpeg','Mie Belitung-1.jpg']
                },
                {
                    nama_makanan:'Lempah Kuning',
                    keterangan:'Lempah Kuning adalah hidangan ikan yang khas dari Bangka Belitung. Ikan, biasanya ikan kakap atau ikan tenggiri, dimasak dalam kuah kuning yang terbuat dari campuran kunyit, asam kandis, lengkuas, daun kunyit, cabai, dan bawang merah. Lempah Kuning memiliki rasa gurih dan sedikit asam, sangat lezat disantap dengan nasi hangat.',
                    foto:['Lempah Kuning.jpg','Lempah Kuning-1.jpg']
                },
                {
                    nama_makanan:'Gangan',
                    keterangan:'Gangan adalah hidangan sayur yang populer di Bangka Belitung. Sayuran seperti labu siam, nangka muda, daun singkong, dan terong dimasak dengan santan dan bumbu-bumbu seperti cabai, kunyit, dan bawang merah. Gangan biasanya disajikan dengan nasi putih, ikan asin, dan sambal terasi.',
                    foto:['Gangan.jpg','Gangan-1.jpg']
                }
            ]
        },
        {
            provinsi:'DKI Jakarta',
            makanan:
            [
                {
                    nama_makanan:'Soto Betawi',
                    keterangan:'Soto Betawi adalah sup daging sapi khas Jakarta. Kuahnya yang gurih disajikan dengan potongan daging sapi, kentang, tomat, dan bawang goreng. Soto Betawi biasanya disajikan dengan nasi, emping, dan kerupuk. Makanan ini sangat populer di Jakarta dan sering dijadikan menu sarapan atau makan siang.',
                    foto:['Soto Betawi.jpg','Soto Betawi-1.jpg']
                },
                {
                    nama_makanan:'Ketoprak',
                    keterangan:'Ketoprak adalah makanan khas Jakarta yang terdiri dari lontong (nasi ketupat), tahu, bihun, mentimun, dan tauge yang disiram dengan bumbu kacang yang kaya rasa. Ketoprak biasanya ditaburi dengan kerupuk dan disajikan dengan tambahan petis (saus terasi). Rasanya yang khas membuat Ketoprak menjadi makanan favorit banyak orang di Jakarta',
                    foto:['Ketoprak.jpg','Ketoprak-1.jpg']
                },
                {
                    nama_makanan:'Gado Gado',
                    keterangan:'Gado-gado adalah hidangan salad sayur dengan bumbu kacang yang populer di seluruh Indonesia, termasuk di Jakarta. Gado-gado terdiri dari berbagai jenis sayuran, seperti kubis, mentimun, tauge, dan kangkung, yang disiram dengan bumbu kacang yang kental. Biasanya disajikan dengan lontong atau ketupat, dan kadang-kadang ditambahkan dengan potongan tahu dan tempe.',
                    foto:['gado gado.jpg','Gado gado-1.jpg']
                }
            ]
        },
        {
            provinsi:'Gorontalo',
            makanan:
            [
                {
                    nama_makanan:'Sate Maranggi',
                    keterangan:'Sate Marangi adalah makanan khas Gorontalo yang terbuat dari daging sapi yang diiris tipis dan ditusuk dengan bambu lalu dibakar. Sate ini memiliki rasa yang kaya dan dihidangkan dengan bumbu kacang yang lezat.',
                    foto:['Sate maranggi.jpg','Sate maranggi-1.jpg']
                },
                {
                    nama_makanan:'Nasi Jaha',
                    keterangan:'Nasi Jaha adalah hidangan nasi khas Gorontalo yang terbuat dari beras ketan hitam. Nasi ini dimasak dengan cara tradisional menggunakan tungku dan daun pisang sebagai wadahnya. Nasi Jaha memiliki tekstur lembut dan aroma yang khas.',
                    foto:['Nasi jaha.jpg','Nasi jaha-1.jpg']
                },
                {
                    nama_makanan:'Cakalang Pampis',
                    keterangan:'Cakalang Pampis adalah hidangan ikan asap yang terbuat dari ikan Cakalang (skipjack tuna) yang diasap dan digoreng kering. Hidangan ini memiliki tekstur renyah dan sering disajikan dengan nasi dan sambal.',
                    foto:['cakalang pampis.jpg','cakalang pampis-1.jpg']
                }
            ]
        },
        {
            provinsi:'Jambi',
            makanan:
            [
                {
                    nama_makanan:'Gulai Tempoyak',
                    keterangan:'Gulai Tempoyak adalah hidangan gulai khas Jambi yang menggunakan bahan dasar durian masak yang diolah menjadi tempoyak. Tempoyak adalah hasil fermentasi durian yang memiliki rasa asam dan khas. Dalam gulai ini, tempoyak dimasak bersama dengan daging, ikan, atau sayuran, serta bumbu rempah-rempah seperti kunyit, serai, cabai, dan daun jeruk.',
                    foto:['Gulai Tempoyak.png','Gulai Tempoyak-1.jpg']
                },
                {
                    nama_makanan:'Pindang Ikan Patin',
                    keterangan:'Jambi terkenal dengan ikan patin, dan pindang ikan patin adalah hidangan khas yang populer di daerah ini. Ikan patin dimasak dalam kuah pindang yang terbuat dari campuran bumbu rempah seperti kunyit, jahe, bawang putih, daun salam, serta asam jawa untuk memberikan cita rasa asam yang khas. Pindang ikan patin biasanya disajikan dengan nasi dan sambal.',
                    foto:['Pindang Ikan Patin.jpg','Pindang Ikan Patin-1.jpg']
                },
                {
                    nama_makanan:'Lempah Kulat Pelawan',
                    keterangan:'Lempah Kulat Pelawan adalah hidangan tradisional Jambi yang menggunakan bahan dasar jamur kulat Pelawan. Kulat Pelawan adalah jenis jamur yang tumbuh liar di hutan Jambi. Dalam hidangan ini, kulat Pelawan direbus dengan santan dan bumbu rempah-rempah seperti serai, lengkuas, dan daun salam. Hidangan ini memiliki rasa gurih dan sedikit pedas.',
                    foto:['Lempah kulat pelawan.jpg','Lempah kulat pelawan-1.jpg']
                }
            ]
        },
        {
            provinsi:'Jawa Barat',
            makanan:
            [
                {
                    nama_makanan:'Nasi Timbel',
                    keterangan:'Nasi timbel adalah hidangan nasi yang dibungkus dalam daun pisang. Biasanya disajikan dengan lauk pauk seperti ikan bakar, ayam goreng, tempe goreng, dan sambal. Nasi timbel memiliki aroma khas dari daun pisang yang memberikan cita rasa yang lezat.',
                    foto:['Nasi Timbel.jpg','Nasi Timbel-1.jpg']
                },
                {
                    nama_makanan:'Batagor',
                    keterangan:'Batagor merupakan singkatan dari bakso tahu goreng, yang terdiri dari bola-bola bakso ikan yang digoreng, disajikan dengan tahu goreng, dan dituangi dengan saus kacang dan kecap. Batagor sering dijadikan sebagai makanan jajanan atau camilan di Jawa Barat.',
                    foto:['Batagor.jpg','Batagor-1.jpg']
                },
                {
                    nama_makanan:'Surabi',
                    keterangan:'Surabi adalah sejenis pancake atau kue dadar yang terbuat dari adonan tepung beras dan kelapa parut. Surabi memiliki tekstur yang lembut dan gurih. Biasanya disajikan dengan taburan kelapa parut dan ditambahkan gula merah cair.',
                    foto:['Surabi.jpg','Surabi-1.jpg']
                }
            ]
        },
        {
            provinsi:'Jawa Tengah',
            makanan:
            [
                {
                    nama_makanan:'Nasi Gudeg',
                    keterangan:'Makanan khas Yogyakarta yang terdiri dari nasi yang dimasak dengan kelapa dan gudeg (olahan nangka muda yang dimasak dengan gula kelapa dan rempah). Biasanya disajikan dengan ayam kampung, telur, tahu, tempe, dan sambal krecek.',
                    foto:['Nasi gudeg.jpeg','Nasi gudeg-1.jpg']
                },
                {
                    nama_makanan:'Soto Kudus',
                    keterangan:'Soto yang berasal dari Kudus, Jawa Tengah. Kuah kaldu ayam yang kaya rempah dengan tambahan daging ayam, telur, tauge, dan daun seledri. Soto Kudus juga biasanya disajikan dengan nasi atau lontong.',
                    foto:['Soto kudus.jpg','Soto kudus-1.jpg']
                },
                {
                    nama_makanan:'Nasi Liwet',
                    keterangan:'Nasi yang dimasak dengan santan, serai, daun salam, dan rempah-rempah, seperti bawang merah, bawang putih, dan kunyit. Nasi liwet biasanya disajikan dengan lauk seperti ayam goreng, ikan asin, tahu, tempe, dan sambal.',
                    foto:['Nasi liwet.jpg','Nasi liwet-1.jpg']
                }
            ]
        },
        {
            provinsi:'Jawa Timur',
            makanan:
            [
                {
                    nama_makanan:'Rawon',
                    keterangan:'Rawon adalah sup daging berkuah hitam yang terbuat dari bumbu kluwek yang khas. Biasanya disajikan dengan potongan daging sapi, tauge, dan emping. Rasanya gurih dan kaya rempah.',
                    foto:['Rawon.jpg','Rawon-1.jpg']
                },
                {
                    nama_makanan:'Rujak Cingur',
                    keterangan:'Rujak Cingur adalah campuran buah-buahan segar seperti timun, mangga, dan nanas dengan tambahan cingur, yaitu irisan mulut dan hidung sapi yang direbus. Disajikan dengan saus petis khas Jawa Timur, rujak cingur memiliki perpaduan rasa asam, pedas, dan gurih yang lezat.',
                    foto:['Rujak Cingur.jpg','Rujak cingur-1.jpg']
                },
                {
                    nama_makanan:'Tahu Campur',
                    keterangan:'Tahu Campur adalah hidangan berupa tahu goreng yang diiris tipis-tipis dan dicampur dengan taoge, irisan mentimun, telur rebus, dan mie. Disajikan dengan kuah kacang yang kental dan ditaburi bawang goreng, tahu campur memiliki rasa yang gurih dan segar.',
                    foto:['Tahu Campur.jpg','Tahu Campur-1.jpg']
                }
            ]
        },
        {
            provinsi:'Kepulauan Riau',
            makanan:
            [
                {
                    nama_makanan:'lontong Melayu',
                    keterangan:'Lontong Melayu adalah hidangan nasi ketupat yang terbuat dari beras yang dikukus dalam daun pisang. Lontong Melayu biasanya disajikan dengan kuah kari yang kaya rempah-rempah dan santan. Hidangan ini sering disertai dengan berbagai lauk seperti rendang, sambal goreng, telur pindang, dan urap.',
                    foto:['Lontong melayu.jpg','Lontong Melayu-1.jpg']
                },
                {
                    nama_makanan:'Ketupat Sotong',
                    keterangan:'Ketupat Sotong adalah hidangan khas Kepulauan Riau yang terdiri dari ketupat yang dibungkus dalam sotong atau cumi-cumi yang direbus. Hidangan ini memiliki rasa yang lezat karena bumbu rempah seperti kunyit, lengkuas, serai, dan daun pandan yang digunakan saat merebusnya. Ketupat Sotong biasanya disajikan dengan kuah santan dan saus sambal',
                    foto:['Ketupat Sotong.jpg','Ketupat sotong-1.jpg']
                },
                {
                    nama_makanan:'Kerang Rebus',
                    keterangan:'Kerang Rebus adalah hidangan populer di Kepulauan Riau yang terdiri dari kerang yang direbus dengan bumbu-bumbu rempah dan garam. Kerang yang dimasak memiliki rasa gurih dan tekstur kenyal. Kerang Rebus biasanya disajikan dengan saus sambal atau cuka sebagai tambahan rasa',
                    foto:['Kerang rebus.jpg','Kerang Rebus-1.jpg']
                }
            ]
        },
        {
            provinsi:'Kalimantan Barat',
            makanan:
            [
                {
                    nama_makanan:'Soto Banjar',
                    keterangan:'Soto Banjar adalah hidangan sup tradisional yang terkenal di Kalimantan Barat. Ini adalah sup daging yang kaya dengan rempah-rempah seperti serai, lengkuas, dan daun jeruk. Soto Banjar disajikan dengan nasi, potongan daging sapi, suwiran ayam, dan ditaburi bawang goreng serta daun seledri.',
                    foto:['Soto banjar.jpg','Soto banjar-1.jpg']
                },
                {
                    nama_makanan:'Ampiang Dadiah',
                    keterangan:'Ampiang Dadiah adalah makanan penutup khas Kalimantan Barat. Ini adalah sejenis makanan penutup berbasis susu fermentasi dengan tekstur lembut yang mirip dengan yogurt. Rasanya segar, manis, dan sedikit asam. Ampiang Dadiah biasanya disajikan dengan taburan kelapa parut dan sirup gula merah.',
                    foto:['ampiang dadiah.jpg','Ampiang dadiah-1.jpg']
                },
                {
                    nama_makanan:'Serondeng',
                    keterangan:'Serondeng adalah makanan ringan yang terbuat dari parutan kelapa kering yang digoreng dengan rempah-rempah seperti bawang, cabai, dan ketumbar. Serondeng memiliki rasa gurih, manis, dan pedas. Makanan ini sering dijadikan sebagai pelengkap nasi atau lauk-pauk.',
                    foto:['Serondeng.jpg','Serondeng-1.jpeg']
                }
            ]
        },
        {
            provinsi:'Kalimantan Timur',
            makanan:
            [
                {
                    nama_makanan:'Ketupat Kandangan',
                    keterangan:'Soto Banjar adalah hidangan sup khas Kalimantan Timur yang terbuat dari daging sapi, ayam, atau ikan yang dimasak dalam kuah bening yang kaya rempah-rempah. Soto Banjar disajikan dengan nasi, bihun, atau ketupat, serta diberi tambahan perkedel atau emping.',
                    foto:['Ketupat kandangan.jpg','Ketupat kandangan-1.jpg']
                },
                {
                    nama_makanan:'Kepiting Kenari',
                    keterangan:'Kepiting Kenari adalah hidangan seafood yang terkenal di Kalimantan Timur. Kepiting direbus dan kemudian dimasak dengan bumbu kenari, yakni campuran bumbu khas seperti cabai, kemiri, lengkuas, jahe, dan rempah-rempah lainnya. Hidangan ini memiliki cita rasa pedas dan gurih.',
                    foto:['Kepiting kenari.jpg','Kepiting kenari-1.jpg']
                },
                {
                    nama_makanan:'Ikan Sambal Taliwang',
                    keterangan:'Meskipun dikenal sebagai makanan khas Lombok, Ikan Sambal Taliwang juga populer di Kalimantan Timur. Hidangan ini terdiri dari ikan bakar yang dilumuri dengan sambal pedas khas Taliwang yang terbuat dari cabai, bawang merah, bawang putih, tomat, dan rempah-rempah.',
                    foto:['ikan sambal taliwang.jpeg','ikan sambal taliwang-1.jpg']
                }
            ]
        },
        {
            provinsi:'Kalimantan Selatan',
            makanan:
            [
                {
                    nama_makanan:'Ampyang',
                    keterangan:'Ampyang adalah camilan khas Martapura, sebuah kota di Kalimantan Selatan. Ampyang terbuat dari kelapa parut yang dikeringkan dan diberi campuran gula merah, sehingga menghasilkan rasa manis dan gurih. Camilan ini biasanya dijual dalam bentuk bungkusan kecil dan memiliki tekstur yang renyah.',
                    foto:['Ampyang.jpg','ampyang-1.jpg']
                },
                {
                    nama_makanan:'Sambal Tempoyak',
                    keterangan:'Sambal Tempoyak adalah sambal yang terbuat dari durian yang difermentasi. Rasa sambal ini unik dan memiliki aroma yang khas. Biasanya digunakan sebagai pelengkap untuk hidangan seperti ikan bakar, sate, atau sayuran.',
                    foto:['Sambal tempoyak.jpg','Sambal tempoyak-1.jpg']
                },
                {
                    nama_makanan:'Soto Banjar Barito Kuala',
                    keterangan:'Soto Banjar Barito Kuala adalah variasi soto Banjar yang terkenal di Kabupaten Barito Kuala, Kalimantan Selatan. Soto ini memiliki kuah yang kental dan gurih, dengan daging sapi, tomat, daun bawang, dan perkedel sebagai tambahan',
                    foto:['Soto banjar barito kuala.jpg','Soto banjar barito kuala-1.jpg']
                }
            ]
        },
        {
            provinsi:'Kalimantan Tengah',
            makanan:
            [
                {
                    nama_makanan:'Amparan Tatak',
                    keterangan:'Amparan Tatak adalah makanan ringan khas Kalimantan Tengah. Terbuat dari singkong yang diparut dan dikukus, kemudian dipanggang di atas tungku kayu atau arang hingga matang. Amparan Tatak memiliki tekstur renyah di luar dan kenyal di dalam, sering kali disajikan dengan sambal atau kopi.',
                    foto:['Amparan Tatak.jpg','Amparan Tatak-1.jpg']
                },
                {
                    nama_makanan:'Pantabes',
                    keterangan:'Pantabes adalah makanan tradisional suku Dayak di Kalimantan Tengah. Ini adalah hidangan daging yang dimasak dengan bumbu khas, seperti serai, lengkuas, daun jeruk, dan rempah-rempah lainnya. Biasanya daging yang digunakan adalah daging babi atau ayam. Pantabes memiliki cita rasa kaya dan biasanya disajikan dengan nasi hangat.',
                    foto:['Pantabes.webp','Pantabes-1.jpg']
                },
                {
                    nama_makanan:'Kue Pancong',
                    keterangan:'Kue Pancong adalah kue tradisional yang berasal dari Kalimantan Tengah. Terbuat dari campuran tepung beras, kelapa parut, gula kelapa, dan garam, kemudian dipanggang dalam cetakan khusus yang disebut "pancong". Kue Pancong memiliki tekstur renyah di luar dan lembut di dalam. Rasanya manis dan gurih.',
                    foto:['Kue Pancong.jpg', 'Kue Pancong-1.jpeg']
                }
            ]
        },
        {
            provinsi:'Kalimantan Utara',
            makanan:
            [
                {
                    nama_makanan:'Pansoh',
                    keterangan:'Pansoh adalah makanan tradisional suku Dayak yang terkenal di Kalimantan Utara. Makanan ini terbuat dari daging ayam, ikan, atau daging babi yang dibungkus dalam daun pisang dan dimasak dengan menggunakan bambu sebagai alat memasaknya. Bumbu utama dalam pansoh adalah serai, lengkuas, daun kunyit, dan garam.',
                    foto:['Pansoh.jpg','Pansoh-1.jpg']
                },
                {
                    nama_makanan:'Sambal Tarakan',
                    keterangan:'Sambal Tarakan adalah sambal khas dari Kota Tarakan di Kalimantan Utara. Sambal ini terbuat dari cabai rawit yang dihaluskan bersama bawang merah, bawang putih, terasi (udang rebon yang digoreng), garam, dan gula. Sambal Tarakan memiliki rasa pedas dan gurih yang khas.',
                    foto:['Sambal Tarakan.jpg','Sambal Tarakan-1.jpg']
                },
                {
                    nama_makanan:'Bubur Pedas',
                    keterangan:'Bubur Pedas adalah hidangan berbahan dasar nasi yang dimasak dengan bumbu pedas. Bubur ini biasanya disajikan dengan tambahan lauk seperti ayam, daging, atau ikan. Bubur Pedas memiliki cita rasa pedas yang kuat dan umumnya disukai oleh masyarakat Kalimantan Utara.',
                    foto:['Bubur Pedas.jpg','Bubur Pedas-1.jpg']
                }
            ]
        },
        {
            provinsi:'Lampung',
            makanan:
            [
                {
                    nama_makanan:'Pindang Ikan',
                    keterangan:'Pindang Ikan adalah hidangan khas Lampung yang terdiri dari ikan yang dimasak dalam kuah asam yang kaya rempah-rempah. Kuah pindang terbuat dari campuran bumbu seperti asam kandis, asam jawa, cabai, kunyit, jahe, dan bawang merah. Ikan yang umum digunakan adalah ikan belida, ikan patin, atau ikan mas. Hidangan ini memiliki rasa segar, asam, dan gurih.',
                    foto:['Pindang Ikan.jpg','Pindang Ikan-1.jpg']
                },
                {
                    nama_makanan:'Gulai Daun Singkong',
                    keterangan:'Gulai Daun Singkong adalah hidangan khas Lampung yang terdiri dari daun singkong yang dimasak dengan santan dan bumbu rempah-rempah. Biasanya, gulai ini menggunakan santan kelapa yang kental dan diberi tambahan rempah seperti cabai, kunyit, serai, dan daun jeruk. Hidangan ini memiliki rasa gurih, kaya rempah, dan lezat. Biasanya disajikan dengan nasi hangat.',
                    foto:['Gulai Daun Singkong.jpg','Gulai Daun Singkong-1.jpg']
                },
                {
                    nama_makanan:'Seruit',
                    keterangan:'Seruit adalah hidangan khas Lampung yang terdiri dari irisan daging sapi atau ikan yang dimasak dengan bumbu rempah seperti cabai, bawang putih, bawang merah, serai, dan kunyit. Hidangan ini memiliki rasa pedas dan gurih. Seruit biasanya disajikan dengan nasi hangat dan dilengkapi dengan irisan mentimun, daun kemangi, dan sambal',
                    foto:['Seruit.png','Seruit-1.webp']
                }
            ]
        },
        {
            provinsi:'Maluku',
            makanan:
            [
                {
                    nama_makanan:'Nasi Wai O Pata',
                    keterangan:'Nasi Wai O Pata adalah hidangan nasi khas Maluku yang dihidangkan dengan berbagai lauk-pauk tradisional seperti ikan bakar, sambal roa sambal terasi dengan ikan roa, ikan asar ikan goreng, serta beberapa jenis sayuran.',
                    foto:['Nasi Wai O Pata.jpg','Nasi Wai O Pata-1.jpg']
                },
                {
                    nama_makanan:'Ikan Kuah Kuning',
                    keterangan:'Ikan Kuah Kuning adalah hidangan ikan yang dimasak dengan bumbu kuning khas Maluku. Bumbu kuning ini terbuat dari rempah-rempah seperti kunyit, jahe, lengkuas, bawang putih, dan bawang merah. Ikan yang biasa digunakan adalah ikan kakap, ikan kuwe, atau ikan kuwe bakar.',
                    foto:['Ikan Kuah Kuning.jpg','Ikan Kuah Kuning-1.jpg']
                },
                {
                    nama_makanan:'Burasa',
                    keterangan:'Burasa adalah kue khas Maluku yang terbuat dari ketan yang diisi dengan parutan kelapa yang sudah diberi bumbu gula merah. Kemudian kue ini dikukus hingga matang. Biasanya burasa disajikan dalam acara-acara adat atau perayaan tertentu.',
                    foto:['Burasa.webp','Burasa-1.jpg']
                }
            ]
        },
        {
            provinsi:'Maluku Utara',
            makanan:
            [
                {
                    nama_makanan:'Sambal Roa',
                    keterangan:'Sambal roa adalah sambal khas dari Maluku Utara yang terbuat dari ikan roa yang diasinkan dan diolah dengan bumbu-bumbu tertentu. Sambal roa memiliki rasa pedas dan gurih yang khas. Sambal ini biasanya disajikan sebagai pelengkap untuk makanan seperti nasi, ikan bakar, atau papeda.',
                    foto:['Sambal Roa.jpg','Sambal Roa-1.jpg']
                },
                {
                    nama_makanan:'Tunutuan',
                    keterangan:'Tinutuan adalah bubur nasi khas Maluku Utara yang dijadikan sebagai sarapan. Bubur nasi ini dimasak dengan campuran sayuran seperti bayam, kangkung, labu, dan jagung. Tinutuan biasanya disajikan dengan sambal terasi, ikan asin, dan kerupuk.',
                    foto:['Tunutuan.jpeg','Tunutuan-1.jpg']
                },
                {
                    nama_makanan:'Sagu Lempeng',
                    keterangan:'Sagu lempeng adalah makanan ringan yang terbuat dari sagu dan kelapa parut. Adonan sagu yang digulung kemudian dipanggang hingga matang. Sagu lempeng biasanya disajikan sebagai camilan atau hidangan penutup.',
                    foto:['Sagu Lempeng.jpg','Sagu Lempeng-1.jpeg']
                }
            ]
        },
        {
            provinsi:'Nusa Tenggara Timur',
            makanan:
            [
                {
                    nama_makanan:'Sambal Plecing Kangkung',
                    keterangan:'Makanan khas dari Lombok, terdiri dari kangkung yang direbus dan disajikan dengan sambal pedas yang terbuat dari cabai, tomat, bawang putih, dan bumbu-bumbu lainnya. Rasanya pedas dan segar.',
                    foto:['Sambal Plecing Kangkung.jpg','Sambal Plecing Kangkung-1.jpg']
                },
                {
                    nama_makanan:'Mie Kepiting',
                    keterangan:'Makanan yang terkenal di Kupang, terdiri dari mie kuning yang disajikan dengan daging kepiting yang lezat, kuah kaldu, dan berbagai bumbu. Rasanya gurih dan sedikit pedas.',
                    foto:['Mie Kepiting.jpg','Mie Kepiting-1.jpg']
                },
                {
                    nama_makanan:'Se i',
                    keterangan:'Se i adalah daging khas suku Rote di NTT. Daging sapi atau babi diasap dengan menggunakan kayu bakar. Kemudian daging tersebut diiris tipis-tipis dan dimasak dengan bumbu khas, seperti cabai, bawang putih, dan garam. Rasanya asap, gurih, dan sedikit pedas.',
                    foto:['Se i.jpg','Se i-1.jpg']
                }
            ]
        },
        {
            provinsi:'Nusa Tenggara Barat',
            makanan:
            [
                {
                    nama_makanan:'Plecing Sate Rembiga',
                    keterangan:'Sate Rembiga adalah hidangan sate khas Lombok yang terbuat dari daging sapi. Daging sapi dipotong tipis-tipis dan ditusuk dengan tusuk sate, kemudian dipanggang atau dibakar. Sate ini disajikan dengan bumbu pelecing, yang terdiri dari cabai, bawang merah, bawang putih, kemiri, terasi, dan rempah-rempah lainnya. Sate Rembiga biasanya disajikan dengan nasi atau lontong.',
                    foto:['Plecing Sate Rembiga.jpg','Plecing Sate Rembiga-1.jpg',]
                },
                {
                    nama_makanan:'Sate Bulayak',
                    keterangan:'Sate Bulayak adalah hidangan sate khas Sumbawa. Hidangan ini terbuat dari daging sapi atau ayam yang ditusuk dengan tusuk sate, kemudian dipanggang. Yang membedakan Sate Bulayak adalah cara penyajiannya. Sate dan nasi disajikan di atas daun lontar yang dilipat, lalu dibungkus seperti ketupat. Hidangan ini biasanya disajikan dengan bumbu kacang atau sambal.',
                    foto:['Sate Bulayak.jpg','Sate Bulayak-1.jpg']
                },
                {
                    nama_makanan:'Bebalung',
                    keterangan:'Bebalung adalah sup daging tulang iga sapi yang populer di NTB. Sup ini memiliki rasa gurih dan pedas yang kuat. Dalam Bebalung, tulang iga sapi dimasak dengan bumbu rempah-rempah seperti lengkuas, jahe, serai, daun salam, cabai, dan bawang merah. Sup Bebalung disajikan dengan nasi dan bisa ditambahkan dengan irisan daun bawang dan seledri.',
                    foto:['Bebalung.jpg','Bebalung-1.jpg']
                }
            ]
        },
        {
            provinsi:'Papua Barat',
            makanan:
            [
                {
                    nama_makanan:'Papeda',
                    keterangan:'Papeda adalah sejenis makanan tradisional yang berasal dari Provinsi Papua, Indonesia. Makanan ini terbuat dari tepung sagu yang diolah menjadi bubur kental dengan tekstur yang lembut dan kenyal.Papeda biasanya disajikan dengan hidangan lauk pauk seperti ikan bakar, ayam suir, atau sayuran',
                    foto:['Papeda.jpg','Papeda-1.jpg']
                },
                {
                    nama_makanan:'Ikan Bakar Kuah Asem',
                    keterangan:'Ikan bakar adalah hidangan yang umum ditemui di Papua Barat. Biasanya ikan segar seperti ikan kakap, tongkol, atau ikan laut lainnya dibakar di atas bara api dan disajikan dengan kuah asam yang segar, terbuat dari campuran asam jawa, air, cabai, dan bawang.',
                    foto:['Ikan Bakar Kuah Asem.jpg','Ikan Bakar Kuah Asem-1.jpg']
                },
                {
                    nama_makanan:'Manokwari Seafood',
                    keterangan:'Manokwari, ibu kota Papua Barat, dikenal dengan hasil lautnya yang melimpah. Hidangan seafood di daerah ini sangat populer, seperti kepiting saus padang, cumi goreng tepung, udang bakar, atau kerang saus padang. Hidangan-hidangan ini biasanya disajikan dengan bumbu pedas khas Papua Barat.',
                    foto:['Manokwari Seafood.jpg','Manokwari Seafood-1.jpg']
                }
            ]
        },
        {
            provinsi:'Papua',
            makanan:
            [
                {
                    nama_makanan:'Papeda',
                    keterangan:'Papeda adalah sejenis makanan tradisional yang berasal dari Provinsi Papua, Indonesia. Makanan ini terbuat dari tepung sagu yang diolah menjadi bubur kental dengan tekstur yang lembut dan kenyal.Papeda biasanya disajikan dengan hidangan lauk pauk seperti ikan bakar, ayam suir, atau sayuran',
                    foto:['Papeda.jpg','Papeda-1.jpg']
                },
                {
                    nama_makanan:'Sate Papua',
                    keterangan:'Sate Papua adalah makanan yang terbuat dari potongan daging, biasanya daging babi atau ayam, yang ditusuk dengan bambu dan dipanggang di atas bara api. Sate ini disajikan dengan bumbu kacang yang kaya rasa dan disertai dengan irisan tomat, bawang merah, dan cabai.',
                    foto:['Sate Papua.jpg','Sate Papua-1.jpg']
                },
                {
                    nama_makanan:'Pisang Merah',
                    keterangan:'Pisang Merah adalah variasi pisang lokal yang populer di Papua. Pisang ini berukuran besar, memiliki kulit merah, dan memiliki rasa manis. Biasanya dimakan langsung atau digoreng.',
                    foto:['Pisang Merah.jpg','Pisang Merah-1.jpg']
                }
            ]
        },
        {
            provinsi:'Papua Tengah',
            makanan:
            [
                {
                    nama_makanan:'Papeda',
                    keterangan:'Papeda adalah sejenis makanan tradisional yang berasal dari Provinsi Papua, Indonesia. Makanan ini terbuat dari tepung sagu yang diolah menjadi bubur kental dengan tekstur yang lembut dan kenyal.Papeda biasanya disajikan dengan hidangan lauk pauk seperti ikan bakar, ayam suir, atau sayuran',
                    foto:['Papeda.jpg','Papeda-1.jpg']
                },
                {
                    nama_makanan:'Matoa',
                    keterangan:'Matoa adalah buah yang tumbuh di Papua Tengah dan memiliki rasa manis dan sedikit asam. Buah ini bisa dimakan langsung atau diolah menjadi jus, es krim, atau manisan.',
                    foto:['Matoa.jpeg','Matoa-1.jpg']
                },
                {
                    nama_makanan:'Bandeng Presto',
                    keterangan:'Bandeng Presto adalah hidangan ikan bandeng yang dimasak dengan teknik presto. Ikan bandeng dibumbui dengan rempah-rempah dan kemudian dimasak dalam panci presto hingga dagingnya empuk. Hidangan ini umumnya disajikan dengan nasi dan sambal.',
                    foto:['Bandeng Presto.jpeg','Bandeng Presto-1.jpg']
                }
            ]
        },
        {
            provinsi:'Papua Pegunungan',
            makanan:
            [
                {
                    nama_makanan:'Papeda',
                    keterangan:'Papeda adalah sejenis makanan tradisional yang berasal dari Provinsi Papua, Indonesia. Makanan ini terbuat dari tepung sagu yang diolah menjadi bubur kental dengan tekstur yang lembut dan kenyal.Papeda biasanya disajikan dengan hidangan lauk pauk seperti ikan bakar, ayam suir, atau sayuran',
                    foto:['Papeda.jpg','Papeda-1.jpg']
                },
                {
                    nama_makanan:'horenso',
                    keterangan:'Horenso adalah sejenis sayur yang terbuat dari daun kangkung Papua. Daun kangkung ini dimasak dengan santan kelapa, bawang merah, bawang putih, dan beberapa bumbu lainnya. Horenso biasanya disajikan sebagai lauk pendamping nasi.',
                    foto:['horenso.jpg','horenso-1.jpg']
                },
                {
                    nama_makanan:'Mbaham Mee',
                    keterangan:'Mbaham Mee adalah hidangan mi yang populer di Papua Pegunungan. Mi yang digunakan terbuat dari sagu atau tepung sagu. Mienya diolah dengan bumbu-bumbu khas Papua dan disajikan dengan daging, sayuran, atau ikan.',
                    foto:['Mbaham Mee.jpg','Mbaham Mee-1.jpg']
                }
            ]
        },
        {
            provinsi:'Papua Selatan',
            makanan:
            [
                {
                    nama_makanan:'Papeda',
                    keterangan:'Papeda adalah sejenis makanan tradisional yang berasal dari Provinsi Papua, Indonesia. Makanan ini terbuat dari tepung sagu yang diolah menjadi bubur kental dengan tekstur yang lembut dan kenyal.Papeda biasanya disajikan dengan hidangan lauk pauk seperti ikan bakar, ayam suir, atau sayuran',
                    foto:['Papeda.jpg','Papeda-1.jpg']
                },
                {
                    nama_makanan:'Sayur Nangka Muda',
                    keterangan:'Sayur Nangka Muda adalah hidangan sayuran yang terbuat dari nangka muda. Nangka muda direbus dengan santan dan berbagai rempah-rempah seperti kunyit, bawang merah, dan cabai. Sayur ini memiliki cita rasa gurih dan kaya akan rempah.',
                    foto:['Sayur Nangka Muda.jpg','Sayur Nangka Muda-1.jpg']
                },
                {
                    nama_makanan:'Ayam Bakar Wamena',
                    keterangan:'Ayam Bakar Wamena adalah hidangan ayam bakar khas Wamena, sebuah kota di Papua Selatan. Ayamnya dipanggang dengan bumbu yang kaya rempah seperti jahe, bawang putih, dan kunyit.',
                    foto:['Ayam Bakar Wamena.jpg','Ayam Bakar Wamena-1.jpg']
                }
            ]
        },
        {
            provinsi:'Papua Barat Daya',
            makanan:
            [
                {
                    nama_makanan:'Papeda',
                    keterangan:'Papeda adalah sejenis makanan tradisional yang berasal dari Provinsi Papua, Indonesia. Makanan ini terbuat dari tepung sagu yang diolah menjadi bubur kental dengan tekstur yang lembut dan kenyal.Papeda biasanya disajikan dengan hidangan lauk pauk seperti ikan bakar, ayam suir, atau sayuran',
                    foto:['Papeda.jpg','Papeda-1.jpg']
                },
                {
                    nama_makanan:'Kuah Kuning',
                    keterangan:'Kuah Kuning adalah hidangan berkuah khas Papua Barat Daya. Kuah kuning terbuat dari rempah-rempah seperti kunyit, jahe, lengkuas, dan bawang merah yang diolah bersama santan kelapa. Biasanya disajikan dengan ikan atau daging serta nasi.',
                    foto:['Kuah Kuning.png','Kuah Kuning-1.jpg']
                },
                {
                    nama_makanan:'Kue Kukena`i',
                    keterangan:'Kue Kukena`i adalah kue tradisional yang populer di Papua Barat Daya. Kue ini terbuat dari tepung ketan dan dipanggang menggunakan daun pisang. Rasanya manis dan lembut.',
                    foto:['Kue Kukenai.jpg','Kue Kukenai-1.png']
                }
            ]
        },
        {
            provinsi:'Sulawesi Barat',
            makanan:
            [
                {
                    nama_makanan:'Coto Makassar',
                    keterangan:'Makanan ini merupakan hidangan khas Makassar, ibu kota Sulawesi Selatan. Coto Makassar adalah semacam sup daging sapi yang dimasak dengan bumbu kacang yang kaya rempah. Biasanya disajikan dengan ketupat atau buras (nasi ketan) dan ditaburi dengan bawang goreng.',
                    foto:['Coto Makassar.jpg','Coto Makassar-1.jpg']
                },
                {
                    nama_makanan:'Konro',
                    keterangan:'Konro adalah daging iga sapi yang dimasak dalam bumbu khas Sulawesi Barat. Dagingnya dimasak secara perlahan dalam bumbu berupa rempah-rempah dan kuah santan kental. Konro biasanya disajikan dengan nasi putih atau ketupat.',
                    foto:['Konro.jpg','Konro-1.jpeg']
                },
                {
                    nama_makanan:'Pallubasa',
                    keterangan:'Pallubasa adalah hidangan berkuah yang terbuat dari daging sapi, terutama dari bagian tulang rawan. Kuahnya kaya rempah seperti kayu manis, cengkeh, kapulaga, dan bumbu lainnya. Pallubasa biasanya disajikan dengan ketupat atau buras dan ditaburi dengan bawang goreng.',
                    foto:['Pallubasa.jpg','Pallubasa-1.png']
                }
            ]
        },
        {
            provinsi:'Sulawesi Tengah',
            makanan:
            [
                {
                    nama_makanan:'Nasi Kuning',
                    keterangan:'Nasi Kuning adalah hidangan nasi kuning yang disajikan dengan berbagai lauk-pauk seperti ayam, telur, rendang, ikan bakar, dan sambal. Hidangan ini sering disajikan dalam acara-acara istimewa dan festival.',
                    foto:['Nasi Kuning.jpg','Nasi Kuning-1.jpg']
                },
                {
                    nama_makanan:'Ikan Bakar Palu',
                    keterangan:'Sulawesi Tengah terkenal dengan hasil lautnya yang melimpah. Ikan Bakar Palu adalah hidangan ikan bakar yang menggunakan ikan segar, seperti ikan kakap, kerapu, atau tongkol. Ikan ini dibumbui dengan rempah khas Sulawesi Tengah dan kemudian dipanggang hingga matang.',
                    foto:['Ikan Bakar Palu.jpg','Ikan Bakar Palu-1.jpg']
                },
                {
                    nama_makanan:'Panada',
                    keterangan:'Panada adalah sejenis pastel yang terbuat dari adonan tepung terigu yang diisi dengan campuran ikan tuna atau daging cincang. Panada kemudian digoreng hingga berwarna kecokelatan dan sering dijadikan camilan atau makanan ringan.',
                    foto:['Panada.jpg','Panada-1.jpg']
                }
            ]
        },
        {
            provinsi:'Sulawesi Utara',
            makanan:
            [
                {
                    nama_makanan:'Manado Porridge',
                    keterangan:'Manado Porridge atau lebih dikenal dengan nama "Bubur Manado" adalah makanan yang terdiri dari bubur beras yang dimasak dengan kaldu ayam kaya rempah seperti serai, lengkuas, dan daun jeruk. Bubur ini biasanya disajikan dengan topping seperti daging ayam, kerupuk, bawang goreng, dan kacang tanah.',
                    foto:['Manado Porridge.jpeg','Manado Porridge-1.jpg']
                },
                {
                    nama_makanan:'Paniki',
                    keterangan:'Paniki adalah hidangan khas Minahasa yang menggunakan daging kelelawar sebagai bahan utamanya. Daging kelelawar dimasak dengan bumbu khas seperti kunyit, cabai, jahe, bawang merah, dan rempah-rempah lainnya. Hidangan ini biasanya berkuah dan memiliki cita rasa yang kaya.',
                    foto:['Paniki.jpg','Paniki-1.jpg']
                },
                {
                    nama_makanan:'Klappertaart',
                    keterangan:'Klappertaart adalah kue tart yang terbuat dari kelapa muda yang diparut dan dicampur dengan susu, gula, dan telur. Kue ini memiliki tekstur lembut dan rasa kelapa yang khas. Klappertaart sering dianggap sebagai makanan penutup atau kue tradisional yang populer di Sulawesi Utara.',
                    foto:['Klappertaart.jpg','Klappertaart-1.jpg']
                }
            ]
        },
        {
            provinsi:'Sulawesi Tenggara',
            makanan:
            [
                {
                    nama_makanan:'Ayam Bulu',
                    keterangan:'Ayam Bulu adalah hidangan khas dari Sulawesi Tenggara yang terbuat dari ayam yang dipotong kecil-kecil, kemudian dimasak dengan santan dan bumbu rempah seperti serai, daun jeruk, dan cabai. Hidangan ini memiliki cita rasa pedas dan gurih.',
                    foto:['Ayam Bulu.jpg','Ayam Bulu-1.jpg']
                },
                {
                    nama_makanan:'Cakalang Fufu',
                    keterangan:'Cakalang Fufu adalah hidangan khas Sulawesi Tenggara yang terbuat dari ikan cakalang yang dikeringkan dan digoreng hingga kering. Hidangan ini biasanya disajikan dengan nasi dan sambal. Cakalang Fufu memiliki cita rasa gurih dan renyah.',
                    foto:['Cakalang Fufu.jpg','Cakalang Fufu-1.jpeg']
                },
                {
                    nama_makanan:'Pisang Epe',
                    keterangan:'Pisang Epe adalah makanan penutup tradisional dari Sulawesi Tenggara. Makanan ini terbuat dari pisang kepok yang dipanggang atau dipanggang hingga matang dan kemudian ditumbuk atau dihancurkan. Pisang Epe biasanya disajikan dengan parutan kelapa dan madu.',
                    foto:['Pisang Epe.jpg','Pisang Epe-1.jpg']
                }
            ]
        },
        {
            provinsi:'Sulawesi Selatan',
            makanan:
            [
                {
                    nama_makanan:'Sop Saudara',
                    keterangan:'Sop Saudara adalah hidangan sup daging sapi dengan kuah bening yang kaya akan rempah-rempah. Sup ini biasanya disajikan dengan mie kuning, daging sapi, tauge, dan irisan bawang merah.',
                    foto:['Sop Saudara.jpg','Sop Saudara-1.png']
                },
                {
                    nama_makanan:'jalangKote',
                    keterangan:'Jalangkote adalah pastel khas Makassar yang berisi campuran daging cincang, telur, dan sayuran. Pastel ini dibungkus dengan kulit yang tipis dan renyah, kemudian digoreng hingga kecokelatan.',
                    foto:['jalangKote.jpg','jalangKote-1.jpg']
                },
                {
                    nama_makanan:'Pallu Marumpa',
                    keterangan:'Pallu Marumpa adalah hidangan ikan kakap yang disajikan dengan bumbu khas Sulawesi Selatan, seperti kunyit, lengkuas, dan daun kemangi. Ikan ini kemudian dibakar atau digoreng dan disajikan dengan nasi.',
                    foto:['Pallu Marumpa.jpg','Pallu Marumpa-1.jpg']
                }
            ]
        },
        {
            provinsi:'Sumatera Barat',
            makanan:
            [
                {
                    nama_makanan:'Rendang',
                    keterangan:'Rendang adalah hidangan daging yang dimasak dalam bumbu rempah rempah kaya santan kelapa.Hidangan ini terkenal di seluruh Indonesia dan diakui sebagai salah satu makanan terlezat di dunia.Daging yang digunakan biasa berupa daging sapi,ayam,atau itik. Rendang memiliki cita rasa gurih, pedas dan kaya rempah yang menghasilkan daging yang empuk dan beraroma lezat. Rendang biasa ny dihidangkan pada acara acara special masyarakat sumatera barat atau juga bisa sebagai lauk sehari hari masyarakat disana.',
                    foto:['Rendang.jpg','Rendang-1.jpg']
                },
                {
                    nama_makanan:'Sate Padang',
                    keterangan:'Sate Padang adalah sate khas dari Sumatera Barat. Daging yang digunakan biasanya adalah daging sapi yang dipotong kecil-kecil dan ditusuk pada tusuk sate. Sate ini disajikan dengan kuah kacang kental yang kaya akan rempah-rempah seperti kunyit, serai, dan ketumbar. Kuah kacang ini memberikan cita rasa gurih dan sedikit pedas yang menggugah selera. Sate padang juga bisa disajikan dengan kuah padang dan lontong dengan citarasa gurih asin dan sedikit pedas',
                    foto:['Sate Padang.jpg','Sate Padang-1.jpg']
                },
                {
                    nama_makanan:'Nasi Kapau',
                    keterangan:'Nasi Kapau adalah hidangan nasi dengan berbagai macam lauk-pauk khas Minangkabau yang disajikan dalam satu piring. Lauk-pauk yang biasanya tersedia antara lain rendang, gulai kambing, dendeng balado, ayam goreng, perkedel, dan masih banyak lagi. Setiap hidangan memiliki rasa dan aroma yang khas dengan bumbu rempah-rempah yang melimpah',
                    foto:['Nasi Kapau.jpg','Nasi Kapau-1.jpeg']
                }
            ]
        },
        {
            provinsi:'Sumatera Selatan',
            makanan:
            [
                {
                    nama_makanan:'Pempek',
                    keterangan:'Pempek terbuat dari ikan tenggiri yang digiling halus dan dicampur dengan tepung sagu, air, garam, dan bawang putih. Adonan pempek kemudian diuleni hingga kalis, dibentuk menjadi berbagai bentuk seperti bola, lenjer, atau kapal selam, dan selanjutnya direbus atau digoreng. Ciri khas dari pempek adalah teksturnya yang kenyal dan rasa yang gurih. Ikan tenggiri yang digunakan memberikan rasa yang khas dan lezat pada pempek. Selain itu, kuah cuko yang asam, pedas, dan gurih memberikan sentuhan yang sempurna untuk memperkaya citarasa pempek.Terdapat banyak variasi pempek seperti pempek lenjer, kapal selam,pistel atau pempek adaan dgn ciri khas dan keunikan tersendiri',
                    foto:['Pempek.jpg','Pempek2.jpg']
                },
                {
                    nama_makanan:'Tekwan',
                    keterangan:'Tekwan adalah hidangan sup ikan yang berasal dari Palembang, Sumatera Selatan, Indonesia. Hidangan ini memiliki ciri khas dengan kuah kaldu ikan yang kaya rempah-rempah dan disajikan dengan pempek, irisan daun bawang, dan irisan jamur kuping. Tekwan terbuat dari adonan yang terdiri dari campuran tepung terigu, tepung sagu, telur, bawang putih, dan bawang merah. Adonan tersebut dibentuk menjadi bola-bola kecil dan direbus dalam kaldu ikan yang telah dimasak dengan rempah-rempah seperti jahe, bawang putih, merica, dan daun bawang. Tekwan biasanya disajikan sebagai hidangan pembuka atau makanan utama',
                    foto:['tekwan.png','tekwan2.png']
                },
                {
                    nama_makanan:'Burgo',
                    keterangan:'Burgo atau juga dikenal sebagai "Nasi Burgo" adalah hidangan khas Palembang, Sumatera Selatan. Burgo terbuat dari nasi ketan yang dimasak dengan santan dan dibungkus dengan daun pisang. Nasi ketan dicampur dengan bumbu seperti serai, daun pandan, garam, dan santan, kemudian dikukus hingga matang. Proses pengukusan ini memberikan nasi ketan tekstur yang lembut dan aromanya yang harum. Rasa burgo yang lezat berasal dari kombinasi antara nasi ketan yang aromatik dan gurih dengan lauk pauk yang kaya rempah. Burgo biasanya disajikan dengan lauk seperti rendang daging sapi atau ayam goreng',
                    foto:['burgo.jpg','burgo2.jpg']
                }
            ]
        },
        {
            provinsi:'Sumatera Utara',
            makanan:
            [
                {
                    nama_makanan:'Mie Gomak',
                    keterangan:'Mi gomak adalah masakan khas suku Batak Toba dari Sumatra Utara. Masakan ini adalah hidangan khas daerah sekitar Danau Toba, mulai dari Porsea, Balige, Laguboti, Tarutung, hingga Tapanuli Selatan. Mi ini juga dapat ditemukan di berbagai daerah di Sumatra Utara, mulai dari Medan, Siantar, Parapat, Labuhan Batu, Sibolga, hingga Deli Serdang. Tetapi Mi gomak sudah terkenal di berbagai provinsi dan juga beberapa masyarakat Indonesia yang berbeda provinsi menyukai hidangan khas Batak ini. Mi gomak dibuat dari tepung terigu. Ketika masih mentah, bentuk mi yang kaku dan lurus seperti lidi sehingga sering disamakan dengan masakan Italia, spageti. Maka dari itu, mi gomak juga disebut spageti Batak.',
                    foto:['mie-gomak.jpg','mie-gomak2.jpg']
                },
                {
                    nama_makanan:'Lemang',
                    keterangan:'Lemang adalah hidangan tradisional yang populer di Indonesia, khususnya di daerah Sumatera, Jawa, dan Kalimantan. Asal usul lemang dapat ditelusuri kembali ke zaman prasejarah, di mana hidangan ini dikembangkan oleh masyarakat asli Indonesia sebagai cara untuk memasak nasi menggunakan bambu sebagai wadah. Lemang sering kali dikaitkan dengan perayaan dan acara istimewa, terutama selama Hari Raya Idul Fitri atau acara-acara keagamaan lainnya. Hidangan ini memiliki makna simbolis dalam budaya Indonesia, menggambarkan persaudaraan dan kebersamaan ketika keluarga dan teman berkumpul untuk menikmati hidangan ini.',
                    foto:['Lemang.jpg','Lemang2.jpg']
                },
                {
                    nama_makanan:'Bika Ambon',
                    keterangan:'Bika Ambon adalah sejenis kue yang memiliki tekstur yang lembut dan rasa yang manis. Namanya diambil dari kata "bika" yang berarti kue dalam bahasa Hokkien, dan "Ambon" mengacu pada pulau di Maluku, Indonesia. Meskipun kue ini memiliki nama yang mengacu pada pulau Maluku, tetapi asal usulnya memang berasal dari Medan, Sumatera Utara. Bika Ambon memiliki aroma yang khas, yaitu aroma ragi dan pandan. Beberapa variasi Bika Ambon juga ditambahkan dengan bahan tambahan seperti keju, cokelat, atau durian untuk memberikan variasi rasa yang lebih menarik.Kue Bika Ambon sangat populer dan sering dijadikan oleh-oleh khas dari Sumatera Utara. Rasanya yang manis dan teksturnya yang lembut membuatnya disukai oleh banyak orang. Bika Ambon juga menjadi salah satu warisan budaya Indonesia yang terus dilestarikan dan dinikmati hingga saat ini.',
                    foto:['bika ambon.jpg','bika ambon2.jpg']
                }
            ]
        },
    ] 
    return (
        <div className='main' id='mainContent' ref={props.linkRef}>
            <BrowserRouter>
                <div className='left'>
                    <LeftTutor/>
                    <Left data={data}/>
                </div>
                <div className='right'>
                    <Routes>
                        <Route path='/' element={<RightTutor/>}/>
                        {
                            data.map((element,index) =>{
                                return (       
                                    <Route key={index} path={`/${element.provinsi}`} element={<Right makanan={element.makanan}/>}/>
                                )
                            })
                        }
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default Main;