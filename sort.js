let input = prompt('Введите числа через запятую');//Получаю числа

let inArr = input.split(',');//Отделяю числа

let allArr = [];//Финальный массив

for (let i = 0; i < inArr.length; i++) {
   
   let j = parseInt(inArr[i]);//Делаю числа из строк

   if(!isNaN(j)){//Проверяю на нечисловые значения 

   	allArr.push(j);//Формирую массив, который будет сортироваться 
   }
}

finalArr = [];//Финалный массив, который будет выведен 

//Сортировка через поиск самого маленького значения, которое удаляется из первого массива и переносится в финальный массив
for (; allArr.length;){ finalArr.push(allArr.splice(allArr.indexOf(Math.min(...allArr)),1)[0])

};

console.log(finalArr);//Вывод финального отсортироанного массива

/*allArr.sort()*/ //Будет тот же результат //Для сорт не надо ничего в скобочки вводить , буквально в такси вспомнил.

