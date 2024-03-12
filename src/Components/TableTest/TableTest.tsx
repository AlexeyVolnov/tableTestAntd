import React, {FC, useState} from "react";
import {Table, Row, Col} from 'antd';
import style from './tableTest.module.scss'
import {TableRowSelection} from "antd/es/table/interface";
import {columns, dataTable} from "../../store/storeTable.ts";




export interface DataType {
	key: React.Key
	string: string
	date: string;
	number: number,
	flag: boolean
}




const TableTest: FC = () => {
	const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

	const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
		setSelectedRowKeys(newSelectedRowKeys);
	};

	const rowSelection: TableRowSelection<DataType> = {
		selectedRowKeys,
		onChange: onSelectChange,
		selections: [
			{
				key: 'odd',
				text: 'с первой строки через одну',
				onSelect: (changeableRowKeys) => {
					let newSelectedRowKeys = [];
					newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
						if (index % 2 !== 0) {
							return false;
						}
						return true;
					});
					setSelectedRowKeys(newSelectedRowKeys);
				},
			},
			{
				key: 'even',
				text: 'со второй строки через одну',
				onSelect: (changeableRowKeys) => {
					let newSelectedRowKeys = [];
					newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
						if (index % 2 !== 0) {
							return true;
						}
						return false;
					});
					setSelectedRowKeys(newSelectedRowKeys);
				},
			},
			{
				key: 'SELECT_ALL',
				text: 'выбрать всё',
				onSelect: (changeableRowKeys) => {
					let newSelectedRowKeys = [];
					newSelectedRowKeys = changeableRowKeys.filter(() => true);
					setSelectedRowKeys(newSelectedRowKeys);
				},
			},
			{
				key: 'SELECT_NONE',
				text: 'снять выделение',
				onSelect: (changeableRowKeys) => {
					let newSelectedRowKeys = [];
					newSelectedRowKeys = changeableRowKeys.filter(() => false);
					setSelectedRowKeys(newSelectedRowKeys);
				},
			}
		],
	};

	return (
			<div className={style.tableTest}>
				<Row>
					<Col xs={24} md={{span: 12, offset: 6}}>
						<Table
								rowSelection={rowSelection}
								bordered={true}
								sticky={true}
								pagination={{pageSizeOptions: ["10", "2000"]}}
								dataSource={dataTable} columns={columns}/>
					</Col>
				</Row>
			</div>
	)
}

export default TableTest