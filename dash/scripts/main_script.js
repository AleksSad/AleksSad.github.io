

const input = document.getElementById("input"),
    output = document.getElementById("tbl-data"),
    dash = document.getElementById("tbl-stats"),
    //Основной дашборд
    bss_stats = document.getElementById("bss_stats"),
    bss_y_stats = document.getElementById("bss_y_stats"),
    bss_y_h_stats = document.getElementById("bss_y_h_stats"),
    bss_y_m_stats = document.getElementById("bss_y_m_stats"),
    bss_y_l_stats = document.getElementById("bss_y_l_stats"),
    bss_n_stats = document.getElementById("bss_n_stats"),
    bss_n_h_stats = document.getElementById("bss_n_h_stats"),
    bss_n_m_stats = document.getElementById("bss_n_m_stats"),
    bss_n_l_stats = document.getElementById("bss_n_l_stats"),
    krus_stats = document.getElementById("krus_stats"),
    krus_y_stats = document.getElementById("krus_y_stats"),
    krus_y_h_stats = document.getElementById("krus_y_h_stats"),
    krus_y_m_stats = document.getElementById("krus_y_m_stats"),
    krus_y_l_stats = document.getElementById("krus_y_l_stats"),
    krus_n_stats = document.getElementById("krus_n_stats"),
    krus_n_h_stats = document.getElementById("krus_n_h_stats"),
    krus_n_m_stats = document.getElementById("krus_n_m_stats"),
    krus_n_l_stats = document.getElementById("krus_n_l_stats"),
    all_stats = document.getElementById("all_stats"),
    //Фильтр
    tbl_filter_th = document.getElementById("tbl-filter_th"),
    tbl_filter_td = document.getElementById("tbl-filter_td"),
    //Статистика по КИС, ДИТ, ДЕЗ
    kis_y = document.getElementById("kis_y"),
    kis_n = document.getElementById("kis_n"),
    dit_y = document.getElementById("dit_y"),
    dit_n = document.getElementById("dit_n"),
    dez_y = document.getElementById("dez_y"),
    dez_n = document.getElementById("dez_n"),
    //Статистика по Сегментам
    b2r_n = document.getElementById("b2r_n"),
    b2g_n = document.getElementById("b2g_n"),
    b2o_n = document.getElementById("b2o_n"),
    b2f_n = document.getElementById("b2f_n"),
    b2r_y = document.getElementById("b2r_y"),
    b2g_y = document.getElementById("b2g_y"),
    b2o_y = document.getElementById("b2o_y"),
    b2f_y = document.getElementById("b2f_y"),
    sso_y = document.getElementById("sso_y"),
    sso_n = document.getElementById("sso_n"),
    //Модальное окно
    modal_tt = document.getElementById("modal_tt"),
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
    modal_sr = document.getElementById("modal_sr"),
    modal_manag = document.getElementById("modal_manag"),
    modal_out_ticket = document.getElementById("modal_out_ticket"),
    tbl_modal_data = document.getElementById("tbl_modal_data");

var arr_filter_td = [],

    th_iz = 0;              // 'ИЗ'
    th_sr = 0,              // 'Услуга Восстановлена'
    th_tz = 0,              // 'TZ'
    th_bil = 0,             // 'BIL'
    th_sso = 0,             // 'NAME_SSO'
    th_sec = 0,             // 'Сегмент'
    th_manag = 0,           // 'Менеджер сопр.'
    th_prior = 0,           // 'Приоритет'
    th_appli = 0,           // 'Тип заявителя'
    th_exec1 = 0,           // 'Ответственный'
    th_exec2 = 0,           // 'Исполнитель'
    th_status = 0,          // 'Статус'
    th_num_tt = 0,          // '№'
    th_client = 0,          // 'Клиент'
    th_date_tt = 0,         // 'Дата'
    th_address = 0,         // 'Адреса точек'
    th_problem = 0,         // 'Проблема'
    th_descrip = 0,         // 'COMMENTS' (Описание проблемы)
    th_contract = 0,        // '№ дог'
    th_out_ticket = 0;      // 'Кейс внешний'

