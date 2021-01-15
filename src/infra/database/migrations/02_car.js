exports.up = (knex) => {
  return knex.schema.createTable("car", (table) => {
    table.increments("id").unsigned().primary().unique();

    table.string("brand").notNullable();
    table.string("name").notNullable();
    table.string("licenseNumber");
    table.boolean("licensing").defaultTo(true);
    table.specificType("informations", "jsonb[]");

    table.integer("user_id");
    table
      .foreign("user_id")
      .references("id")
      .inTable("users")
      .onUpdate("CASCADE")
      .onDelete("SET NULL");

    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTable("car");
};
