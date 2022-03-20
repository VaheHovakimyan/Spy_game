//////////////--------   Intro   --------//////////////

//🕵️‍♂️🕵️‍♂️🕵️‍♂️//

//Game created by Vahe Hovakimyan

//////////////--------   Count participians  --------/////////////
let participians_minus = document.getElementById("participians_minus");
let participians_plus = document.getElementById("participians_plus");
let count_participants = document.getElementById("count_participants");
let participians_count = 3;
let random_index;
let done_array = [];
let spy_ran1 = Math.floor(Math.random() * participians_count);
let spy_ran2 = Math.floor(Math.random() * participians_count);
let spy_ran3 = Math.floor(Math.random() * participians_count);
let spy_ran4 = Math.floor(Math.random() * participians_count);
let lrtes_text = '<span style="color:#D40000;">Լրտես</span>';
let time_start_flag = 0;
/////////////////////////////////////////////////////////////////
let spy_minus = document.getElementById("spy_minus");
let spy_plus = document.getElementById("spy_plus");
let count_spy_p = document.getElementById("count_spy");
let count_spy = 1;
/////////////////////////////////////////////////////////////////
let time_minus = document.getElementById("time_minus");
let time_plus = document.getElementById("time_plus");
let time_p = document.getElementById("count_time");
let time_value = document.getElementById("time_value");
let time_title_div = document.getElementById("time_title_div");
let time_values = [30, 60, 120, 180, 300, 600];
let time_texts = ["30sec", "1min", "2min", "3min", "5min", "10min"];
let time_index = 0;
/////////////////////////////////////////////////////////////////
let lets_go = document.getElementById("button");
let main_first_block = document.getElementById("main_first_block");
let main_second_block = document.getElementById("main_second_block");
let first_block_div_1 = document.getElementById("block_div_1");
let first_block_div_2 = document.getElementById("block_div_2");
let first_block_div_3 = document.getElementById("block_div_3");
let check_failed = document.getElementById("check_failed");
let check_failed_flex = document.getElementById("check_failed_flex");
let body_blur = document.getElementById("body");
/////////////////////////////////////////////////////////////////
let word_elements = document.getElementById("word");
let word_p = document.getElementById("open_close_text");
let open_close_button = document.getElementById("open_close_button");
let button_bool = true;
//let word_array = ['Մարս', 'Երևան', 'ջունգլի', 'Արարատ', 'Կասկադ', 'Յուպիտեր', 'Գյումրի', 'Լուսին', 'Վրաստան', 'ԱՄՆ', 'Ֆրանսիա', 'Ռուսաստան', 'Իրան', 'հիվանդանոց', 'անապատ', 'թանգարան', 'Յոթերորդ երկինք', 'Շենքի պադվալ', 'հավաբուն', 'գոմ', 'ծով', 'անտառ', 'Հանրապետության հրապարակ', 'կինոստուդիա', 'թատրոն', 'համերգասրահ', ' Սովետաշենի աղբանոց', 'թեյարան', 'սրճարան', 'լվացքատուն', 'Սուրիկի կտուր', 'կենդանաբանական այգի', 'բուսաբանական այգի', 'մատենադարան', 'բանկ', 'գրախանութ', 'դրախտ', 'պահարան', 'գրապահարան', 'ուսուցչանոց', 'ծաղկանոց', 'ջերմոց', 'Ֆեյսբուկի գրասենյակ', 'համալսարան', 'տեխնիկայի խանութ', 'Ձայնագրման ստուդիա', 'Հարսանյաց սրահ', 'Քվեստ', 'Օպերա', 'քննասրահ', 'Հյուսիսային պողոտա', 'աշխարհի ծեր', 'Վարդուշի խանութ','Զիփլայն', 'օդանավակայան', 'մարշուտկա', 'Լունապարկ', 'զբոսայգի','դպրոց', 'մետրո', 'հոգեբուժարան', 'կոշկակարի բուդկա','վառարան','խաղատուն','սառնարան','լուցկու տուփ','գրադարան','դպրոցի բուֆետ','մեքենայի բեռնախցիկ','բանանի արկղ','դարբնոց','արջի որջ','ծերանոց',''];//,''//some words added by Edgar // funny words
let word_array = ['Մարս', 'Երևան', 'ջունգլի', 'Արարատ', 'Կասկադ', 'Յուպիտեր', 'Գյումրի', 'Լուսին', 'Վրաստան', 'ԱՄՆ', 'Ֆրանսիա', 'Ռուսաստան', 'Իրան', 'հիվանդանոց', 'անապատ', 'թանգարան'];
let ran = Math.floor(Math.random() * word_array.length);
let done_random_word = word_array[ran];
/////////////////////////////////////////////////////////////////
let word_array_index = 0;
let time_title = document.getElementById("time_title");
let end_button = document.getElementById("end_button");
/////////////////////////////////////////////////////////////////
let minute, second;
let really_time; //= "00:00";
let end_sound = document.getElementById("audio");
let time_bool;
/////////////////////////////////////////////////////////////////
let try_again_button = document.getElementById("try_again");
let try_again_div = document.getElementById("try_again_div");
/////////////////////////////////////////////////////////////////


