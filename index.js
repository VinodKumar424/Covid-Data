$(document).ready(()=>{
        getalldata();
});

let getalldata = () =>{
console.log(" making request")


$.ajax({
    
    type:'GET',
    dataType: 'json',
    url:  'https://api.covid19india.org/districts_daily.json',  
    success : (data)=>
    {
        Z=data.districtsDaily['Andhra Pradesh']['Y.S.R Kadapa'][0].active
        console.log(Z);

        $("#wga").append(data.districtsDaily['Andhra Pradesh']['West Godavari'][0].active);
        $("#wgc").append(data.districtsDaily['Andhra Pradesh']['West Godavari'][0].confirmed);
        $("#wgd").append(data.districtsDaily['Andhra Pradesh']['West Godavari'][0].deceased);
        $("#wgr").append(data.districtsDaily['Andhra Pradesh']['West Godavari'][0].recovered);
        $("#wgda").append(data.districtsDaily['Andhra Pradesh']['West Godavari'][0].date);

        //Srikakulam
        $("#sa").append(data.districtsDaily['Andhra Pradesh']['Srikakulam'][0].active);
        $("#sc").append(data.districtsDaily['Andhra Pradesh']['Srikakulam'][0].confirmed);
        $("#sd").append(data.districtsDaily['Andhra Pradesh']['Srikakulam'][0].deceased);
        $("#sr").append(data.districtsDaily['Andhra Pradesh']['Srikakulam'][0].recovered);
        $("#sda").append(data.districtsDaily['Andhra Pradesh']['Srikakulam'][0].date);

        //Visakhapatnam
        $("#vpa").append(data.districtsDaily['Andhra Pradesh']['Visakhapatnam'][0].active);
        $("#vpc").append(data.districtsDaily['Andhra Pradesh']['Visakhapatnam'][0].confirmed);
        $("#vpd").append(data.districtsDaily['Andhra Pradesh']['Visakhapatnam'][0].deceased);
        $("#vpr").append(data.districtsDaily['Andhra Pradesh']['Visakhapatnam'][0].recovered);
        $("#vpda").append(data.districtsDaily['Andhra Pradesh']['Visakhapatnam'][0].date);

        //Vizianagaram
        $("#vza").append(data.districtsDaily['Andhra Pradesh']['Vizianagaram'][0].active);
        $("#vzc").append(data.districtsDaily['Andhra Pradesh']['Vizianagaram'][0].confirmed);
        $("#vzd").append(data.districtsDaily['Andhra Pradesh']['Vizianagaram'][0].deceased);
        $("#vzr").append(data.districtsDaily['Andhra Pradesh']['Vizianagaram'][0].recovered);
        $("#vzda").append(data.districtsDaily['Andhra Pradesh']['Vizianagaram'][0].date);
        
        //East Godavari
        $("#ega").append(data.districtsDaily['Andhra Pradesh']['East Godavari'][0].active);
        $("#egc").append(data.districtsDaily['Andhra Pradesh']['East Godavari'][0].confirmed);
        $("#egd").append(data.districtsDaily['Andhra Pradesh']['East Godavari'][0].deceased);
        $("#egr").append(data.districtsDaily['Andhra Pradesh']['East Godavari'][0].recovered);
        $("#egda").append(data.districtsDaily['Andhra Pradesh']['East Godavari'][0].date);

        //Krishna
        $("#ka").append(data.districtsDaily['Andhra Pradesh']['Krishna'][0].active);
        $("#kc").append(data.districtsDaily['Andhra Pradesh']['Krishna'][0].confirmed);
        $("#kd").append(data.districtsDaily['Andhra Pradesh']['Krishna'][0].deceased);
        $("#kr").append(data.districtsDaily['Andhra Pradesh']['Krishna'][0].recovered);
        $("#kda").append(data.districtsDaily['Andhra Pradesh']['Krishna'][0].date);

        //Guntur
        $("#ga").append(data.districtsDaily['Andhra Pradesh']['Guntur'][0].active);
        $("#gc").append(data.districtsDaily['Andhra Pradesh']['Guntur'][0].confirmed);
        $("#gd").append(data.districtsDaily['Andhra Pradesh']['Guntur'][0].deceased);
        $("#gr").append(data.districtsDaily['Andhra Pradesh']['Guntur'][0].recovered);
        $("#gda").append(data.districtsDaily['Andhra Pradesh']['Guntur'][0].date);

        //Prakasam
        $("#pa").append(data.districtsDaily['Andhra Pradesh']['Prakasam'][0].active);
        $("#pc").append(data.districtsDaily['Andhra Pradesh']['Prakasam'][0].confirmed);
        $("#pd").append(data.districtsDaily['Andhra Pradesh']['Prakasam'][0].deceased);
        $("#pr").append(data.districtsDaily['Andhra Pradesh']['Prakasam'][0].recovered);
        $("#pda").append(data.districtsDaily['Andhra Pradesh']['Prakasam'][0].date);

        //S.P.S. Nellore
        $("#na").append(data.districtsDaily['Andhra Pradesh']['S.P.S. Nellore'][0].active);
        $("#nc").append(data.districtsDaily['Andhra Pradesh']['S.P.S. Nellore'][0].confirmed);
        $("#nd").append(data.districtsDaily['Andhra Pradesh']['S.P.S. Nellore'][0].deceased);
        $("#nr").append(data.districtsDaily['Andhra Pradesh']['S.P.S. Nellore'][0].recovered);
        $("#nda").append(data.districtsDaily['Andhra Pradesh']['S.P.S. Nellore'][0].date);

        //Chittoor
        $("#cha").append(data.districtsDaily['Andhra Pradesh']['Chittoor'][0].active);
        $("#chc").append(data.districtsDaily['Andhra Pradesh']['Chittoor'][0].confirmed);
        $("#chd").append(data.districtsDaily['Andhra Pradesh']['Chittoor'][0].deceased);
        $("#chr").append(data.districtsDaily['Andhra Pradesh']['Chittoor'][0].recovered);
        $("#chda").append(data.districtsDaily['Andhra Pradesh']['Chittoor'][0].date);

        //Y.S.R Kadapa
        $("#kaa").append(data.districtsDaily['Andhra Pradesh']['Y.S.R. Kadapa'][0].active);
        $("#kac").append(data.districtsDaily['Andhra Pradesh']['Y.S.R. Kadapa'][0].confirmed);
        $("#kad").append(data.districtsDaily['Andhra Pradesh']['Y.S.R. Kadapa'][0].deceased);
        $("#kar").append(data.districtsDaily['Andhra Pradesh']['Y.S.R. Kadapa'][0].recovered);
        $("#kada").append(data.districtsDaily['Andhra Pradesh']['Y.S.R. Kadapa'][0].date);

        //Anantapur
        $("#aa").append(data.districtsDaily['Andhra Pradesh']['Anantapur'][0].active);
        $("#ac").append(data.districtsDaily['Andhra Pradesh']['Anantapur'][0].confirmed);
        $("#ad").append(data.districtsDaily['Andhra Pradesh']['Anantapur'][0].deceased);
        $("#ar").append(data.districtsDaily['Andhra Pradesh']['Anantapur'][0].recovered);
        $("#ada").append(data.districtsDaily['Andhra Pradesh']['Anantapur'][0].date);

        //Kurnool
        $("#kua").append(data.districtsDaily['Andhra Pradesh']['Kurnool'][0].active);
        $("#kuc").append(data.districtsDaily['Andhra Pradesh']['Kurnool'][0].confirmed);
        $("#kud").append(data.districtsDaily['Andhra Pradesh']['Kurnool'][0].deceased);
        $("#kur").append(data.districtsDaily['Andhra Pradesh']['Kurnool'][0].recovered);
        $("#kuda").append(data.districtsDaily['Andhra Pradesh']['Kurnool'][0].date);


        // telangana state details
        Y=data.districtsDaily['Telangana']['Adilabad'][0].active
        console.log(Y);
        
        //Adilabad
        $("#adaa").append(data.districtsDaily['Telangana']['Adilabad'][0].active);
        $("#adc").append(data.districtsDaily['Telangana']['Adilabad'][0].confirmed);
        $("#add").append(data.districtsDaily['Telangana']['Adilabad'][0].deceased);
        $("#adr").append(data.districtsDaily['Telangana']['Adilabad'][0].recovered);
        $("#adda").append(data.districtsDaily['Telangana']['Adilabad'][0].date);

        //Nizamabad
        $("#nza").append(data.districtsDaily['Telangana']['Nizamabad'][0].active);
        $("#nzc").append(data.districtsDaily['Telangana']['Nizamabad'][0].confirmed);
        $("#nzd").append(data.districtsDaily['Telangana']['Nizamabad'][0].deceased);
        $("#nzr").append(data.districtsDaily['Telangana']['Nizamabad'][0].recovered);
        $("#nzda").append(data.districtsDaily['Telangana']['Nizamabad'][0].date);

        //Karimnagar
        $("#kra").append(data.districtsDaily['Telangana']['Karimnagar'][0].active);
        $("#krc").append(data.districtsDaily['Telangana']['Karimnagar'][0].confirmed);
        $("#krd").append(data.districtsDaily['Telangana']['Karimnagar'][0].deceased);
        $("#krr").append(data.districtsDaily['Telangana']['Karimnagar'][0].recovered);
        $("#krda").append(data.districtsDaily['Telangana']['Karimnagar'][0].date);

        //Medak
        $("#ma").append(data.districtsDaily['Telangana']['Medak'][0].active);
        $("#mc").append(data.districtsDaily['Telangana']['Medak'][0].confirmed);
        $("#md").append(data.districtsDaily['Telangana']['Medak'][0].deceased);
        $("#mr").append(data.districtsDaily['Telangana']['Medak'][0].recovered);
        $("#mda").append(data.districtsDaily['Telangana']['Medak'][0].date);

        //Warangal Urban
        $("#wua").append(data.districtsDaily['Telangana']['Warangal Urban'][0].active);
        $("#wuc").append(data.districtsDaily['Telangana']['Warangal Urban'][0].confirmed);
        $("#wud").append(data.districtsDaily['Telangana']['Warangal Urban'][0].deceased);
        $("#wur").append(data.districtsDaily['Telangana']['Warangal Urban'][0].recovered);
        $("#wuda").append(data.districtsDaily['Telangana']['Warangal Urban'][0].date);

        //Warangal Rural
        $("#wra").append(data.districtsDaily['Telangana']['Warangal Rural'][0].active);
        $("#wrc").append(data.districtsDaily['Telangana']['Warangal Rural'][0].confirmed);
        $("#wrd").append(data.districtsDaily['Telangana']['Warangal Rural'][0].deceased);
        $("#wrr").append(data.districtsDaily['Telangana']['Warangal Rural'][0].recovered);
        $("#wrda").append(data.districtsDaily['Telangana']['Warangal Rural'][0].date);

        //Ranga Reddy
        $("#rra").append(data.districtsDaily['Telangana']['Ranga Reddy'][0].active);
        $("#rrc").append(data.districtsDaily['Telangana']['Ranga Reddy'][0].confirmed);
        $("#rrd").append(data.districtsDaily['Telangana']['Ranga Reddy'][0].deceased);
        $("#rrr").append(data.districtsDaily['Telangana']['Ranga Reddy'][0].recovered);
        $("#rrda").append(data.districtsDaily['Telangana']['Ranga Reddy'][0].date);

        //Hyderabad
        $("#hya").append(data.districtsDaily['Telangana']['Hyderabad'][0].active);
        $("#hyc").append(data.districtsDaily['Telangana']['Hyderabad'][0].confirmed);
        $("#hyd").append(data.districtsDaily['Telangana']['Hyderabad'][0].deceased);
        $("#hyr").append(data.districtsDaily['Telangana']['Hyderabad'][0].recovered);
        $("#hyda").append(data.districtsDaily['Telangana']['Hyderabad'][0].date);

        //Khammam
        $("#kma").append(data.districtsDaily['Telangana']['Khammam'][0].active);
        $("#kmc").append(data.districtsDaily['Telangana']['Khammam'][0].confirmed);
        $("#kmd").append(data.districtsDaily['Telangana']['Khammam'][0].deceased);
        $("#kmr").append(data.districtsDaily['Telangana']['Khammam'][0].recovered);
        $("#kmda").append(data.districtsDaily['Telangana']['Khammam'][0].date);

        //Nalgonda
        $("#nla").append(data.districtsDaily['Telangana']['Nalgonda'][0].active);
        $("#nlc").append(data.districtsDaily['Telangana']['Nalgonda'][0].confirmed);
        $("#nld").append(data.districtsDaily['Telangana']['Nalgonda'][0].deceased);
        $("#nlr").append(data.districtsDaily['Telangana']['Nalgonda'][0].recovered);
        $("#nlda").append(data.districtsDaily['Telangana']['Nalgonda'][0].date);

        //Mahabubnagar
        $("#mba").append(data.districtsDaily['Telangana']['Mahabubnagar'][0].active);
        $("#mbc").append(data.districtsDaily['Telangana']['Mahabubnagar'][0].confirmed);
        $("#mbd").append(data.districtsDaily['Telangana']['Mahabubnagar'][0].deceased);
        $("#mbr").append(data.districtsDaily['Telangana']['Mahabubnagar'][0].recovered);
        $("#mbda").append(data.districtsDaily['Telangana']['Mahabubnagar'][0].date);

    },
    error:(data)=>{
        console.log("in error")
        alert("404");   
    }
})  
}