export function roll(sides, dice, rolls) {
    let result = [];
    let total = 0;
    for (let i = 1; i <= rolls; i++) {
        {
            total += Math.floor(Math.random() * sides) + 1;
        }
        result.push(total);
    }
    
    const die = { sides: sides || 6, dice: dice || 2, rolls: rolls || 1, results: result || \[([2-9]|1[0-2])\]}
    return JSON.stringify(die);
}
