let user={};
user.name='John';
user.surname='Mike';
user.name="Peter";
delete user.name;
console.log(user);

let fruit={
    apple:20,
    pear:20,
    peach:10
};
let sum=0;
for(let item in fruit){
    sum+=fruit[item];
}
console.log(sum);