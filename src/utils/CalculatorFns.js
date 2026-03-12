export const CalcRes = (value) => {
    if (value == '0/0') return 'Not Defined';
    return (eval(value)).toString();
}
// no. and dot case remaining
export const appendVal = (Symbol, Field) => {
    let arr = [...Field];
    if (Field == 'Not Defined') arr=[0];
        //  X
        if (Symbol == 'X') {
            if (arr.length >= 1) arr.pop();
            if (arr.length < 1) return '0';
            return arr.join('');
        }
        // . operator
        else if (Symbol == '.') {
            if (arr[arr.length - 1] == '%' ||
                arr[arr.length - 1] == '/' ||
                arr[arr.length - 1] == '*' ||
                arr[arr.length - 1] == '-' ||
                arr[arr.length - 1] == '+'
            ) {
                arr.push(Symbol);
                return arr.join('');
            }
            else if (arr.includes('%') || arr.includes('/') || arr.includes('*') || arr.includes('+') || arr.includes('-')) {
                let str = arr.join('');
                let arr2 = str.split(/[+\-*/%]/);
                arr2[arr.length - 1].includes('.') ? '' : arr.push(Symbol);
                return arr.join('');
            }
            else {
                arr.includes(Symbol) ? '' : arr.push(Symbol);
                return arr.join('')
            }

        }
        // rest operators +,-,/,*,%
        else if (Symbol == '%' || Symbol == '*' || Symbol == '-' || Symbol == '+' || Symbol == '/') {

            arr[arr.length - 1] == '%' ||
                arr[arr.length - 1] == '/' ||
                arr[arr.length - 1] == '+' ||
                arr[arr.length - 1] == '-' ||
                arr[arr.length - 1] == '%'
                ? arr[arr.length - 1] = Symbol : arr.push(Symbol);
            return arr.join('');
        }
        // just no. remaining case
        else {
            arr.length == 1 && arr[0] == '0' ? arr[0] = Symbol : arr.push(Symbol);
            return arr.join('')
        }

}