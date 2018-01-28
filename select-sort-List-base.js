var _ =require('underscore');
/*
    @purpose 选择排序呢基础版本
    @createTime 2016-12-25 15:39
    @author miles_fk
    @PS
        1百万石会很慢，nodeJS 假死-2016-12-25 23:30
 */


 //运行时间Log
 function* speedTime() {
   var startTime = Date.now();
   console.log("programmer-sort is start ......................");
   yield 'start------->'+startTime;

   var endTime = Date.now();
   var speedTime = endTime-startTime;
   console.log("speedTime----->"+speedTime);
   console.log("programmer-sort is end ......................");
   yield 'end------>'+speedTime;

   return 'ending';
 }

 var st = speedTime();

//生成随机数List
function makeRNList(maxLen) {
    var x = []
    var len = 0;
    var flag = true;

    while (flag) {
      if(len == maxLen ) flag = false;
      var randomNumber = _.random(0, maxLen);
      x.push(randomNumber);
      len++;
    }
    return x ;
}

//排序函数
function sortList(list) {
    function swap(maxIndex , minIndex) {
        var tempItem =  list[maxIndex];
        list[maxIndex] = list[minIndex];
        list[minIndex] = tempItem;
    }
    var len = list.length;
    for(var  i = 0 ; i < len ; i ++){
      // 寻找[i, n)区间里的最小值
      var  minIndex = i;

      for( var  j = i + 1 ; j < len ; j ++ ){
          if( list[j] < list[minIndex] ){
              minIndex = j;
          }
      }
      swap(i,minIndex);
    }
}

var list = makeRNList(1000000);
//console.log("old-list---------->",list);
st.next();
sortList(list);
st.next();
//console.log("sort-list---------->"+list);
