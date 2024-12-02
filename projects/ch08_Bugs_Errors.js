var accounts = {
    a: 100,
    b: 0,
    c: 20
};

function getAccount() {
    let accountName = prompt("Enter an account name");
    if (!Object.hasOwn(accounts, accountName)) {
        throw new Error(`No such account: ${accountName}`);
    }
    return accountName;
}

function transfer(from, amount) {
    if (accounts[from] < amount) return;
    accounts[from] -= amount;
    accounts[getAccount()] += amount;
}

function transfer(from, amount) {
    if (accounts[from] < amount) return;
    let progress = 0;
    try {
        accounts[from] -= amount;
        progress = 1;
        accounts[getAccount()] += amount;
        progress = 2;
    } finally {
        if (progress == 1) {
            accounts[from] += amount;
        }
    }
}

var InputError = class InputError extends Error { }

function promptDirection(question) {
    let result = prompt(question);
    if (result.toLowerCase() == "left") return "L";
    if (result.toLowerCase() == "right") return "R";
    throw new InputError("Invalid direction: " + result);
}


// EXECRCICE 1 : RETRY

class MultiplicatorUnitFailure extends Error { }

function primitiveMultiply(a, b) {
    if (Math.random() < 0.2) {
        return a * b;
    } else {
        throw new MultiplicatorUnitFailure("Klunk");
    }
}

function reliableMultiply(a, b) {
    let f = false;
    while (f == false) {
        try {
            let c = 0;
            c = primitiveMultiply(a, b);
            return c;
        } catch (e) {
            if (!(e instanceof MultiplicatorUnitFailure)) {
                throw e;
            }
        }
    }
}

console.log(reliableMultiply(8, 8));

// EXERCICE 2 : THE LOCKED BOX

const box = new class {
    locked = true;
    #content = [];

    unlock() { this.locked = false; }
    lock() { this.locked = true; }
    get content() {
        if (this.locked) throw new Error("Locked!");
        return this.#content;
    }
};

function withBoxUnlocked(body) {
    let locked = box.locked;
    if (locked) box.unlock();
    try {
        return body();
    } finally {
        if (locked) box.unlock();
    }
}

withBoxUnlocked(() => {
    box.content.push("gold piece");
});

try {
    withBoxUnlocked(() => {
        throw new Error("Pirates on the horizon! Abort!");
    });
} catch (e) {
    console.log("Error raised:", e);
}

console.log(box.locked);
// → true