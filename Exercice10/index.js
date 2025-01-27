//votre code ici
function printNumbers(n){
    let result = "";

    for (let i = 1; i <= n; i++){
        switch (i){
            case (n):
                result += i.toString();
                break;
            default:
                result += i.toString() + " ";
                break;
        }
    }

    return result;
}

export default printNumbers
