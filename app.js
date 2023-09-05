cakes = ["c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "c10"];
prices = ["25000", "26500", "25000", "26000", "6500", "32000", "40000", "32000", "40000", "35000"];
codes = ["A1-2045", "A2-2020", "A3-1034", "A4-1010", "A5-2166", "A6-2841", "A7-1548", "A8-2127", "A9-6588", "B1-1589"];
names = ["Chocolate Topping", "Coconut Rose", "Mix Chocolate Milk", "DarkWafer Topping", "Chocolate Slice", "Strawberry Topping", "Blueberry Topping", "Strawberry Rose", "Colorful Rose", "DarkCoCo Fiiling"];
text = ["ဒါလေးက ချောကလက်တွေအများကြီးအုပ်ပေး ထားပြီး ကိတ်သားလေးကလည်း အရမ်းနူးညံ့ တာမို့ တစ်ကိုက်နဲ့ကို အီသွားစေမှာအမှန်ပါ",
    "သူက အုန်းသီးနုနုလေးကို ခရင်မ်ဖောက်ပြီး ကိတ် ထဲကို ရေအစား အုန်းရည်ချိုချိုလေး ထည့်သုံး ပေးထားလို့ အုန်းသီးရဲ့ အနံ့အရသာ အပြည့်အဝ ရစေမှာပါ။ ",
    "သူက ချောကလက်နဲ့ နို့အရသာကို အချိုးကျ အရသာရှိရှိပေါင်းစပ်ထားလို့ မအီဘဲ ချိုစိမ့်မွှေး လေးမို့ စားပြီးရင်း စားချင်နေမှာ အမှန်ပါပဲနော် ",
    "ချောကလက်ရဲ့ ခါးသက်သက်အရသာလေးကို ဝေဖာရဲ့ ကျွတ်ကျွတ်ဝါးရတဲ့ အရသာလေးနဲ့ ပေါင်းစပ်ပေးထားလို့ ထူးခြားပြီး ခံတွင်းတွေ့စေ မှာပါ။",
    "ချောကလက်လည်းကြိုက်တယ်  birthday မဟုတ် လို့ တစ်ယောက်တည်းစားဖို့ တစ်လုံးလုံးကြီး လည်းမကုန်တဲ့အခါ ဒါလေးရွေးပါနော်",
    "စတော်ဘယ်ရီရဲ့ ချဉ်ချိုချိုအရသာရယ် ကိတ် မွှေးမွေးလေးရယ်ဆိုတော့ တခြားဘာမှမလိုတော့ ဘူးပေါ့",
    "စတော်ဘယ်ရီသီးလည်း ရိုးနေပြီး အသီးလေးနဲ့ လည်းစားချင်ရင်တော့ ဒါလေးသာရွေးပေတော့",
    "စတော်ဘယ်ရီသီးအရသာနဲ့ ကိတ်သားအိအိလေး ကို အထဲက ချိ့စ်အပြည်နဲ့ဆိုတော့ ဘာလိုသေးလဲ ",
    "ဒါလေးက နှင်းဆီပွင့်ပုံသက်သက်မဟုတ်ဘူးနော် တစ်ပွင့်စီမှာ အရောင်လည်းတစ်မျိုးစီ အရသာ ကလည်းတစ်မျိုးစီဆိုတော့ တစ်မျိုးတည်း အစုံ စားရတာပေါ့",
    "သူလေးက ချောကလက်အခါးကိုမှ ကြိုက် တတ်တဲ့ ကာကာလေးတွေအတွက် အခါးအရသာ လေး ပိုကဲထားပေးပြီး သူနဲ့လိုက်ဖက်တဲ့ အချို အရသာလေးကို တွဲစပ်ထားလို့ အကြိုက်တွေ့မှာ အမှန်ပါပဲနော်"
];
let i = 0;
let right = () => {
    i++;
    if (i == cakes.length) {
        i = cakes.length - 1;
        photo.src = cakes[i] + ".png";
        price.innerHTML = prices[i] + " Ks";
        code.innerHTML = codes[i];
        cname.innerHTML = names[i];

        document.getElementById("rbtn").style.color = " #BEBEBE";
        document.getElementById("rbtn").style.disabled = false;
        document.getElementById("lbtn").style.color = "rgb(65, 14, 65)";
        document.getElementById("lbtn").style.disabled = true;

    } else {
        // alert(i);
        document.getElementById("lbtn").style.color = "rgb(65, 14, 65)";
        photo.src = cakes[i] + ".png";
        price.innerHTML = prices[i] + " Ks";
        code.innerHTML = codes[i];
        cname.innerHTML = names[i];

    }
}
let addtocart = () => {
    // btn.classList.add("btnani");    
    if (!btn.classList.contains("btnani")) {
        btn.classList.add("btnani");
    }
    let p = btn.parentNode;
    // alert(p);
    let carr = p.children;
    // alert(carr.length);
    let img = photo.src;
    let name = carr[0].innerHTML;
    let code = carr[1].innerHTML;
    let price = carr[2].innerHTML;
    price = price.replace(" Ks", "");
    let item = {
        iImage: img,
        iname: name,
        icode: code,
        iprice: price,
        qty: 1
    };
    // alert(item.iImage + " : " + item.icode + " : " + item.iname + " : " + item.iprice);
    if (sessionStorage.getItem("items") == null) {
        let arr = [item];
        let str = JSON.stringify(arr);
        sessionStorage.setItem("items", str);
        hideshow();
        count.innerHTML = 1;
        //  alert("if section" + str);

    } else {

        let str = sessionStorage.getItem("items");
        let arr = JSON.parse(str);
        // for (i = 0; i < arr.length; i++) {
        //     alert("i" + i + ":" + arr[i].icode + " : " + item.icode);
        if (!str.includes(item.icode)) {
            arr[arr.length] = item;
            hideshow();
            count.innerHTML = arr.length;
            str = JSON.stringify(arr);
            sessionStorage.setItem("items", str);



        }


        // alert("else section" + str);
    }
}
let firstshow = () => {
    //ဒီနှစ်ခုက confirm pageဘက်ရောက်ပြီးမှ ပြန်လာတာလား ဒီတိုင်းစခေါ်တာလားစစ်တာ
    if (sessionStorage.getItem("visited") == null) {
        sessionStorage.removeItem("items");
        show();
    } else {
        show();
        showback();

    }

}
let c = 0;
let showback = () => {
    c = 0;
    if (sessionStorage.getItem("items") != null) {
        let jstr = sessionStorage.getItem("items");
        let jarr = JSON.stringify(jstr);
        let fchildren = foodcontainer.children; // ဒီနားမှားနေသေး ဆက်စဉ်းစားရန် 
    }
}

let hideshow = () => {
    if (count.classList.contains("hide")) {
        count.classList.remove("hide");
        if (!count.classList.contains("show")) {
            count.classList.add("show");
        }
    }
}

let stopani = () => {
    if (btn.classList.contains("btnani")) {
        btn.classList.remove("btnani");
    }
}
let left = () => {
    i--;
    if (i == -1) {
        i = 0;
        photo.src = cakes[i] + ".png";
        price.innerHTML = prices[i] + " Ks";
        code.innerHTML = codes[i];
        cname.innerHTML = names[i];

        document.getElementById("lbtn").style.color = " #BEBEBE";
        document.getElementById("lbtn").style.disabled = false;
        document.getElementById("rbtn").style.color = "rgb(65, 14, 65)";
        document.getElementById("rbtn").style.disabled = true;

        // i = cakes.length - 1;
    } else {
        // alert(i);
        document.getElementById("rbtn").style.color = "rgb(65, 14, 65)";
        photo.src = cakes[i] + ".png";
        price.innerHTML = prices[i] + " Ks";
        code.innerHTML = codes[i];
        cname.innerHTML = names[i];

    }
}
let showmodal = (e) => {
    let id = e.id;
    // alert(id);

    let arr = modal.children; // child0==img , child1==i , child2==div
    arr[0].src = cakes[i] + ".png";
    arr[2].innerHTML = text[i];

    // modal.style.left = "40%";
    // if (id <= 4) {
    //     modal.style.top = "50%";
    // } else if (id > 4 && id <= 8) {
    //     modalcontainer.style.top = "700px";
    // }
    modalcontainer.style.display = "flex";




}
let hideModal = () => {
    modalcontainer.style.display = "none";


}