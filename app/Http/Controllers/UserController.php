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

use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
   public function userLogin(Request $request) {
      // session处理
      session_start();
      
      $userName=$request->input('username');
      $userPassword=$request->input('password');

      $loginCheck = '';
      try {
         $message = DB::table('oneprint_user')
                     ->select('user_name','user_password','user_type')
                     ->where('user_name',$userName)->get();
      }
      catch (\Exception $e) {
         DB::rollBack();
         $loginCheck = false;
         $userMessage['logincheck'] = $loginCheck;
         return response()->json($userMessage);
      }
      
      if($message[0]->user_name == null) {
         $loginCheck = "user don't exist";
      } else if ($message[0]->user_password != $userPassword) {
         $loginCheck = "password is wrong";
      } else {
         $loginCheck = "success";
      };
      
      $_SESSION['username'] = $userName;
      $_SESSION['type'] = $message[0]->user_type;

      $userMessage['username'] = $userName;
      $userMessage['logincheck'] = $loginCheck;
      $userMessage['type'] = $message[0]->user_type;

      return response()->json($userMessage);
   }
   // check login status
   public function loginStatus() {

      session_start();
      if (isset($_SESSION['username'])) {
         
         $loginStatus['username'] = $_SESSION['username'];
         $loginStatus['type'] = $_SESSION['type'];
         $loginStatus['flag'] = true;
         return response()->json($loginStatus);

      } else {
         $loginStatus['flag'] = false;
         return response()->json($loginStatus);
      }
   }
   // user loginOut and delete session
   public function loginOut() {
      session_start();
      unset($_SESSION['username']); 
      $loginOut['result'] = 'success';
      return response()->json($loginOut);
   }

   public function userRegister(Request $request) {

      //检测是否已经被注册
      $user_name = $request->input('userName');
      $user_businessName = $request->input('businessName');
      $user_firstName = $request->input('firstName');
      $user_lastName = $request->input('lastName');
      $user_email = $request->input('email');
      $user_password = $request->input('password');
      $user_phonenum = $request->input('phoneNumber');
      $user_address = $request->input('address');
      $user_subrub = $request->input('subrub');
      $user_state = $request->input('state');
      $user_country = $request->input('country');
      $user_postcode = $request->input('postcode');
      $user_date = $request->input('registerDdata');

      try {
         $userCheck = DB::table('oneprint_user')->select('user_name')->where('user_name',$user_name)->get();
      }
      catch (\Exception $e) {
         DB::rollBack();
         $register['result'] = 'fail';
         return response()->json($register);
         // return 
      }
      $register['result'] = '';
      if(!$userCheck->isEmpty()) {
         $register['result'] = "repeat";
         return response()->json($register);

      } else {
         // user id set
         $user_id = DB::table('oneprint_user')->orderBy('user_id', 'desc')->first()->user_id;
         $user_id = $user_id + 1;
         // insert data
         try {
            DB::table('oneprint_user')->insert([
               'user_name' => $user_name,
               'user_type' => 0,
               'user_bsName' => $user_businessName,
               'user_firstName' => $user_firstName,
               'user_lastName' => $user_lastName,
               'user_password' => $user_password,
               'user_email' => $user_email,
               'user_phonenum' => $user_phonenum,
               'user_address' => $user_address,
               'user_subrub' => $user_subrub,
               'user_state' => $user_state,
               'user_country' => $user_country,
               'user_postcode' => $user_postcode,
               'user_date' => $user_date,
               'user_id' => $user_id
            ]);
            $register['result'] = 'success';
         }
         catch (\Exception $e) {
            DB::rollBack();
            $register['result'] = 'fail';
            return response()->json($register);
            // return 
         }
        
        return response()->json($register);
        
      }
   }

   public function userUpdateMessage(Request $request) {

      $user_name = $request->input('userName');

      $user_businessName = $request->input('businessName');
      $user_firstName = $request->input('firstName');
      $user_lastName = $request->input('lastName');
      $user_password = $request->input('password');
      $user_email = $request->input('email');
      $user_phonenum = $request->input('phoneNumber');
      $user_address = $request->input('address');
      $user_subrub = $request->input('subrub');
      $user_state = $request->input('state');
      $user_postcode = $request->input('postcode');
      try {
         DB::table('oneprint_user')->where('user_name',$user_name)->update([

            'user_bsName' => $user_businessName,
            'user_firstName' => $user_firstName,
            'user_lastName' => $user_lastName,
   
            'user_password' => $user_password,
            'user_email' => $user_email,
            'user_phonenum' => $user_phonenum,
            'user_address' => $user_address,
            'user_subrub' => $user_subrub,
            'user_state' => $user_state,
            'user_postcode' => $user_postcode
   
         ]);
      } catch (\Exception $e) {
         DB::rollBack();
         $result = "fail";
         return response()->json($result);
         // return 
      }
      
      $result = "true";
      return response()->json($result);
   }

   public function forgetPassword(Request $request)
   {

      $username = $request->input('userName');
      $useremail = $request->input('email');

      $loginCheck['result'] = '';
      try {
         $message = DB::table('oneprint_user')
                      ->select('user_name','user_password','user_email')
                      ->where('user_name',$username)->get();
      } catch (\Exception $e) {
         DB::rollBack();
         // return 
      }

      if($message ->isEmpty() ) {

         $loginCheck['result'] = "user don't exist";

      } else if ($message[0]->user_email == $useremail) {

         $loginCheck['result'] = "password email has been send to your email";
         $title = "Your password";
         $content = "Password: ".$message[0]->user_password."\n";
         $toMail = $useremail;
         $toMail = 'anmouer@163.com';
         Mail::raw($content, function ($message) use ($toMail, $title) {

            $message->subject($title);
            $message->to($toMail);

         });
      };
      // 
      return response()->json($loginCheck);
   }

}
