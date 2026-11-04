/// <reference path="../pb_data/types.d.ts" />

migrate(
  (app) => {
    const collection = new Collection({
      type: "base",
      name: "review_inquiries",
      // Public create (anonymous visitors submit the review inquiry form).
      // Reads/writes/deletes are admin-only, matching the inquiries collection.
      listRule: "@request.auth.role = 'admin'",
      viewRule: "@request.auth.role = 'admin'",
      createRule: "",
      updateRule: "@request.auth.role = 'admin'",
      deleteRule: "@request.auth.role = 'admin'",
      fields: [
        { name: "fullName", type: "text", required: true },
        { name: "email", type: "email", required: true },
        { name: "phone", type: "text", required: false },
        { name: "organizationName", type: "text", required: false, max: 200 },
        {
          name: "organizationType",
          type: "select",
          required: false,
          maxSelect: 1,
          values: ["Business", "Nonprofit or ministry", "Other"],
        },
        { name: "requestedBy", type: "text", required: false, max: 200 },
        { name: "deadline", type: "text", required: false, max: 200 },
        { name: "message", type: "text", required: false, max: 4000 },
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
    const collection = app.findCollectionByNameOrId("review_inquiries");
    app.delete(collection);
  },
);