function Participians_check() {
    if (participians_count <= 3) {
        participians_minus.style.opacity = "50%";
        participians_minus.disabled = true;
    } else {
        participians_minus.style.opacity = "100%";
        participians_minus.disabled = false;
        participians_minus.addEventListener("click", Minus_participians);
    }

    if (participians_count >= 10) {
        participians_plus.style.opacity = "50%";
        participians_plus.disabled = true;
    } else {
        participians_plus.style.opacity = "100%";
        participians_plus.disabled = false;
        participians_plus.addEventListener("click", Plus_participians);
    }
}
Participians_check();

function New_Rannumbers() {
    for (let i = 0; i < 1000; i++) {
        if (spy_ran1 === spy_ran2 || spy_ran1 === spy_ran3 || spy_ran1 === spy_ran4 || spy_ran2 === spy_ran3 || spy_ran2 === spy_ran4 || spy_ran3 === spy_ran4) {
            spy_ran1 = Math.floor(Math.random() * participians_count);
            spy_ran2 = Math.floor(Math.random() * participians_count);
            spy_ran3 = Math.floor(Math.random() * participians_count);
            spy_ran4 = Math.floor(Math.random() * participians_count);
        }
    }
}


function Add_spy() {
    if (count_spy == 1) {
        for (let i = 0; i < participians_count; i++) {
            done_array[i] = word_array[ran];
        }
        done_array[spy_ran1] = lrtes_text;
    } else if (count_spy == 2) {
        for (let i = 0; i < participians_count; i++) {
            done_array[i] = word_array[ran];
        }
        done_array[spy_ran1] = lrtes_text;
        done_array[spy_ran2] = lrtes_text;
    } else if (count_spy == 3) {
        for (let i = 0; i < participians_count; i++) {
            done_array[i] = word_array[ran];
        }
        done_array[spy_ran1] = lrtes_text;
        done_array[spy_ran2] = lrtes_text;
        done_array[spy_ran3] = lrtes_text;
    } else if (count_spy == 4) {
        for (let i = 0; i < participians_count; i++) {
            done_array[i] = word_array[ran];
        }
        done_array[spy_ran1] = lrtes_text;
        done_array[spy_ran2] = lrtes_text;
        done_array[spy_ran3] = lrtes_text;
        done_array[spy_ran4] = lrtes_text;
    }
}


function Minus_participians() {
    participians_count--;
    count_participants.innerHTML = "Participians: " + participians_count;
    random_index = Math.ceil(Math.random() * participians_count);
    done_array.length = participians_count;
    New_Rannumbers();
    Add_spy();
    Participians_check();
}

function Plus_participians() {
    participians_count++;
    count_participants.innerHTML = "Participians: " + participians_count;
    random_index = Math.ceil(Math.random() * participians_count);
    done_array.length = participians_count;
    New_Rannumbers();
    Add_spy();
    Participians_check();
}

/////////////////------- Count spy -------//////////////////
function Spy_check() {
    if (count_spy <= 1) {
        spy_minus.style.opacity = "50%";
        spy_minus.disabled = true;
    } else {
        spy_minus.style.opacity = "100%";
        spy_minus.disabled = false;
        spy_minus.addEventListener("click", Minus_spy);
    }

    if (count_spy >= 4) {
        spy_plus.style.opacity = "50%";
        spy_plus.disabled = true;
    } else {
        spy_plus.style.opacity = "100%";
        spy_plus.disabled = false;
        spy_plus.addEventListener("click", Plus_spy);
    }
}
Spy_check();


function Minus_spy() {
    count_spy--;
    count_spy_p.innerHTML = "Count spy: " + count_spy;
    New_Rannumbers();
    Add_spy();
    Spy_check();
}

function Plus_spy() {
    count_spy++;
    count_spy_p.innerHTML = "Count spy: " + count_spy;
    New_Rannumbers();
    Add_spy();
    Spy_check();
}

////////////////--------- Time variable ----------///////////////
function Time_check() {
    if (time_index <= 0) {
        time_minus.style.opacity = "50%";
        time_minus.disabled = true;
    } else {
        time_minus.style.opacity = "100%";
        time_minus.disabled = false;
        time_minus.addEventListener("click", Minus_time);
    }

    if (time_index >= 5) {
        time_plus.style.opacity = "50%";
        time_plus.disabled = true;
    } else {
        time_plus.style.opacity = "100%";
        time_plus.disabled = false;
        time_plus.addEventListener("click", Plus_time);
    }
}
Time_check();


function Check_minute() {
    minute = Math.floor(time_values[time_index] / 60);
    second = time_values[time_index] % 60;
    if (second < 10) {
        second = "0" + second;
    }
    really_time = minute + ":" + second;
    time_value.innerHTML = really_time;
}
Check_minute()


function Time_part() {
    Check_minute()
    second = time_values[time_index] % 60;
    if (second < 10) {
        second = "0" + second;
    }
    really_time = minute + ":" + second;
    time_value.innerHTML = really_time;
}
Time_part()

