function auditColumns(recordSource){


return `

CURRENT_TIMESTAMP() AS ingested_at,

CURRENT_TIMESTAMP() AS updated_at,

'${recordSource}' AS record_source,

FALSE AS is_deleted,

'I' AS cdc_flag,

TO_HEX(
    MD5(
        TO_JSON_STRING(t)
    )
) AS cdc_hash

`;

}

module.exports = {
    auditColumns
};