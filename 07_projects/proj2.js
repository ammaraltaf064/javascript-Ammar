const form=document.querySelector("form")

//dont usse this will give you empty value
//const height= parseInt(document.querySelector("#height").value) 

form.addEventListener("submit",function(e){
    e.preventDefault()  //jb bhi ham form bnatay hain to wo server ok url bhjta usko rokny k liay preventdefault

//agr ham ye height or weight bahir likhay ge then wo empty value dega jiski zrurat ni isliay ham andr likh rhay

    const height= parseInt(document.querySelector("#height").value)  //sirf jb value likha tha tb wo string mai deta hai jesay hm se start mai parstInt kia then wo value interger mai parse hogye
    const weight= parseInt(document.querySelector("#weight").value)
    const result= document.querySelector("#result")


    if(height==='' || height<0 || isNAN(height)){  //isNAN ka mtlb k height number hia tb execute hoga
        result.innerHTML=`please give valid height ${height}`

    }
 else if(weight==='' || weight<0 || isNAN(weight)){  //isNAN ka mtlb weight number hia tb execute hoga
        result.innerHTML=`please give valid weight ${weight}`

    }
    else{
        const BMI=(weight/((height*height)/10000)).toFixed(2)//answer bht lamba ajata then 2 decimal ay ga .toFixed lga k

        //show result

        result.innerHTML=`<span>${BMI}</span>`



    }

})