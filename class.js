// 1.
class Student {
    isActive = true
    constructor (course ,university, fullName, mark) {
        this.course = course
        this.university = university
        this.fullName = fullName
        this.mark = mark
    }
    getInfo(){
        if(this.isActive){
            return `Студент ${this.course}го курсу ${this.university}, ${this.fullName}`
        }else{
            return null
        }
    }
    get marks(){
        return this.isActive ? this.mark : null
    }
    set newMarks(newArr){
        if(this.isActive){
            if(Array.isArray(newArr)){
                this.mark = this.mark.concat(newArr)
            }else{
                this.mark.push(newArr)
            }
            return this.mark
        }
    }
    getAverageMark(){
        if(this.isActive){
            let count = 0 
            for(let i = 0; i < this.mark.length; i ++){
                count += this.mark[i]
            }
            return count / this.mark.length
        }else{
            return null
        }
    }
    dismiss(){
        this.isActive = false
    }
    recover(){
        this.isActive = true
    }
}
const student = new Student(1, 'Вищої Школи Психотерапї м.Одеса', 'Остап Родоманський Бендер',[5,4,4,5]) 

student.dismiss()
student.recover()

console.log(student.getInfo());
console.log(student.marks);
console.log(student.newMarks = 5);
console.log(student.marks);
console.log(student.getAverageMark());

class BudgetStudent extends Student {
    isActive = true
    constructor(course, university, fullName, mark, scholarship){
        super(course, university, fullName, mark)
        this.scholarship = scholarship
        // this.timeActive = setInterval(() => {
        //     console.log(this.getScholarship());
        // }, 30000);
    }
    getScholarship(){
        if(this.getAverageMark() > 4){
            if(this.isActive){
                return `Ви отримали ${this.scholarship} грн. стипендї`
            }else{
                return null
            }
        }else{
            return null
        }
    }
}

const dotClass = new BudgetStudent(1, 'Вищої Школи Психотерапї м.Одеса', 'Остап Родоманський Бендер',[5,4,4,5],1400)
dotClass.dismiss()
dotClass.recover()
console.log(dotClass.getScholarship());








