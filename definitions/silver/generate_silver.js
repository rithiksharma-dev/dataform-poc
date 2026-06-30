const metadata = require("../../includes/metadata");
const helper = require("../../includes/helper");

metadata.forEach(table => {

    publish(table.silver, {

            type: "incremental",
            schema: "edf_dataform_silver",
            tags: ["silver", "poc"],
            description: 'Silver staging table generated from ${table.broze}'
        })
        .query(ctx =>`
    Select t.*,
    ${helper.auditColumns(table.record_source)}
    FROM \`ge-appliances-enterprise.edf_raw.${table.bronze}\` t
    ${ctx.when(
        ctx.incremental(),
        `WHERE t.${table.watermarkColumns} > (Select MAX(${table.watermarkColumns}) FROM ${ctx.self()})`
    )}

    `);


});
