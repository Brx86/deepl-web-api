const langSelect = document.getElementById("lang-select");
const textInput = document.getElementById("text-input");
const textOutput = document.getElementById("text-output");
const customAlert = document.getElementById("custom-alert");
const api_url = `${window.location.protocol}//${window.location.hostname}/api`

function myAlert(message) {
    customAlert.textContent = message;
    customAlert.style.top = "30px";
    setTimeout(function () {
        customAlert.style.top = "-100px";
    }, 2000);
}
async function btnTranslate() {
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
    let body_json = JSON.stringify({ text: text_input, target_lang: lang_select })
    let response = await fetch(api_url, { method: 'POST', body: body_json })
    let r = await response.json()
    customAlert.style.top = "-100px";
    textOutput.value = r.data;
}
async function btnCopy() {
    if (textOutput.value === "") {
        myAlert("内容为空！")
        return;
    }
    try {
        await navigator.clipboard.writeText(textOutput.value);
        myAlert('复制成功');
    } catch (error) {
        myAlert('复制失败');
    }
}
function btnClear() {
    textInput.value = ""
    textOutput.value = ""
    myAlert("已清除！")
}