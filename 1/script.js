function result() {
    let A = Number(document.getElementById("A").value);
    let n = Number(document.getElementById("n").value);
    if( A < 0 && Math.abs(n) > Math.abs(A)){n++}
    else if( A > 0 && Math.abs(n) > Math.abs(A)){n--}
    let res = A + n;
    alert(res);
}
