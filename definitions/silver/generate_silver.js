const metadata = require("../../definitions/config/tables_metadata");
const helper = require("../../includes/helper");

metadata.forEach(table => {

    publish(table.table_name, {

            type: "incremental",
            schema: "edf_dataform_silver",
            tags: ["silver", "poc"],
            description: 'Silver staging table generated from ${table.bronze_table_name}'
        })
        .query(ctx =>`
    Select t.*,
    ${helper.auditColumns(table.source_system)}
    FROM \`ge-appliances-enterprise.edf_raw.${table.bronze_table_name}\` t
    ${ctx.when(
        ctx.incremental(),
        `WHERE t.${table.watermark_column} > (Select MAX(${table.watermark_column}) FROM ${ctx.self()})`
    )}

    `);


});
