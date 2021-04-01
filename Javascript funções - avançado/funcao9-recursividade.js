function recursiva(max){
    if(max >= 10) return; //FUNCIONA COMO FOR
    max++;
    console.log(max);
    recursiva(max);
}

recursiva(0);