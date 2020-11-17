




/**
 * fridge
 * @constant
 */
const PRODUCT_QTY = {
    
    /** firdge */
    FRIDGE:['500','1000','2500','5000'],
    BUSSINESSCARD:['250','500','1000','1500','2000'],
    BROCHURE:['250','500','1000','1500','2000','5000','10000'],
    FLYER:['250','500','1000','1500','2000','5000','10000'],
    POSTER:['250','500','1000','1500','2000','5000','10000'],
    POSTERCARD:['250','500','1000','1500','2000','5000','10000'],
    COMPLIMENT:['250','500','1000','1500','2000','5000','10000'],
    LETTERHEAD:['250','500','1000','1500','2000','5000','10000'],
    BANNER:['1'],
    SIGNAGE:['1','5','10'],
    ENVELOPE:['500','1000','2000','5000','10000'],

    

};
const PRODUCT_OPTIONS = {

    /**fridge */
    FRIDGE:['size','sides'],
    BUSSINESSCARD:['size','laminated','side'],
    BROCHURE:['type','page','stock'],
    FLYER:['size','stock','side'],
    POSTER:['size','stock','side'],
    POSTERCARD:['size','stock','side'],
    COMPLIMENT:['stock','side'],
    LETTERHEAD:['stock','side'],
    BANNER:['size','stock'],
    SIGNAGE:['stock','size','side'],
    ENVELOPE:['type','colour']

}

var fridgePrice = {
    Squ55:[209,275,577,880], // 50x50 Square
    Rou55:[111,222,333,444], // 50x50 Rounded
    Squ75:[222,333,444,555], // 50x50 Square
    Rou75:[333,444,555,666], // 50x50 Rounded
    Squ95:[444,555,666,777], // 50x50 Square
    Rou95:[555,666,777,888], // 50x50 Rounded
}

