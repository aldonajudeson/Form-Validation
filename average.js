function count_average(arr) {
    let count=0;
    let sum=0;
    for(let i=0; i<arr.length;i++){
        let num=arr[i];
        if(num<0){
            count++;
            sum+=num;
        }
    }

    let average=count>0?sum/count:0;

    console.log("Count of negative numebers: ",count);
    console.log("Average of negative numbers: ",average);
    
    
}
let number=[5,3,5,10,4,10];
count_average(number);