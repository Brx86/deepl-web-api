# deepl-web-api
基于某已删除跑路的 deepl-api-rs 项目的网页前端与 api

## 网页 Demo:
https://deepl.aya1.pro/

## Api用法：
| 参数        | 说明     |
| ----------- | -------- |
| text        | 文本内容 |
| target_lang | 目标语言 |

可选语言：['DE', 'EN', 'ES', 'FR', 'IT', 'JA', 'NL', 'PL', 'PT', 'RU', 'ZH', 'BG', 'CS', 'DA', 'EL', 'ET', 'FI', 'HU', 'LT', 'LV', 'RO', 'SK', 'SL', 'SV']

**示例：**
```bash
curl https://deepl.aya1.pro/api -d '{"text": "hello","target_lang": "ZH"}'
# 返回结果：{"code":200,"data":"你好"}
```

## 衍生项目：
https://aur.archlinux.org/packages/deepl-clipboard

安装：
```bash
paru -S deepl-clipboard
```
使用： 

在系统设置里添加快捷键，命令为 `deepl-clipboard` 。之后可以复制文本并使用快捷键触发翻译界面。

界面截图：

![截图_2023-04-06_17-10-55](https://user-images.githubusercontent.com/44391900/230331025-a978d098-b761-4d31-a42e-13e1c3395918.png)
