let setStudentApi=(student,age)=>{
    console.log("1. Starting..");
    setTimeout=(()=>{
        console.log("2. setting age for the student");
        student.age=age;
    },500);
    console.log("3. Done..");
}

let student={name:"Abdoulkalim"};
setStudentApi(student,20);

console.log(student);