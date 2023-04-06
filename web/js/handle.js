const langSelect = document.getElementById("lang-select");
const textInput = document.getElementById("text-input");
const textOutput = document.getElementById("text-output");
const customAlert = document.getElementById("custom-alert");
function myAlert(message) {
    customAlert.textContent = message;
    customAlert.style.top = "30px";
    setTimeout(function () {
        customAlert.style.top = "-100px";
    }, 2000);
}
function btnTranslate() {
    let lang_select = langSelect.value;
    let text_input = textInput.value.trim();
    if (lang_select === "") {
        myAlert("请选择语言！")
        return;
    }
    if (text_input === "") {
        myAlert("请输入文本！")
        return;
    }
    customAlert.textContent = "加载中...";
    customAlert.style.top = "30px";
    fetch(`${window.location.protocol}//${window.location.hostname}/api`, {
        method: 'POST',
        body: JSON.stringify({ text: text_input, target_lang: lang_select })
    })
        .then(response => response.json())
        .then(r => {
            customAlert.style.top = "-100px";
            textOutput.value = r.data;
        });
}
function btnCopy() {
    if (textOutput.value === "") {
        myAlert("内容为空！")
        return;
    }
    textOutput.select();
    document.execCommand('copy');
    myAlert("已复制！")
}
function btnClear() {
    textInput.value = ""
    textOutput.value = ""
    myAlert("已清除！")
}