module.exports = [
  {
    "bronze_table_name": "bronze_serial_number",
    "table_name": "stg_silver_serial_number",
    "pk_columns": "delivery_detail_id, fm_serial_number",
    "source_system": "EBS.WSH",
    "watermark_column": "creation_date",
    "partition_column": "ingested_at",
    "load_type": "APPEND"
  },
  {
    "bronze_table_name": "bronze_financial_transaction",
    "table_name": "stg_silver_financial_transaction",
    "pk_columns": "recoup_id",
    "source_system": "IDS",
    "watermark_column": "inbound_time",
    "partition_column": "ingested_at",
    "load_type": "APPEND"
  },
  {
    "bronze_table_name": "bronze_sales_order",
    "table_name": "stg_silver_sales_order",
    "pk_columns": "header_id",
    "source_system": "EBS.OE",
    "watermark_column": "last_update_date",
    "partition_column": "ingested_at",
    "load_type": "APPEND"
  },
  {
    "bronze_table_name": "bronze_sales_order_item",
    "table_name": "stg_silver_sales_order_item",
    "pk_columns": "line_id",
    "source_system": "EBS.OE",
    "watermark_column": "last_update_date",
    "partition_column": "ingested_at",
    "load_type": "APPEND"
  },
  {
    "bronze_table_name": "bronze_production_order",
    "table_name": "stg_silver_production_order",
    "pk_columns": "wip_entity_id",
    "source_system": "EBS.WIP",
    "watermark_column": "last_update_date",
    "partition_column": "ingested_at",
    "load_type": "APPEND"
  },
  {
    "bronze_table_name": "bronze_master_customer",
    "table_name": "stg_silver_master_customer",
    "pk_columns": "party_id",
    "source_system": "EBS.AR",
    "watermark_column": "last_update_date",
    "partition_column": "ingested_at",
    "load_type": "APPEND"
  },
  {
    "bronze_table_name": "bronze_product",
    "table_name": "stg_silver_product",
    "pk_columns": "inventory_item_id, organization_id",
    "source_system": "EBS.INV",
    "watermark_column": "last_update_date",
    "partition_column": "ingested_at",
    "load_type": "APPEND"
  },
  {
    "bronze_table_name": "bronze_transaction_type",
    "table_name": "stg_silver_transaction_type",
    "pk_columns": "transaction_type_id",
    "source_system": "EBS.INV",
    "watermark_column": "last_update_date",
    "partition_column": "ingested_at",
    "load_type": "APPEND"
  },
  {
    "bronze_table_name": "bronze_customer_site",
    "table_name": "stg_silver_customer_site",
    "pk_columns": "site_use_id",
    "source_system": "EBS.AR",
    "watermark_column": "last_update_date",
    "partition_column": "ingested_at",
    "load_type": "APPEND"
  },
  {
    "bronze_table_name": "bronze_customer_account",
    "table_name": "stg_silver_customer_account",
    "pk_columns": "cust_account_id",
    "source_system": "EBS.AR",
    "watermark_column": "last_update_date",
    "partition_column": "ingested_at",
    "load_type": "APPEND"
  },
  {
    "bronze_table_name": "bronze_inventory_transaction",
    "table_name": "stg_silver_inventory_transaction",
    "pk_columns": "transaction_id",
    "source_system": "EBS.INV",
    "watermark_column": "transaction_date",
    "partition_column": "ingested_at",
    "load_type": "APPEND"
  },
  {
    "bronze_table_name": "bronze_unit_transaction",
    "table_name": "stg_silver_unit_transaction",
    "pk_columns": "transaction_id",
    "source_system": "EBS.INV",
    "watermark_column": "transaction_date",
    "partition_column": "ingested_at",
    "load_type": "APPEND"
  }
];
