
/*
  @purpose 最大堆实现

  获得父节点、儿子节点
      parent(i) => return i/2
      leftChildItem(i) => return 2*i
      rightChildItem(i) => (2*i+1)

  @createTime 2017-01-18 11:35
  @author  miles_fk
*/

function  MaxHeap(int capacity) {
        data = []; //初始化 存放堆的数组
        count = 0;
        this.capacity = capacity;

        function swap(a , b ) {
              var temp = data[a];
              data[a] = data[b];
              data[b] = temp;
        }
        /*
            @purpose 插入一个新的元素
            @createTime 2017-02-02 15:16
            @author miles_fk
         */
        function shiftUp( k ) {
              //如果父节点小于子节点则进行交换，然后接着递归
              while (k>1 && data[k/2] < data[k]) {
                    var fatherNode = k / 2; //获取父节点
                    swap( fatherNode ,k); //交换父子节点的值
                    k = fatherNode ; //重新设置子节点
              }
        }

        /*
            @purpose  返回最数组长度
         */
        this.size = function size() {
            return count;
        }

        /*
            @purpose 是否为空
         */
        this.isEmpty = function isEmpty() {
            retur  count == 0;
        }

        this.insert =  function insert(item) {
            data[count+1] = item;
            count++;
            shiftUp(count);
        }
}
