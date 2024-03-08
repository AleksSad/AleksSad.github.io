const input = document.getElementById("input");
const output = document.getElementById("tbl-data");
const dash = document.getElementById("tbl-stats");
const bss_stats = document.getElementById("bss_stats");
const bss_y_stats = document.getElementById("bss_y_stats");
const bss_y_h_stats = document.getElementById("bss_y_h_stats");
const bss_y_m_stats = document.getElementById("bss_y_m_stats");
const bss_y_l_stats = document.getElementById("bss_y_l_stats");
const bss_n_stats = document.getElementById("bss_n_stats");
const bss_n_h_stats = document.getElementById("bss_n_h_stats");
const bss_n_m_stats = document.getElementById("bss_n_m_stats");
const bss_n_l_stats = document.getElementById("bss_n_l_stats");
const krus_stats = document.getElementById("krus_stats");
const krus_y_stats = document.getElementById("krus_y_stats");
const krus_y_h_stats = document.getElementById("krus_y_h_stats");
const krus_y_m_stats = document.getElementById("krus_y_m_stats");
const krus_y_l_stats = document.getElementById("krus_y_l_stats");
const krus_n_stats = document.getElementById("krus_n_stats");
const krus_n_h_stats = document.getElementById("krus_n_h_stats");
const krus_n_m_stats = document.getElementById("krus_n_m_stats");
const krus_n_l_stats = document.getElementById("krus_n_l_stats");
const all_stats = document.getElementById("all_stats");

function get_data() {
    readXlsxFile(input.files[0]).then(function (data) {
        view_stats(data);
        //view_table(data);
        // console.log(data);
    })
}
function view_stats(data) {
    all_stats.innerHTML = "Всего: " + (data.length - 1);
    var count_bss = 0,
        count_krus = 0,
        count_bss_y = 0,
        count_krus_y = 0,
        count_bss_n = 0,
        count_krus_n = 0,
        count_bss_y_h = 0,
        count_krus_y_h = 0,
        count_bss_n_h = 0,
        count_krus_n_m = 0,
        count_bss_y_m = 0,
        count_krus_y_m = 0,
        count_bss_n_m = 0,
        count_krus_n_m = 0,
        count_bss_y_l = 0,
        count_krus_y_l = 0,
        count_bss_n_l = 0,
        count_krus_n_l = 0,
        th_bil = 0,
        th_sr = 0,
        th_prior = 0;
    for (var row = 0; row < data.length; row++) {
        for (var col = 0; col < data[row].length; col++) {
            if (data[0][col] == 'BIL') { th_bil = col; }
            if (data[0][col] == 'Услуга Восстановлена') { th_sr = col; }
        }
        var if_bss = data[row][th_bil] == 'BSS',
            if_krus = data[row][th_bil] == 'КРУС',
            if_y = data[row][th_sr] == 'Да',
            if_n = data[row][th_sr] == 'Нет',
            if_h = (data[row][th_prior] == '0')||(data[row][th_prior] == '1'),
            if_m = (data[row][th_prior] == '2')||(data[row][th_prior] == '3'),
            if_l = (data[row][th_prior] == '4')||(data[row][th_prior] == '5');
            
        if (if_bss)                  { count_bss++ }
        if (if_krus)                 { count_krus++ }
        if (if_y && if_bss)          { count_bss_y++;}
        if (if_y && if_krus)         { count_krus_y++;}
        if (if_n && if_bss)          { count_bss_n++;}
        if (if_n && if_krus)         { count_krus_n++;}
        if (if_h && if_y && if_bss)  { count_bss_y_h++;}
        if (if_h && if_y && if_krus) { count_krus_y_h++;}
        if (if_h && if_n && if_bss)  { count_bss_n_h++;}
        if (if_h && if_n && if_krus) { count_krus_n_h++;}
        if (if_m && if_y && if_bss)  { count_bss_y_m++;}
        if (if_m && if_y && if_krus) { count_krus_y_m++;}
        if (if_m && if_n && if_bss)  { count_bss_n_m++;}
        if (if_m && if_n && if_krus) { count_krus_n_m++;}
        if (if_l && if_y && if_bss)  { count_bss_y_l++;}
        if (if_l && if_y && if_krus) { count_krus_y_l++;}
        if (if_l && if_n && if_bss)  { count_bss_n_l++;}
        if (if_l && if_n && if_krus) { count_krus_n_l++;}
        
    }
    bss_stats.innerHTML      = count_bss;
    krus_stats.innerHTML     = count_krus;
    bss_y_stats.innerHTML    = count_bss_y; 
    krus_y_stats.innerHTML   = count_krus_y;
    bss_n_stats.innerHTML    = count_bss_n; 
    krus_n_stats.innerHTML   = count_krus_n;
    bss_y_h_stats.innerHTML  = count_bss_y_h;
    bss_y_m_stats.innerHTML  = count_bss_y_m;
    bss_y_l_stats.innerHTML  = count_bss_y_l;
    bss_n_h_stats.innerHTML  = count_bss_n_h;
    bss_n_m_stats.innerHTML  = count_bss_n_m;
    bss_n_l_stats.innerHTML  = count_bss_n_l;
    krus_y_h_stats.innerHTML = count_krus_y_h;
    krus_y_m_stats.innerHTML = count_krus_y_m;
    krus_y_l_stats.innerHTML = count_krus_y_l;
    krus_n_h_stats.innerHTML = count_krus_n_h;
    krus_n_m_stats.innerHTML = count_krus_n_m;
    krus_n_l_stats.innerHTML = count_krus_n_l;

}
function view_table(data) {
    console.log(data);
    var table = document.createElement("table");
    for (var row = 0; row < data.length; row++) {
        if (row == 0) {
            var tr_table = document.createElement("tr");
            for (var col = 0; col < data[row].length; col++) {
                var td_table = document.createElement("th");
                td_table.style = 'font-weight: bold; border: 1px solid;';
                td_table.innerHTML = data[row][col];
                tr_table.appendChild(td_table);
            }
        } else {
            var tr_table = document.createElement("tr");
            for (var col = 0; col < data[row].length; col++) {
                var th_comment;
                if (data[0][col] == 'COMMENTS') { th_comment = col; }
                var td_table = document.createElement("td");
                td_table.style = "border: 1px solid;";
                if (col != th_comment) { td_table.innerHTML = data[row][col]; }

                tr_table.appendChild(td_table);
            }
        }
        table.appendChild(tr_table);
    }
    output.appendChild(table);

}
