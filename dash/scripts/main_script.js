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
const tbl_filter_th = document.getElementById("tbl-filter_th");
const tbl_filter_td = document.getElementById("tbl-filter_td");
const work_stats = document.getElementById("work_stats");

var count_bss = 0,
    count_krus = 0,
    count_bss_y = 0,
    count_krus_y = 0,
    count_bss_n = 0,
    count_krus_n = 0,
    count_bss_y_h = 0,
    count_krus_y_h = 0,
    count_bss_n_h = 0,
    count_krus_n_h = 0,
    count_bss_y_m = 0,
    count_krus_y_m = 0,
    count_bss_n_m = 0,
    count_krus_n_m = 0,
    count_bss_y_l = 0,
    count_krus_y_l = 0,
    count_bss_n_l = 0,
    count_krus_n_l = 0;

var arr_filter_td = [];

var th_num_tt = 0,          // '№'
    th_date_tt = 0,         // 'Дата'
    th_bil = 0,             // 'BIL'
    th_sr = 0,              // 'Услуга Восстановлена'
    th_prior = 0,           // 'Приоритет'
    th_status = 0,          // 'Статус'
    th_client = 0,          // 'Клиент'
    th_address = 0,         // 'Адреса точек'
    th_appli = 0,           // 'Тип заявителя'
    th_problem = 0,         // 'Проблема'
    th_exec1 = 0,           // 'Ответственный'
    th_exec2 = 0,           // 'Исполнитель'
    th_descrip = 0,         // 'COMMENTS' (Описание проблемы)
    th_contract = 0,         // '№ дог'
    th_tz = 0,              // 'TZ'
    th_sec = 0;             // ''

function view_stats(data) {
    all_stats.innerHTML = (data.length - 1);
    var selectList = tbl_filter_th;
    for (var row = 0; row < data.length; row++) {
        for (var col = 0; col < data[row].length; col++) {
            if (row == 0) {
                var option = document.createElement("option");
                option.value = data[0][col];
                option.text = data[0][col];
                selectList.appendChild(option);
            }

            if (data[0][col] == 'BIL') { th_bil = col; }
            if (data[0][col] == 'Услуга Восстановлена') { th_sr = col; }
            if (data[0][col] == 'Приоритет') { th_prior = col; }
            if (data[0][col] == '№') { th_num_tt = col; }
            if (data[0][col] == 'Дата') { th_date_tt = col; }
            if (data[0][col] == 'Статус') { th_status = col; }
            if (data[0][col] == 'Клиент') { th_client = col; }
            if (data[0][col] == 'Адреса точек') { th_address = col; }
            if (data[0][col] == 'Тип заявителя') { th_appli = col; }
            if (data[0][col] == 'Проблема') { th_problem = col; }
            if (data[0][col] == 'Ответств.отдел') { th_exec1 = col; }
            if (data[0][col] == 'Исполнитель') { th_exec2 = col; }
            if (data[0][col] == 'COMMENTS') { th_descrip = col; }
            if (data[0][col] == '№ дог') { th_contract = col; }
            if (data[0][col] == 'TZ') { th_tz = col; }
            if (data[0][col] == 'Сегмент') { th_sec = col; }
        }
        var if_bss = data[row][th_bil] == 'BSS',
            if_krus = data[row][th_bil] == 'КРУС',
            if_y = data[row][th_sr] == 'Да',
            if_n = data[row][th_sr] == 'Нет',
            if_h = (data[row][th_prior] == '0') || (data[row][th_prior] == '1'),
            if_m = (data[row][th_prior] == '2') || (data[row][th_prior] == '3'),
            if_l = (data[row][th_prior] == '4') || (data[row][th_prior] == '5');

        if (if_bss) { count_bss++ }
        if (if_krus) { count_krus++ }
        if (if_y && if_bss) { count_bss_y++; }
        if (if_y && if_krus) { count_krus_y++; }
        if (if_n && if_bss) { count_bss_n++; }
        if (if_n && if_krus) { count_krus_n++; }
        if (if_h && if_y && if_bss) { count_bss_y_h++; }
        if (if_h && if_y && if_krus) { count_krus_y_h++; }
        if (if_h && if_n && if_bss) { count_bss_n_h++; }
        if (if_h && if_n && if_krus) { count_krus_n_h++; }
        if (if_m && if_y && if_bss) { count_bss_y_m++; }
        if (if_m && if_y && if_krus) { count_krus_y_m++; }
        if (if_m && if_n && if_bss) { count_bss_n_m++; }
        if (if_m && if_n && if_krus) { count_krus_n_m++; }
        if (if_l && if_y && if_bss) { count_bss_y_l++; }
        if (if_l && if_y && if_krus) { count_krus_y_l++; }
        if (if_l && if_n && if_bss) { count_bss_n_l++; }
        if (if_l && if_n && if_krus) { count_krus_n_l++; }
    }
    bss_stats.innerHTML = count_bss;
    krus_stats.innerHTML = count_krus;
    bss_y_stats.innerHTML = count_bss_y;
    krus_y_stats.innerHTML = count_krus_y;
    bss_n_stats.innerHTML = count_bss_n;
    krus_n_stats.innerHTML = count_krus_n;
    bss_y_h_stats.innerHTML = count_bss_y_h;
    bss_y_m_stats.innerHTML = count_bss_y_m;
    bss_y_l_stats.innerHTML = count_bss_y_l;
    bss_n_h_stats.innerHTML = count_bss_n_h;
    bss_n_m_stats.innerHTML = count_bss_n_m;
    bss_n_l_stats.innerHTML = count_bss_n_l;
    krus_y_h_stats.innerHTML = count_krus_y_h;
    krus_y_m_stats.innerHTML = count_krus_y_m;
    krus_y_l_stats.innerHTML = count_krus_y_l;
    krus_n_h_stats.innerHTML = count_krus_n_h;
    krus_n_m_stats.innerHTML = count_krus_n_m;
    krus_n_l_stats.innerHTML = count_krus_n_l;

    work_stats.innerHTML = count_bss_n + count_krus_n + count_krus_y;
}
function view_filter(filter_th) {
    var selectList = tbl_filter_td;
    tbl_filter_td.innerText = '';
    arr_filter_td = ["Выберите значение..."];
    for (var row = 0; row < data.length; row++) {
        for (var col = 0; col < data[row].length; col++) {
            if ((row != 0) && (arr_filter_td.indexOf(data[row][col]) == "-1") && (data[0][col] == filter_th)) {
                arr_filter_td.push(data[row][col]);
            }
        }
    }
    for (var row = 0; row < arr_filter_td.length; row++) {
        var option = document.createElement("option");
        option.value = arr_filter_td[row];
        option.text = arr_filter_td[row];
        selectList.appendChild(option);
    }
    filter_th_id = data[0].indexOf(filter_th);
}