var bussinesscardPrice = {
    matt3501side:[62.04,66,88.44,108.24,128.04],//350gsm Branding Cards Printing 2 sides, Matt Laminates 1 Sides (each kinds)   
    matt3502side:[66,70.69,92.4,113.52,134.64],//350gsm Branding Cards Printing 1 sides
    nv4501side:[67.21,71.5,95.81,117.26,138.71],// 450+ NV Branding Cards Printing 1 sides
    nv4502side:[71.5,75.79,100.1,122.98,145.86],//450+ NV Branding Cards Printing 2 sides 

}
var brochurePrice={
    hfa5115:[155.76,183.48,212.52,242.88,271.92,423.72,675.84],
    hfa5150:[167.64, 183.48, 212.52, 242.88, 271.92, 440.88, 690.36],
    hfa5170:[166.32, 205.92, 237.6, 270.6, 303.6, 481.8, 785.4],
    hfa5250:[180.84, 223.08, 266.64, 310.2, 349.8, 587.4, 986.04],
    hfa4115:[209.88, 260.04, 295.68, 331.32, 368.28, 561, 888.36],
    hfa4150:[254.76, 273.24, 310.2, 347.16, 384.12, 607.2, 980.76],
    hfa4170:[224.4, 278.52, 320.76, 364.32, 407.88, 641.52, 1041.48],
    hfa4250:[244.2, 302.28, 361.68, 419.76, 473.88, 792, 1323.96],
    hfa3115:[388.08, 425.04, 498.96, 571.56, 642.84, 1019.04, 1597.2],
    hfa3150:[388.08, 425.04, 498.96, 571.56, 642.84, 1049.4, 1644.72],
    hfa3170:[418.44, 521.4, 599.28, 677.16, 755.04, 1177.44, 1898.16],
    hfa3250:[458.04, 479.27, 570.24, 661.21, 744.41, 1236.99, 2061.29],
    dla4115:[227.37, 281.71, 320.32, 358.93, 398.97, 607.75, 888.36],
    dla4150:[275.99, 296.01, 336.05, 376.09, 416.13, 657.8, 1062.49],
    dla4170:[243.1, 301.73, 347.49, 394.68, 441.87, 694.98, 1128.27],
    //last 3 need edit
    
}
var flyerPrice={
    dl1115:[68.64, 84.48, 100.32, 114.84, 129.36, 215.16, 351.12],
    dl1150:[76.56, 86.46, 106.92, 126.72, 146.52, 256.08, 408.54],
    dl1170:[75.24, 93.72, 113.52, 133.32, 151.8, 267.96, 451.44],
    dl1250:[85.8, 106.92, 135.96, 165, 191.4, 355.08, 629.64],
    dl2115:[106.92, 126.72, 149.16, 166.32, 183.48, 271.92, 421.08],
    dl2150:[116.16, 127.38, 149.16, 170.94, 192.06, 309.54, 470.58],
    dl2170:[116.16, 143.88, 165, 184.8, 205.92, 318.12, 508.2],
    dl2250:[126.72, 158.4, 187.44, 216.48, 244.2, 402.6, 669.24],
    a61115:[52.8, 64.68, 75.24, 87.12, 99, 163.68, 266.64],
    a61150:[55.44, 68.64, 81.84, 96.36, 109.56, 188.76, 314.16],
    a61170:[58.08, 71.28, 85.8, 100.32, 116.16, 203.28, 341.88],
    a61250:[64.68, 80.52, 102.96, 125.4, 145.2, 270.6, 477.84],
    a62115:[80.52, 100.32, 112.2, 125.4, 138.6, 203.28, 315.48],
    a62150:[84.48, 105.6, 120.12, 134.64, 149.16, 225.72, 357.72],
    a62170:[87.12, 108.24, 124.08, 139.92, 154.44, 238.92, 381.48],
    a62250:[95.04, 118.8, 142.56, 165, 184.8, 306.24, 588.72],
    a51115:[82.5, 101.75, 119.63, 137.5, 155.38, 258.5, 422.13],
    a51150:[98.32, 109.32, 130.64, 151.26, 172.58, 292.22, 470.99],
    a51170:[90.75, 112.75, 136.13, 159.5, 182.88, 321.75, 541.75],
    a51250:[103.13, 127.88, 162.25, 198, 231, 427.63, 757.63],
    a52115:[138.88, 163.63, 187, 211.75, 235.13, 352, 545.88],
    a52150:[151.26, 163.64, 187.7, 211.77, 235.84, 369.92, 561.75],
    a52170:[149.88, 187, 213.13, 240.63, 268.13, 412.5, 660],
    a52250:[165, 204.88, 243.38, 281.88, 316.25, 522.5, 869],
    a41115:[132, 165, 193.88, 222.75, 251.63, 419.38, 683.38],
    a41150:[158.82, 176, 211.07, 245.44, 279.82, 482.64, 808.5],
    a41170:[147.13, 182.88, 220, 258.5, 297, 521.13, 877.25],
    a41250:[166.38, 207.63, 264, 320.38, 374, 691.63, 1225.1],
    a42115:[195.25, 243.38, 273.63, 303.88, 335.5, 495, 767.25],
    a42150:[241.32, 257.13, 288.75, 321.07, 352.69, 543.82, 864.18],
    a42170:[210.38, 262.63, 299.75, 338.25, 376.75, 578.88, 926.75],
    a42250:[231, 287.38, 342.38, 396, 445.5, 735.63, 1221],
    a31115:[237.88, 295.63, 349.25, 401.5, 452.38, 752.13, 1225.13],
    a31150:[264, 295.63, 358.88, 420.75, 481.93, 825.68, 1314.5],
    a31170:[262.63, 327.25, 396, 463.38, 532.13, 936.38, 1566.41],
    a31250:[297, 371.25, 473, 574.75, 671, 1241.63, 1974.89],
    a32115:[379.5, 415.25, 485.38, 554.13, 621.5, 972.13, 1505.63],
    a32150:[380.18, 415.25, 485.38, 554.13, 621.5, 1004.43, 1555.82],
    a32170:[412.5, 515.63, 589.88, 664.13, 738.38, 1137.13, 1819.13],
    a32250:[453.75, 566.5, 672.38, 778.25, 874.5, 1443.75, 2396.63],

}

