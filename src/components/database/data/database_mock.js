function mockData() {
    return [
        {
            "tableName": "用户信息表",
            "dataCount": 144,
            "cols": [
                {
                    "columnName": "用户名",
                    "columnKey": "",
                    "columnDefault": null,
                    "isNullable": "NO",
                    "dataType": "varchar"
                },
                {
                    "columnName": "系统用户名",
                    "columnKey": "",
                    "columnDefault": null,
                    "isNullable": "NO",
                    "dataType": "varchar"
                },
                {
                    "columnName": "地址",
                    "columnKey": "",
                    "columnDefault": null,
                    "isNullable": "YES",
                    "dataType": "varchar"
                },
                {
                    "columnName": "创建时间",
                    "columnKey": "",
                    "columnDefault": null,
                    "isNullable": "YES",
                    "dataType": "datetime"
                },
                {
                    "columnName": "创建人",
                    "columnKey": "",
                    "columnDefault": null,
                    "isNullable": "YES",
                    "dataType": "text"
                },
                {
                    "columnName": "修改时间",
                    "columnKey": "",
                    "columnDefault": null,
                    "isNullable": "YES",
                    "dataType": "datetime"
                },
                {
                    "columnName": "修改人",
                    "columnKey": "",
                    "columnDefault": null,
                    "isNullable": "YES",
                    "dataType": "text"
                }
            ]
        },
        {
            "tableName": "业务请求表",
            "dataCount": 1000,
            "cols": [
                {
                    "columnName": "业务请求数量",
                    "columnKey": "",
                    "columnDefault": null,
                    "isNullable": "YES",
                    "dataType": "decimal"
                },
                {
                    "columnName": "业务请求日期",
                    "columnKey": "",
                    "columnDefault": null,
                    "isNullable": "YES",
                    "dataType": "datetime"
                }
            ]
        },
        {
            "tableName": "admin",
            "dataCount": 22,
            "cols": [
                {
                    "columnName": "username",
                    "columnKey": "",
                    "columnDefault": null,
                    "isNullable": "YES",
                    "dataType": "varchar"
                },
                {
                    "columnName": "password",
                    "columnKey": "",
                    "columnDefault": null,
                    "isNullable": "YES",
                    "dataType": "varchar"
                },
                {
                    "columnName": "role",
                    "columnKey": "",
                    "columnDefault": null,
                    "isNullable": "YES",
                    "dataType": "varchar"
                },
                {
                    "columnName": "description",
                    "columnKey": "",
                    "columnDefault": null,
                    "isNullable": "YES",
                    "dataType": "text"
                },
                {
                    "columnName": "realname",
                    "columnKey": "",
                    "columnDefault": null,
                    "isNullable": "YES",
                    "dataType": "varchar"
                },
                {
                    "columnName": "create_time",
                    "columnKey": "",
                    "columnDefault": null,
                    "isNullable": "YES",
                    "dataType": "datetime"
                }
            ]
        },
        {
            "tableName": "data_count",
            "dataCount": 911,
            "cols": [
                {
                    "columnName": "data_count",
                    "columnKey": "",
                    "columnDefault": null,
                    "isNullable": "YES",
                    "dataType": "decimal"
                },
                {
                    "columnName": "date",
                    "columnKey": "",
                    "columnDefault": null,
                    "isNullable": "YES",
                    "dataType": "datetime"
                }
            ]
        },
        {
            "tableName": "resource",
            "dataCount": 15,
            "cols": [
                {
                    "columnName": "resource_name",
                    "columnKey": "",
                    "columnDefault": null,
                    "isNullable": "YES",
                    "dataType": "varchar"
                },
                {
                    "columnName": "resource_description",
                    "columnKey": "",
                    "columnDefault": null,
                    "isNullable": "YES",
                    "dataType": "varchar"
                },
                {
                    "columnName": "permission_url",
                    "columnKey": "",
                    "columnDefault": null,
                    "isNullable": "YES",
                    "dataType": "varchar"
                },
                {
                    "columnName": "source",
                    "columnKey": "",
                    "columnDefault": null,
                    "isNullable": "YES",
                    "dataType": "decimal"
                }
            ]
        },
        {
            "tableName": "table",
            "dataCount": 56,
            "cols": [
                {
                    "columnName": "parent_code",
                    "columnKey": "",
                    "columnDefault": null,
                    "isNullable": "YES",
                    "dataType": "int"
                },
                {
                    "columnName": "name",
                    "columnKey": "",
                    "columnDefault": null,
                    "isNullable": "YES",
                    "dataType": "varchar"
                },
                {
                    "columnName": "is_table",
                    "columnKey": "",
                    "columnDefault": null,
                    "isNullable": "YES",
                    "dataType": "varchar"
                }
            ]
        }
    ];
}
export default {
    mockData: mockData
}