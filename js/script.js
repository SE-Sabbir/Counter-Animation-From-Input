document.querySelectorAll('.single_num_div').forEach((item)=>{

    let num_input = item.querySelector('.input_part input')
    let run_btn = item.querySelector('.run_btn')
    let counter_result = item.querySelector('.counter_result')
    
    
    run_btn.addEventListener('click' , ()=>{
        
        let text_valid = num_input.value.trim();
        if(text_valid === ""){
            alert("Please enter a text before adding")
            return;
        }
    
        let curentNum = 0
    
        let counter_Num = ()=>{       
            curentNum++
            counter_result.innerHTML = curentNum
            if (curentNum == num_input.value){
                clearInterval(stop)
            }
        }
        let stop = setInterval(()=>{
            counter_Num()
        },50)
    })
})
