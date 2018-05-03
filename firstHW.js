var array =[]
for (var i=0; i<50; i++)
{
array[i]=i
}
//console.log(array)
//Вывести все числа от 1 до 100 которые делятся на 5 без остатка

for (var i=0; i<array.length; i++)
{
//if (array[i]%5==0)
//console.log(array[i])
}

//Дан массив(1,2,3,4,5,6,7,8,9,10) найти средне арифметичкое
var secondArray=[]
for (var i=1; i<=10; i++)
{
    secondArray[i]=i
}

var sum=0
for (var i in secondArray)
{
 sum+=secondArray[i]
 var avg = sum/10
}
//console.log(avg)
//Дан массив с числами(1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12).
// С помощью цикла выведите только те элементы массива, которые больше нуля и меньше 10-ти
var thirdArray=[1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12]
for (var i in thirdArray)
{
if (thirdArray[i]>0 && thirdArray[i]<10)
console.log(thirdArray[i])    
}


