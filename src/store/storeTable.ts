import {idCreator} from "../helpers/idCreator.ts";
import React from "react";
import {TableColumnsType} from "antd";

const currentDate = new Date().toDateString()

export interface DataType {
	key: React.Key
	string: string
	date: string;
	number: number,
	flag: boolean
}

export let dataTable:DataType[] = Array.from({length: 2000}, () => {
	const key = idCreator()
	return ({
		key: key,
		date: currentDate,
		number: key,
		flag: false,
		string: `${key} test value`,
	})
})

export const columns: TableColumnsType<DataType> = [
	{
		title: 'Строка',
		dataIndex: 'string',
		filters: dataTable.map(item => ({text: item.string, value: item.string})),
		sorter: {compare: (a, b) => a.string > b.string ? 1 : 0},
		filterMode: 'menu',
		filterSearch: true,
		onFilter: (value, record) => typeof value === 'string' && record.string.startsWith(value),
		width: '50%',
	},
	{
		title: 'Дата',
		dataIndex: 'date',
		sorter: {compare: (a, b) => a.date > b.date ? 1 : 0},
	},
	{
		title: 'Число',
		dataIndex: 'number',
		sorter: (a, b) => a.number - b.number,
	},
];










