export const CalcRes = (value) => {
    if (value == '0/0') return 'Not Defined';
    if (value[value.length - 1] == '%' ||
        value[value.length - 1] == '*' ||
        value[value.length - 1] == '-' ||
        value[value.length - 1] == '+' ||
        value[value.length - 1] == '/' ||
        value[value.length - 1] == '.'
    ) {
        let val = [...value]
        val.pop();
        let res = [eval(val)].toString().split(',')
        return res.join('');
    }
    let res = [eval(value)].toString().split(',');
    return res.join('');
}
// no. and dot case remaining
export const appendVal = (Symbol, Field) => {
    let arr = [...Field];
    if (Field == 'Not Defined' || Field == 'Infinity' || Field == '-Infinity') arr = [0];
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
            arr.splice(arr.length, 0, '0', Symbol);
            return arr.join('');
        }
        else if (arr.includes('%') || arr.includes('/') || arr.includes('*') || arr.includes('+') || arr.includes('-')) {
            let str = arr.join('');
            let arr2 = str.split(/[+\-*/%]/);  // [3,3]
            arr2[arr2.length - 1].toString().includes('.') ? '' : arr.push(Symbol);
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