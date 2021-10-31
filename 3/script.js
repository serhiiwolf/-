function result() {
    let A = Number(document.getElementById('A').value);
    let B = Number(document.getElementById('B').value);
    for (let i = 0;i<100;i++) {
        let c = A*(i + 1) + 1
        for (let j = 0 ;j<100;j++) {
            let d = B*(j + 1) - 1
            if (d == c){
                alert(d);
                return;
            }
        }
    }
}