var posterPrice={
    a31115:[237.88, 295.63, 349.25, 401.5, 452.38, 752.13, 1225.13],
    a31150:[264, 295.63, 358.88, 420.75, 481.93, 825.68, 1314.5], 
    a31170:[262.63, 327.25, 396, 463.38, 532.13, 936.38, 1566.41], 
    a31250: [297, 371.25, 473, 574.75, 671, 1241.63, 1974.89], 
    a32115:[379.5, 415.25, 485.38, 554.13, 621.5, 972.13, 1505.63],
    a32150:[380.18, 415.25, 485.38, 554.13, 621.5, 1004.43, 1555.82],
    a32170:[412.5, 515.63, 589.88, 664.13, 738.38, 1137.13, 1819.13],
    a32250:[453.75, 566.5, 672.38, 778.25, 874.5, 1443.75, 2396.63],
    a21115:[404.25, 474.38, 556.88, 639.38, 721.88, 1197.63, 1949.75],
    a21150:[404.25, 504.63, 605, 704, 803, 1386, 2304.5], 
    a21170:[418, 522.5, 631.13, 739.75, 848.38, 1491.88, 2505.25],
    a21250: [475.75, 594, 754.88, 917.13, 1069.75, 1947.39, 3381.07],
    a22115:[752.84, 806.42, 913.39, 1020.56, 1127.51, 1769.92, 2649.72],
    a22150: [778.18, 839.54, 961.97, 1084.69, 1207.14, 1942.6, 2983.33],
    a22170:[791.89, 857.45, 988.26, 1119.36, 1250.16, 2035.9, 3163.62],
    a22250:[852.24, 939.3099999999998, 1113.07, 1287.18, 1460.93, 2504.58, 3987.43], 
    a11115:[630.09, 707.2, 861.61, 1016.05, 1170.46, 1960.75, 3184.5],
    a11150:[657.36, 749.96, 935.35, 1120.81, 1306.24, 2267.38, 3762],
    a11170:[672.09, 773.07, 975.24, 1177.44, 1379.63, 2442, 4090.63],
    a11250:[736.65, 876.14, 1155.54, 1434.92, 1714.33, 3239.51, 5715.9],
    a12115: [1155.4, 1232.51, 1386.9, 1541.33, 1695.75, 2622.22, 4166.35],
    a12150:[1194.37, 1286.98, 1472.39, 1657.84, 1843.26, 2955.84, 4810.1],
    a12170: [1215.45, 1316.41, 1518.57, 1720.79, 1922.98, 3136.12, 5158.03],
    a12250:[1305.89, 1445.38, 1724.78, 2004.17, 2283.57, 3959.95, 6753.89],
}

var postercardPrice={
    dl2501:[89.38, 111.38, 141.63, 171.88, 199.38, 369.88, 369.88],
    dl3501:[125.13, 141.63, 173.25, 203.5, 233.75, 408.38, 676.5], 
    dl2502:[132, 165, 195.25, 225.5, 254.38, 419.38, 697.13],
    dl3502: [130.63, 147.13, 180.13, 211.75, 243.38, 426.25, 706.75],
    a62501:[67.38, 83.88, 107.25, 130.63, 151.25, 281.88, 497.75],
    a63501:[94.88, 118.25, 143, 167.75, 192.5, 341, 585.75],
    a62502: [99, 123.7, 148.5, 171.88, 192.5, 319, 613.25],
    a63502: [99, 123.75, 149.88, 176, 202.13, 358.88, 616],
    a53501:[149.88, 187, 247.5, 306.63, 364.38, 705.38, 1040.12],
    a53502: [187, 230.32, 312.82, 391.18, 464.75, 825.68, 1197.63],
    a43501:[199.38, 248.88, 327.25, 407, 482.63, 935, 1453.09],
    a43502:[279.13, 323.13, 409.75, 494.32, 576.13, 1021.63, 1608.75],
    
}
var complimentPrice={
    dl1001:[63.25, 68.07, 78.38, 89.38, 99.68, 162.25, 266.07],
    dl1002:[109.32, 115.5, 127.88, 140.93, 153.32, 226.18, 345.13], 
    dl1201:[78.38, 97.63, 126.5, 154, 181.5, 343.75, 613.25],
    dl1202:[137.5, 170.5, 203.5, 236.5, 268.13, 449.63, 752.13],
}

var letterheadPrice={
    a41001:[136.13, 147.82, 170.5, 193.18, 215.88, 352, 578.18],
    a41002:[199.38, 213.13, 240.63, 268.13, 295.63, 457.88, 722.57],
    a41201:[165, 206.25, 264, 323.13, 382.25, 719.13, 1240.7],
    a41202: [287.38, 358.88, 426.25, 495, 562.38, 941.88, 1575.75],
}

