function show_hidden() {
    //$('#galleryfor15_id').slideToggle(3000);
    var height = 0, display = false, timer;
    eleMore = document.getElementById("galleryfor15_id");
    var step = function() {
        height = display? (height + 20): (height - 20);
        if (height < 0) {
            height = 0;    
        } else if (height > 750) {
            height = 750;    
        }
        eleMore.style.height = height + "px";
        if (height > 0 && height < 750) {
            timer = setTimeout(step, 60);
        }
    };

 
    if (document.getElementById("galleryfor15_id").style.display == 'block') {

        document.getElementById("galleryfor15_id").style.display = 'none';


    } else {
        if (timer) clearTimeout(timer)
    display = !display;
    step();

        document.getElementById("galleryfor15_id").style.display = 'block';
        

    }
    
    

}
function showPhotos(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < 6; i++) {
        x[i].style.display = "none";
    }
    x[n].style.display = "block";
    }
function clickPhoto(headerName){
    switch (headerName) {
        case 1:
            showPhotos(0);
            break;
        case 2:
            showPhotos(1);
            break;
        case 3:
            showPhotos(2);
            break;
        case 4:
            showPhotos(3);
            break;
        case 5:
            showPhotos(4);
            break;
        case 6:
            showPhotos(5);
            break;
    }

}
function clickGallery(headerName){
    var button = document.getElementsByClassName("gallery_page_next");
    switch (headerName) {
        case 1:
            document.getElementById("gallery_info_for6_1_id").style.backgroundImage="url(../image/gallery/bro-1.jpg)";
            document.getElementById("gallery_info_for6-1_id").style.backgroundImage="url(../image/gallery/bro-1.jpg)";
            document.getElementById("gallery_info_for6_2_id").style.backgroundImage="url(../image/gallery/bro-2.jpg)";
            document.getElementById("gallery_info_for6-2_id").style.backgroundImage="url(../image/gallery/bro-2.jpg)";
            document.getElementById("gallery_info_for6_3_id").style.backgroundImage="url(../image/gallery/bro-3.jpg)";
            document.getElementById("gallery_info_for6-3_id").style.backgroundImage="url(../image/gallery/bro-3.jpg)";
            document.getElementById("gallery_info_for6_4_id").style.backgroundImage="url(../image/gallery/bro-4.jpg)";
            document.getElementById("gallery_info_for6-4_id").style.backgroundImage="url(../image/gallery/bro-4.jpg)";
            document.getElementById("gallery_info_for6_5_id").style.backgroundImage="url(../image/gallery/bro-5.jpg)";
            document.getElementById("gallery_info_for6-5_id").style.backgroundImage="url(../image/gallery/bro-5.jpg)";
            document.getElementById("gallery_info_for6_6_id").style.backgroundImage="url(../image/gallery/bro-6.jpg)";
            document.getElementById("gallery_info_for6-6_id").style.backgroundImage="url(../image/gallery/bro-6.jpg)";
            document.getElementById("gallery_silde_note_id1").innerText = "Product directions1";
            document.getElementById("gallery_silde_note_id2").innerText = "Product directions2";
            document.getElementById("gallery_silde_note_id3").innerText = "Product directions3";
            document.getElementById("gallery_silde_note_id4").innerText = "Product directions4";
            document.getElementById("gallery_silde_note_id5").innerText = "Product directions5";
            document.getElementById("gallery_silde_note_id6").innerText = "Product directions6";
            for (var i=0; i < button.length; i++) {
                button[i].onclick = function(){
                    clickProduct(1);
                }
            };
            break;
        case 2:
            document.getElementById("gallery_info_for6_1_id").style.backgroundImage="url(../image/gallery/Brochure1.jpg)";
            document.getElementById("gallery_info_for6-1_id").style.backgroundImage="url(../image/gallery/Brochure1.jpg)";
            document.getElementById("gallery_info_for6_2_id").style.backgroundImage="url(../image/gallery/Brochure2.jpg)";
            document.getElementById("gallery_info_for6-2_id").style.backgroundImage="url(../image/gallery/Brochure2.jpg)";
            document.getElementById("gallery_info_for6_3_id").style.backgroundImage="url(../image/gallery/Brochure3.jpg)";
            document.getElementById("gallery_info_for6-3_id").style.backgroundImage="url(../image/gallery/Brochure3.jpg)";
            document.getElementById("gallery_info_for6_4_id").style.backgroundImage="url(../image/gallery/Brochure4.jpg)";
            document.getElementById("gallery_info_for6-4_id").style.backgroundImage="url(../image/gallery/Brochure4.jpg)";
            document.getElementById("gallery_info_for6_5_id").style.backgroundImage="url(../image/gallery/Brochure5.jpg)";
            document.getElementById("gallery_info_for6-5_id").style.backgroundImage="url(../image/gallery/Brochure5.jpg)";
            document.getElementById("gallery_info_for6_6_id").style.backgroundImage="url(../image/gallery/bro-1.jpg)";
            document.getElementById("gallery_info_for6-6_id").style.backgroundImage="url(../image/gallery/bro-1.jpg)";
            document.getElementById("gallery_silde_note_id1").innerText = "Product directions1";
            document.getElementById("gallery_silde_note_id2").innerText = "Product directions2";
            document.getElementById("gallery_silde_note_id3").innerText = "Product directions3";
            document.getElementById("gallery_silde_note_id4").innerText = "Product directions4";
            document.getElementById("gallery_silde_note_id5").innerText = "Product directions5";
            document.getElementById("gallery_silde_note_id6").innerText = "Product directions6";
            for (var i=0; i < button.length; i++) {
                button[i].onclick = function(){
                    clickProduct(1);
                }
            };
            break;
        case 3:
            document.getElementById("gallery_info_for6_1_id").style.backgroundImage="url(../image/gallery/bc1.jpg)";
            document.getElementById("gallery_info_for6-1_id").style.backgroundImage="url(../image/gallery/bc1.jpg)";
            document.getElementById("gallery_info_for6_2_id").style.backgroundImage="url(../image/gallery/bc2.jpg)";
            document.getElementById("gallery_info_for6-2_id").style.backgroundImage="url(../image/gallery/bc2.jpg)";
            document.getElementById("gallery_info_for6_3_id").style.backgroundImage="url(../image/gallery/bc3.jpg)";
            document.getElementById("gallery_info_for6-3_id").style.backgroundImage="url(../image/gallery/bc3.jpg)";
            document.getElementById("gallery_info_for6_4_id").style.backgroundImage="url(../image/gallery/bc4.jpg)";
            document.getElementById("gallery_info_for6-4_id").style.backgroundImage="url(../image/gallery/bc4.jpg)";
            document.getElementById("gallery_info_for6_5_id").style.backgroundImage="url(../image/gallery/bc5.jpg)";
            document.getElementById("gallery_info_for6-5_id").style.backgroundImage="url(../image/gallery/bc5.jpg)";
            document.getElementById("gallery_info_for6_6_id").style.backgroundImage="url(../image/gallery/bc6.jpg)";
            document.getElementById("gallery_info_for6-6_id").style.backgroundImage="url(../image/gallery/bc6.jpg)";
            document.getElementById("gallery_silde_note_id1").innerText = "Product directions1";
            document.getElementById("gallery_silde_note_id2").innerText = "Product directions2";
            document.getElementById("gallery_silde_note_id3").innerText = "Product directions3";
            document.getElementById("gallery_silde_note_id4").innerText = "Product directions4";
            document.getElementById("gallery_silde_note_id5").innerText = "Product directions5";
            document.getElementById("gallery_silde_note_id6").innerText = "Product directions6";
            for (var i=0; i < button.length; i++) {
                button[i].onclick = function(){
                    clickProduct(2);
                }
            };
            break;
        case 4:
            document.getElementById("gallery_info_for6_1_id").style.backgroundImage="url(../image/gallery/dl1.jpg)";
            document.getElementById("gallery_info_for6-1_id").style.backgroundImage="url(../image/gallery/dl1.jpg)";
            document.getElementById("gallery_info_for6_2_id").style.backgroundImage="url(../image/gallery/dl2.jpg)";
            document.getElementById("gallery_info_for6-2_id").style.backgroundImage="url(../image/gallery/dl2.jpg)";
            document.getElementById("gallery_info_for6_3_id").style.backgroundImage="url(../image/gallery/dl3.jpg)";
            document.getElementById("gallery_info_for6-3_id").style.backgroundImage="url(../image/gallery/dl3.jpg)";
            document.getElementById("gallery_info_for6_4_id").style.backgroundImage="url(../image/gallery/dl4.jpg)";
            document.getElementById("gallery_info_for6-4_id").style.backgroundImage="url(../image/gallery/dl4.jpg)";
            document.getElementById("gallery_info_for6_5_id").style.backgroundImage="url(../image/gallery/dl3.jpg)";
            document.getElementById("gallery_info_for6-5_id").style.backgroundImage="url(../image/gallery/dl3.jpg)";
            document.getElementById("gallery_info_for6_6_id").style.backgroundImage="url(../image/gallery/dl4.jpg)";
            document.getElementById("gallery_info_for6-6_id").style.backgroundImage="url(../image/gallery/dl4.jpg)";
            document.getElementById("gallery_silde_note_id1").innerText = "Product directions1";
            document.getElementById("gallery_silde_note_id2").innerText = "Product directions2";
            document.getElementById("gallery_silde_note_id3").innerText = "Product directions3";
            document.getElementById("gallery_silde_note_id4").innerText = "Product directions4";
            document.getElementById("gallery_silde_note_id5").innerText = "Product directions5";
            document.getElementById("gallery_silde_note_id6").innerText = "Product directions6";
            for (var i=0; i < button.length; i++) {
                button[i].onclick = function(){
                    clickProduct(14);
                }
            };
            break;
        case 5:
            document.getElementById("gallery_info_for6_1_id").style.backgroundImage="url(../image/gallery/Poster1.jpg)";
            document.getElementById("gallery_info_for6-1_id").style.backgroundImage="url(../image/gallery/Poster1.jpg)";
            document.getElementById("gallery_info_for6_2_id").style.backgroundImage="url(../image/gallery/Poster2.jpg)";
            document.getElementById("gallery_info_for6-2_id").style.backgroundImage="url(../image/gallery/Poster2.jpg)";
            document.getElementById("gallery_info_for6_3_id").style.backgroundImage="url(../image/gallery/Poster3.jpg)";
            document.getElementById("gallery_info_for6-3_id").style.backgroundImage="url(../image/gallery/Poster3.jpg)";
            document.getElementById("gallery_info_for6_4_id").style.backgroundImage="url(../image/gallery/Poster4.jpg)";
            document.getElementById("gallery_info_for6-4_id").style.backgroundImage="url(../image/gallery/Poster4.jpg)";
            document.getElementById("gallery_info_for6_5_id").style.backgroundImage="url(../image/gallery/Poster3.jpg)";
            document.getElementById("gallery_info_for6-5_id").style.backgroundImage="url(../image/gallery/Poster3.jpg)";
            document.getElementById("gallery_info_for6_6_id").style.backgroundImage="url(../image/gallery/Poster4.jpg)";
            document.getElementById("gallery_info_for6-6_id").style.backgroundImage="url(../image/gallery/Poster4.jpg)";
            document.getElementById("gallery_silde_note_id1").innerText = "Product directions1";
            document.getElementById("gallery_silde_note_id2").innerText = "Product directions2";
            document.getElementById("gallery_silde_note_id3").innerText = "Product directions3";
            document.getElementById("gallery_silde_note_id4").innerText = "Product directions4";
            document.getElementById("gallery_silde_note_id5").innerText = "Product directions5";
            document.getElementById("gallery_silde_note_id6").innerText = "Product directions6";
            for (var i=0; i < button.length; i++) {
                button[i].onclick = function(){
                    clickProduct(12);
                }
            };
            break;
        case 6:
            document.getElementById("gallery_info_for6_1_id").style.backgroundImage="url(../image/gallery/pc1.jpg)";
            document.getElementById("gallery_info_for6-1_id").style.backgroundImage="url(../image/gallery/pc1.jpg)";
            document.getElementById("gallery_info_for6_2_id").style.backgroundImage="url(../image/gallery/pc2.jpg)";
            document.getElementById("gallery_info_for6-2_id").style.backgroundImage="url(../image/gallery/pc2.jpg)";
            document.getElementById("gallery_info_for6_3_id").style.backgroundImage="url(../image/gallery/pc3.jpg)";
            document.getElementById("gallery_info_for6-3_id").style.backgroundImage="url(../image/gallery/pc3.jpg)";
            document.getElementById("gallery_info_for6_4_id").style.backgroundImage="url(../image/gallery/pc4.jpg)";
            document.getElementById("gallery_info_for6-4_id").style.backgroundImage="url(../image/gallery/pc4.jpg)";
            document.getElementById("gallery_info_for6_5_id").style.backgroundImage="url(../image/gallery/pc5.jpg)";
            document.getElementById("gallery_info_for6-5_id").style.backgroundImage="url(../image/gallery/pc5.jpg)";
            document.getElementById("gallery_info_for6_6_id").style.backgroundImage="url(../image/gallery/pc4.jpg)";
            document.getElementById("gallery_info_for6-6_id").style.backgroundImage="url(../image/gallery/pc4.jpg)";
            document.getElementById("gallery_silde_note_id1").innerText = "Product directions1";
            document.getElementById("gallery_silde_note_id2").innerText = "Product directions2";
            document.getElementById("gallery_silde_note_id3").innerText = "Product directions3";
            document.getElementById("gallery_silde_note_id4").innerText = "Product directions4";
            document.getElementById("gallery_silde_note_id5").innerText = "Product directions5";
            document.getElementById("gallery_silde_note_id6").innerText = "Product directions6";
            for (var i=0; i < button.length; i++) {
                button[i].onclick = function(){
                    clickProduct(13);
                }
            };
            break;
        case 7:
            document.getElementById("gallery_info_for6_1_id").style.backgroundImage="url(../image/gallery/ev1.jpg)";
            document.getElementById("gallery_info_for6-1_id").style.backgroundImage="url(../image/gallery/ev1.jpg)";
            document.getElementById("gallery_info_for6_2_id").style.backgroundImage="url(../image/gallery/ev2.jpg)";
            document.getElementById("gallery_info_for6-2_id").style.backgroundImage="url(../image/gallery/ev2.jpg)";
            document.getElementById("gallery_info_for6_3_id").style.backgroundImage="url(../image/gallery/ev3.jpg)";
            document.getElementById("gallery_info_for6-3_id").style.backgroundImage="url(../image/gallery/ev3.jpg)";
            document.getElementById("gallery_info_for6_4_id").style.backgroundImage="url(../image/gallery/ev4.jpg)";
            document.getElementById("gallery_info_for6-4_id").style.backgroundImage="url(../image/gallery/ev4.jpg)";
            document.getElementById("gallery_info_for6_5_id").style.backgroundImage="url(../image/gallery/ev3.jpg)";
            document.getElementById("gallery_info_for6-5_id").style.backgroundImage="url(../image/gallery/ev3.jpg)";
            document.getElementById("gallery_info_for6_6_id").style.backgroundImage="url(../image/gallery/ev4.jpg)";
            document.getElementById("gallery_info_for6-6_id").style.backgroundImage="url(../image/gallery/ev4.jpg)";
            document.getElementById("gallery_silde_note_id1").innerText = "Product directions1";
            document.getElementById("gallery_silde_note_id2").innerText = "Product directions2";
            document.getElementById("gallery_silde_note_id3").innerText = "Product directions3";
            document.getElementById("gallery_silde_note_id4").innerText = "Product directions4";
            document.getElementById("gallery_silde_note_id5").innerText = "Product directions5";
            document.getElementById("gallery_silde_note_id6").innerText = "Product directions6";
            for (var i=0; i < button.length; i++) {
                button[i].onclick = function(){
                    clickProduct(6);
                }
            };
            break;
        case 8:
            document.getElementById("gallery_info_for6_1_id").style.backgroundImage="url(../image/gallery/fy1.jpg)";
            document.getElementById("gallery_info_for6-1_id").style.backgroundImage="url(../image/gallery/fy1.jpg)";
            document.getElementById("gallery_info_for6_2_id").style.backgroundImage="url(../image/gallery/fy2.jpg)";
            document.getElementById("gallery_info_for6-2_id").style.backgroundImage="url(../image/gallery/fy2.jpg)";
            document.getElementById("gallery_info_for6_3_id").style.backgroundImage="url(../image/gallery/fy3.jpg)";
            document.getElementById("gallery_info_for6-3_id").style.backgroundImage="url(../image/gallery/fy3.jpg)";
            document.getElementById("gallery_info_for6_4_id").style.backgroundImage="url(../image/gallery/fy4.jpg)";
            document.getElementById("gallery_info_for6-4_id").style.backgroundImage="url(../image/gallery/fy4.jpg)";
            document.getElementById("gallery_info_for6_5_id").style.backgroundImage="url(../image/gallery/fy3.jpg)";
            document.getElementById("gallery_info_for6-5_id").style.backgroundImage="url(../image/gallery/fy3.jpg)";
            document.getElementById("gallery_info_for6_6_id").style.backgroundImage="url(../image/gallery/fy4.jpg)";
            document.getElementById("gallery_info_for6-6_id").style.backgroundImage="url(../image/gallery/fy4.jpg)";
            document.getElementById("gallery_silde_note_id1").innerText = "Product directions1";
            document.getElementById("gallery_silde_note_id2").innerText = "Product directions2";
            document.getElementById("gallery_silde_note_id3").innerText = "Product directions3";
            document.getElementById("gallery_silde_note_id4").innerText = "Product directions4";
            document.getElementById("gallery_silde_note_id5").innerText = "Product directions5";
            document.getElementById("gallery_silde_note_id6").innerText = "Product directions6";
            for (var i=0; i < button.length; i++) {
                button[i].onclick = function(){
                    clickProduct(8);
                }
            };
            break;
        case 9:
            document.getElementById("gallery_info_for6_1_id").style.backgroundImage="url(../image/gallery/lh1.jpg)";
            document.getElementById("gallery_info_for6-1_id").style.backgroundImage="url(../image/gallery/lh1.jpg)";
            document.getElementById("gallery_info_for6_2_id").style.backgroundImage="url(../image/gallery/lh2.jpg)";
            document.getElementById("gallery_info_for6-2_id").style.backgroundImage="url(../image/gallery/lh2.jpg)";
            document.getElementById("gallery_info_for6_3_id").style.backgroundImage="url(../image/gallery/lh3.jpg)";
            document.getElementById("gallery_info_for6-3_id").style.backgroundImage="url(../image/gallery/lh3.jpg)";
            document.getElementById("gallery_info_for6_4_id").style.backgroundImage="url(../image/gallery/lh4.jpg)";
            document.getElementById("gallery_info_for6-4_id").style.backgroundImage="url(../image/gallery/lh4.jpg)";
            document.getElementById("gallery_info_for6_5_id").style.backgroundImage="url(../image/gallery/lh5.jpg)";
            document.getElementById("gallery_info_for6-5_id").style.backgroundImage="url(../image/gallery/lh5.jpg)";
            document.getElementById("gallery_info_for6_6_id").style.backgroundImage="url(../image/gallery/lh6.jpg)";
            document.getElementById("gallery_info_for6-6_id").style.backgroundImage="url(../image/gallery/lh6.jpg)";
            document.getElementById("gallery_silde_note_id1").innerText = "Product directions1";
            document.getElementById("gallery_silde_note_id2").innerText = "Product directions2";
            document.getElementById("gallery_silde_note_id3").innerText = "Product directions3";
            document.getElementById("gallery_silde_note_id4").innerText = "Product directions4";
            document.getElementById("gallery_silde_note_id5").innerText = "Product directions5";
            document.getElementById("gallery_silde_note_id6").innerText = "Product directions6";
            for (var i=0; i < button.length; i++) {
                button[i].onclick = function(){
                    clickProduct(10);
                }
            };
            break;
        case 10:
            document.getElementById("gallery_info_for6_1_id").style.backgroundImage="url(../image/gallery/s1.jpeg)";
            document.getElementById("gallery_info_for6-1_id").style.backgroundImage="url(../image/gallery/s1.jpeg)";
            document.getElementById("gallery_info_for6_2_id").style.backgroundImage="url(../image/gallery/s2.png)";
            document.getElementById("gallery_info_for6-2_id").style.backgroundImage="url(../image/gallery/s2.png)";
            document.getElementById("gallery_info_for6_3_id").style.backgroundImage="url(../image/gallery/s3.png)";
            document.getElementById("gallery_info_for6-3_id").style.backgroundImage="url(../image/gallery/s3.png)";
            document.getElementById("gallery_info_for6_4_id").style.backgroundImage="url(../image/gallery/s4.jpg)";
            document.getElementById("gallery_info_for6-4_id").style.backgroundImage="url(../image/gallery/s4.jpg)";
            document.getElementById("gallery_info_for6_5_id").style.backgroundImage="url(../image/gallery/s3.png)";
            document.getElementById("gallery_info_for6-5_id").style.backgroundImage="url(../image/gallery/s3.png)";
            document.getElementById("gallery_info_for6_6_id").style.backgroundImage="url(../image/gallery/s4.jpg)";
            document.getElementById("gallery_info_for6-6_id").style.backgroundImage="url(../image/gallery/s4.jpg)";
            document.getElementById("gallery_silde_note_id1").innerText = "Product directions1";
            document.getElementById("gallery_silde_note_id2").innerText = "Product directions2";
            document.getElementById("gallery_silde_note_id3").innerText = "Product directions3";
            document.getElementById("gallery_silde_note_id4").innerText = "Product directions4";
            document.getElementById("gallery_silde_note_id5").innerText = "Product directions5";
            document.getElementById("gallery_silde_note_id6").innerText = "Product directions6";
            for (var i=0; i < button.length; i++) {
                button[i].onclick = function(){
                    clickProduct(5);
                }
            };
            break;

    }
}
