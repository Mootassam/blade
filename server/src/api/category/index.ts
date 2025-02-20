export default (app) => {
  app.post(`/tenant/:tenantId/category`, require("./categoryCreate").default);
  app.put(
    `/tenant/:tenantId/category/:id`,
    require("./categoryUpdate").default
  );
  app.post(
    `/tenant/:tenantId/category/import`,
    require("./categoryImport").default
  );
  app.delete(
    `/tenant/:tenantId/category`,
    require("./categoryDestroy").default
  );
  app.get(
    `/tenant/:tenantId/category/autocomplete`,
    require("./categoryAutocomplete").default
  );
  app.get(`/tenant/:tenantId/category`, require("./categoryList").default);
  app.get(`/cs/findcs`, require("./categoryFindCs").default);

  app.get(`/tenant/category/all`, require("./categoryFindAll").default);
  app.get(`/tenant/:tenantId/category/:id`, require("./categoryFind").default);
};
