import { db } from "@/db";
import {
  meetingRooms,
  notificationCategories,
  plan,
  tickts,
} from "@/db/schema";

const seedMaster = async () => {
  try {
    await db.transaction(async (tx) => {
      await tx
        .insert(plan)
        .values([{ name: "free" }, { name: "standard" }, { name: "business" }]);
      await tx.insert(tickts).values([
        {
          name: "1_weekly_plan",
          usage_limit: 4,
          usage_period: 3,
        },
        {
          name: "trial_plan",
          usage_limit: 2,
          usage_period: 1,
        },
      ]);
      await tx.insert(meetingRooms).values([
        {
          name: "会議室A",
          description:
            "プロジェクターやホワイトボードを完備した、最大10名収容可能な会議室です。少人数のミーティングに最適。",
        },
        {
          name: "会議室B",
          description:
            "自然光が差し込む、明るく開放的な雰囲気の会議室です。15名まで対応可能で、チーム会議やプレゼンテーションにおすすめ。",
        },
        {
          name: "会議室C",
          description:
            "静かな環境で集中できる、小規模な会議に適したスペースです。オンライン会議用の設備も完備しており、6名まで利用可能。",
        },
      ]);

      await tx.insert(notificationCategories).values([
        {
          name: "重要なお知らせ",
        },
        {
          name: "イベント",
        },
        {
          name: "企業紹介",
        },
        {
          name: "キャンペーン",
        },
      ]);
    });
    console.log("seeded successfully");
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

seedMaster();