function view_stats(data) {
    all_stats.innerHTML = (data.length - 1);
    var selectList = tbl_filter_th;
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
        count_krus_n_l = 0,

        count_dez_y = 0,
        count_kis_y = 0,
        count_dit_y = 0,
        count_dez_n = 0,
        count_kis_n = 0,
        count_dit_n = 0,

        count_b2r_y = 0,
        count_b2r_n = 0,
        count_b2g_y = 0,
        count_b2g_n = 0,
        count_b2o_y = 0,
        count_b2o_n = 0,
        count_b2f_y = 0,
        count_b2f_n = 0,
        count_sso_y = 0,
        count_sso_n = 0;

        
        
    for (var row = 0; row < data.length; row++) {
        for (var col = 0; col < data[row].length; col++) {
            if (row == 0) {
                var option = document.createElement("option");
                option.value = data[0][col];
                option.text = data[0][col];
                selectList.appendChild(option);
            }
            switch (data[0][col]) {
                case `№`: { th_num_tt = col; break;}
                case `TZ`: { th_tz = col; break;}
                case `ИЗ`: { th_iz = col; break;}
                case `BIL`: { th_bil = col; break;}
                case `Дата`: { th_date_tt = col; break;}
                case `№ дог`: { th_contract = col; break;}
                case `Клиент`: { th_client = col; break;}
                case `Статус`: { th_status = col; break;}
                case `Сегмент`: { th_sec = col; break;}
                case `Проблема`: { th_problem = col; break;}
                case `NAME_SSO`: { th_sso = col; break;}
                case `COMMENTS`: { th_descrip = col; break;}
                case `Приоритет`: { th_prior = col; break;}
                case `Исполнитель`: { th_exec2 = col; break;}
                case `Кейс внешний`: { th_out_ticket = col; break;}
                case `Адреса точек`: { th_address = col; break;}
                case `Тип заявителя`: { th_appli = col; break;}
                case `Ответств.отдел`: { th_exec1 = col; break;}
                case `Менеджер сопр.`: { th_manag = col; break;}
                case `Услуга Восстановлена`: { th_sr = col; break;}
            }
        }
        let innerCount = function(count, stats) {stats.innerHTML = count;}
        var if_bss = (data[row][th_bil] == 'BSS'),
            if_krus = (data[row][th_bil] == 'КРУС'),
            if_y = (data[row][th_sr] == 'Да'),
            if_n = (data[row][th_sr] == 'Нет'),
            if_h = (data[row][th_prior] == '0') || (data[row][th_prior] == '1'),
            if_m = (data[row][th_prior] == '2') || (data[row][th_prior] == '3'),
            if_l = (data[row][th_prior] == '4') || (data[row][th_prior] == '5'),
            if_dez = (data[row][th_client] == 'ДЕЗ (ГК 869) (1877 шт) (23-24гг)')||(data[row][th_client] == 'ДЕЗ (ГК 820) (2042 шт)'),
            if_kis = (data[row][th_client] == 'КИС_MSK12105'),
            if_dit = (data[row][th_client] == 'Мосгортелеком_WiFi 2024-2025'),
            //
            if_b2f = (data[row][th_sso] == 'B2F'),
            if_b2r = (data[row][th_sso] == 'B2R'),
            if_b2o = (data[row][th_sso] == 'B2O'),
            if_b2g = (data[row][th_sso] == 'B2G'),
            if_sso = (data[row][th_sso] == null);//console.log(data[row][th_sso]);
        
        if (if_bss) { count_bss++; innerCount(count_bss, bss_stats); }
        if (if_bss && if_y) { count_bss_y++; innerCount(count_bss_y, bss_y_stats);}
        if (if_bss && if_n) { count_bss_n++; innerCount(count_bss_n, bss_n_stats);}
        if (if_bss && if_y && if_h) { count_bss_y_h++; innerCount(count_bss_y_h, bss_y_h_stats);}
        if (if_bss && if_y && if_m) { count_bss_y_m++; innerCount(count_bss_y_m, bss_y_m_stats);}
        if (if_bss && if_y && if_l) { count_bss_y_l++; innerCount(count_bss_y_l, bss_y_l_stats);}
        if (if_bss && if_n && if_h) { count_bss_n_h++; innerCount(count_bss_n_h, bss_n_h_stats);}
        if (if_bss && if_n && if_m) { count_bss_n_m++; innerCount(count_bss_n_m, bss_n_m_stats);}
        if (if_bss && if_n && if_l) { count_bss_n_l++; innerCount(count_bss_n_l, bss_n_l_stats);}

        if (if_krus) { count_krus++ ; innerCount(count_krus, krus_stats);}
        if (if_krus && if_y) { count_krus_y++; innerCount(count_krus_y, krus_y_stats);}
        if (if_krus && if_n) { count_krus_n++; innerCount(count_krus_n, krus_n_stats);}
        if (if_krus && if_y && if_h) { count_krus_y_h++; innerCount(count_krus_y_h, krus_y_h_stats);}
        if (if_krus && if_y && if_m) { count_krus_y_m++; innerCount(count_krus_y_m, krus_y_m_stats);}
        if (if_krus && if_y && if_l) { count_krus_y_l++; innerCount(count_krus_y_l, krus_y_l_stats);}
        if (if_krus && if_n && if_h) { count_krus_n_h++; innerCount(count_krus_n_h, krus_n_h_stats);}
        if (if_krus && if_n && if_m) { count_krus_n_m++; innerCount(count_krus_n_m, krus_n_m_stats);}
        if (if_krus && if_n && if_l) { count_krus_n_l++; innerCount(count_krus_n_l, krus_n_l_stats);}

        if (if_kis && if_y) { count_kis_y++; innerCount(count_kis_y, kis_y);}
        if (if_kis && if_n) { count_kis_n++; innerCount(count_kis_n, kis_n);}
        if (if_dit && if_y) { count_dit_y++; innerCount(count_dit_y, dit_y);}
        if (if_dit && if_n) { count_dit_n++; innerCount(count_dit_n, dit_n);}
        if (if_dez && if_y) { count_dez_y++; innerCount(count_dez_y, dez_y);}
        if (if_dez && if_n) { count_dez_n++; innerCount(count_dez_n, dez_n);}

        if (if_b2r && if_y) { count_b2r_y++; innerCount(count_b2r_y, b2r_y);}
        if (if_b2r && if_n) { count_b2r_n++; innerCount(count_b2r_n, b2r_n);}
        if (if_b2g && if_y) { count_b2g_y++; innerCount(count_b2g_y, b2g_y);}
        if (if_b2g && if_n) { count_b2g_n++; innerCount(count_b2g_n, b2g_n);}
        if (if_b2o && if_y) { count_b2o_y++; innerCount(count_b2o_y, b2o_y);}
        if (if_b2o && if_n) { count_b2o_n++; innerCount(count_b2o_n, b2o_n);}
        if (if_b2f && if_y) { count_b2f_y++; innerCount(count_b2f_y, b2f_y);}
        if (if_b2f && if_n) { count_b2f_n++; innerCount(count_b2f_n, b2f_n);}
        if (if_sso && if_y) { count_sso_y++; innerCount(count_sso_y, sso_y);}
        if (if_sso && if_n) { count_sso_n++; innerCount(count_sso_n, sso_n);}
    }
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
                var td_val = `<button type="button" class="btn btn-secondary" data-bs-toggle="modal"data-bs-target="#tbl-modal" onclick="view_modal(this.value)" value="${data[row][col]}">${data[row][col]}</button>`;
                if (data[row][filter_th_id] == filter) {
                    var td_table = document.createElement("td");
                    if (col == th_num_tt) {
                        td_table.innerHTML = td_val;
                    } else if ((col == th_manag) && (data[row][th_manag] != null)) { td_table.innerHTML = `<a href="mailto:${data[row][th_manag]}?subject=ТТ ${data[row][th_num_tt]} // ${data[row][th_client]}"><button type="button" class="btn btn-secondary">${data[row][th_manag]}</button></a>`; }
                    else { td_table.innerHTML = data[row][col]; }
                    tr_table.appendChild(td_table);
                }
            }
        }
        table.appendChild(tr_table);
    }
    output.appendChild(table);
}

