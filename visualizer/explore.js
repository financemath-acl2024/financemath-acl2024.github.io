
// Data file
DATA_FILE = "data_public.js"; // default, answers for development, no answer for test

// Variables for the filters with the number of questions
let number_options = [20, 50, 100, 200];  
let splits = ["All", "development (200)", "test (1000)"];    
let topic = ["All", "Market Analysis & Economics", "Asset Classes & Derivatives", "Accounting", "Quantitative Analysis & Valuation", "Risk Management", "Corporate & Securities Issuance", "Portfolio Management & Strategy"];

// Elements in the Option Panel
let optbtn = document.getElementsByClassName("optionsbtn")[0];
let closebtn = document.getElementsByClassName("closebtn")[0];
let optionpanel = document.getElementById("option-panel");
let optboxes = document.getElementsByClassName("optbox");
let opt_dds = document.getElementsByClassName("opt-dd");
let filter_submit = document.getElementById("filter-submit");

// Element Text the Option Panel
let number_dd = make_dropdown("How many samples?", number_options, "number_dd");
let split_dd = make_dropdown("Choose a split:", splits, "split_dd");
let topic_dd = make_dropdown("Choose a topic:", topic, "topic_dd");

// Content in the Option Box
optboxes[0].innerHTML += number_dd;
optboxes[0].innerHTML += split_dd;
optboxes[0].innerHTML += topic_dd;

// Elements in the Content Body
let body = document.getElementById("content-body");
let display = document.getElementById("display");

// Click actions for the option buttons
optbtn.addEventListener("click", openNav);
closebtn.addEventListener("click", closeNav);

// Responsive: if screen is narrow, body only displays one column
if (window.innerWidth < 600) {
    body.style.flexDirection = "column";
}

// Set up the data filters and display the page
let filters = {};

for (each of opt_dds) {
    each.addEventListener("change", change_filters);
}

// Display the page when clicking the fresh button
filter_submit.addEventListener("click", filter_data);
if (window.innerWidth < 600) {
    filter_submit.addEventListener("click", closeNav);
}

// Display the page when it is running at the first time
filter_data();

// Functions
var display_padding = display.style.padding;
function openNav() {
    if (window.innerWidth < 600) {
        // optionpanel.style.zIndex = "2";
        optionpanel.style.width = "100vw";
        display.style.width = "0vw";
        display.style.padding = "0";
    } else {
        optionpanel.style.width = "30vw";
        display.style.width = "50vw";
    }
    for (each of optionpanel.children) 
        each.style.display = "block";
}

function closeNav() {
    // display.style.display = "block";
    optionpanel.style.width = "0vw";
    display.style.width = "100vw";
    display
    for (each of optionpanel.children) {
        each.style.display = "none";
    }
}

// Function: update the filter values
function change_filters(e) {
    filters.split = document.getElementById("split_dd").value;
    filters.number = document.getElementById("number_dd").value;
    filters.topic = document.getElementById("topic_dd").value;
    // console.log(filters);
}

// Function: draw the page
function create_page(d) {
    if (d.length === 0) {
        body.innerHTML = "<p>No number satisfies All the filters.</p>";
    } else {
        body.innerHTML = create_col(d);
    }
    reflow(body);
    console.log("reflowed");
}

function create_col(data) {
    res = [];

    for (each of data) {
        res.push(create_number(each));
    }

    return `<div class="display-col"> ${res.join("")} </div>`;
}

// data is an object with the following attr.
function create_number(data) {
    let question = make_qt(data.pid, data.question);

    // if the tables list is not empty, then make the tables
    let tables = "";
    if (data.tables.length > 0)
        tables = make_tables(data.tables);

    // if the python_solution attr is not empty, then make the python solution
    let python_solution = "";
    if (data.python_solution.length > 0)
        python_solution = make_python_solution(data.python_solution);

    // if the ground_truth attr is not null, then make the answer
    let ground_truth = "";
    if (data.ground_truth !== null)
        ground_truth = make_ground_truth(data.ground_truth);

    html = make_box([question, tables, python_solution, ground_truth]) + "<hr/>";

    return html;
}

// creates a div with question text in it
function make_qt(pid, question) {
    let html = "";
    html = `
            <p><b>Question </b></p>
            <p class="question-txt">[No.${pid}] ${question}</p>
    `;
    return html;
}


function make_tables(tables) {
    let temp = "";
    for (each of tables) {
        // convert the '\n' to '<br>'
        each = each.replace(/\n/g, "<br>");
        let html = `<p><b>Table </b></p><p class="table-text">${each}</p>`;
        temp += html;
    }
    console.log(temp);
    return temp;
}

function make_python_solution(python_solution) {
    // convert the '\n' to '<br>'
    python_solution = python_solution.replace(/\n/g, "<br>");
    python_solution = python_solution.replace(/ /g, '&nbsp;');
    let temp = `<p><b>Python Solution </b></p><p class="python-solution">${python_solution}</p>`;
    return temp;
}


function make_box(contents, cls = "") {
    if (contents.join("").length === 0) return "";
    let html = `
        <div class="box ${cls}"> 
            ${contents.join(" ")}
        </div>
    `;
    return html;
}


function make_ground_truth(answer) {
    let html = `<p><b>Answer </b></p><p class="answer-txt">${answer}</p>`;
    return html;
}

function make_dropdown(label, options, id, default_ind = 0) {
    let html = "";
    for (let i = 0; i < options.length; i++) {
        if (i === default_ind)
            html += `<option value="${options[i]}" selected> ${options[i]} </option>`;
        else
            html += `<option value="${options[i]}"> ${options[i]} </option>`;
    }
    html = `<label class="dd-label">${label} <select id="${id}" class="opt-dd"> ${html} </select> </label><br/>`;
    return html;
}


// Main Functions (FIXME: need to be updated)
async function filter_data() {
    // set up or update the filter
    change_filters();

    console.log(filters);
    // e.g. data/{"dataset": "CLEVR-Math", "number": 20}

    // success event 
    let scriptEle = document.createElement("script");
    // scriptEle.setAttribute("src", `data/${filters.dataset}_test.js`);
    scriptEle.setAttribute("src", `data/${DATA_FILE}`);
    scriptEle.setAttribute("type", "text/javascript");
    scriptEle.setAttribute("async", false);
    document.body.appendChild(scriptEle);

    scriptEle.addEventListener("load", () => {
        console.log("File loaded");
        res = test_data;
        // console.log(res);


        // go over res and add pid to each element
        for (let i of Object.keys(res)) {
            res[i].pid = i;
        }

        // filter: split
        filters.split = filters.split.split(" (")[0];
        if (filters.split !== "All") {
            for (let i of Object.keys(res)) {
                if (res[i].split.toString() !== filters.split) {
                    delete res[i];
                }
            }
        }

        // filter: topic
        filters.topic = filters.topic.split(" (")[0];
        if (filters.topic !== "All") {
            for (let i of Object.keys(res)) {
                if (res[i].topic.toString() !== filters.topic) {
                    delete res[i];
                }
            }
        }

        // filter: number
        cnt = filters.number;
        if (cnt != "All") {
            cnt = Number.parseInt(cnt);
            d = _.sample(res, Math.min(cnt, Object.keys(res).length));

        } else {
            d = [];
            for (let i of Object.keys(res)) {
                d.push(res[i]);
            }
        }
        create_page(d);
    });
}

// force the browser to reflow
function reflow(elt) {
    elt.offsetHeight;
}
