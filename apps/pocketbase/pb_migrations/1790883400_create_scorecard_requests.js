/// <reference path="../pb_data/types.d.ts" />

migrate(
  (app) => {
    const collection = new Collection({
      type: "base",
      name: "scorecard_requests",
      // Public create (anonymous visitors submit their scorecard).
      // Reads/writes/deletes are admin-only.
      listRule: "@request.auth.role = 'admin'",
      viewRule: "@request.auth.role = 'admin'",
      createRule: "",
      updateRule: "@request.auth.role = 'admin'",
      deleteRule: "@request.auth.role = 'admin'",
      fields: [
        {
          name: "email",
          type: "email",
          required: true,
          exceptDomains: [],
          onlyDomains: [],
        },
        { name: "organization", type: "text", required: false, max: 200 },
        { name: "concern", type: "text", required: false, max: 2000 },
        { name: "totalScore", type: "number", required: false },
        {
          name: "categoryScores",
          type: "json",
          required: false,
        },
        { name: "answers", type: "json", required: false },
        { name: "priorities", type: "json", required: false },
        { name: "sourcePage", type: "text", required: false, max: 300 },
        {
          name: "created",
          type: "autodate",
          onCreate: true,
          onUpdate: false,
        },
        {
          name: "updated",
          type: "autodate",
          onCreate: true,
          onUpdate: true,
        },
      ],
    });
    app.save(collection);
  },
  (app) => {
    const collection = app.findCollectionByNameOrId("scorecard_requests");
    app.delete(collection);
  },
);
