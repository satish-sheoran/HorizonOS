// FN to make Result = 0 OR clears it
export const clearResult = (textarea) => {
    setTimeout(() => {
        textarea.selectionStart = textarea.selectionEnd = 1;
    }, 0);
    return '0';
}

// FN which calculate the result
export const calculate = (value) => {
    if (value === '0/0') return 'Not Defined';
    if (value === 'Error') return 'Error';

    let expression = value; //the value which will be evaluate later and return its result
    const lastChar = expression[expression.length - 1]; //last character of our input

    // if ends with dot → add 0
    if (lastChar === '.') {
        expression += '0';
    }

    // if ends with operator → remove it
    if (/[+\-*/%]/.test(lastChar)) {
        expression = expression.slice(0, -1);
    }

    try {
        // Evaluate the expression and normalize floating-point output
        // - Cleans binary precision noise (e.g. 0.1 + 0.2 → 0.3, 1.9999999999999998 → 2)
        // - Limits significant digits to keep results readable
        // - Note: this is NOT exact rounding for repeating decimals
        //   (e.g. 22/7 → 3.142857142857…, so it will be trimmed, not perfectly represented)
        // - Goal: produce a stable, UI-friendly result, not mathematical exactness

        let num = eval(expression);

        // Handle special cases like Infinity / -Infinity
        if (!isFinite(num)) return { value: num.toString(), cursor: num.length };

        // Normalize number to avoid floating garbage while keeping reasonable precision
        let res = Number(parseFloat(num).toPrecision(20)).toString();
        return { value: res, cursor: res.length };
    } catch {
        return 'Error';
    }
};


// FN which manages entering of numbers,operator and '.'
export const manageEntries = (symbol, Field, start, end) => {
    let arr = [...Field];

    if (['Not Defined', 'Infinity', '-Infinity', 'Error'].includes(Field)) {
        arr = ['0'];
        Field = '0';
    }

    // FN which checks if passed num,value has any of these symbols
    const isOperator = (ch) => /[+\-*/%]/.test(ch);


    // LOGIC : FOR MAX LENGTH OF A NUMBER
    const lastNumber = Field.split(/[+\-*/%]/).pop(); //Last digit in our whole Field ex: + in '123+'
    if (lastNumber.length >= 20 && symbol != '.' && !isOperator(symbol)) return Field;

    let res = null; //result we will return


    // If User has SELECTED then remove the selected part || When Start!=End
    if (start !== end) { // 123+456-89 
        res = Field.slice(0, start) + Field.slice(end);
        end = start;
    }

    res = res ?? Field;

    /* ALL CASES */

    // 1.  Case of '.' 
    if (symbol == '.') {
        let allNums = res.split('');  // returns [1,2,+,2,.,3,-,2] for  "12+2.3-2"

        // Starting and ending index of our number on which we are trying to add '.' Ex - 456 in '12+4.56-8'
        let firstOpratorAfterStartPosition = allNums.findIndex((el, i) => {
            return i >= start && typeof el === "string" && isOperator(el);
        });
        let firstOpratorBeforeStartPosition = -1;
        for (let i = start - 1; i >= 0; i--) {
            if (typeof allNums[i] === "string" && isOperator(allNums[i])) {
                firstOpratorBeforeStartPosition = i;
                break;
            }
        }
        let currNum; //the no on which operation is being checked . ex: 34 in 1.2+34 if it includes a . OR not


        /* CASES*/
        if (firstOpratorAfterStartPosition === -1 && firstOpratorBeforeStartPosition === -1) {
            // khi bhi opertor na ho 
            currNum = res;

        }
        else if (firstOpratorBeforeStartPosition === -1 || firstOpratorAfterStartPosition === -1) {
            // bs phle || baadme operator ho 
            if (firstOpratorAfterStartPosition === -1) {
                currNum = res.slice(firstOpratorBeforeStartPosition + 1);
            } else {
                currNum = res.slice(0, start - 1);
            }

        }
        else {
            // dono jgh operator ho 
            currNum = res.slice(firstOpratorBeforeStartPosition + 1, firstOpratorAfterStartPosition);
        }
        /*CASES DONE */

        // WE GOT THE CURRNUM
        if (!currNum.includes('.')) {
            return { value: res.slice(0, start) + '.' + res.slice(start), cursor: start + 1 }
        }
        return { value: Field, cursor: start }; //because if no cases apply, to still we have removed the selected part above OR redo the start!=End case
    }

    /* 2. Case of  +,-,/,*,%  Operator */
    if (isOperator(symbol)) {
        //Checking if there is already symbol just before OR after the cursor 
        if (isOperator(res[start]) || isOperator(res[start - 1])) {

            let pos = isOperator(res[start - 1]) ? start - 1 : start; //Position where we do operation OR add our symbol

            if (pos === start - 1) {
                // Even if there is symbol before and after the cursor and user chooses to add operator then we will just repalce the current symbol with the before one symbol 
                res = res.slice(0, pos) + symbol + res.slice(pos + 1);
            }
            else {
                // IF operator is after the symobl then replace current one with that
                if (pos === start) res = Field.slice(0, pos) + symbol + Field.slice(pos + 1)
            }

            return { value: res, cursor: start + 1 };
        }

        // IF operator is NO where (Neither before nore after the cursor)
        res = res.slice(0, start) + symbol + Field.slice(start);
        let newCursor = Math.max(0, Math.min(start + 1, res.length));


        return { value: res, cursor: newCursor };
    }

    /* 3. Number (1234567890) Case */
    if (arr.length == 1 && arr[0] === '0') {
        let newCursor = Field.length;

        return { value: symbol, cursor: newCursor };
    }

    //Add symbol direct as of now it will only be a NUmber because all other cases are already written above and returned
    let newValue = Field.slice(0, start) + symbol + Field.slice(end);


    return { value: newValue, cursor: start + 1 };
}

// FN which remove the elem ust before the cursor in our input field
export const removeElem = (result, start, end, textarea) => {

    if (start === 0 || result === '0') {
        let newCursor = result.length;
        // restore cursor
        setTimeout(() => {
            textarea.selectionStart = textarea.selectionEnd = newCursor;
        }, 0);
        return result;
    }

    let res = result.slice(0, start - 1) + result.slice(end); //removing the item which is just before the cursor 
    if (res === '') res = '0';

    // clamp cursor so that it never go below 0 or greater than its length
    let newCursor = Math.max(0, Math.min(start - 1, res.length));

    // restore cursor AFTER render
    setTimeout(() => {
        textarea.selectionStart = textarea.selectionEnd = newCursor;
    }, 0);
    return res;
}


// FN which returns font size as per no. of chars in our input field
export const getFontClass = (len) => {
    if (len <= 10) return 'text-3xl md:text-4xl';
    if (len <= 20) return 'text-2xl md:text-3xl';
    if (len <= 30) return 'text-xl md:text-2xl';
    return 'text-lg md:text-2xl';
};



// EVERYTHING IS FINE JUST WRITE THE CODE PROPERLY , so in future if i read it then it do not give headache