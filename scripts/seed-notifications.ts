const seedNotifications = async () => {
  try {
    const notificationsData = [
      //   {
      //     category: "重要なお知らせ",
      //     title: "システムメンテナンスのお知らせ",
      //     content: `いつもご利用いただきありがとうございます。\n\nシステムメンテナンスを以下の日時に実施いたします。
      // \n\n日時: 2024年10月15日 22:00 ～ 2024年10月16日 02:00
      // \n\nメンテナンス中は一時的にサービスがご利用いただけません。ご不便をおかけいたしますが、ご理解のほどよろしくお願いいたします。`,
      //   },
      //   {
      //     category: "企業紹介",
      //     title: "新しいパートナー企業のご紹介",
      //     content: `この度、当社は新たにパートナー企業を迎え入れることになりました。\n\n新たな提携により、より多様なサービスを提供することが可能になります。
      //     \n\n今後もさらなる成長とサービス向上に努めてまいりますので、ぜひご期待ください。`,
      //   },
      //   {
      //     category: "イベント",
      //     title: "年末イベント開催のお知らせ",
      //     content: `今年も恒例の年末イベントを開催いたします！\n\n2024年12月20日に、特別なゲストを招いて盛大に行います。
      //     \n\nお楽しみいただけるコンテンツも多数ご用意しておりますので、ぜひご参加ください。
      //     \n\n詳細については、後日改めてお知らせいたします。`,
      //   },
      {
        category: "キャンペーン",
        title: "秋の特別キャンペーン開催中",
        content: `秋の特別キャンペーンを開催いたします！\n\n2024年10月10日から10月31日まで、全商品が10%オフとなる特別セールを実施中です。
        \n\nさらに、期間中にご購入いただいた方には、特典として次回購入時に使えるクーポンをプレゼントいたします。
        \n\nぜひこの機会にご利用ください！`,
      },
    ];

    // for (const notification of notificationsData) {
    //   const [tergetCategory] = await db
    //     .select()
    //     .from(notificationCategories)
    //     .where(eq(notificationCategories.name, notification.category));

    //   if (!tergetCategory) {
    //     throw new Error("Category not found");
    //   }

    //   await db.insert(notifications).values({
    //     title: notification.title,
    //     content: notification.content,
    //     category_id: tergetCategory.id,
    //   });
    // }

    console.log("Notifications seeded successfully");
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

seedNotifications();
