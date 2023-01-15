import React from "react";
import './tableComponent.scss'
import { Table } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { addCoordFrom, addCoordTo } from "../../redux/actions/coordAction";
import { findRowIndex } from "../../redux/actions/tableAction";
import { orders } from "../../vars/tableList";

const TableComponent = () => {

    const { Column } = Table;

    const dispatch = useDispatch()
    const rowId = useSelector(store => store.table.rowId)



    const onSelect = (record) => {
        dispatch(addCoordFrom([record.latitudeFrom, record.longitudeFrom]))
        dispatch(addCoordTo([record.latitudeTo, record.longitudeTo]))
        dispatch(findRowIndex(record.id))
    }

    return (
        <div className="table">
            <Table
                pagination={false}
                dataSource={orders}
                rowSelection={{
                    type: 'radio',
                    onSelect
                }}>
                <Column title='Order' dataIndex='id' key='order' />
                <Column title='Координаты ОТ lat' dataIndex='latitudeFrom' key='latitudeFrom' />
                <Column title='Координаты ОТ lng' dataIndex='longitudeFrom' key='longitudeFrom' />
                <Column title='Координаты ДО lat' dataIndex='latitudeTo' key='latitudeTo' />
                <Column title='Координаты ДО lng' dataIndex='longitudeTo' key='longitudeTo' />
            </Table>
        </div>
    )
}

export default TableComponent