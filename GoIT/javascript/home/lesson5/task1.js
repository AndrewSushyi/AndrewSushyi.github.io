/*Напишите код который выведет сотрудника который выполнил больше всех задач.*/
function maxTasks(obj){
    var currentMax="";
    var maxWorker;

    for ( var prop in obj){
        if(currentMax<obj[prop]) {
            currentMax=obj[prop];
            maxWorker=prop;
        }

    }
    console.log(maxWorker);
}
var tasksCompleted = {
    'Anna': 29,
    'Serg': 35,
    'Elena': 1,
    'Anton': 99
};

maxTasks(tasksCompleted);