function view_modal(modal_data) {
    for (var row = 0; row < data.length; row++) {
        for (var col = 0; col < data[row].length; col++) {
            if (modal_data == data[row][th_num_tt]) {
                tbl_modal_data.innerHTML = data[row][th_num_tt];
                modal_tt.innerHTML = data[row][th_num_tt] + ' от ' + data[row][th_date_tt];
                modal_status.innerHTML = data[row][th_status];
                modal_client.innerHTML = data[row][th_client];
                modal_address.innerHTML = data[row][th_address].replaceAll(";", `<br>`);
                if (data[row][th_iz] != null) {
                    modal_bil.innerHTML = data[row][th_bil] + ' / ' + data[row][+th_iz];
                } else {
                    modal_bil.innerHTML = data[row][th_bil] + ' / ';
                }
                modal_appli.innerHTML = data[row][th_appli];
                modal_problem.innerHTML = data[row][th_problem];
                if (data[row][th_exec2] != null) {
                    modal_exec.innerHTML = data[row][th_exec1] + ' / ' + data[row][th_exec2];
                } else {
                    modal_exec.innerHTML = data[row][th_exec1] + ' / ';
                }
                modal_descrip.innerHTML = data[row][th_descrip].replaceAll("_x000D_", `<br>`);
                modal_contract.innerHTML = data[row][th_contract];
                modal_tz.innerHTML = data[row][th_tz].replaceAll(`\n`, `<br>`).replaceAll("_x000D_", `<br>`);
                modal_sr.innerHTML = data[row][th_sr];
                if (data[row][th_manag] != null) {
                    modal_manag.innerHTML = `<a href="mailto:${data[row][th_manag]}?subject=ТТ ${data[row][th_num_tt]} // ${data[row][th_client]}"><button type="button" class="btn btn-secondary">${data[row][th_manag]}</button></a>`;
                } else {
                    modal_manag.innerHTML = '';
                }
                if ((data[row][th_bil] == 'BSS') && (data[row][th_iz] == 'bss')) {
                    modal_out_ticket.innerHTML = `<a href="https://tm.bss.loc/ncobject.jsp?id=${data[row][th_out_ticket]}" target="_blank">${data[row][th_out_ticket]}</a>`;
                } else if ((data[row][th_out_ticket] != null) && (data[row][th_bil] == 'КРУС') || (data[row][th_iz] == 'arm')) {
                    modal_out_ticket.innerHTML = `<a href="https://cliks.ertelecom.ru/modules/mod_ticket_search.php?but_search_arm&request_id=${data[row][th_out_ticket]}" target="_blank">${data[row][th_out_ticket]}</a>`;
                } else {
                    modal_out_ticket.innerHTML = '';
                }
                console.log(data[row][th_prior]);
                switch (data[row][th_prior]) {
                    case -3: modal_prior.innerHTML = "-3 приоритет (проблема при подключении)"; break;
                    case -2: modal_prior.innerHTML = "-2 приоритет (администрирование домена)"; break;
                    case 0: modal_prior.innerHTML = "0 - высший приоритет"; break;
                    case 1: modal_prior.innerHTML = "1 - проблема одного Клиента"; break;
                    case 2: modal_prior.innerHTML = "2 - проблема на сети, услуги доступны"; break;
                    case 3: modal_prior.innerHTML = "3 - снижено качество"; break;
                    case 4: modal_prior.innerHTML = "4 - не влияет на качество"; break;
                    case 5: modal_prior.innerHTML = "5 - в зоне ответственности клиента"; break;
                }
            }
        }
    }
}