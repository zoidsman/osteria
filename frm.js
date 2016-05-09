//BOXの入力値を変数に代入
function numcheck(){
 num =document.frm.num.value;
   	
  if(!num.match(/^[0-9]+$/) || 1 > num || num > 10 ){
  	alert("半角数字で1~10の間でいれろ");
  }
}
//実行場所をin bodyに変えてください!





function addcheck(){
	var addr =document.frm.addr.value;
 // 半角と全角の0-9まで  	
  if(!addr.match(/[0-9０-９]/) ){
  	alert("住所は番地まで入れてください");
  }
}
// カタカナチェック

function kanacheck(){;
	var kana = document.frm.kana.value;
 // 半角と全角の0-9まで  	
  if(!kana.match(/^[ァ-ン]+$/) ){
  	alert("フリガナはカタカナで");
  }
}

</script>





<script>
 var jkn_rnch = document.getElementById('jkn_rnch');
 var jkn_dinr = document.getElementById('jkn_dinr');
  const tax = 1.08; // 実行の過程で値が変わらないものはconst（定数）として宣言しておく。
 var rykn_array = [9000,10500,6500,7000];// 配列 array
 
 function dp_runch(){ 
 		jkn_rnch.className="block" ;
 		jkn_dinr.className="none" ;
 }
  function dp_dinr(){ 
 		jkn_rnch.className="none" ;
 		jkn_dinr.className="block" ;
 }
 
 function total_chk(){
 var total_plice=document.getElementById('total_plice');
var rl =document.frm.cose_runch;
//ラジオボタンランチのid
var rd =document.frm.cose_diner;
//ラジオボタンディナーのid

//セレクトメニューで選んだ値を取得するための文
if(document.frm.runch.checked){
	//ランチにチェックが入ったら.checkedの戻り値はtrueかfals
 var menu= rl.options[rl.selectedIndex].value;
}else if(document.frm.diner.checked){
	//ディナーにチェックが入ってたら
var menu= rd.options[rd.selectedIndex].value;
}else{
	//どっちにも入ってなかったら
	alert("ランチかディナーを選んでください");
}
//人数と消費税をかけ算した結果が出るように。
 total_plice.value= (num * rykn_array[menu] * tax).toLocaleString();
 //Boxの値がセレクトで選んだ値になる。toLocaleString()で桁区切り
 }

 
 
document.onkeypress = enter;
    function enter(){
        if( window.event.keyCode == 13 ){
            return false;
        }
    }

