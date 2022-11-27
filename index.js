function calculateGrade(){
    let grade = document.getElementById("grade").value;

        if (grade > 100) {
           document.getElementById("result").innerHTML = `Invalid Grade.`
        }
        else if (grade >= 79) {
            document.getElementById("result").innerHTML = `Excellent, your grade is A.`
         }
        else if (grade >= 60 ) {
            document.getElementById("result").innerHTML = `Your grade is B, It's fair.`
        }
        else if (grade >= 49) {
            document.getElementById("result").innerHTML = `Your grade is C, you need to put more effort.`
        }
        else if (grade >= 40) {
            document.getElementById("result").innerHTML = `Your grade is D, prepare for supplementary exam.`
        }
        else if  ( grade >= 0 && grade < 40 ) {
            document.getElementById("result").innerHTML = `Your grade is E, you will not proceed to the next class.`
        }
        else if (grade < 0) {
            document.getElementById("result").innerHTML = `Invalid Grade.`
         }
        else {
            document.getElementById("result").innerHTML = `You did not input marks`
        }

}