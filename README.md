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