//BOXの入力値を変数に代入
$('#num').change(function(){
 num =$('#num').val();
   	
  if(!num.match(/^[0-9]+$/) || 1 > num || num > 10 ){
  	alert("半角数字で1~10の間でいれろ");
  	$(this).css('background-color','#ecc').focus();
  	$checkFlacg=1;
      }else{
      	$(this).css('background-color','#fff');
      	$checkFlacg=0;
      } 
  });







function addcheck(){
	//var aStr=$('#addr').val();	
	
  	
  	for( var i in getCheck ){ //配列をループして、取り出したキーをiに代入する
  		//未入力の場合だけピンクにしたいので
  		if(getCheck[i].val()==""){
  			getCheck[i].css('background-color','#ecc');
  			  return false; //送信させない
  			 }else{
  			 	//入力されていたら、数字なのか、カタカナなのか、番地が含まれるかチェック
  			 	if($checkFlacg==1){
  			 		return false; //送信させない    //break ; ループを抜ける
  			 	}else{
  			 		if(i==1){ //もし住所なら
  			 		  if(!$('#addr').val().match(/[0-9０-９]/) ){
  	           $('#addr').css('backglound-color','#ecc').focus();
  	  	        alert("住所は番地まで入れてください");
  	            return fals; //送信させない
               }else{
  	            $('#addr').css('backglound-color','#fff');
  			 		   }
  			    }//番地チェックの終わり
  			 }//値チェックの終わり
  		}//未入力チェックの終わり
  	}//forの終わり
  	return true;
};//functionの終わり





// カタカナチェック

//function kanacheck(){;
	$('#kana').change(function(){
		
	var kana = document.frm.kana.value;
 // 半角と全角の0-9まで  	
  if(!kana.match(/^[ァ-ン]+$/) ){
  	alert("フリガナはカタカナで");
  	$checkFlacg=1;
  }else{
  	$checkFlacg=0;
  }
});








var rykn_array = [9000,10500,6500,7000];
var checkFlag = 0 ;//どこかにエラーがあれば1を代入
//必須項目を配列にする
//var  getCheck= { "num":$("num"), "addr":$("addr"), "kana":$("kana") }
var  getCheck= [ $("#num"), $("#addr"), $("#kana") ];
	
	
	//$('#sub').click(function(){ //送信ボタンのクリックイベント

	//});


$('#runch').click(function(){
$('#jkn_rnch').show(800); 
$('#jkn_dinr').hide(500);
});



$('#diner').click(function(){
$('#jkn_dinr').show(800); 
$('#jkn_rnch').hide(500);
});



$('#total_chk').click( function(){
  var nStr=1 ; const tax=1.08;
  //ランチかディナーの選ばれている方を計算する式
  
  if( $('#runch').prop('checked') ){
  //チェックされていたらtrueを返す。ランチの合計を計算
    var menu= //選択されたセレクトメニューの値を取得
    $('select[name="cose_rnch"] option:selected').val();
    
    }else if($('#diner').prop('checked')){ //ディナーがonなら
    var menu=
    $('select[name="cose_diner"] option:selected').val();
  }else{ //どっちかを選んでいない場合
  alert("ランチがディナーを選んでね");
  }

  //合計してtextBoxに値を表示
  $("#total_plice").val( (rykn_array[menu] * nStr * tax ).toLocaleString()
  );
 
});

 
 


 
 
document.onkeypress = enter;
    function enter(){
        if( window.event.keyCode == 13 ){
            return false;
        }
    }

