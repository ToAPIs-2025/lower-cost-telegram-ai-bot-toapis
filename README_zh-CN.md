# 更低成本的 Telegram AI Bot API 方案

[English](README.md) · [原项目](https://github.com/harshitethic/chatgpt-bot-telegram)

基于固定源码核对的社区 API 案例与接入提案。已验证独立 API 调用与文件输出；原产品内完整流程尚未验收，未获官方背书。

## 演示

![原创案例](assets/gpt-image-2-vip-0f4680bb4a.png)

gpt-image-2(VIP) · low / 1K：**$0.0019/image**。本张报价 $0.0019，实扣回执待确认。

## 复用

参照 [英文完整步骤](README.md#run)，在服务端私有环境配置 Key，先查询报价，再显式开启 `--live`；保留相同 `--run-id` 以继续已有任务。脚本禁止自动重复提交不确定的付费请求，禁止 Seedance Global。

[具体模块与验收范围](integration/README.md) · [模型价格及本次消费](PRICING.md)

# Model pricing and call cost

2026-10-23 · USD · ToAPIs international site (.com). Sorted by call amount; pending image quotes are labeled.

| Model | Conditions | Current API price | This call |
|---|---|---:|---:|
| gpt-image-2(VIP) | low / 1K / 1 image | $0.0019/image | Settlement pending; quote $0.0019 |

Image price is a Key-scoped quotation; do not treat the missing settlement as zero. Video is .com `billing=settled`; $/s = this settled cost / decoded duration. Token rates are not flat per-second tariffs.

[模型落地页与归因](https://go2v.toapis.com/1023_tg)
