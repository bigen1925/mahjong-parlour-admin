import {Entity, Column, PrimaryGeneratedColumn, BaseEntity, ManyToOne} from "typeorm";
import {Parlour} from "./Parlour";

@Entity()
export class Table extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id?: string;

    @Column('varchar', {nullable: false})
    name?: string;

    @ManyToOne(() => Parlour, parlour => parlour.tables)
    parlour?: Parlour;
}