function square(x){return x*x;}
function map(arr,square){
    let output=[];
    for(i=0;i<arr.length;i++){
        output.push(square(arr[i]));
    }
    console.log(output);
}

const arr=[1,2,3,4,5];
map(arr,square);

function map1(arr,Math){
    let output=[];
    for(i=0;i<arr.length;i++){
        output.push(Math.sqrt(arr[i]));
    }
    console.log(output);
}
map1([1,4,9,16,25],Math);