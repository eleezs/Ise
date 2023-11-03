import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class Schedule extends Model<Schedule> {
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    task_name: string;

    @Column({
        type: DataType.DATE,
        allowNull: false,
    })
    start_date: string;

    @Column({
        type: DataType.DATE,
        allowNull: false,
    })
    end_date: string;

    @Column({
        type: DataType.ENUM,
        values: ['active', 'in_progress', 'pending', 'closed', 'cancelled'],
        allowNull: false,
        defaultValue: 'active'
    })
    task_status: string;

    @Column({
        type: DataType.INTEGER,
        allowNull: true,
    })
    subject_id: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: true,
    })
    tutor_id: number;
  
    @Column({
        type: DataType.INTEGER,
        allowNull: true,
    })
    student_id: number;
}