class Taiyaki{
    constructor(nakami){
        this.nakami = nakami;
    }

    printnakami(){
        console.log(`中身は${this.nakami}です`);
    }
}

new Taiyaki("あんこ").printnakami();
new Taiyaki("クリーム").printnakami();
new Taiyaki("チーズ").printnakami();