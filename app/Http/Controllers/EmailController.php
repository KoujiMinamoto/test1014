<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Storage;

 class EmailController extends Controller
 {


    
   function contactEmail(Request $request) {

        $contactDate = $request->input('data');

        $product = $request->input('product');
        $jobDescription = $request->input('jobDescription');
        $postcode = $request->input('postcode');
        $businessName = $request->input('businessName');
        $name = $request->input('name');
        $email = $request->input('email');
        $telephone = $request->input('telephone');
        $mode = $request->input('mode');
        $subscribe = $request->input('subscribe');

        if ($subscribe == true) {
            $subscribe = "yes";
        } else {
            $subscribe = "no";
        }
        $title = $contactDate." contact message";
        // 获取邮箱内容
        $content = "qoute on: ".$product."\n";
        $content = $content."Job Description: ".$jobDescription."\n";
        
        $content = $content . "Delivery Postcode: " . $postcode . "\n";
        $content = $content . "Business Name: " . $businessName . "\n";
        $content = $content . "Customer Name: " . $jobDescription . "\n";
        $content = $content . "Email: " . $email . "\n";
        $content = $content . "Telephone: " . $telephone . "\n";
        $content = $content . "Way to find us: " . $mode . "\n";
        $content = $content . "Subscribe to our newsletter for special offers: " . $subscribe . "\n";

        $toMail = 'anmouer@163.com';

        $file_path = opendir('files\\');
        $sendFile = 'empty';

        while( ($filename = readdir($file_path)) !== false) {
            if ( $filename !="." && $filename !='..') {
                $sendFile = $filename;
                break;
            }
        }

        if ($sendFile == 'empty') {
            try {
                Mail::raw($content, function ($message) use ($toMail, $title) {
                    $message->subject($title);
                    $message->to($toMail);
                });
            } catch (\Exception $e) {
                DB::rollBack();
                return false;
                // return 
            }
    
        } else {
            try {
                Mail::raw($content, function ($message) use ($toMail, $title , $sendFile) {
                    $message->subject($title);
                    $message->to($toMail);
                    $attachment = public_path( 'files\\'.$sendFile );
                    $message->attach($attachment,['as'=>$sendFile]);
                });
            } catch (\Exception $e) {
                DB::rollBack();
                return false;
                // return 
            }
        }
        closedir($file_path); 
        $path = "files/";
        if(is_dir($path)){
            // 扫描一个文件夹内的所有文件夹和文件并返回数组
            $p = scandir($path);
            foreach($p as $val){
                if($val !="." && $val !=".."){
                    if(is_dir($path.$val)){
              // 子目录中操作删除文件夹和文件
                        deldir($path.$val.'/');
              // 目录清空后删除空文件夹
                        @rmdir($path.$val.'/');
                    }else{
              // 如果是文件直接删除
                        unlink($path.$val);
                    }
                }
            }
        }

        return true;
     }


     function bookletsEmail(Request $request) {

        $finishedBookSize = $request->input('finishedBookSize');
        $orientation = $request->input('orientation');

        $internalPages = $request->input('internalPages');
        $cover = $request->input('cover');
        $includingCover = $request->input('includingCover');
        $internalPages2 = $request->input('internalPages2');
        $cover2 = $request->input('cover2');
        $binding = $request->input('binding');
        $laminateCover = $request->input('laminateCover');
        $coverSpecialFinish = $request->input('coverSpecialFinish');

        $artworkSuppliedIn = $request->input('artworkSuppliedIn');
        $proofRequired = $request->input('proofRequired');
        $quality = $request->input('quality');
        $jobDescription = $request->input('jobDescription');
        $deliveryPostcode = $request->input('deliveryPostcode');
        $businessName = $request->input('businessName');
        $name = $request->input('name');

        $email = $request->input('email');
        $telephone = $request->input('telephone');
        $way = $request->input('way');
        $subscribe = $request->input('subscribe');
        $date = $request->input('date');

        if ($subscribe == true) {
            $subscribe = "yes";
        } else {
            $subscribe = "no";
        }
        $title = $date." booklets message";
        // 获取邮箱内容
        $content = "Finished Book Size: ".$finishedBookSize."\n";
        $content = $content."Orientation: ".$orientation."\n";
        $content = $content . "Internal Pages: " . $internalPages . "\n";
        $content = $content . "Cover: " . $cover . "\n";
        $content = $content . "Number of pages including cover: " . $includingCover . "\n";
        $content = $content . "Internal Pages: " . $internalPages2 . "\n";
        $content = $content . "Cover: " . $cover2 . "\n";
        $content = $content . "Binding: " . $binding . "\n";
        $content = $content . "Laminate Cover: " . $laminateCover . "\n";

        $content = $content . "Cover Special Finish: " . $coverSpecialFinish . "\n";
        $content = $content . "Artwork Supplied In: " . $artworkSuppliedIn . "\n";
        $content = $content . "Proof Required: " . $proofRequired . "\n";
        $content = $content . "Quantity: " . $quality . "\n";
        $content = $content . "Job Description: " . $jobDescription . "\n";
        $content = $content . "Delivery Postcode: " . $deliveryPostcode . "\n";
        $content = $content . "Business Name:: " . $businessName . "\n";

        $content = $content . "Your Name: " . $name . "\n";
        $content = $content . "Email: " . $email . "\n";
        $content = $content . "Telephone: " . $telephone . "\n";
        $content = $content . "How did you find us: " . $way . "\n";
        $content = $content . "Subscribe to our newsletter for special offers: " . $subscribe . "\n";

        $toMail = 'anmouer@163.com';
        $sendFile = 'empty';

        $file_path = opendir('files');
        $change = dir('files');
        while ($file = $change ->read()){  
            if($file !="." && $file !=".."){ 
                if(is_file('files/'.$file)){
                     $files[]= $file;
                     $sendFile = $file;
                }else{
                     
                }               
            } 
        }
        
        if ($sendFile == 'empty') {
            try {
                Mail::raw($content, function ($message) use ($toMail, $title) {
                    $message->subject($title);
                    $message->to($toMail);
                });
            } catch (\Exception $e) {
                DB::rollBack();
                return false;
                // return 
            }

        } else {
            try {
                Mail::raw($content, function ($message) use ($toMail, $title , $sendFile) {
                    $message->subject($title);
                    $message->to($toMail);
                    $attachment = public_path( 'files\\'.$sendFile );
                    $message->attach($attachment,['as'=>$sendFile]);
                });
            } catch (\Exception $e) {
                DB::rollBack();
                return false;
                // return 
            }
        }
        closedir($file_path);

        $path = "files/";
        if(is_dir($path)){
            // 扫描一个文件夹内的所有文件夹和文件并返回数组
            $p = scandir($path);
            foreach($p as $val){
                if($val !="." && $val !=".."){
                    if(is_dir($path.$val)){
              // 子目录中操作删除文件夹和文件
                        deldir($path.$val.'/');
              // 目录清空后删除空文件夹
                        @rmdir($path.$val.'/');
                    }else{
              // 如果是文件直接删除
                        unlink($path.$val);
                    }
                }
            }
        }

        return true;

     }

    //  function websiteDesignEmail(Request $request) {

    //     $contactName = $request->input('contactName');
    //     $businessName = $request->input('businessName');

    //     $phone = $request->input('phone');
    //     $email = $request->input('email');
    //     $date = $request->input('date');
    //     $title = $date." website design message";
    //     // 获取邮箱内容
    //     $content = "Contact Name: ".$contactName."\n";
    //     $content = $content."Business Name: ".$businessName."\n";
    //     $content = $content . "Telephone: " . $phone . "\n";
    //     $content = $content . "Email Address: " . $email . "\n";

    //     $toMail = 'anmouer@163.com';
    //     try {
    //         Mail::raw($content, function ($message) use ($toMail, $title) {
    //             $message->subject($title);
    //             $message->to($toMail);
    //         });
    //     } catch (\Exception $e) {
    //         DB::rollBack();
    //         return false;
    //         // return 
    //     }
    //     return true;

    //  }

    //  public function samplePackEmail(Request $request){

    //     $businessName = $request->input('businessName');
    //     $name = $request->input('name');
    //     $email = $request->input('email');
    //     $address = $request->input('address');
    //     $subrub = $request->input('subrub');
    //     $state = $request->input('state');
    //     $postcode = $request->input('postcode');
    //     $phone = $request->input('phone');
    //     $comment = $request->input('comment');
    //     $subscribe = $request->input('subscribe');
    //     $date = $request->input('date');
    //     if ($subscribe == true) {
    //         $subscribe = "yes";
    //     } else {
    //         $subscribe = "no";
    //     }

    //     $title = $date." sample pack";
    //     // 获取邮箱内容
    //     $content = "Business Name: ".$businessName."\n";
    //     $content = $content."Your Name: ".$name."\n";
    //     $content = $content . "Email: " . $email . "\n";
    //     $content = $content . "Address: " . $address . "\n";
    //     $content = $content."Suburb: ".$subrub."\n";
    //     $content = $content . "State: " . $state . "\n";
    //     $content = $content . "Postcode: " . $postcode . "\n";
    //     $content = $content . "Telephone: ".$phone."\n";
    //     $content = $content . "Comment: " . $comment . "\n";
    //     $content = $content . "Subscribe: " . $subscribe . "\n";


    //     $toMail = 'anmouer@163.com';

    //     Mail::raw($content, function ($message) use ($toMail, $title) {
    //         $message->subject($title);
    //         $message->to($toMail);
    //     });

    //     return true;


    //  }
     // 支付成功后，发送邮件
    public function orderEmail(Request $request) {

        $username = $request->input('username');
        $email = $request->input('email');
        $phone = $request->input('phone');
        $address = $request->input('address');
        $subrub = $request->input('subrub');
        $state = $request->input('state');
        $data = $request->input('data');
        
        if ($subscribe == true) {
            $subscribe = "yes";
        } else {
            $subscribe = "no";
        }
        $title = $date." booklets message";
        // 获取邮箱内容
        $content = "name: ".$username."\n";
        $content = $content."Email: ".$email."\n";
        $content = $content . "PhoneNumber: " . $phone . "\n";
        $content = $content . "Address: " . $address . "\n";
        $content = $content . "Subrub: " . $subrub . "\n";
        $content = $content . "State: " . $state . "\n";
        $content = $content . "Data: " . $data . "\n";

        $toMail = 'anmouer@163.com';
        $sendFile = 'empty';

        $file_path = opendir('files');
        $change = dir('files');
        while ($file = $change ->read()){  
            if($file !="." && $file !=".."){ 
                if(is_file('files/'.$file)){
                     $files[]= $file;
                     $sendFile = $file;
                }else{
                     
                }               
            } 
        }
        
        if ($sendFile == 'empty') {
            Mail::raw($content, function ($message) use ($toMail, $title) {
                $message->subject($title);
                $message->to($toMail);
            });
    
        } else {
            Mail::raw($content, function ($message) use ($toMail, $title , $sendFile) {
                $message->subject($title);
                $message->to($toMail);
                $attachment = public_path( 'files\\'.$sendFile );
                $message->attach($attachment,['as'=>$sendFile]);
            });    
        }
        closedir($file_path);
        return true;
        
    }

    public function uploadFile(Request $request){
        
        if($request->hasFile('file')&&$request->file('file')->isValid()){

            $path = "files/";
            if(is_dir($path)){
                //扫描一个文件夹内的所有文件夹和文件并返回数组
                $p = scandir($path);
                foreach($p as $val){
                    if($val !="." && $val !=".."){
                        if(is_dir($path.$val)){
                  //子目录中操作删除文件夹和文件
                            deldir($path.$val.'/');
                  //目录清空后删除空文件夹
                            @rmdir($path.$val.'/');
                        }else{
                  //如果是文件直接删除
                            unlink($path.$val);
                        }
                    }
                }
            }

            $file=$request->file('file');
            
            $destinationPath = 'files/';
            $extension = $file->getClientOriginalExtension();

            $realPath = $file->getRealPath();

            // file name make
            $files_length = 45;
            $filesname = openssl_random_pseudo_bytes($files_length);
            $filesname = base64_encode($filesname);
            $filesname = str_replace(['/', '+', '='], '', $filesname);
            $fileName = substr($filesname, 0, $files_length).'.'.$extension;;
            


            $bool = Storage::disk('uploads')->put($fileName,file_get_contents($realPath));
            if($bool){
                
                $file->move($destinationPath,$fileName);
                $filePath = asset($destinationPath.$fileName);

                return true;
            }else{
                return false;
            }

        }
        return false;
    }
 }