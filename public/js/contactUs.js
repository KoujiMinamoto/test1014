function contactSendEmail() {

    let product = $("#contact_product option:selected").text()
    let jobDescription = $("#contact_description").val();
    let postcode = $("#contact_postcode").val();
    let businessName = $("#contact_businessName").val();
    let name = $("#contact_name").val();
    let email = $("#contact_email").val();
    let telephone = $("#contact_tel").val();
    let mode = $("#contact_mode option:selected").text()
    let subscribe = $("#contact_subscribe").prop("checked");
    
    // upload file
    let types = "file";
    let formData = new FormData();

  
    let file = $("#contact_file1").val();
    
    if (file == '') {

    } else {

        // type check
        let type = $("#contact_file1")[0].files[0].type;
        let typeChange = 0;
        for ( let i = 0 ; i < fileType.length ; ++i ) {
            // 判断一下格式对不对
            if ( type.indexOf(fileType[i]) != -1 ) {
                typeChange = 1;
            } else {
                
            }    
        };
        if ( typeChange != 1) {
            alert("Files in this format are not supported");
            return false;
        }
        // name check
        let fileName = $("#contact_file1")[0].files[0].name;
        let nameCheck = 0;
        for ( let i = 0 ; i < fileSuffix.length ; ++i ) {
            
            if ( fileName.indexOf(fileSuffix[i]) != -1 ) {
                nameCheck = 1;
            } else {
                
            }    
        };
        if ( nameCheck != 1) {
            alert("Files in this format are not supported");
            return false;
        }


        let size = $("#contact_file1")[0].files[0].size;
        if (size > 52428800) {
            alert("The uploaded file cannot exceed 50MB");
            return false;				
        } else {

            formData.append(types,$("#contact_file1")[0].files[0]);
            contactFileUp(formData);

        }
         
    }
    //get date
    let date = new Date();
    let seperator1 = "-";
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    let currentdate = year + seperator1 + month + seperator1 + strDate;

    $.ajax({
        headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
        type: "POST",
        url: "api/contactUs",
        // processData: false,
        // contentType: false,
        dataType:'json',
        data:{
            product:product,
            jobDescription:jobDescription,
            postcode:postcode,
            businessName:businessName,
            name:name,
            email:email,
            telephone:telephone,
            mode:mode,
            subscribe:subscribe,
            // formData,
            data:currentdate
        },
        success:function () {
            alert("send email success");
        },
        error:function () {
            alert("error");
        }
    }); 
}

function contactFileUp(formData) {
    $.ajax({
        headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
        type: "POST",
        url: "api/uploadFile",
        processData: false,
        contentType: false,
        dataType:'json',
        data:formData,
        success:function () {
            alert("upload file success");
        },
        error:function () {
            alert("upload file error");
        }
    });
}