var bannerPrice={
    ss850:[80],
    ss1200:[120],
    pb850:[150],
    pb1200:[200],
    pb1800:[296],
    pb2400:[395],
    px600:[116.88],
}
var signagePrice={
    only1:[151.25,673.75,1326.88]
}
var envPrice={
    dlw1:[215.05, 238.77, 338.38, 683.1, 861.78],
    dlw2:[218.22, 241.93, 343.13, 697.33, 888.67],
    dlw3:[219.79, 245.09, 347.88, 709.98, 917.13],
    dlw4:[161.28, 178.68, 238.77, 411.13, 744.77],
    dlw5:[162.87, 181.84, 245.09, 425.36, 771.65],
    dlw6:[166.03, 185.01, 249.83, 439.58, 800.12], 
    dlw7:[222.96, 246.68, 308.34, 480.7, 826.99],
    dlw8:[224.53, 249.83, 313.08, 493.35, 855.46], 
    dlw9: [227.7, 253, 317.83, 507.58, 882.33], 
    dlb1:[207.14, 230.87, 320.99, 641.98, 779.56], 
    dlb2:[210.31, 234.03, 327.32, 654.63, 804.86],
    dlb3:[215.05, 238.77, 338.38, 683.1, 861.78],
    dlb4:[153.38, 170.78, 222.96, 370.02, 660.97],
    dlb5:[156.54, 173.93, 227.7, 382.67, 684.68],
    dlb6:[161.28, 178.68, 238.77, 411.13, 744.77],
    dlb7:[215.05, 238.77, 290.95, 439.58, 744.77],
    dlb8:[218.22, 241.93, 295.69, 452.23, 770.07],
    dlb9: [222.96, 246.68, 308.34, 480.7, 826.99],
    dlxw1:[215.05, 238.77, 338.38, 683.1, 888.67],
    dlxw2:[218.22, 241.93, 343.13, 697.33, 917.13],
    dlxw3:[219.79, 245.09, 347.88, 709.98, 944.01],
    dlxw4:[170.78, 189.75, 260.91, 466.47, 855.46],
    dlxw5:[173.93, 192.92, 267.23, 480.7, 882.33],
    dlxw6:[175.52, 194.49, 271.98, 493.35, 910.8],
    dlxw7:[232.44, 257.74, 328.9, 534.47, 937.68],
    dlxw8:[235.61, 260.91, 335.23, 548.69, 964.57],
    dlxw9:[237.18, 264.07, 339.97, 562.93, 991.44],
    dlxb1:[213.47, 237.18, 332.07, 668.87, 834.9],
    dlxb2:[215.05, 238.77, 338.38, 683.1, 861.78],
    dlxb3:[211.88, 235.61, 330.48, 667.29, 834.9],
    dlxb4:[162.87, 181.84, 245.09, 425.36, 771.65],
    dlxb5: [166.03, 185.01, 249.83, 438.01, 795.37],
    dlxb6:[162.87, 181.84, 245.09, 425.35, 774.82], 
    dlxb7:[224.53, 249.83, 313.08, 493.35, 855.46],
    dlxb8:[227.7, 253, 317.83, 506, 879.18],
    dlxb9:[224.53, 249.83, 311.51, 493.35, 857.03],
    b4:[485.44, 722.63, 967.73, 1211.23, 2680.22],
    c5p1:[275.13, 305.18, 460.14, 970.88, 1440.52],
    c5p2: [246.68, 275.13, 411.13, 698.92, 1323.51], 
    c5p3:[297.28, 328.9, 455.4, 774.82, 1364.63],
    c5w1:[262.48, 290.95, 433.27, 901.32, 1302.95],
    c5w2:[268.82, 298.86, 450.66, 944.01, 1385.18],
    c5w3:[235.61, 260.91, 384.24, 630.92, 1184.36],
    c5w4:[241.93, 268.82, 400.06, 672.03, 1268.17],
    c5w5:[284.63, 316.25, 428.52, 706.82, 1225.48],
    c5w6:[268.82, 298.86, 450.66, 944.01, 1385.18],
    c5w7:[292.53, 324.16, 444.33, 747.93, 1309.28],
    c5wm1:[249.83, 276.72, 406.38, 833.32, 1165.38],
    c5wm2:[268.82, 298.86, 450.66, 944.01, 1385.18],
    c5wm3:[235.61, 260.91, 384.24, 630.92, 1184.36],
    c5wm4:[241.93, 268.82, 400.06, 672.03, 1268.17],
    c5wm5:[284.63, 316.25, 428.52, 706.82, 1225.48],
    c5wm6:[268.82, 298.86, 450.66, 944.01, 1385.18],
    c5wm7:[292.53, 324.16, 444.33, 747.93, 1309.28],


}



var fileType = ['jpeg','png','jpg','gif','xlc','doc','pdf','txt'];
var fileSuffix = ['.jpeg','.png','.jpg','.gif','.xlc','.doc','.pdf','.txt'];

