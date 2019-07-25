
//Условные операторы 
//Задание 1
  
const task1=(a,b) => console.log(a%2 == 0 ? a*b : a+b);

task1(6,8)

//Задание 2 

const task2=(x,y) =>
 {var message=(x<0)&&(y>0) ? 'Часть 1': (x>0)&&(y>0) ? 'Часть 2' : (x<0)&&(y<0) ? 'Часть 3' : (x>0)&&(y<0) ? 'Часть 4' : 'Совпадений нет';
 console.log(message)}

 task2(7,8)

// Задание 3 
const task3=(a,b,c) =>
{
let sum=0;
if(a>=0)
sum+=a
if(b>=0)
sum+=b
if(c>=0)
sum+=c
console.log(sum);}

task3(4,5,-3)

// Задание 4
const task4=(a,b,c) =>
{
 console.log((a*b*c)>(a+b+c) ? (a*b*c) : (a+b+c)+3);
}

 task4(9,1,4)

// Задание 5
const task5=(a) =>
{var message=(a>0)&&(a<20) ? 'F': (a>19)&&(a<40) ? 'E' : (a>39)&&(a<60) ? 'D' : (a>59)&&(a<75) ? 'C' : (a>74)&&(a<90) ? 'B' : (a>89)&&(a<101) ? 'A' : 'Совпадений нет';
console.log(message)}

task5(90)

//Циклы
// Задание 1
const cycle1=() =>{
 let k=0;
 let sum=0;
 for (let i=1; i<100; i++)
 {
    if(i%2==0)
    {
        k++;
        sum +=i;
    }
 }
 console.log(k);
 console.log(sum);
}

//Задание 2
const cycle2=(a) =>
{
let prostoe = true;
for(let i = 2; i<a; i++){
  if(a%i === 0)
    prostoe = false
}
console.log(prostoe? 'prostoe' : 'slognoe');
}

cycle2(18);

//Задание 3

const cycle3_1=(a) =>
{
for(let i = 0; i< a; i++){
  if((a/i) === i){
    console.log(i);
    break;}
 else console.log('целого корня нет');break;
}}
cycle3_1(19)

//----------Бинарный

   const cycle3_2=(a,b) => 
   { let high = a.length - 1;
    let start=0;
    let result = null;
    while(start<=high) 
    {
        let mid = Math.floor((high+start)/2);
        
        if( a[mid] === Math.sqrt(b)) 
        {
          result=a[mid];
        } else if( a[mid] > Math.sqrt(b)) {
            high = mid - 1;
        }   else {
            start = mid + 1;
        }
     }console.log(result);
     }
     var a=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
     cycle3_2(a,25)

//Задание 4
const cycle4=(n)=>
{for(let i = n; --i; ) {
    n *= i;
}console.log(n);}

cycle4(10)

// Задание 5
const cycle5=(n) =>
{sum=null;
ost=null;
while(n)
  {
        ost = n % 10;
        n = (n - ost)/10;
        sum += ost;

  }
console.log(sum);}
cycle5(145);

//Задание 6
const cycle6=(n)=>
{ost=null;
var  b = '';
while(n)
 {
 ost = n % 10;
 n = (n - ost)/10;
 b += ost;
 }
 console.log(b);}
 cycle6(468) 

//Массивы
//Задания 1-4 в одной функции
const array1_4=(a)=>
{var min=a[0];
for(let i = 0; i < a.length; i++)
{
    if(a[i] < min)
    {
        min = a[i];
        mn=i;
    }
}console.log('Минимальный элемент',min,'Индекс минимального элемента',mn);
var max=[0];
for (let i=0; i<a.length; i++)
{
  if (a[i]>max)
  {
    max=a[i];
    mx=i;
  }
}console.log('Максимальный элемент',max,'Индекс максимального элемента',mx);
}
var a=[11,3,4,5,6,7487,8,79,8,7,6,54,4,3,2780,10,0];
array1_4(a)

//Задание 5
const array5=(a)=>
{let sum=null;
for (let i=0; i<a.length; i++)
{
  if(i%2!=0)
  {
     sum+=a[i]
  }
}console.log(sum);}
var a=[1,2,3,4,5,6,7,8,4,2,4,6,7,8];
array5(a);

