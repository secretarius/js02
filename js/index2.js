// Recursion
const n = parseInt(prompt('Enter Fibinachi number - " Exemple with recurtion"'));

const res = fibRec(n);
alert(res);

function fibRec(n) {
    if (n == 1 || n == 2){
        return 1 
    }
    if (n == 0){
        return 0
    }
        return fibRec(n-1) + fibRec(n-2);
}