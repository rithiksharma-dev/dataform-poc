module.exports = [

    {
        bronze: "bronze_master_customer",
        silver: "stg_silver_master_customer",
        pk: ["party_id"],
        record_source: "EBS.AR", 
        watermarkColumns: "last_update_date",
        loadType: "Append"
    },

    {
        bronze: "bronze_customer_account",
        silver: "stg_silver_customer_account",
        pk: ["cust_account_id"],
        record_source: "EBS.AR",
        watermarkColumns: "last_update_date",
        loadType: "Append"
    },

    {
        bronze: "bronze_customer_site",
        silver: "stg_silver_customer_site",
        pk: ["site_use_id"],
        record_source: "EBS.AR",
        watermarkColumns: "last_update_date",
        loadType: "Append"
    },

    {
        bronze: "bronze_sales_order",
        silver: "stg_silver_sales_order",
        pk: ["header_id"],
        record_source: "EBS.OE",
        watermarkColumns: "last_update_date",
        loadType: "Append"
    },

    {
        bronze: "bronze_sales_order_item",
        silver: "stg_silver_sales_order_item",
        pk: ["line_id"],
        record_source: "EBS.OE",
        watermarkColumns: "last_update_date",
        loadType: "Append"
    },

    {
        bronze: "bronze_product",
        silver: "stg_silver_product",
        pk: ["inventory_item_id", "organization_id"],
        record_source: "EBS.INV",
        watermarkColumns: "last_update_date",
        loadType: "Append"
    },

    {
        bronze: "bronze_inventory_transaction",
        silver: "stg_silver_inventory_transaction",
        pk: ["transaction_id"],
        record_source: "EBS.INV",
        watermarkColumns: "transaction_date",
        loadType: "Append"
    },

    {
        bronze: "bronze_transaction_type",
        silver: "stg_silver_transaction_type",
        pk: ["transaction_type_id"],
        record_source: "EBS.INV",
        watermarkColumns: "last_update_date",
        loadType: "Append"
    },

    {
        bronze: "bronze_unit_transaction",
        silver: "stg_silver_unit_transaction",
        pk: ["transaction_id"],
        record_source: "EBS.INV",
        watermarkColumns: "transaction_date",
        loadType: "Append"
    },

    {
        bronze: "bronze_production_order",
        silver: "stg_silver_production_order",
        pk: ["wip_entity_id"],
        record_source: "EBS.WIP",
        watermarkColumns: "last_update_date",
        loadType: "Append"
    },

    {
        bronze: "bronze_serial_number",
        silver: "stg_silver_serial_number",
        pk: ["fm_serial_number", "delivery_detail_id"],
        record_source: "EBS.WSH",
        watermarkColumns: "creation_date",
        loadType: "Append"
    },

    {
        bronze: "bronze_financial_transaction",
        silver: "stg_silver_financial_transactionv",
        pk: ["recoup_id"],
        record_source: "IDS",
        watermarkColumns: "inbound_time",
        loadType: "Append"
    }


];