function view_table(filter) {
    output.innerHTML = '';
    var table = document.createElement("table");
    table.setAttribute("class", "table table-bordered");
    for (var row = 0; row < data.length; row++) {
        if (row == 0) {
            var tr_table = document.createElement("tr");
            for (var col = 0; col < data[row].length; col++) {
                var td_table = document.createElement("th");
                td_table.innerHTML = data[row][col];
                tr_table.appendChild(td_table);
            }
        } else {
            var tr_table = document.createElement("tr");
            for (var col = 0; col < data[row].length; col++) {
                if (data[row][filter_th_id] == filter) {
                    var td_table = document.createElement("td");
                    td_table.setAttribute("name", data[row][col]);
                    if (col == th_num_tt) {
                        td_table.innerHTML = '<button type="button" class="btn btn-primary" data-bs-toggle="modal"data-bs-target="#tbl-modal" onclick="view_modal(this.value)" value="' + data[row][col] + '">' + data[row][col] + '</button>';
                    } else { td_table.innerHTML = data[row][col]; }
                    tr_table.appendChild(td_table);
                }
            }
        }
        table.appendChild(tr_table);
    }
    output.appendChild(table);

}

function view_modal(modal_data) {
    const modal_tt = document.getElementById("modal_tt"),
        modal_prior = document.getElementById("modal_prior"),
        modal_status = document.getElementById("modal_status"),
        modal_client = document.getElementById("modal_client"),
        modal_address = document.getElementById("modal_address"),
        modal_bil = document.getElementById("modal_bil"),
        modal_appli = document.getElementById("modal_appli"),
        modal_problem = document.getElementById("modal_problem"),
        modal_exec = document.getElementById("modal_exec"),
        modal_descrip = document.getElementById("modal_descrip"),
        modal_contract = document.getElementById("modal_contract"),
        modal_tz = document.getElementById("modal_tz"),
        modal_sec = document.getElementById("modal_sec");
        tbl_modal_data = document.getElementById("tbl_modal_data");
        

    for (var row = 0; row < data.length; row++) {
        for (var col = 0; col < data[row].length; col++) {
            if (modal_data == data[row][th_num_tt]) {
                tbl_modal_data.innerHTML = data[row][th_num_tt];
                modal_tt.innerHTML = data[row][th_num_tt] +' от ' + data[row][th_date_tt];
                modal_prior.innerHTML = data[row][th_prior];
                modal_status.innerHTML = data[row][th_status];
                modal_client.innerHTML = data[row][th_client];
                modal_address.innerHTML = data[row][th_address];
                modal_bil.innerHTML = data[row][th_bil];
                modal_appli.innerHTML = data[row][th_appli];
                modal_problem.innerHTML = data[row][th_problem];
                modal_exec.innerHTML = data[row][th_exec1] +' / '+ data[row][th_exec2];
                modal_descrip.innerHTML = data[row][th_descrip];
                modal_contract.innerHTML = data[row][th_contract];
                modal_tz.innerHTML = data[row][th_tz];
                modal_sec.innerHTML = data[row][th_sec];

            }
        }
    }
}