//Задание 6
const array6=(a)=>
{a=a.reverse();
console.log(a);}
var a=[1,2,3,4,5,6,7,8]
array6(a);
//-------------------------//
const array6_2=(a)=>
{var b=[];
let j=0;
for (let i=a.length-1; i>=0; i--)
{ 
  b[j]=a[i];
  j++; 
}
console.log(b);}
var a=[1,2,3,4,5,6,7,8,9]
array6_2(a)

//Задание 7
const cycle7=(a)=>
{let k=null;
for (let i=0; i<a.length; i++)
{
  if(a[i]%2!=0)
  {
     k++
  }
}console.log(k);}
var a=[1,2,3,4,5,6,7,8,4,2,4,6,7,8];
cycle7(a);

//Задание 8
const cycle8=()=>
{var array = [1,2,3,4,5,6]
 console.log(array.slice(array.length/2, array.length).concat(array.slice(0, array.length/2)))}
cycle8();

//Задание 9
var a=[1,3,6,2,4,8,9,15,7]; // общий массив для 3 сортировок

//Bubble
const bubble=(a)=>
{for( let i=0; i<a.length; i++)
{ for (let j=0; j<a.length-1; j++)
  {
     if(a[j+1]>a[j])
     {
        let t=a[j+1];
        a[j+1]=a[j];
        a[j]=t;
     }
  }
  
}console.log(a);}
bubble(a)

//Select
const select=(a)=>
{for ( let i=0; i<a.length; i++)
{
  let b=a[i]; j=i-1;
  while((j>=0)&&(a[j]<b))
  {
    a[j+1]=a[j]; j--;
  }
  a[j+1]=b;
}
console.log(a);}
select(a);

//Insert
const insert=(a)=>
{var a=[9,8,5,12,15,7,2,3,245,0,1]
for( let i=0; i<a.length-1;i++)
  { let min=i;
    for(let j=i+1;j<a.length; j++)
    {
      if(a[j]<a[min])
      {
        min=j;
      }
    }
     let t=a[min];
      a[min]=a[i];
      a[i]=t;
  }
console.log(a);}
insert(a);

// Задание 10
//Quick
  const quick=(a, low, high) =>{
  if (low>=high) return a;
  let i=low;
  let j=high;
  let pivot = a[parseInt((low+high)/2)]; 
  while(i<=j)
  {
   while (a[i]<pivot)
   {i++;}
   while (a[j]>pivot)
   {j--;}
   let temp = a[i];
   a[i] = a[j];
   a[j] = temp;
   i++;
   j--;            
}
a=quick(a,low,j);
a=quick(a,i,high);
return a;
}
var a=[1,2,45,6,3,9,0,5,34,6,45,-4,-56,4]
let low=0;
let high=a.length-1;
console.log(quick(a, low, high));

// HeapSort

var array_length;
function heap_root(input, i) {
    var left = 2 * i + 1;
    var right = 2 * i + 2;
    var max = i;
    if (left < array_length && input[left] > input[max]) {
        max = left;
    }
    if (right < array_length && input[right] > input[max])     {
        max = right;
    }
    if (max != i) {
        swap(input, i, max);
        heap_root(input, max);
    }
}

function swap(input, index_A, index_B) {
    var temp = input[index_A];
    input[index_A] = input[index_B];
    input[index_B] = temp;
}
function heapSort(input) {
    
    array_length = input.length;

    for (var i = Math.floor(array_length / 2); i >= 0; i -= 1)      {
        heap_root(input, i);
      }

    for (i = input.length - 1; i > 0; i--) {
        swap(input, 0, i);
        array_length--;
      
      
        heap_root(input, 0);
    } return arr;
}

var arr = [3, 0, 2, 5, -1, 4, 1];
heapSort(arr);
console.log(heapSort(arr));

//Функции
//Задание 1
const Day=(number)=>{
    switch(number){
        case 1: 
        console.log("Понедельник");
        break;
        case 2: 
        console.log("Вторник");
        break;
        case 3: 
        console.log("Среда");
        break;
        case 4:
        console.log("Четверг");
        break;
        case 5: 
        console.log("Пятница");
        break;
        case 6: 
        console.log("Суббота");
        break;
        case 7: 
        console.log("Воскресенье");
        break;
        default: 
        console.log("Неверный номер!");
    }
    }
  Day(2)

   // Задание 2
   const distance=(x1,x2,y1,y2)=>
  {
 console.log(((x2-x1)**2+(y2-y1)**2)**0,5);
  } 
  distance(2,5,4,8)
  