from google.cloud import bigquery
import json

client = bigquery.Client()
rows = client.query("""
                    Select bronze_table_name,table_name,pk_columns,source_system,watermark_column,partition_column,load_type
                    FROM `ge-appliances-enterprise.edf_metadata.stg_table_config` WHERE is_active=TRUE
                    """).result()

configs = [dict(r) for r in rows]

with open("definitions/config/tables_metadata.js", "w") as f:
    f.write("module.exports = " + json.dumps(configs, indent=2) + ";\n")