function Sound_play(){
    end_sound.play();
    time_bool = true;
}

function Sound_pause(){
    end_sound.pause();
}

function Time_counter() {
    if (time_values[time_index] > 0) {
        time_values[time_index]--;
        Check_minute();
        Time_part();
        lets_go.style.visibility = "hidden";
        lets_go.style.height = "0px";
        lets_go.style.width = "0px";
        lets_go.style.padding = "0px";
        time_bool = false;
    } else {
        time_value.innerHTML = "Game end";
        end_button.style.width = "0px";
        end_button.style.height = "0px";
        end_button.style.visibility = "hidden";
        end_button.hidden = true;
        try_again_div.style.width = "500px";
        try_again_div.style.height = "70px"
        try_again_button.style.width = "150px";
        try_again_button.style.height = "70px";
        try_again_button.style.fontSize = "25px";
        try_again_button.style.borderRadius = "10px";
        try_again_button.style.backgroundColor = "rgb(20, 20, 20)";
        try_again_button.style.visibility = "visible";
        try_again_button.hidden = false;
        let sound_func = setTimeout(Sound_play,10);
        if(time_bool == true){
            clearTimeout(sound_func);
        }
    }
}


function Minus_time() {
    time_index--;
    time_p.innerHTML = "Time: " + time_texts[time_index];
    Time_check();
    Time_part();
}

function Plus_time() {
    time_index++;
    time_p.innerHTML = "Time: " + time_texts[time_index];
    Time_check();
    Time_part();
}



////////////////--------- Button Let's go ----------///////////////

function Check() {
    if (participians_count - 2 >= count_spy) {
        first_block_div_1.style.visibility = "hidden";
        first_block_div_2.style.visibility = "hidden";
        first_block_div_3.style.visibility = "hidden";
        lets_go.style.visibility = "hidden";
        word_elements.style.visibility = "visible";
        word_elements.style.width = "200px";
        word_elements.style.height = "30px";
    } else {
        check_failed.style.top = "20%";
    }
}
lets_go.addEventListener("click", Check);

////////////////--------- Button OK ----------///////////////
let button_ok = document.getElementById("button_ok");

function Button_ok() {
    check_failed.style.top = "-65%";
}
button_ok.addEventListener("click", Button_ok);
////////////////--------- Words ----------///////////////

for (let i = 0; i < participians_count; i++) {
    done_array[i] = word_array[ran];
}
done_array[spy_ran1] = lrtes_text;



function Open() {
    open_close_button.innerHTML = "Close";
    word_p.innerHTML = done_array[word_array_index];
    word_array_index++;
    console.log(participians_count);
    console.log(word_array_index);
    if (word_array_index == participians_count) {
        open_close_button.innerHTML = "Time";
    } else {
        open_close_button.innerHTML = "Close";
    }
    if (word_array_index - 1 === participians_count) {
        lets_go.style.visibility = "hidden";
        lets_go.style.height = "0px";
        lets_go.style.width = "0px";
        lets_go.style.padding = "0px";
    }
}



function Close() {
    if (participians_count === word_array_index) {
        word_p.style.visibility = "hidden";
        open_close_button.style.visibility = "hidden";
        time_title_div.style.visibility = "visible";
        time_title_div.style.width = "400px";
        time_title_div.style.height = "300px";
        time_title.style.visibility = "visible";
        time_title.style.width = "100px";
        time_title.style.height = "100px";
        time_title.style.textAlign = "center";
        time_title.style.fontSize = "40px";
        time_title.style.fontFamily = "cursive";
        time_value.style.visibility = "visible";
        time_value.style.width = "500px";
        time_value.style.height = "100px";
        end_button.style.visibility = "visible";
        end_button.style.width = "90px";
        end_button.style.height = "50px";
        end_button.style.color = "white";
        first_block_div_1.style.visibility = "hidden";
        first_block_div_1.style.height = "0px";
        first_block_div_1.style.width = "0px";
        first_block_div_2.style.visibility = "hidden";
        first_block_div_2.style.height = "0px";
        first_block_div_2.style.width = "0px";
        first_block_div_3.style.visibility = "hidden";
        first_block_div_3.style.height = "0px";
        first_block_div_3.style.width = "0px";
        lets_go.style.visibility = "hidden";
        lets_go.style.height = "0px";
        lets_go.style.width = "0px";
        lets_go.style.padding = "0px";
        Time_counter();
        setInterval(Time_counter, 1000);
    } else {
        open_close_button.innerHTML = "Open";
        word_p.innerHTML = "-----------";
    }
}

function End_button(){
    time_values[time_index] = 0;
}

function Try_again(){
    document.location.reload();
}

try_again_button.addEventListener("click",Try_again);
end_button.addEventListener("click",End_button);



open_close_button.addEventListener("click", Bool);
function Bool() {
    if (button_bool) {
        Open();
        button_bool = false;
    } else {
        Close();
        button_bool = true;
    }
}

//[Vahe777]//