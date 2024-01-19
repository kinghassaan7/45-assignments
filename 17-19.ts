let list3=['Essa','Adam','Umair']; 
let msg4=`I would like to invite you to dinner.`
// let removal='Essa'
// let newG='Ali';
// let remove=list1.indexOf(removal);
// if(remove!==-1){
//     list1.splice(remove,1,newG);
// }




for (let x of list3){
    console.log('Dear',x,msg4);
}

console.log(`\n  ${list3[0]} could not make it to dinner \t \n`);

list3[0]='Ali';

for (let x of list3){
    console.log('Dear',x,msg4);
}

console.log(`\t\nI found a bigger table.\t\n`);

 list3.unshift('Ahmed'); //Added to the beggining 

 list3.splice(Math.floor(list3.length/2),0,'Mussa');


 for (let x of list3){
    console.log('Dear',x,msg4);
}

console.log('Sorry unfortunately I can invite only two guests on dinner.')

while(list3.length>2){
    let removedguest=list3.pop();
    console.log(`Sorry ${removedguest}, we were unable to invite you for dinner due to limited rescources.`)

}
