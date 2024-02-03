function AlienToInteger(InputNumeral: string): number {
    // กำหนดค่าของอักษรและค่าตัวเลข
    const Value: { [key: string]: number } = {
        'A': 1,
        'B': 5,
        'Z': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'R': 1000
    };

    let total: number = 0;

    // วนลูปผ่านทุกตัวอักษรในสตริง Input Numeral
    for (let i = 0; i < InputNumeral.length; i++) {
        const oddPosition = InputNumeral[i];  //ตำแหน่งคี่
        const evenPosition = InputNumeral[i + 1];   //ตำแหน่งคู่

        // เช็คอักษรถัดไปมีค่ามากกว่าอักษรปัจจุบันหรือไม่
        if (evenPosition && Value[oddPosition] < Value[evenPosition]) {
            // หักค่า ในกรณีที่อักษรถัดไปมีค่ามากกว่าอักษรปัจจุบัน
            total += Value[evenPosition] - Value[oddPosition];
            // console.log(Value[evenPosition] )
            // เพิ่มค่า index เพื่อข้ามอักษรถัดไป
            i++;
        } else {
            // ในกรณีที่ลง else ให้บวกค่าของปัจจุบันเข้ากับผลรวม
            total += Value[oddPosition];
        }
    }

    return total;
}

console.log(AlienToInteger("AAA")); // ผลลัพธ์: 3
console.log(AlienToInteger("LBAAA")); // ผลลัพธ์: 58
console.log(AlienToInteger("RCRZCAB")); // ผลลัพธ์: 1994
