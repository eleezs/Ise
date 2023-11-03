import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class Subject extends Model<Subject> {
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    subject_name: string;

    @Column({
        type: DataType.ENUM,
        values: ['active', 'terminated'],
        allowNull: false,
        defaultValue: 'active'
    })
    subject_status: string;
}