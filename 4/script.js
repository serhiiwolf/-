function result(){
        let arr ;
        let arrOut=[];
        let counter=0;
        let value=-1;
        let str = document.getElementById('num').value;
        let K = document.getElementById('K').value;
        let N = document.getElementById('N').value;
        arr = str.split(' ');
        arr.sort().reverse();
        for(let i=0;i<N;i++){
            if(i==(N-1))
            {
                if(value!=arr[i])
                {
                    if(counter<=K && counter>0)
                    {
                        for(let j=0;j<counter;j++)
                        {
                            arrOut.push(value);     
                        }
                    }
                    value=arr[i];
                    arrOut.push(value);
                }
                else{
                    iif(counter<=K && counter>0)
                    {
                        for(let j=0;j<counter;j++)
                        {
                            arrOut.push(value);     
                        }
                    }
                    value=arr[i];
                    arrOut.push(value);
                }
            }
            else{
            if(value!=arr[i])
            {
                if(counter<=K && counter>0)
                {
                    for(let j=0;j<counter;j++)
                    {
                        arrOut.push(value);     
                    }
                }
                value=arr[i];               
                counter=1;
            }
            else{
                counter++;
            }  
        }      
    }
    arrOut.sort().reverse()
        alert(arrOut);
    
}

